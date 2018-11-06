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
    
```