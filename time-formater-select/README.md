#### How to use?
1. npm i time-formater-select
2. Import in your project
```javascript
1) import timeformater from 'time-formater-select'
2) you can use these types
  a. this.timeformater('1528094422381') // 2018-06-04 14:40:22
  b. this.timeformater('1528094422381','YYYY-MM-DD hh:mm:ss') // 2018-06-04 14:40:22
  c. this.timeformater('1528094422381','YYYY-MM-DD hh-mm-ss') // 2018-06-04 14-40-22
  d. this.timeformater('1528094422381','YYYY/MM/DD') // 2018/06/04
  e. this.timeformater('1528094422381','YYYY/MM/DD hh:mm:ss') // 2018/06/04 14:40:22
  f. this.timeformater('1528094422381','YYYY/MM/DD hh-mm-ss') // 2018/06/04 14-40-22
```