f = open(r"../slideshow/names.txt",'r')
temp = f.readlines()
temp = map(lambda t: t[:-1] if (t[-1:] == '\n') else t, temp)
print(temp)
    