let mix = require('laravel-mix');

mix.js('assets/src/js/app.js', 'assets/dist/')
.sass('assets/src/scss/main.scss', 'assets/dist/');