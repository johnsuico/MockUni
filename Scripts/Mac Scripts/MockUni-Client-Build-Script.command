#! /bin/bash
cd "$(dirname "$BASH_SOURCE")"
cd ../../client
npm install
docker build -t mockuni-client .