const mix = require('laravel-mix');
let JavaScriptObfuscator = require("webpack-obfuscator");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

let config = {};

if (mix.inProduction()) {
  config.plugins = [
    new JavaScriptObfuscator({
      rotateUnicodeArray: true,
    }),
  ];
}

mix.webpackConfig(config);

mix.js('resources/js/app.js', 'public/js')
    .react()
    .sass('resources/sass/app.scss', 'public/css')

if (!mix.inProduction()) {
    mix.sourceMaps();
}
