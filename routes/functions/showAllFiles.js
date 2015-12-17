var fs=require('fs');
var path=require('path');

//var docRoot=path.join(__dirname,'../','../');
//console.log(docRoot);
//====>/home/wfe/nodejs/exppro/express_test/



    var fileList=[];

    function showAllFiles(docRoot){
        fs.readdirSync(docRoot).forEach(function(file){
            var pathname=path.join(docRoot,file);

            if(fs.statSync(pathname).isDirectory()){
                showAllFiles(pathname);
            }else{
                fileList.push(pathname);
            }
        });

        return fileList;
    }

module.exports=showAllFiles;