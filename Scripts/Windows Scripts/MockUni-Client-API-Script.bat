@ECHO OFF
cd ../api
npm install
docker build -t mockuni-api .
PAUSE