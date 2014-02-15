#!/usr/bin/env python3
import argparse
import logging
import logging.config
import json
import os

from datetime import datetime
from subprocess import check_output
from configparser import ConfigParser

from jinja2 import Environment, FileSystemLoader

if __name__ == "__main__":
    # Argument tells us where the configuration file is.
    parser = argparse.ArgumentParser(description="Gather benchmarks")
    parser.add_argument("--config", dest="config_path", required=True, help="path to configuration file")
    parser.add_argument("--properties", dest="project_config", required=True, help="path to properties file")
    parser.add_argument("--output", dest="output_path", required=True, help="path to output JSON file")
    parser.add_argument("--topk-value", dest="tkv", required=False, default=50, type=int, help="top-k hits for values")
    parser.add_argument("--topk-entities", dest="tkes", required=False, default=10, type=int, help="top-k for entities")
    parser.add_argument("--topk-entity", dest="tke", required=False, default=5, type=int, help="top-k for entity")
    args = parser.parse_args()

    # Load configuration from INI file.
    config = ConfigParser()
    config.read(args.config_path)

    # Configure logging so we can be informed of progress, issues, etc.
    logger = logging.getLogger(config.get("misc", "logger"))
    logging.config.fileConfig(args.config_path, disable_existing_loggers=False)
    
    # Get/parse settings
    settings = config["DEFAULT"]
    runs = settings.getint("runs")
    max_hops = settings.getint("max-hops")
    methods = settings.get("methods").split(",")
    from_ = settings.get("from")
    to = settings.get("to")

    env = Environment(loader=FileSystemLoader(os.getcwd()))
    template = env.get_template("config/molly.properties.jinja2")
    result = template.render(topk_value=args.tkv, topk_entities=args.tkes, topk_entity=args.tke)

    with open(args.project_config, "w") as f:
        f.write(result)
    
    hops = map(lambda x: x + 1, range(max_hops))
    cmd = "lein run --benchmark -c {} -s \"{}\" -t \"{}\"".format(args.project_config, from_, to)
    run_count = 0
    total_runs = max_hops * len(methods) * runs
    bench_start = datetime.now()

    logger.info("Began benchmarks at {}".format(bench_start))

    results = []

    for max_hops in hops:
        for method in methods:
            for i in range(runs):
                run_count += 1

                logger.info("Benchmarking... ({}, {} of {}, src:  {}, tgt:  {}, hops:  {}, remaining:  {})".format(method, i + 1, runs, from_, to, max_hops, (total_runs - run_count)))

                run_cmd = "{} --algorithm {} --max-hops {}".format(cmd, method, max_hops)
                # Python 3.x now returns bytes instead of a string here.  It must be decoded manually.
                output = check_output(run_cmd, shell=True).decode("utf-8").split("\n")[-2]

                logger.info(output)

                results.append(json.loads(output))

                with open(args.output_path, "w") as f:
                    json.dump(results, f)

    bench_end = datetime.now()

    logger.info("Completed benchmarks at {} ({} elapsed)".format(bench_end, (bench_end - bench_start)))
