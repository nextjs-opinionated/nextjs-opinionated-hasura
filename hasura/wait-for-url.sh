#!/bin/bash

# set -eux

declare -r URL="http://localhost:8080"

wait-for-url() {
    echo "OS: $OSTYPE"
    if [ "$OSTYPE" == "darwin"* ]; then
        gtimeout -s TERM 20 bash -c \
        'while [[ "$(curl --silent -s -o /dev/null -L -w ''%{http_code}'' ${0})" != "200" ]];\
        do sleep 2;\
        done' ${1}
        
        echo ".${1}-OK"
        curl -I $1
    else
        timeout -s TERM 20 bash -c \
        'while [[ "$(curl --silent -s -o /dev/null -L -w ''%{http_code}'' ${0})" != "200" ]];\
        do sleep 2;\
        done' ${1}
        
        echo ".${1}-OK"
        curl -I $1
    fi
}

wait-for-url ${URL}
