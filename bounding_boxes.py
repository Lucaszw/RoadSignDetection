
import cv2
import random
from collections import defaultdict

# bounding box stride and size
stridex = 50
stridey = 50
lenx = 100
leny = 100

# threshold for bouning box success
class_thresh = 0.8

img = cv2.imread("243.jpg")
height, width, ch = img.shape
dict = defaultdict(list)

for by in range(0, height, stridey):
	bh = leny
	if (by + bh > width):
		bh = height - by
	for bx in range(0, width, stridex):
		bw = lenx
		if (bx + bw > width):
			bw = width - bx
		box = img[by:by+bh,bx:bx+bw]
		# detect classifier here on box
		percent, strclass = random.uniform(0,1), "sign"
		if (percent >= class_thresh):
			# add to box to the list 
			dict[strclass].append([percent, bx, by, bw, bh])
		#cv2.imshow('ROI',box)
		#cv2.waitKey(0)

# loop through the matched boxes and do something with them
# possibly prep it for 
for strclass in dict.keys():
	for box in dict[strclass]:
		cv2.rectangle(img,(box[1],box[2]),(box[1]+box[3],box[2]+box[4]), (0,255,0), 3)


cv2.imshow('ROI',img)
cv2.waitKey(0)