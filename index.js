const Database = require("@replit/database")
const express = require('express');

const app = express();

const db = new Database()

app.get('/', async (req, res) => {
  const mySecret = process.env['API_KEY']
  let count = await db.get("siteCount")
  count += 1
  console.log('count',count)
  const newVal = await db.set("siteCount", count)
  // const result = await db.get("newVal")
  res.send('Site count: ' + count.toString())
});

app.get('/config',(req,res)=>{
  const json = require('./config.json')
  res.send(json)
})

app.listen(3000, () => {
  // console.log('server started');
});