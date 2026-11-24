Set WshShell = CreateObject("WScript.Shell")
WshShell.CurrentDirectory = "C:\Users\DAVID NM\Desktop\ORACULUS"
WshShell.Run "cmd.exe /c node server.js", 0, False
WScript.Sleep 1500
WshShell.Run "http://localhost:3000", 1, False