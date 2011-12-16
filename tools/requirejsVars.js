
//Small adapter for using r.js/build/jslib/node.js in this project.
var requirejsVars = {
    nodeRequire: require,
    require: requirejs,
    define: define
};

//Used by some loader plugins that want to interact with built in node modules.
requirejs.nodeRequire = require;

//Set up the dynamic load config to use a directory that is the same name
//as the script that is running.
(function () {
    var path = require('path'),
        name = path.basename(__filename, '.js'),
        baseUrl = path.join(__dirname, name);

    requirejs.config({
        baseUrl: baseUrl
    });


    //Reflect the baseUrl as a module
    define('pkg/baseUrl', [], function () {
        return baseUrl;
    });

}());

//Dummy module for q, just to prevent IO work. Will still throw an error,
//but it is caught inside q and handled in a good way.
define('event-queue', [], function () {
    return null;
});
