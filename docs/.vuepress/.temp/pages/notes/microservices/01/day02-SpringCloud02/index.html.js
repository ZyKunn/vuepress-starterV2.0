export const data = JSON.parse("{\"key\":\"v-2dfa4324\",\"path\":\"/notes/microservices/01/day02-SpringCloud02/\",\"title\":\"SpringCloud 实用篇 02 🍑\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"1.1.统一配置管理\",\"slug\":\"_1-1-统一配置管理\",\"link\":\"#_1-1-统一配置管理\",\"children\":[{\"level\":3,\"title\":\"1.1.1.在 nacos 中添加配置文件\",\"slug\":\"_1-1-1-在-nacos-中添加配置文件\",\"link\":\"#_1-1-1-在-nacos-中添加配置文件\",\"children\":[]},{\"level\":3,\"title\":\"1.1.2.从微服务拉取配置\",\"slug\":\"_1-1-2-从微服务拉取配置\",\"link\":\"#_1-1-2-从微服务拉取配置\",\"children\":[]}]},{\"level\":2,\"title\":\"1.2.配置热更新\",\"slug\":\"_1-2-配置热更新\",\"link\":\"#_1-2-配置热更新\",\"children\":[{\"level\":3,\"title\":\"1.2.1.方式一\",\"slug\":\"_1-2-1-方式一\",\"link\":\"#_1-2-1-方式一\",\"children\":[]},{\"level\":3,\"title\":\"1.2.2.方式二\",\"slug\":\"_1-2-2-方式二\",\"link\":\"#_1-2-2-方式二\",\"children\":[]}]},{\"level\":2,\"title\":\"1.3.配置共享\",\"slug\":\"_1-3-配置共享\",\"link\":\"#_1-3-配置共享\",\"children\":[{\"level\":3,\"title\":\"1）添加一个环境共享配置\",\"slug\":\"_1-添加一个环境共享配置\",\"link\":\"#_1-添加一个环境共享配置\",\"children\":[]},{\"level\":3,\"title\":\"2）在 user-service 中读取共享配置\",\"slug\":\"_2-在-user-service-中读取共享配置\",\"link\":\"#_2-在-user-service-中读取共享配置\",\"children\":[]},{\"level\":3,\"title\":\"3）运行两个 UserApplication，使用不同的 profile\",\"slug\":\"_3-运行两个-userapplication-使用不同的-profile\",\"link\":\"#_3-运行两个-userapplication-使用不同的-profile\",\"children\":[]},{\"level\":3,\"title\":\"4）配置共享的优先级\",\"slug\":\"_4-配置共享的优先级\",\"link\":\"#_4-配置共享的优先级\",\"children\":[]}]},{\"level\":2,\"title\":\"1.4.搭建 Nacos 集群\",\"slug\":\"_1-4-搭建-nacos-集群\",\"link\":\"#_1-4-搭建-nacos-集群\",\"children\":[]},{\"level\":2,\"title\":\"2.1.Feign 替代 RestTemplate\",\"slug\":\"_2-1-feign-替代-resttemplate\",\"link\":\"#_2-1-feign-替代-resttemplate\",\"children\":[{\"level\":3,\"title\":\"1）引入依赖\",\"slug\":\"_1-引入依赖\",\"link\":\"#_1-引入依赖\",\"children\":[]},{\"level\":3,\"title\":\"2）添加注解\",\"slug\":\"_2-添加注解\",\"link\":\"#_2-添加注解\",\"children\":[]},{\"level\":3,\"title\":\"3）编写 Feign 的客户端\",\"slug\":\"_3-编写-feign-的客户端\",\"link\":\"#_3-编写-feign-的客户端\",\"children\":[]},{\"level\":3,\"title\":\"4）测试\",\"slug\":\"_4-测试\",\"link\":\"#_4-测试\",\"children\":[]},{\"level\":3,\"title\":\"5）总结\",\"slug\":\"_5-总结\",\"link\":\"#_5-总结\",\"children\":[]}]},{\"level\":2,\"title\":\"2.2.自定义配置\",\"slug\":\"_2-2-自定义配置\",\"link\":\"#_2-2-自定义配置\",\"children\":[{\"level\":3,\"title\":\"2.2.1.配置文件方式\",\"slug\":\"_2-2-1-配置文件方式\",\"link\":\"#_2-2-1-配置文件方式\",\"children\":[]},{\"level\":3,\"title\":\"2.2.2.Java 代码方式\",\"slug\":\"_2-2-2-java-代码方式\",\"link\":\"#_2-2-2-java-代码方式\",\"children\":[]}]},{\"level\":2,\"title\":\"2.3.Feign 使用优化\",\"slug\":\"_2-3-feign-使用优化\",\"link\":\"#_2-3-feign-使用优化\",\"children\":[]},{\"level\":2,\"title\":\"2.4.最佳实践\",\"slug\":\"_2-4-最佳实践\",\"link\":\"#_2-4-最佳实践\",\"children\":[{\"level\":3,\"title\":\"2.4.1.继承方式\",\"slug\":\"_2-4-1-继承方式\",\"link\":\"#_2-4-1-继承方式\",\"children\":[]},{\"level\":3,\"title\":\"2.4.2.抽取方式\",\"slug\":\"_2-4-2-抽取方式\",\"link\":\"#_2-4-2-抽取方式\",\"children\":[]},{\"level\":3,\"title\":\"2.4.3.实现基于抽取的最佳实践\",\"slug\":\"_2-4-3-实现基于抽取的最佳实践\",\"link\":\"#_2-4-3-实现基于抽取的最佳实践\",\"children\":[{\"level\":4,\"title\":\"1）抽取\",\"slug\":\"_1-抽取\",\"link\":\"#_1-抽取\",\"children\":[]},{\"level\":4,\"title\":\"2）在 order-service 中使用 feign-api\",\"slug\":\"_2-在-order-service-中使用-feign-api\",\"link\":\"#_2-在-order-service-中使用-feign-api\",\"children\":[]},{\"level\":4,\"title\":\"3）重启测试\",\"slug\":\"_3-重启测试\",\"link\":\"#_3-重启测试\",\"children\":[]},{\"level\":4,\"title\":\"4）解决扫描包问题\",\"slug\":\"_4-解决扫描包问题\",\"link\":\"#_4-解决扫描包问题\",\"children\":[]}]}]},{\"level\":2,\"title\":\"3.1.为什么需要网关\",\"slug\":\"_3-1-为什么需要网关\",\"link\":\"#_3-1-为什么需要网关\",\"children\":[]},{\"level\":2,\"title\":\"3.2.gateway 快速入门\",\"slug\":\"_3-2-gateway-快速入门\",\"link\":\"#_3-2-gateway-快速入门\",\"children\":[{\"level\":3,\"title\":\"1）创建 gateway 服务，引入依赖\",\"slug\":\"_1-创建-gateway-服务-引入依赖\",\"link\":\"#_1-创建-gateway-服务-引入依赖\",\"children\":[]},{\"level\":3,\"title\":\"2）编写启动类\",\"slug\":\"_2-编写启动类\",\"link\":\"#_2-编写启动类\",\"children\":[]},{\"level\":3,\"title\":\"3）编写基础配置和路由规则\",\"slug\":\"_3-编写基础配置和路由规则\",\"link\":\"#_3-编写基础配置和路由规则\",\"children\":[]},{\"level\":3,\"title\":\"4）重启测试\",\"slug\":\"_4-重启测试\",\"link\":\"#_4-重启测试\",\"children\":[]},{\"level\":3,\"title\":\"5）网关路由的流程图\",\"slug\":\"_5-网关路由的流程图\",\"link\":\"#_5-网关路由的流程图\",\"children\":[]}]},{\"level\":2,\"title\":\"3.3.断言工厂\",\"slug\":\"_3-3-断言工厂\",\"link\":\"#_3-3-断言工厂\",\"children\":[]},{\"level\":2,\"title\":\"3.4.过滤器工厂\",\"slug\":\"_3-4-过滤器工厂\",\"link\":\"#_3-4-过滤器工厂\",\"children\":[{\"level\":3,\"title\":\"3.4.1.路由过滤器的种类\",\"slug\":\"_3-4-1-路由过滤器的种类\",\"link\":\"#_3-4-1-路由过滤器的种类\",\"children\":[]},{\"level\":3,\"title\":\"3.4.2.请求头过滤器\",\"slug\":\"_3-4-2-请求头过滤器\",\"link\":\"#_3-4-2-请求头过滤器\",\"children\":[]},{\"level\":3,\"title\":\"3.4.3.默认过滤器\",\"slug\":\"_3-4-3-默认过滤器\",\"link\":\"#_3-4-3-默认过滤器\",\"children\":[]},{\"level\":3,\"title\":\"3.4.4.总结\",\"slug\":\"_3-4-4-总结\",\"link\":\"#_3-4-4-总结\",\"children\":[]}]},{\"level\":2,\"title\":\"3.5.全局过滤器\",\"slug\":\"_3-5-全局过滤器\",\"link\":\"#_3-5-全局过滤器\",\"children\":[{\"level\":3,\"title\":\"3.5.1.全局过滤器作用\",\"slug\":\"_3-5-1-全局过滤器作用\",\"link\":\"#_3-5-1-全局过滤器作用\",\"children\":[]},{\"level\":3,\"title\":\"3.5.2.自定义全局过滤器\",\"slug\":\"_3-5-2-自定义全局过滤器\",\"link\":\"#_3-5-2-自定义全局过滤器\",\"children\":[]},{\"level\":3,\"title\":\"3.5.3.过滤器执行顺序\",\"slug\":\"_3-5-3-过滤器执行顺序\",\"link\":\"#_3-5-3-过滤器执行顺序\",\"children\":[]}]},{\"level\":2,\"title\":\"3.6.跨域问题\",\"slug\":\"_3-6-跨域问题\",\"link\":\"#_3-6-跨域问题\",\"children\":[{\"level\":3,\"title\":\"3.6.1.什么是跨域问题\",\"slug\":\"_3-6-1-什么是跨域问题\",\"link\":\"#_3-6-1-什么是跨域问题\",\"children\":[]},{\"level\":3,\"title\":\"3.6.2.模拟跨域问题\",\"slug\":\"_3-6-2-模拟跨域问题\",\"link\":\"#_3-6-2-模拟跨域问题\",\"children\":[]},{\"level\":3,\"title\":\"3.6.3.解决跨域问题\",\"slug\":\"_3-6-3-解决跨域问题\",\"link\":\"#_3-6-3-解决跨域问题\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"notes/microservices/01/day02-SpringCloud02/README.md\"}")
