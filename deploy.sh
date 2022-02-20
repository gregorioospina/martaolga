#!/bin/bash
echo "removing old build"
sudo rm -rf build
echo "installing dependencies"
npm i --legacy-peer-deps
echo "run build"
npm run build
echo "clean s3"
aws s3 rm s3://martaolga.com --recursive 
#--profile awsGrego
echo "upload files to s3"
aws s3 cp ./build s3://martaolga.com --recursive --acl public-read 
#--profile awsGrego
echo "finish upload files"
