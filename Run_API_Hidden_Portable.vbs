Set objFSO = CreateObject("Scripting.FileSystemObject")
strPath = objFSO.GetParentFolderName(WScript.ScriptFullName)

Set WshShell = CreateObject("WScript.Shell")

' Set the working directory to wherever this script is located
WshShell.CurrentDirectory = strPath

' Run Node.js completely hidden in the background (using dynamic path)
WshShell.Run "node index.js", 0, False

' Run Ngrok completely hidden in the background
WshShell.Run "ngrok http --domain=extremely-accurate-mustang.ngrok-free.app 3000", 0, False
