#!/bin/bash

current_dir=$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)/database
search_pattern="${current_dir}/dist/prisma/client"
replace_pattern="./prisma/client"

sed -i "s#${search_pattern}#${replace_pattern}#g" dist/index.js dist/index.js.map