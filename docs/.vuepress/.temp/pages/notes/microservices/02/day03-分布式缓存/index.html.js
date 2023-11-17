export const data = JSON.parse("{\"key\":\"v-b153d54c\",\"path\":\"/notes/microservices/02/day03-%E5%88%86%E5%B8%83%E5%BC%8F%E7%BC%93%E5%AD%98/\",\"title\":\"day03-分布式缓存\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"1.1.RDB 持久化\",\"slug\":\"_1-1-rdb-持久化\",\"link\":\"#_1-1-rdb-持久化\",\"children\":[{\"level\":3,\"title\":\"1.1.1.执行时机\",\"slug\":\"_1-1-1-执行时机\",\"link\":\"#_1-1-1-执行时机\",\"children\":[]},{\"level\":3,\"title\":\"1.1.2.RDB 原理\",\"slug\":\"_1-1-2-rdb-原理\",\"link\":\"#_1-1-2-rdb-原理\",\"children\":[]},{\"level\":3,\"title\":\"1.1.3.小结\",\"slug\":\"_1-1-3-小结\",\"link\":\"#_1-1-3-小结\",\"children\":[]}]},{\"level\":2,\"title\":\"1.2.AOF 持久化\",\"slug\":\"_1-2-aof-持久化\",\"link\":\"#_1-2-aof-持久化\",\"children\":[{\"level\":3,\"title\":\"1.2.1.AOF 原理\",\"slug\":\"_1-2-1-aof-原理\",\"link\":\"#_1-2-1-aof-原理\",\"children\":[]},{\"level\":3,\"title\":\"1.2.2.AOF 配置\",\"slug\":\"_1-2-2-aof-配置\",\"link\":\"#_1-2-2-aof-配置\",\"children\":[]},{\"level\":3,\"title\":\"1.2.3.AOF 文件重写\",\"slug\":\"_1-2-3-aof-文件重写\",\"link\":\"#_1-2-3-aof-文件重写\",\"children\":[]}]},{\"level\":2,\"title\":\"1.3.RDB 与 AOF 对比\",\"slug\":\"_1-3-rdb-与-aof-对比\",\"link\":\"#_1-3-rdb-与-aof-对比\",\"children\":[]},{\"level\":2,\"title\":\"2.1.搭建主从架构\",\"slug\":\"_2-1-搭建主从架构\",\"link\":\"#_2-1-搭建主从架构\",\"children\":[]},{\"level\":2,\"title\":\"2.2.主从数据同步原理\",\"slug\":\"_2-2-主从数据同步原理\",\"link\":\"#_2-2-主从数据同步原理\",\"children\":[{\"level\":3,\"title\":\"2.2.1.全量同步\",\"slug\":\"_2-2-1-全量同步\",\"link\":\"#_2-2-1-全量同步\",\"children\":[]},{\"level\":3,\"title\":\"2.2.2.增量同步\",\"slug\":\"_2-2-2-增量同步\",\"link\":\"#_2-2-2-增量同步\",\"children\":[]},{\"level\":3,\"title\":\"2.2.3.repl_backlog 原理\",\"slug\":\"_2-2-3-repl-backlog-原理\",\"link\":\"#_2-2-3-repl-backlog-原理\",\"children\":[]}]},{\"level\":2,\"title\":\"2.3.主从同步优化\",\"slug\":\"_2-3-主从同步优化\",\"link\":\"#_2-3-主从同步优化\",\"children\":[]},{\"level\":2,\"title\":\"2.4.小结\",\"slug\":\"_2-4-小结\",\"link\":\"#_2-4-小结\",\"children\":[]},{\"level\":2,\"title\":\"3.1.哨兵原理\",\"slug\":\"_3-1-哨兵原理\",\"link\":\"#_3-1-哨兵原理\",\"children\":[{\"level\":3,\"title\":\"3.1.1.集群结构和作用\",\"slug\":\"_3-1-1-集群结构和作用\",\"link\":\"#_3-1-1-集群结构和作用\",\"children\":[]},{\"level\":3,\"title\":\"3.1.2.集群监控原理\",\"slug\":\"_3-1-2-集群监控原理\",\"link\":\"#_3-1-2-集群监控原理\",\"children\":[]},{\"level\":3,\"title\":\"3.1.3.集群故障恢复原理\",\"slug\":\"_3-1-3-集群故障恢复原理\",\"link\":\"#_3-1-3-集群故障恢复原理\",\"children\":[]},{\"level\":3,\"title\":\"3.1.4.小结\",\"slug\":\"_3-1-4-小结\",\"link\":\"#_3-1-4-小结\",\"children\":[]}]},{\"level\":2,\"title\":\"3.2.搭建哨兵集群\",\"slug\":\"_3-2-搭建哨兵集群\",\"link\":\"#_3-2-搭建哨兵集群\",\"children\":[]},{\"level\":2,\"title\":\"3.3.RedisTemplate\",\"slug\":\"_3-3-redistemplate\",\"link\":\"#_3-3-redistemplate\",\"children\":[{\"level\":3,\"title\":\"3.3.1.导入 Demo 工程\",\"slug\":\"_3-3-1-导入-demo-工程\",\"link\":\"#_3-3-1-导入-demo-工程\",\"children\":[]},{\"level\":3,\"title\":\"3.3.2.引入依赖\",\"slug\":\"_3-3-2-引入依赖\",\"link\":\"#_3-3-2-引入依赖\",\"children\":[]},{\"level\":3,\"title\":\"3.3.3.配置 Redis 地址\",\"slug\":\"_3-3-3-配置-redis-地址\",\"link\":\"#_3-3-3-配置-redis-地址\",\"children\":[]},{\"level\":3,\"title\":\"3.3.4.配置读写分离\",\"slug\":\"_3-3-4-配置读写分离\",\"link\":\"#_3-3-4-配置读写分离\",\"children\":[]}]},{\"level\":2,\"title\":\"4.1.搭建分片集群\",\"slug\":\"_4-1-搭建分片集群\",\"link\":\"#_4-1-搭建分片集群\",\"children\":[]},{\"level\":2,\"title\":\"4.2.散列插槽\",\"slug\":\"_4-2-散列插槽\",\"link\":\"#_4-2-散列插槽\",\"children\":[{\"level\":3,\"title\":\"4.2.1.插槽原理\",\"slug\":\"_4-2-1-插槽原理\",\"link\":\"#_4-2-1-插槽原理\",\"children\":[]},{\"level\":3,\"title\":\"4.2.1.小结\",\"slug\":\"_4-2-1-小结\",\"link\":\"#_4-2-1-小结\",\"children\":[]}]},{\"level\":2,\"title\":\"4.3.集群伸缩\",\"slug\":\"_4-3-集群伸缩\",\"link\":\"#_4-3-集群伸缩\",\"children\":[{\"level\":3,\"title\":\"4.3.1.需求分析\",\"slug\":\"_4-3-1-需求分析\",\"link\":\"#_4-3-1-需求分析\",\"children\":[]},{\"level\":3,\"title\":\"4.3.2.创建新的 redis 实例\",\"slug\":\"_4-3-2-创建新的-redis-实例\",\"link\":\"#_4-3-2-创建新的-redis-实例\",\"children\":[]},{\"level\":3,\"title\":\"4.3.3.添加新节点到 redis\",\"slug\":\"_4-3-3-添加新节点到-redis\",\"link\":\"#_4-3-3-添加新节点到-redis\",\"children\":[]},{\"level\":3,\"title\":\"4.3.4.转移插槽\",\"slug\":\"_4-3-4-转移插槽\",\"link\":\"#_4-3-4-转移插槽\",\"children\":[]}]},{\"level\":2,\"title\":\"4.4.故障转移\",\"slug\":\"_4-4-故障转移\",\"link\":\"#_4-4-故障转移\",\"children\":[{\"level\":3,\"title\":\"4.4.1.自动故障转移\",\"slug\":\"_4-4-1-自动故障转移\",\"link\":\"#_4-4-1-自动故障转移\",\"children\":[]},{\"level\":3,\"title\":\"4.4.2.手动故障转移\",\"slug\":\"_4-4-2-手动故障转移\",\"link\":\"#_4-4-2-手动故障转移\",\"children\":[]}]},{\"level\":2,\"title\":\"4.5.RedisTemplate 访问分片集群\",\"slug\":\"_4-5-redistemplate-访问分片集群\",\"link\":\"#_4-5-redistemplate-访问分片集群\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"notes/microservices/02/day03-分布式缓存/README.md\"}")
