#!/usr/bin/env python3
import argparse
import logging
import logging.config
import json

from datetime import datetime
from subprocess import check_output
from configparser import ConfigParser

from common import get_datetime, dt_to_str

if __name__ == "__main__":
    # Argument tells us where the configuration file is.
    parser = argparse.ArgumentParser(description="Gather benchmarks")
    parser.add_argument("--config", dest="config_path", required=True, help="path to configuration file")
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
    project_config = settings.get("project-config")
    
    hops = map(lambda x: x + 1, range(max_hops))
    cmd = "lein run --benchmark -c {} -s \"{}\" -t \"{}\"".format(project_config, from_, to)
    run_count = 0
    total_runs = max_hops * len(methods) * runs

    bench_start = get_datetime()
    bench_start_str = dt_to_str(bench_start)

    logger.info("Began benchmarks at {}".format(bench_start))

    results = []

    for max_hops in hops:
        for method in methods:
            for i in range(runs):
                run_count += 1

                logger.info("Benchmarking... ({}, {} of {}, src:  {}, tgt:  {}, hops:  {}, remaining:  {})".format(method, i + 1, runs, from_, to, max_hops, (total_runs - run_count)))

                run_cmd = "{} --algorithm {} --max-hops {}".format(cmd, method, max_hops)
                # Python 3.x now returns bytes instead of a string here.  It must be decoded manually.
                output = check_output(run_cmd, shell=True).decode("utf-8")

                logger.info(output)

                results.append(json.loads(output))

                with open("{}-result.json".format(bench_start_str), "w") as f:
                    json.dump(results, f)

    bench_end = get_datetime()

    logger.info("Completed benchmarks at {} ({} elapsed)".format(bench_end, (bench_end - bench_start)))
