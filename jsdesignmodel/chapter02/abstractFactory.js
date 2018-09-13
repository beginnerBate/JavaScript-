// 抽象工厂模式

// 抽象类是一种声明但是不能使用的类，当你使用的时候就会报错，
// 但是javascript是灵活的，所以我们再类的方法中手动地抛出错误来模拟抽象类

// 汽车抽象类, 当使用其实例对象的方法时会抛出错误
var Car = function () {};
Car.prototype = {
  getPrice: function () {
    return new Error('抽象方法不能调用')
  },
  getSpeed: function () {
    return new Error('抽象方法不能调用')
  }
}

// 抽象工厂方法
var VehicleFactory = function (subType, superType) {
  // 判断抽象工厂中是否有该抽象类
  if (typeof VehicleFactory[superType] === "function") {
    // 缓存类
    function F () {};
    // 继承父类的属性和方法
    F.prototype = new VehicleFactory[superType]();
    subType.constructor = subType
    subType.prototype = new F()
  }else {
    // 不存在该抽象类抛出错误
    throw new Error('未创建抽象类')
  }
}

// 小汽车抽象类
VehicleFactory.Car = function () {
  this.type = 'car'
}
VehicleFactory.Car.prototype = {
  getPrice: function () {
    return new Error('抽象方法不能调用')
  },
  getSpeed: function () {
    return new Error('抽象方法不能调用')
  }
}
// 公交车抽象类
VehicleFactory.Bus = function () {
  this.type = 'bus'
}
VehicleFactory.Bus.prototype = {
  getPrice: function () {
    return new Error('抽象方法不能调用')
  },
  getSpeed: function () {
    return new Error('抽象方法不能调用')
  }
}
// 火车车抽象类
VehicleFactory.Truck = function () {
  this.type = 'truck'
}
VehicleFactory.Truck.prototype = {
  getPrice: function () {
    return new Error('抽象方法不能调用')
  },
  getSpeed: function () {
    return new Error('抽象方法不能调用')
  }
}

// 宝马汽车子类
var BMW = function(price,speed) {
  this.price = price
  this.speed = speed
}
// 抽象工厂实现对Car抽象类的继承
VehicleFactory(BMW, 'Car');
BMW.prototype.getPrice = function () {
  return this.price
}
BMW.prototype.getSpeed = function () {
  return this.speed
}

// 兰博基尼汽车子类
var Lamborghini = function(price,speed) {
  this.price = price
  this.speed = speed
}
// 抽象工厂实现对Car抽象类的继承
VehicleFactory(Lamborghini, 'Car');
Lamborghini.prototype.getPrice = function () {
  return this.price
}
Lamborghini.prototype.getSpeed = function () {
  return this.speed
}

// 宇通汽车子类
var YUTONG = function(price,passenger) {
  this.price = price
  this.passenger = passenger
}
// 抽象工厂实现对Car抽象类的继承
VehicleFactory(YUTONG, 'Bus');
YUTONG.prototype.getPrice = function () {
  return this.price
}
YUTONG.prototype.getPassengerNum = function () {
  return this.passenger
}

// 奔驰汽车子类
var BenzTruck = function(price, trainLoad) {
  this.price = price
  this.trainLoad = trainLoad
}
// 抽象工厂实现对Car抽象类的继承
VehicleFactory(BenzTruck, 'Bus');
BenzTruck.prototype.getPrice = function () {
  return this.price
}
BenzTruck.prototype.getTrainLoad = function () {
  return this.trainLoad
}
 

