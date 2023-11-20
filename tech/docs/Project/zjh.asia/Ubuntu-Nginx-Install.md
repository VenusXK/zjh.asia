# Ubuntu 下 nginx 配置

## 安装 nginx

```shell
apt install nginx
```

## 配置 nginx

Linux 下查询程序位置，使用 `whereis <程序名称>`，输入 `whereis nginx` 返回结果如下：

```shell
 /usr/sbin/nginx
 /usr/lib/nginx  
 /etc/nginx // [!code hl]
 /usr/share/nginx
 /usr/share/man/man8/nginx.8.gz
```