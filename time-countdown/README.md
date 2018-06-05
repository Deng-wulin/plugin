## How To use this plugin?
----
you can use this plugin in your project.
* For example: In a vue project
1. you should install this module
2. in project main.js, you should import this moudule
3. and you can use it

```javascript
1) npm i time-countdown --save

2) in main.js
import countdown from 'time-countdown'
Vue.prototype.countdown = countdown

3) and in your files
setInterval(function () {
  this.timer = this.countdown(1528281966000)
}.bind(this), 1000)

4) Returned data type
{
  'hours': xx,
  'minutes': xx,
  'seconds': xx,
}
```

