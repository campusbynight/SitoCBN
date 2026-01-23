git checkout main
git rm -rf .
git checkout development -- build
mv build/* .
rmdir build
git add .
git commit -m "Build: $(date)"
git checkout development
