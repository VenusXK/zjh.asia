rm -rf /home/www/deploy.zjh.asia;
mkdir /home/www/deploy.zjh.asia;
mkdir /home/www/deploy.zjh.asia/blog;
cd hugo && hugo && cp -rf public/* /home/www/deploy.zjh.asia/blog/ && rm -rf public;
cd ../vitepress/ && yarn run docs:build && cp -rf docs/.vitepress/dist/* /home/www/deploy.zjh.asia/ && rm -rf docs/.vitepress/dist/*;