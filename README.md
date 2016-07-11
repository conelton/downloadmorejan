# Download More Jan

This repo contains the source code and static resources required for building the Download More Jan website (currently at http://downloadmorejan.xyz/).

HTML source is written in [Pug](http://jade-lang.com/) (formerly Jade). CSS source is written in [Stylus](http://stylus-lang.com/). Javascript files are written using ES2015 features and the CommonJS module system.

## Building

### Gulp

The build process is automated using [Gulp](http://gulpjs.com/). The included `gulpfile.js` provides the following tasks:
- `pug` compiles `pug/index.pug` and its dependencies to `build/index.html`.
- `stylus` compiles `stylus/main.styl` and its dependencies to `build/css/main.css`.
- `es6` transpiles `es6/main.js` and its dependencies using [Babel](http://babeljs.io/) ('es2015' preset) and bundles with [Browserify](http://browserify.org/), outputting to `build/js/main.js`.
- `default` performs all of the above tasks.

The `NODE_ENV` environment variable is used to control debugging features. When its value is `production`, no sourcemaps are included and the output is minified where possible.

### Manual

Alternatively, you can compile each of the source types using their respective build tools.

## Deployment

Once built, the contents of the `build` and `static` directories contain all of the resources needed to deploy the website. All files can be served staticly.

## Contributing

If you'd like to make a change or improvement, open an issue for discussion. Pull requests are encouraged.

## License

MIT &copy; [Jack Conway](http://conelton.xyz/)
