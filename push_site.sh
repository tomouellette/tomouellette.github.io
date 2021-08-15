#!/bin/bash
cd public
git init
git remote add origin https://github.com/tomouellette/tomouellette.github.io.git
git add .
git commit -m "Deploying"
git push --set-upstream origin master
