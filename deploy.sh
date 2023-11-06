rm -rf /home/www/deploy.zjh.asia;
mkdir /home/www/deploy.zjh.asia;
mkdir /home/www/deploy.zjh.asia/life;

cd life && hugo --buildFuture && cp -rf public/* /home/www/deploy.zjh.asia/life/ && rm -rf public;
cd ../tech/ && yarn run docs:build && cp -rf docs/.vitepress/dist/* /home/www/deploy.zjh.asia && rm -rf docs/.vitepress/dist/*;
