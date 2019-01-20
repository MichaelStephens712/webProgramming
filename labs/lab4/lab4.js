
 export class lab4 {
 syncFileRead(filename){
   var fs = require("fs");

   var data = fs.readFileSync(filename);
   return data.toString();

 }
 asyncFileRead(filename, callbackFunction){
   var fs = require("fs");
   fs.readFile(filename, function (err, data){
     if(err) return console.error(err);

      callbackFunction(data.toString());
   });}

   compressFileStream(inputFile, outputFile){
     var fs = require("fs");
     var data = '';

     var readerStream =
       fs.createReadStream(inputFile);

     readerStream.setEncoding('UTF8');


     readerStream.on('data', function(chunk) {
       data += chunk;
     });
     readerStream.on('end',function(){
       //console.log(data);
     });
     readerStream.on('error', function(err){
       console.log(err.stack);
     });


     var zlib = require('zlib');

    return  fs.createReadStream(inputFile)
       .pipe(zlib.createGzip())
       .pipe(fs.createWriteStream(outputFile));


   }
   decompressFileStream(inputFile, outputFile){
     var fs = require("fs");
     var zlib = require('zlib');


    return fs.createReadStream(inputFile)
       .pipe(zlib.createGunzip())
       .pipe(fs.createWriteStream(outputFile));


   }
   listDirectoryContents(directoryName, callbackFunction){
     var fs = require("fs");


     fs.readdir(directoryName,function(err, files){
       if (err) {
         return console.error(err);
       }

       return callbackFunction(files);

     });
   }

}
