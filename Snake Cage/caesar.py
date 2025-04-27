while (True):
    p = input("word: ")
    k = int(input("key: "))
    l =[];
    for i in range(len(p)):
        l.append(ord(p[i]))
    for i in range(len(l)):
        l[i]+=k
        if l[i]>126:
            l[i]=32+(l[i]-126)
        l[i]=chr(l[i])
    p = ''.join(l)
    print(p)
