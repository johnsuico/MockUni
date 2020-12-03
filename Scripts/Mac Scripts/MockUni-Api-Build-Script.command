#! /bin/bash
cd "$(dirname "$BASH_SOURCE")"
cd ../../api
npm install
docker build -t mockuni-api .