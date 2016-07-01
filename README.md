# Health App

Based on Front - (Yet another) preconfigured frontend devstack - this time focusing on what's truly needed and helpful without all the useless stuff.

## Requirements

- [Node.js](https://nodejs.org/)
- [Gulp.js](http://gulpjs.com)
- [Bower](http://bower.io)

## Quickstart

```
git clone https://github.com/hic2h/healthApp.git
cd healthApp
npm install
bower install
```

Then run the default `gulp` task:

```
gulp serve
```

Your HTML templates (with inheritance), JavaScript, and Less files under `app` will be processed, bower dependencies gathered, and the output will go to the `dist` folder. A BrowserSync server will also be started.
