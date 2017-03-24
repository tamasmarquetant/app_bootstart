--------------------
# a dev-server environment and core app for quick-start prototyping ideas
--------------------
--------------------
-- using babelify, babel-preset-es2015, lite-server, npm-run-all (cross-browser)

1.clone git to desired location and run cli command
>> npm init -y

2.install npm module dependencies
>> npm install

3.using package.json scripts::

RUN the app in dev MODE with a web-server in the browser --> run cli command
>> npm run dev

BUILD final app -- using BROWSERIFY [es2015 babel preset] and UGLIFY to target>>> './static folder'
>> npm run build

BUILD app for debug -- using BROWSERIFY [es2015 babel preset] to target>>> './static folder'
>> npm run build_debug

4.If not already running in the browser go to URL
>> http://127.0.0.1:8001/index.html



//////////////////////////////////////////////////////
-------------------
# NOTES
--------------------
--------------------
compile modular code into bundle.js *
>browserify -t brfs main.js > bundle.js

* http://stackoverflow.com/q/16640177/6485720
to inline file contents from fs.readFileSync() calls, you can use brfs (browserify fs)

>var fs = require('fs');
var src = fs.readFileSync(__dirname + '/file.txt');

then do:

>browserify -t brfs main.js > bundle.js

and src will be set to the contents of file.txt at compile time.