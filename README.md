Task management app 

Technologies used :
 laravel + inertia + react + tailwindcss 

 to start the app run this commands

docker run --rm --interactive --tty \
--volume $PWD:/app \
composer install

alias sail='[ -f sail ] && sh sail || sh vendor/bin/sail'

sail up

sail artisan migrate

sail artisan db:seed

sail npm install

sail artisan queue:work

sail npm run dev
