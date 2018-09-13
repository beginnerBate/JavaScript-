/**
 * Prorotype 原型模式: 用原型实例指向创建对象的类, 使用于创建新的对象的类共享原型对象的属性和方法
 */

 var LoopImages = function (imgArr,contanier) {
   this.imagesArray = imgArr
   this.contanier = contanier
 }
 LoopImages.prototype={
  //  创建轮播图片
  createImage: function () {
    console.log('LoopImages createImage function')
  },
  changeImage:function () {
    console.log('LoopImage changeImage function')
  }
 }
// 上下滑动切换类
var SlideLoopImg = function(imgArr, contanier) {
  LoopImages.call(this, imgArr, contanier)
}
SlideLoopImg.prototype = new LoopImages();
SlideLoopImg.prototype.changeImage = function () {
  console.log('SlideLoopImg changeImage function')
}
// 渐隐切换类
var FadeLoopImg = function(imgArr, contanier, arrow){
  LoopImages.call(this, imgArr, contanier)
  this.arrow = arrow
}
FadeLoopImg.prototype = new LoopImages()
FadeLoopImg.prototype.changeImage = function () {
  console.log('FadeLoopImg changeImage function')
}
