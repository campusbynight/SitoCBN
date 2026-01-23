git checkout main || { echo "❌ Errore: Checkout su main fallito. Fai il cazzo di commit prima."; exit 1; }
git rm -rf .
git checkout development -- build
git checkout development -- deploy.sh
mv build/* .
rmdir build
git add .
git commit -m "Build: $(date)"
git checkout development
