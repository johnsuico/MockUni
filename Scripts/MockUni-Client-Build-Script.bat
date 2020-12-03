@ECHO OFF
cd ../client
code .
docker build -t mockuni-client .
PAUSE