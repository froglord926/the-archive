import win32com.client as comclt
wsh= comclt.Dispatch("WScript.Shell")
wsh.SendKeys("a") # send the keys you want