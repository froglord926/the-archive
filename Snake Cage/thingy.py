filename = input("file name:")
file = open(filename, "r")
thing = list(file.read())
file.close()
mode = input("d/e")
if(mode == "e"):
    for i in range(0,len(thing)-1):
        thing[i] = ord(thing[i])+ord(thing[i+1])
        if(thing[i]>127):
            thing[i] = (thing[i])-127
        thing[i] = chr(thing[i])
    file = open(filename,"w")
    file.write("".join(thing))
    file.close()
    print("".join(thing))
else:
    for i in range(len(thing)-2,-1,-1):
        thing[i] = ord(thing[i])-ord(thing[i+1])
        if(thing[i]<0):
            thing[i] = (thing[i])+127
        thing[i] = chr(thing[i])
    file = open(filename,"w")
    file.write("".join(thing))
    file.close()
    print("".join(thing))
