#!/bin/bash

endpoint=venus.strandls.com

microservices=( "naksha" "user" "esmodule" "activity" "observation" "files" "utility" "userGroup" )

for m in "${microservices[@]}"
do
    wget -O "$m.json" "https://$endpoint/$m-api/api/swagger.json"
    npx sw2dts "$m.json" > "src/interfaces/$m.ts"
    rm "$m.json"
done

npx prettier --write "src/interfaces/*.ts"