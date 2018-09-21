rm -rf ./src/*
rm -f ./.env*
rm -f ./.vue-make.json

./bin/vue-make page page/index
./bin/vue-make view view/index
./bin/vue-make component component
./bin/vue-make mixin mixin
./bin/vue-make store-module module
./bin/vue-make directive directive
