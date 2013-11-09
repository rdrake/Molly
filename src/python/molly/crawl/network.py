import pickle

import requests

class Network:
    def __init__(self, cache_file="net_cache.pickle"):
        self.cache_file = cache_file

        # Cache file may not exist.
        try:
            with open(self.cache_file, "r") as f:
                self.cache = pickle.load(f)
        except:
            self.cache = {}

    def get_text(self, url):
        resp = requests.get(url)
        resp.raise_for_status()

        return resp.text

    def post_text(self, url, params):
        params_key = str(params)

        if (url, params_key) not in self.cache:
            resp = requests.post(url, params=params)
            resp.raise_for_status()

            self.cache[(url, params_key)] = resp.text

            with open(self.cache_file, "w") as f:
                pickle.dump(self.cache, f)

        return self.cache[(url, params_key)]
