import random

f = open(r"../slideshow/names.txt",'r')
temp = f.readlines()

temp = map(lambda t: t[:-1] if (t[-1:] == '\n') else t, temp)
res = random.sample(temp, len(temp)) 
print(res)
    