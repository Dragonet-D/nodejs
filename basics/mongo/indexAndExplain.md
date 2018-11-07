#> 基础索引
#####> 索引是对数据库表中一列或多列的值进行排序的一种结构, 可以让我们查询速度变得更快. MongoDB的索引基本与传统关系型数据库一模一样, 这其中也包括一些基本的查询优化技巧;

- 创建索引
```
    db.user.ensureIndex({"username": 1});
```
- 获取当前集合的索引
```
    db.user.getIndexes();
```
- 删除索引命令
```
    db.user,dropIndex({username: 1});
```