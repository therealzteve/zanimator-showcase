// ./scripts/hack-remove-files.js

var fs = require('fs-extra')
var glob = require("glob");

var options = { ignore: '**/*.d.ts'};

glob("node_modules/angular2-color-picker/**/*.ts", options, function (er, files) {
    for(i in files){
        removeFile(files[i]);
    }
});

glob("node_modules/angular2-color-picker/**/*.ts", options, function (er, files) {
    for(i in files){
        removeFile(files[i]);
    }
});

removeFile = function(file){
    fs.remove(file, function (err) {
        if (err) return console.error(err)
    })
}
