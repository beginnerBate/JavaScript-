// 工厂方法模式

var Factory = function (type, content) {
  this.content = content
  if (this instanceof Factory) {
    var s = new this[type](content)
    return s
  }else {
    return new Factory(type, content)
  }
}

Factory.prototype = {
  Java: function(content) {
    this.content = content;
    (function(content){
      var div = document.createElement('div')
      div.innerHTML = content
      div.style.border = '1px solid red'
      document.getElementById('container').appendChild(div)
    })(content)
  },
  JavaScript: function(content){
    this.content = content;
    (function(content) {
      var div = document.createElement('div')
      div.innerHTML = content
      div.style.color = 'green'
      document.getElementById('container').appendChild(div)
    })(content)
  },
  UI: function(content){
    this.content = content;
    (function(content){
      var div = document.createElement('div')
      div.innerHTML = content
      div.style.backgroundColor = 'grey'
      document.getElementById('container').appendChild(div)
    })(content)
  },
  PHP: function(content){
    this.content = content;
    (function(content){
      var div = document.createElement('div')
      div.innerHTML = content
      div.style.backgroundColor = 'pink'
      document.getElementById('container').appendChild(div)
    })(content)
  }
}
// 数据测试
var data = [
  {type: 'JavaScript', content:'Javascript哪家强'},
  {type: 'Java', content:'java从入门到死机'},
  {type: 'PHP', content:'学习PHP 到兄弟连'},
  {type: 'UI', content:'UI哈哈哈'},
  {type: 'JavaScript', content:'Javascript哪家强 智联UI欢迎你'},
]

// 创建对象
for (let i=0;i<data.length;i++) {
  Factory(data[i].type, data[i].content)
}