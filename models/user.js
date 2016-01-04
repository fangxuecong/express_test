var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/express_test'); //1.db:express_test


var Schema=mongoose.Schema,
    ObjectId=Schema.ObjectId;

var UserSchema=new Schema({
  userId:ObjectId,
  username:{
    type:String,
    unique:true
  },
  password:String,
  date:Date
});
var User=mongoose.model('User',UserSchema);  //2.collection: 大写转小写+s

module.exports=User;
//输出模型 User(new User生成实例)
