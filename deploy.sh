rm -rf /home/www/deploy.zjh.asia;
mkdir /home/www/deploy.zjh.asia;
mkdir /home/www/deploy.zjh.asia/blog;
mkdir /home/www/deploy.zjh.asia/academic;
cd hugo && hugo && cp -rf public/* /home/www/deploy.zjh.asia/blog/ && rm -rf public;
cd ../vitepress/ && yarn run docs:build && cp -rf docs/.vitepress/dist/* /home/www/deploy.zjh.asia/academic/ && rm -rf docs/.vitepress/dist/*;
cd ../main/ && cp index.html /home/www/deploy.zjh.asia/ && cp output.css /home/www/deploy.zjh.asia/;