#!/bin/bash

echo "Installing Dependencies..."
npm install
#composer update
npx bower cache clean
npx bower install
npx bower update

echo "Running gulp..."
npx gulp build
