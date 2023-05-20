Task management app 

Technologies used :
 laravel + inertia + react + tailwindcss 

 to start the app run this commands

docker run --rm --interactive --tty \
--volume $PWD:/app \
composer install

./vendor/bin/sail up

./vendor/bin/sail artisan migrate

./vendor/bin/sail artisan db:seed

./vendor/bin/sail npm install

./vendor/bin/sail artisan queue:work

./vendor/bin/sail npm run dev
