#> mongo db note
```mongo
    db.student.insert({name: "xiaolong"});
    show collections
    db.dropDatabase();
```
- 删除数据库, 删除当前所在的数据库
```
    db.dropDatabase();
```
- 删除集合, 删除指定的集合 删除表
```
    删除集合 db.COLLECTION_NAME.drop()
    db.user.drop();
```
##> 插入(增加)数据
- 插入数据,随着数据的插入,数据库创建成功了,集合也创建成功了.
```
    db.表名.insert({name: "zhangsan"}); 
```
##> 查找数据
- 查询所有数据
```
    db.userinfo.find();
```
- 查询去掉后的当前聚集集合中的某列的重复数据
```
    db.userinfo.distinct("name");
    会过滤掉name中的相同数据
```
- 条件查询
```
    db.userinfo.find({age: 22});
    db.userinfo.find({age: {$gt: 22}}); 大于
    db.userinfo.find({age: {$lt: 22}}); 小于
    db.userinfo.find({age: {$gte: 22}}); 大于等于
    db.userinfo.find({age: {$lte: 22}}); 小于等于
    db.userinfo.find({age: /mongo/}); 正则查询name中有mongo字段的数据
    db.userinfo.find({name: "zhangsan", age: 22})
    db.userinfo.find().limit(5); // 查询五条数据
    db.userinfo.find().skip(10); // 查询10以后的数据
    db.userinfo.find().limit(10).skip(5); // 查询5-15之间的数据
    db.userinfo.findOne();
    db.userinfo.find({age: {$gt: 22}}).count();
    db.userinfo.find().skip(10).limit(5).count(true);
```
- 查询指定列name age数据, age > 25
```
    db.userinfo.find({age: {$gt: 25}}, {name: 1, age: 1});
```
- 按照年龄升序 1升序 -1降序
```
    db.userinfo.find().sort({age: 1});
    db.userinfo.find().sort({age: -1});
```
- or 与 查询
```
    db.userinfo.find({$or: [{age: 22}, {age: 25}]});
```
- 修改数据
```
    db.student.update{(name: "xiaoming"}, {$set: {age:16}}); 修改单个
    db.student.update({name: "xiaomingg"}, {$set: {age:16}}, {multi: true}); 修改多个
```
- 完整替换
```
    db.student.update({name:"xiaoming"}, {name: "daming", age: 16});
    db.users.update({name: "xiaoming"}, {$inc: {age:50}}, false, true);
    update users set age = age + 50 where name = 'xiaoming'
    db.users.update({name: "xiaoming"}, {$inc: {age: 50}, $set: {name: "hoho"}}, false, true);
    update users set age = age + 50, name = 'hoho' where name = 'xiaoming'
```
- 删除数据
```
    db.collectionsNames.remove({brough: "xiaolong"});
    db.users.remove({age: 123});
    db.restaurants.remove({brough: "Queens"}, {justOne:true})
```









