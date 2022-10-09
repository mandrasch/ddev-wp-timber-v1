let mix = require('laravel-mix');

mix.setPublicPath('assets/dist');

mix.js('assets/src/js/app.js', 'js');

mix.sass('assets/src/scss/main.scss', 'css');



if (mix.inProduction() === false) {
    // TODO: this will only work if there is only one hostname, not additional hostnames
    let url = process.env.DDEV_HOSTNAME;

    mix.browserSync({
        proxy: "localhost",
        host: url,
        open: false,
        ui: false
    });
}