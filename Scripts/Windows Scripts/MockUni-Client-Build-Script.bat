@ECHO OFF
cd ../client
npm install
docker build -t mockuni-client .
PAUSE