const mix = require("laravel-mix");

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

mix
  .ts("resources/assets/js/app/app.js", "public/js/app")
  .js("resources/assets/js/landing/landing.js", "public/js/landing")
  .extract(["react", "lodash", "fullpage.js"])
  .version()
  .sass("resources/assets/sass/landing/landing.scss", "public/css/landing")
  .options({
    processCssUrls: false
  })
  .sass("resources/assets/sass/app/app.scss", "public/css/app")
  .browserSync("http://localhost:8080/");
