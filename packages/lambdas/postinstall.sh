#!/bin/bash

current_dir=$(pwd)
search_pattern="${current_dir}/dist/prisma/client"
replace_pattern="./prisma/client"

sed -i "s#${search_pattern}#${replace_pattern}#g" dist/index.js dist/index.js.map