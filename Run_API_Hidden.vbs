Set WshShell = CreateObject("WScript.Shell")
' Run Node.js completely hidden in the background
WshShell.Run "node C:\Users\MIS-WILBERT\Desktop\MSSQLVISA\index.js", 0, False

' Run Ngrok completely hidden in the background
WshShell.Run "ngrok http --domain=unpleasantly-micellar-refugia.ngrok-free.dev 3000", 0, False
