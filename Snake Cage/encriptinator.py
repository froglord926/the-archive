while(True):
    code = input("code:")
    final = []
    for i in range(len(code)):
        if(i%2==1):
            final.append(code[i])
            final.append(code[i-1])
    if(len(code)%2==1):
        final.append(code[len(code)-1])
    print("".join(final))
        

