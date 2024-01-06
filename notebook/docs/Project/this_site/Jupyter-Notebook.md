# Jupyter Notebook 搭建

[[TOC]]

## 搭建 Jupyter Notebook 环境

安装jupyter包

```shell
pip install jupyter notebook==6.1.0
```

::: danger 不要安装默认版本

最新版本为 Jupyter 7，目前还不稳定，且和很多库有冲突。

```shell
conda install jupyter 
```

:::

生成默认配置文件

```shell
jupyter notebook --generate-config
config file: /root/.jupyter/jupyter_notebook_config.py
```

往配置文件写入一些内容

```shell
# 设置可以访问的ip, 默认是localhost, 将其改为 '*'
c.NotebookApp.ip = '*'

# 笔记本的默认打开目录, 自己设置
c.NotebookApp.notebook_dir = '/home/jupyter/documents/jupyter_notebook'

# 笔记本启动后是否打开浏览器, 设为 False即可
c.NotebookApp.open_browser = False

# 默认访问端口, 可自己修改
c.NotebookApp.port = 8888

# jupyterlab是否显示quit按钮,我设为false以免自己不小心按到把服务停了
c.NotebookApp.quit_button = False

# 如果使用root用户运行,将下列值改为True即可, 运行时也可加参数将其改为True
c.NotebookApp.allow_root = True
```

修改好配置文件之后, 运行如下命令启动笔记本

```shell
jupyter notebook
```

进入 login 界面, 输入刚刚链接中的 token 值和新密码即可修改密码


## 持久化运行 Jupyter Notebook

开始运行

```shell
nohup jupyter notebook &
```

结束运行

```shell
ps -aux | grep "jupyter"
kill [进程号] 
```

## 安装 `jupyter_contrib_nbextensions` 提示报错 `No module named 'notebook.base'`。

```shell
pip install jupyter_contrib_nbextensions
jupyter contrib nbextension install --user
pip install jupyter_nbextensions_configurator // No module named 'notebook.base'
```

将notebook更改为6.1.0版本后问题解决。

```shell
pip install jupyter notebook==6.1.0
```

## 安装其他核

> How do I install other languages like R or Julia?
> 
> To run notebooks in languages other than Python, such as R or Julia, you will need to install additional kernels. For more information, see the full list of [available kernels](https://github.com/jupyter/jupyter/wiki/Jupyter-kernels).