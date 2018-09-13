// 一个检测类
var CheckObject = function(){}
CheckObject.prototype = {
  checkName: function(name) {
    if(name==''){
      console.log('name can"t null')
    }
    return this
  },
  checkEmail: function(email) {
    if(email==''){
      console.log('email can not null')
    }
    return this
  },
  checkPassword: function() {
    console.log('checkPassword')
    return this
  }
}