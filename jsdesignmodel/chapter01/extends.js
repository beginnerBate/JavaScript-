// 继承
// 1. 类式继承

function SuperClass () {
  this.superValue = true
}
SuperClass.prototype.getSuperValue = function() {
  return this.superValue
}

function subClass () {
  this.subValue = false
}
subClass.prototype = new SuperClass()
subClass.prototype.getSubValue = function (){
  return this.subValue
}

var test = new subClass()

// 2. 构造函数继承

function SuperClass1 (id) {
  this.id = id
  this.books = ['js','html','css']
}

SuperClass1.prototype.showBooks = function () {
  console.log(this.books)
}

function SubClass1 (id) {
  // 继承父类
  SuperClass1.call(this, id)
}
var instance1 = new SubClass1(10)
var instance2 = new SubClass1(11)
instance1.books.push('ddd')

// 组合继承

function SuperClass2 (name) {
  this.name = name
  this.books = ['js','css','html']
}

SuperClass2.prototype.getName = function () {
  console.log(this.name)
}

function SubClass2 (name, time) {
  // 构造函数继承父类name属性
  SuperClass2.call(this, name)
  // 子类中新增的工有属性
  this.time = time
}

SubClass2.prototype = new SuperClass2()
SubClass2.prototype.getTime = function() {
  console.log(this.time)
}

var T1 = new SubClass2('T1',2014)
var T2 = new SubClass2('T2', 2012)
T1.books.push('哈哈')

// 原型继承

function inheritObject(o) {
  function F () {}
  F.prototype = o
  return F()
}

