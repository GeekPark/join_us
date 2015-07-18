npm run deploy
rsync -av deploy/ geekpark.net:gpk_zt/join_us/
echo '发布完成'
