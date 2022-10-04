# mysql

MySQL的安装配置

去官网搜索MySQL
<https://hub.docker.com/>
然后复制找到的应用命令到输入行执行
docker pull mysql:版本号
再去执行命令
docker run --name mysql -p 3308:3306 -e MYSQL_ROOT_PASSWORD=123456 -d imageId
