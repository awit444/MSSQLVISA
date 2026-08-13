@echo off
echo Stopping Node.js API...
taskkill /IM node.exe /F 2>nul

echo Stopping Ngrok tunnel...
taskkill /IM ngrok.exe /F 2>nul

echo API has been successfully stopped!
pause
