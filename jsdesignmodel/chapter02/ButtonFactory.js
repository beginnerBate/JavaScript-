// 工厂方法模式 为页面创建不同的按钮

var ButtonFactory = function (type, content) {
  if (this instanceof ButtonFactory) {
    var s = new this[type] (content)
    return s
  }else {
    return new ButtonFactory(type, content)
  }
}

ButtonFactory.prototype = {
  defaultBtn: function (content) {
   (function(content){
     var btn = document.createElement('button')
     btn.innerHTML = content
     document.getElementById('container').appendChild(btn)
   })(content)
  },
  themeBtn: function (content) {
   (function(content){
     var btn = document.createElement('button')
     btn.innerHTML = content
     btn.style.background='#450569'
     btn.style.color='#fff'
     document.getElementById('container').appendChild(btn)
   })(content)
  },
  dangerBtn: function (content) {
   (function(content){
     var btn = document.createElement('button')
     btn.innerHTML = content
     btn.style.background='#906'
     btn.style.color='#fff'
     document.getElementById('container').appendChild(btn)
   })(content)
  },
  warnBtn: function (content) {
   (function(content){
     var btn = document.createElement('button')
     btn.innerHTML = content
     btn.style.background='orange'
     btn.style.color='#fff'
     document.getElementById('container').appendChild(btn)
   })(content)
  },
  successBtn: function (content) {
   (function(content){
     var btn = document.createElement('button')
     btn.innerHTML = content
     btn.style.background='green'
     btn.style.color='#fff'
     document.getElementById('container').appendChild(btn)
   })(content)
  }
}

var testBtn = [
  {type:'successBtn', content:'成功按钮'},
  {type:'defaultBtn', content:'默认按钮'},
  {type:'successBtn', content:'成功按钮'},
  {type:'successBtn', content:'成功按钮'},
  {type:'successBtn', content:'成功按钮'}
]

for(var i=0;i<testBtn.length;i++) {
  new ButtonFactory(testBtn[i].type,testBtn[i].content)
}