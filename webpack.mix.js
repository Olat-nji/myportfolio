const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.combine([
        'resources/css/animate.css',
        'resources/css/icomoon.css',
        'resources/css/bootstrap.css',
        'resources/css/flexslider.css',
        'resources/css/owl.carousel.min.css',
        'resources/css/owl.theme.default.min.css',
        'resources/css/style.css',
    ], 'public/css/app.css')
    .combine([
        "resources/js/jquery.min.js",
        "resources/js/jquery.easing.1.3.js",
        "resources/js/bootstrap.min.js",
        "resources/js/jquery.waypoints.min.js",
        "resources/js/jquery.flexslider-min.js",
        "resources/js/owl.carousel.min.js",
        "resources/js/jquery.countTo.js",
        "resources/js/modernizr-2.6.2.min.js",
        "resources/js/main.js",
    ], 'public/js/app.js')
    .copyDirectory('resources/fonts', 'public/fonts')
    .copyDirectory('resources/images', 'public/images');