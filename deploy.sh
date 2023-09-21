rm -rf /home/www/deploy.zjh.asia;
mkdir /home/www/deploy.zjh.asia;
mkdir /home/www/deploy.zjh.asia/blog;
mkdir /home/www/deploy.zjh.asia/academic;
mkdir /home/www/deploy.zjh.asia/read;
mkdir /home/www/deploy.zjh.asia/email;
mkdir /home/www/deploy.zjh.asia/game;

cd hugo && hugo && cp -rf public/* /home/www/deploy.zjh.asia/blog/ && rm -rf public;
cd ../vitepress/ && yarn run docs:build && cp -rf docs/.vitepress/dist/* /home/www/deploy.zjh.asia/academic/ && rm -rf docs/.vitepress/dist/*;
cd ../main/ && cp index.html /home/www/deploy.zjh.asia/ && cp index_en.html /home/www/deploy.zjh.asia/  && cp output_main.css /home/www/deploy.zjh.asia/ && cp 87a96bae841a1174350381c46d22849c.txt /home/www/deploy.zjh.asia/;
cd ../read/ && cp * /home/www/deploy.zjh.asia/read/;
cd ../email/ && cp * /home/www/deploy.zjh.asia/email/;
cd ../game/ && cp * /home/www/deploy.zjh.asia/game/;