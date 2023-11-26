deploy_root_path="/home/www/deploy.zjh.asia/"
dev_root_path="/home/www/zjh.asia/"

rm -rf $deploy_root_path;
mkdir $deploy_root_path;
mkdir "${deploy_root_path}life";
mkdir "${deploy_root_path}notebook";

# home deploy
cd "${dev_root_path}home/" && 
yarn run build && 
cp -rf ./out/*  $deploy_root_path

# life deploy
cd "${dev_root_path}life/" && 
hugo --buildFuture && 
cp -rf ./public/* "${deploy_root_path}life/" && 
rm -rf public;

# notebook deploy
cd "${dev_root_path}notebook/" && 
yarn run docs:build && 
cp -rf ./docs/.vitepress/dist/* "${deploy_root_path}notebook/" && 
rm -rf ./docs/.vitepress/dist/*;
