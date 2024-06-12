eval "$(ssh-agent -s)"
ssh-add ~/.ssh/benjumeacarlos

# Deploy codigo en glosariodeterminos hectorjaviermorenoh
git remote remove origin
git remote add origin git@github.com:benjumeacarlos981/arriendo.git
git status
git add .
git commit -m "deployando Codigo"
git push -f origin main
npm run deploy







