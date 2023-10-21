rm -rf /home/www/deploy.zjh.asia;
mkdir /home/www/deploy.zjh.asia;
mkdir /home/www/deploy.zjh.asia/life;
mkdir /home/www/deploy.zjh.asia/aboutme;
# mkdir /home/www/deploy.zjh.asia/artworks;

cd life && hugo --buildFuture && cp -rf public/* /home/www/deploy.zjh.asia/life/ && rm -rf public;
# cd ../artworks && npm install && hugo --buildFuture && cp -rf public/* /home/www/deploy.zjh.asia/artworks/ && rm -rf public;
# cp -rf bugfix/* /home/www/deploy.zjh.asia/artworks/; # 修复了npx没有对tailwindcss重新统计的bug
cd ../tech/ && yarn run docs:build && cp -rf docs/.vitepress/dist/* /home/www/deploy.zjh.asia && rm -rf docs/.vitepress/dist/*;
cd ../aboutme && hugo --buildFuture && cp -rf public/* /home/www/deploy.zjh.asia/aboutme/ && rm -rf public;
