npm run deploy
rsync -av dist/ geekpark.net:~/gpk_zt/job/
echo '发布完成'