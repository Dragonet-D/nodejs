const express = require("express");
const app = new express();
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

const url = "mongodb://localhost:27018/test";

app.use(session({
  secret: "this is string key",
  resave: false, // 强制保存session
  saveUninitialized: true, // /强制将未初始化的session存储, 默认是true, 建议设置成true
  name: "session_id", // 表示保存在本地cookies的名字
  cookie: {
    maxAge: 10000, // 过期时间
  },
  rolling: true, // 每次请求强行重置cookies(设置的10分钟过期, 十分钟期间有操作不过期,以没有操作的时候计算)
  store: new MongoStore({
    url,
    touchAction: 24 * 3600
  })
}));

app.get("/", (req, res) => {
  if (req.session.userinfo) {
    res.send("welcome back");
  } else {
    res.send("hello express");
  }
});

app.listen(3000, "localhost");