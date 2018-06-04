//;分号开头，用于防止代码压缩合并时与其它代码混在一起造成语法错误
//而事实证明，uglify压缩工具会将无意义的前置分号去掉，习惯上的写法

//(function(){})();立即执行函数，闭包，避免污染全局变量
//通常一个插件只暴露一个变量给全局供其它程序调用

;
(function (global) {
  //开启严格模式，规范代码，提高浏览器运行效率
  "use strict";
  // 定义一个存放返回时间类型的数组
  var timeType = [{
      type: 1,
      description: 'YYYY-MM-DD'
    },
    {
      type: 2,
      description: 'YYYY/MM/DD'
    },
    {
      type: 3,
      description: 'YYYY-MM-DD hh:mm:ss'
    },
    {
      type: 4,
      description: 'YYYY-MM-DD hh-mm-ss'
    },
  ]
  //定义一个类，通常首字母大写
  var TimeFormater = function (input, type) {
    var that = this
    // 默认返回的时间类型是 YYYY-MM-DD hh-mm-ss
    that.dateType = 3
    timeType.forEach(function (item) {
      if (item.description === type) {
        that.dateType = item.type
      }
    })

    if (typeof input === 'string') {
      that.timeNumber = parseInt(input);
    } else if (typeof input === 'number') {
      that.timeNumber = parseInt(input);
    } else {
      that.timeNumber = (new Date()).getTime()
    }
    this.init()
  }

  //覆写原型链，给继承者提供方法
  TimeFormater.prototype = {
    init: function () {
      if (this.dateType === 1) {
        return this.YYYY() + '-' + this.MM() + '-' + this.DD()
      } else if (this.dateType === 2) {
        return this.YYYY() + '/' + this.MM() + '/' + this.DD()
      } else if (this.dateType === 3) {
        return this.YYYY() + '-' + this.MM() + '-' + this.DD() + ' ' + this.hh() + ':' + this.mm() + ':' + this.ss()
      } else if (this.dateType === 4) {
        return this.YYYY() + '-' + this.MM() + '-' + this.DD() + ' ' + this.hh() + '-' + this.mm() + '-' + this.ss()
      } else {
        return this.YYYY() + '-' + this.MM() + '-' + this.DD() + ' ' + this.hh() + ':' + this.mm() + ':' + this.ss()
      }
    },
    YYYY: function () {
      var that = this
      that.year = (new Date(that.timeNumber)).getFullYear()
      return that.year
    },
    MM: function () {
      var that = this
      that.month = ((new Date(that.timeNumber)).getMonth() + 1) < 10 ? ('0' + ((new Date(that.timeNumber)).getMonth() + 1)) : ((new Date(that.timeNumber)).getMonth() + 1)
      return that.month
    },
    DD: function () {
      var that = this
      that.day = (new Date(that.timeNumber)).getDate() < 10 ? ('0' + (new Date(that.timeNumber)).getDate()) : (new Date(that.timeNumber)).getDate()
      return that.day
    },
    hh: function () {
      var that = this
      that.hours = (new Date(that.timeNumber)).getHours() < 10 ? ('0' + (new Date(that.timeNumber)).getHours()) : (new Date(that.timeNumber)).getHours()
      return that.hours
    },
    mm: function () {
      var that = this
      that.minutes = (new Date(that.timeNumber)).getMinutes() < 10 ? ('0' + (new Date(that.timeNumber)).getMinutes()) : (new Date(that.timeNumber)).getMinutes()
      return that.minutes
    },
    ss: function () {
      var that = this
      that.seconds = (new Date(that.timeNumber)).getSeconds() < 10 ? ('0' + (new Date(that.timeNumber)).getSeconds()) : (new Date(that.timeNumber)).getSeconds()
      return that.seconds
    },
  }

  //兼容CommonJs规范
  if (typeof module !== 'undefined' && module.exports) module.exports = TimeFormater;
  //兼容AMD/CMD规范
  if (typeof define === 'function') define(function () {
    return TimeFormater;
  });

  //注册全局变量，兼容直接使用script标签引入该插件
  global.TimeFormater = TimeFormater;
  //this，在浏览器环境指window，在nodejs环境指global
  //使用this而不直接用window/global是为了兼容浏览器端和服务端
  //将this传进函数体，使全局变量变为局部变量，可缩短函数访问全局变量的时间
})(this)