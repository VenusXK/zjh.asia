rm -rf /home/www/deploy.zjh.asia;
mkdir /home/www/deploy.zjh.asia;
mkdir /home/www/deploy.zjh.asia/life;
mkdir /home/www/deploy.zjh.asia/tech;
mkdir /home/www/deploy.zjh.asia/academic;
mkdir /home/www/deploy.zjh.asia/artworks;

cd hugo && hugo --buildFuture && cp -rf public/* /home/www/deploy.zjh.asia/life/ && rm -rf public;
cd ../hugo2 && hugo --buildFuture && cp -rf public/* /home/www/deploy.zjh.asia/tech/ && rm -rf public;
cd ../artworks && npm install && hugo --buildFuture && cp -rf public/* /home/www/deploy.zjh.asia/artworks/ && rm -rf public;
cp -rf bugfix/* /home/www/deploy.zjh.asia/artworks/;
cd ../vitepress/ && yarn run docs:build && cp -rf docs/.vitepress/dist/* /home/www/deploy.zjh.asia/academic/ && rm -rf docs/.vitepress/dist/*;
cd ../main/ && cp index.html /home/www/deploy.zjh.asia/ && cp wechat.html /home/www/deploy.zjh.asia/ && cp index_en.html /home/www/deploy.zjh.asia/  && cp output_main.css /home/www/deploy.zjh.asia/ && cp 87a96bae841a1174350381c46d22849c.txt /home/www/deploy.zjh.asia/;
# cd ../email/ && cp * /home/www/deploy.zjh.asia/email/;
