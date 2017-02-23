# Download images from http://benchmark.ini.rub.de/Dataset_GTSDB/TestIJCNN2013.zip
# and extract in this directory to folder called "TestSet"

from PIL import Image

path = "./TestSet/"

for i in range(0,300):
    s = '00000'+ str(i)
    n = len(s)
    s = s[n-5:n]

    im = Image.open(path+s+".ppm")
    im.save(path+s+".jpg")
