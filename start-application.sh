#!/bin/bash

 docker run --rm --interactive --tty \
  --volume $PWD:/app \
  composer install

./vendor/bin/sail up -d

./vendor/bin/sail artisan migrate

./vendor/bin/sail artisan db:seed

./vendor/bin/sail npm install

./vendor/bin/sail npm run dev



