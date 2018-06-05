"use strict";
// 定义一个类
var CountDown = function (options) {
  if (typeof options === 'string') {
    options = parseInt(options)
  }
  CountDown.fn.endtime = options
  return CountDown.fn.init()
}

CountDown.fn = CountDown.prototype = {
  init: function (callback) {
    return this.endTime(this.endtime)
  },
  //倒计时插件函数
  countDown: function (years, months, days, hours, minutes, second) {
    var months = months - 1;
    var dateFinal = new Date(years, months, days, hours, minutes); //设置倒计时到达时间
    var dateNow = new Date(); //获取系统当前时间
    var dateSub = dateFinal - dateNow; //计算差值，单位毫秒
    var day = 0,
      hour = 0,
      minute = 0,
      second = 0,
      dayBase = 0,
      hourBase = 0,
      minuteBase = 0,
      secondBase = 0; //初始化各个数值
    var timeHtml = {};
    dayBase = 24 * 60 * 60 * 1000;
    hourBase = 60 * 60 * 1000;
    minuteBase = 60 * 1000;
    secondBase = 1000;
    day = Math.floor(dateSub / dayBase);
    hour = Math.floor(dateSub % dayBase / hourBase);
    minute = Math.floor(dateSub % dayBase % hourBase / minuteBase);
    second = Math.floor(dateSub % dayBase % hourBase % minuteBase / secondBase);
    //当天数小于等于0时，就不用显示
    if (day <= 0) {
      if (!this.toDouble(minute)) {
        timeHtml.hours = '00';
        timeHtml.minutes = '00';
        timeHtml.seconds = '00';
      } else {
        timeHtml.hours = this.toDouble(hour);
        timeHtml.minutes = this.toDouble(minute);
        timeHtml.seconds = this.toDouble(second);
      }
    } else {
      hour = day * 24 + hour;
      timeHtml.hours = this.toDouble(hour);
      timeHtml.minutes = this.toDouble(minute);
      timeHtml.seconds = this.toDouble(second);
    }
    return timeHtml;
  },
  //当小时，分钟和秒钟小于 10 的时候会显示为个位数，前面加 0。
  toDouble: function (num) {
    if (num < 0) {
      return 0 + "0";
    } else if (num < 10) {
      return '0' + num;
    } else {
      return '' + num;
    }
  },
  // 时间戳转化为时间
  endTime: function (item) {
    var time = new Date(item);
    var y = time.getFullYear();
    var m = time.getMonth() + 1;
    var d = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
    return this.countDown(y, m, d, h, mm, s);
  },
}

CountDown.fn.init.prototype = CountDown.fn;
module.exports = CountDown