import math
 
def isPerfectSquare(x):
    if(x >= 0):
        sr = math.sqrt(x)
        return ((sr*sr) == float(x))
    return false
 
# Driver code
x = 1013
if (isPerfectSquare(x)):
    print("Yes")
else:
    print("No")