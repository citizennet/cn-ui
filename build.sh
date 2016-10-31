#!/bin/bash

echo "Installing Dependencies..."
npm install
#composer update
bower cache clean
bower install
bower update

echo "Running gulp..."
gulp build