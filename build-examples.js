var fs = fs || require('fs');

// List all files in a directory in Node.js recursively in a synchronous fashion
var walkSync = function(dir, filelist) {
  var  files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(dir + file).isDirectory()) {
      filelist = walkSync(dir + file + '/', filelist);
    }
    else {
      filelist.push(dir + file.replace(/\.[^/.]+$/, ""));
    }
  });
  return filelist;
};

var examples = { examples: walkSync('examples/')};
fs.writeFileSync('.tmp/test.json', JSON.stringify(examples));
