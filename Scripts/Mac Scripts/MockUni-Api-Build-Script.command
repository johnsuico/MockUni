#! /bin/bash
cd "$(dirname "$BASH_SOURCE")"
cd ../../api
docker build -t mockuni-api .