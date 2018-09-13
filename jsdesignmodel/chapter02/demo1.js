// 简单工厂模式

var createPop = function (type, text) {
  var o = new Object()
  o.content = text
  o.show = function() {
    console.log(this.content)
  }
  if(type == 'alert'){
    console.log('alert')
  }
  if (type == 'prompt') {
    console.log('prompt')
  }
  if (type == 'confirm') {
    console.log('confirm')
  }
  return o
}

var userNameAlert = createPop('alert', '用户名不能为空')