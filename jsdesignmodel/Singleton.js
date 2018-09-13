/**
 * 单例模式 是只允许实例化一次的对象类
 */
// 1. 命名空间的管理员
var Ming = {
  g: function (id) {
    return document.getElementById(id)
  },
  css: function(id, key, value){
    this.g(id).style[key] = value
  }
}

// 创建一个小型代码库
var A = {
  Util:{
    util_method1: function(){},
    util_method2: function(){}
  },
  Tool:{
    tool_method1:function(){},
    tool_method2:function(){}
  },
  Ajax: {
    get: function () {},
    post: function () {}
  },
  others:{}
}

// 静态变量管理
var Conf = (function(){
  // 私有变量
  var conf = {
    MAX_NUM: 100,
    MIN_NUM:1,
    COUNT:1000
  }
  return {
    get: function(name) {
      return conf[name]? conf[name]: null
    }
  }
}) ();