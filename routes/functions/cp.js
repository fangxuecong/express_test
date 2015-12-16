/**
 * Created by wfe on 15-12-16.
 */
var fs=require('fs');

function cp(src,dst){
    //fs.writeFileSync(dst,fs.readFileSync(src));
    fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}

module.exports=cp;