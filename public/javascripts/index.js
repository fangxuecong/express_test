$(function(){

  /*
  var arr=["createReadStream","pipe","createWriteStream"];
  console.log(arr);*/

  /*    arr2=arr.slice(1);

  console.log(arr);
  console.log(arr2);*/

  /*
  arr.forEach(function(ele){
  console.log(ele);
  });*/

  //======================================
  /*
  window.setTimeout(function() {
      console.log("world");
    }, 1000);
  
    console.log("hello ");*/
  
  
  //======================================
/*
  function heavyCompute(n){
    var count=0;
    var i,j;
    
    for(i=n;i>0;--i){
      for(j=n;j>0;--j){
        count++;
      }
    }
  }
  
  // var t1=new Date();
  console.time('fong');
  
  window.setTimeout(function(){
    // console.log(new Date()-t1);
    console.timeEnd('fong');
  },2000);
  
  heavyCompute(90000);*/

  //======================================
  /*
  var i=0;
    for(;i<10;i++){
      console.log("ff"+i);
    }*/
  
  //======================================
  //next函数
  // var arr=["createReadStream","pipe","createWriteStream",4,5,6,7,8,9];
  var arr=[1,2,3,4,5,6];
  (function next(i,len,callback){
    // for(var i=0;i<len;i++){}
    if(i<len){
      arr[i]=arr[i]*arr[i];
      console.log(i);
      next(i+1,len,callback);
      // console.log(len);
    }else{
      callback();
    }
  })(0,arr.length,function(){
    console.log(arr);
  });
  
  //======================================
  






































});