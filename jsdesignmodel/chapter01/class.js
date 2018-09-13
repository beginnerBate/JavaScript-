// 创建一个类
var Book = function (id, bookname, price) {
   this.id = id
   this.bookname = bookname
   this.price = price
}
Book.prototype.display = function () {
  console.log(this.id,this.bookname,this.price)
}

var book1 = new Book('01','javascript',36)

// 私有属性 私有方法 特权方法 对象共有属性 对象共有方法 构造器

var Book1 = function(id, name, price) {
  // 私有属性 num
  var num = 1
  // 私有方法checkId
  function checkId() { 
    console.log('私有方法')
  }
  // 特权方法
  this.getName = function () {}
  this.getPrice = function () {}
  this.setName = function() {}
  this.setPrice = function() {}
  // 对象公有属性
  this.id = id
  // 对象公有方法
  this.copy= function(){}
  // 构造器
  this.setName(name)
  this.setPrice(price)
}

// 图书安全类
var Book2 = function(title,time,type) {
  if ( this instanceof Book2) {
    this.title = title
    this.time = time
    this.type = type
  }else {
    return new Book2(title, time, type)
  }
}

var book2 = Book2('title','22','css')

