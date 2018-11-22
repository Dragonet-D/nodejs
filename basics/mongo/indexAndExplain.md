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
    db.user.dropIndex({username: 1});
```
- 复合索引
```
    db.user.ensureIndex({username: 1, age: -1});
    数字1表示username键的索引按升序存储, -1表示age键的索引按照降序方式存储
    该索引被创建后, 基于username 和 age的查询将会用到该索引,或者基于username的查询也会
    用到该索引,但是只是基于age的查询将不会用到该复合索引.因此可以说,如果想用到复合索引,必须在查询
    条件中包含复合索引总的前N个索引列.然而如果查询条件中的键值顺序和复合索引中的创建顺序不一致的话,
    MongoDB可以智能的帮助我们调整该顺序,以便使复合索引可以为查询所用.
    db.user.find({age: 30, username: "stephen"});
        对于上面示例中的查询条件, MongoDB 在检索之前将会动态的调整查询条件文档的顺序,以使该查询可以用到刚刚创建复合索引;
        对于上面创建的索引, MongoDB都会根据根据索引的keyname和索引方向为创建的索引自动分配一个索引名,下面的命令可以在创建索引时为其指定索引名;
        db.user.ensureIndex({username: 1}, {name: "userindex"});
        随着集合的增长,需要针对查询中大量的排序做索引.如果没有对索引的键调用sort,MongoDB需要将所有数据提取到内存并排序.因此在做无索引排序时,如果数据量过大以至无法再内存中进行排序,此时MongoDB将会报错;
```
- 唯一索引
```
    在缺省情况下创建的索引均不是唯一索引, 下面的示例将创建唯一的索引;
    db.user.ensureIndex({userid: 1}, {unique: true})
```
- db.user.insert({"userid": 5});
如果文档中不包含userid键, 那么该文档的值为null,如果多次插入类似的文档,MongoDB将会报出同样的错误;
- db.user.remove({});
删除表的全部数据;
- db.user.ensureIndex({name: 1}, {unique:true});
保证唯一索引, 要是字段值重复会报错;

#### 索引的一些参数
- background (Boolean)
建索引过程会阻塞其他数据库, background可指定以后台方式创建索引,即增加"background"可选参数,"background"默认值为false;
- unique (Boolean)
建立的索引是否唯一.指定为true创建唯一索引, 默认是false
- name (string) 
索引的名称.如果未指定,MongoDB会通过连接索引的字段和排序生成一个索引名称;
- dropDups (Boolean)
在建立唯一索引时是否删除重复记录, 指定true创建唯一索引.默认值为false;
   
### 使用explain
- db.user.find({name: "maomaogou"}).explain("executionStats");
关注输出如下数值: explain.executionStats.executionTimeMillis;


