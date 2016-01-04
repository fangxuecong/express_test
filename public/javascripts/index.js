$(function(){
  //===注册,登入===================================
  $('#signUp').validationEngine();
  $('#signIn').validationEngine();
  
  $('#signUp a.submitBtn').on('click',function(){
    var md5V=$.md5($('#signUp #pw1').val());
    $('#signUp input[name=fpassword]').val(md5V);
    $('#signUp').submit();
  });
  $('#signIn a.submitBtn').on('click',function(){
    var md5V=$.md5($('#signIn #pw2').val());
    $('#signIn input[name=fpassword]').val(md5V);
    $('#signIn').submit();
  });
  //======================================
  //======================================
  //======================================
  //======================================
  //======================================
  //======================================
  //======================================
  //======================================

  







});