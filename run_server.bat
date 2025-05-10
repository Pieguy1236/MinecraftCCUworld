echo "downloading server data"

git remote add origin https://github.com/Pieguy1236/MinecraftCCUworld
git branch -m test
git fetch
git status
git reset origin/test
git restore .

echo "starting server"

java -Xmx12288M -Xms12288M -jar forge.jar nogui

echo "uploading server data"

git init
git remote add origin https://github.com/Pieguy1236/MinecraftCCUworld
git add .
git branch -m JC_branch
git commit -m "update world"
git push origin -f JC_branch

echo "terminal can be closed"

pause

