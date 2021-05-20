## Dokder


#### 基础知识
1. 三个基本概念：镜像（image）,容器（container）,仓库（repository）



#### FQA？
1. Q: 什么是docker-compose？
- A: 实际项目中，不可能只单单依赖于一个服务，例如一个常见的Web项目可能依赖于: 静态文件服务器，应用服务器，Mysql数据库等
    1. 服务 (service)：一个应用的容器，实际上可以包括若干运行相同镜像的容器实例。
    2. 项目 (project)：由一组关联的应用容器组成的一个完整业务单元，在docker-compose.yml 文件中定义。