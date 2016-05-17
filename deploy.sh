cp fetch.sh dist/
rsync -av --exclude=data.json dist/ geekpark.net:~/gpk_zt/job/
echo '发布完成'
