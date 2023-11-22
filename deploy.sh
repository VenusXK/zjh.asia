rm -rf /home/www/deploy.blog.zjh.asia;
mkdir /home/www/deploy.blog.zjh.asia;
mkdir /home/www/deploy.blog.zjh.asia/life;

cd life && hugo --buildFuture && cp -rf public/* /home/www/deploy.blog.zjh.asia/life/ && rm -rf public;
cd ../tech/ && yarn run docs:build && cp -rf docs/.vitepress/dist/* /home/www/deploy.blog.zjh.asia && rm -rf docs/.vitepress/dist/*;
