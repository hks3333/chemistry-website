for i in msg:
    if "h3" in i:
        x = i.strip()
        x = x.lstrip("<h3>")
        heading.append(x.rstrip("</h3>"))
        l.append("----------")
    elif "li" in i:
        x = i.strip()
        x = x.lstrip("<li>")
        l.append(x.rstrip("</li>"))
l = []
heading = []
for i in msg:
    if "h3" in i:
        x = i.strip()
        x = x.lstrip("<h3>")
        heading.append(x.rstrip("</h3>"))
        l.append("----------")
    elif "li" in i:
        x = i.strip()
        x = x.lstrip("<li>")
        l.append(x.rstrip("</li>"))
ind = -1
d = {}
for i in l:
    if "----------" in i:
        ind+=1
        d[heading[ind]] = []
    else :
        d[heading[ind]].append(i)
for i in d:
    print("title: {}".format(i))
    print("description: {}".format(d[i]))
