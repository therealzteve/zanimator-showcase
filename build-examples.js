var fs = fs || require('fs');

// List all files in a directory in Node.js recursively in a synchronous fashion
var walkSync = function(dir, filelist, currentPath) {
  var  files = fs.readdirSync(dir);
  filelist = filelist || [];
  currentPath = currentPath || [];
  files.forEach(function(file) {
    if (fs.statSync(dir + file).isDirectory()) {
      var myPath = currentPath.slice(0);
      myPath.push(file);
      filelist = walkSync(dir + file + '/', filelist, myPath);
    }
    else {
      filelist.push(
        {
          'path' : currentPath,
          'example' : dir + file.replace(/\.[^/.]+$/, "")
        }
      );
    }
  });
  return filelist;
};

var examples = { examples: walkSync('examples/')};
fs.writeFileSync('.tmp/test.json', JSON.stringify(examples));
