Set objFSO = CreateObject("Scripting.FileSystemObject")
strPath = objFSO.GetParentFolderName(WScript.ScriptFullName)

Set WshShell = CreateObject("WScript.Shell")

' Set the working directory to wherever this script is located
WshShell.CurrentDirectory = strPath

' Run Node.js completely hidden in the background (using dynamic path)
WshShell.Run "node index.js", 0, False

' Run Ngrok completely hidden in the background
' NOTE TO OTHER DEVELOPERS: Update the domain below to your own free ngrok domain!
WshShell.Run "ngrok http --domain=unpleasantly-micellar-refugia.ngrok-free.dev 3000", 0, False
