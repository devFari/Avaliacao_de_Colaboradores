@echo off
echo Iniciando o servidor Node.js...
start "Servidor" cmd /k "node server.js"
timeout /t 3 > nul
start "http://localhost:3000"
exit