#! /bin/bash
cd "$(dirname "$BASH_SOURCE")"
cd ../../client
docker build -t mockuni-client .