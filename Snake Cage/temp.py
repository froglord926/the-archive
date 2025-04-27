stuff = input()
temp = ""
abc = []
for i in stuff:
    if(i != " "):
        temp+=i
    else:
        abc.append(int(temp))
        temp = ""
a = 0
b = 0
c = 0
order = input()
for i in range(1,3):
    if(abc[i]>abc[a]):
        a=i
    if(abc[i]<abc[c]):
        c=i
if(a == 1 and c== 0) or (a==0 and c==1):
    b=2
if(a == 2 and c== 0) or (a == 0 and c == 2):
    b=1
else:
    b=0
for i in order:
    if(i=="A"):
        print(str(abc[a])+" ",end="")
    if(i=="B"):
        print(str(abc[b])+" ",end="")
    if(i=="C"):
        print(str(abc[c])+" ",end="")
