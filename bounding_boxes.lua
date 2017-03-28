
require 'image'

window = image.display(image.lena()) 

-- bounding box stride and size
stridex = 50
stridey = 50
lenx = 100
leny = 100

-- threshold for bouning box success
class_thresh = 0.8

file = "243.jpg"

img = image.load(file)
local nchan, height, width = img:size(1), img:size(2), img:size(3)

for by=0, height, stridey do
	bh = leny
	if (by + bh > height) then
		bh = height - by
	end
	for bx=0, width, stridex do
		bw = lenx
		if (bx + bw > width) then
			bw = width - bx
		end
		box = image.crop(img, bx,by,bx+bw,by+bh)
		-- detect classifier here on box
		percent, strclass = math.random(), "sign"
		if (percent >= class_thresh) then
			-- add to box to the list 
			-- dict[strclass].append([percent, bx, by, bw, bh])
			-- print(percent)
		end
		image.display{image=box, win=window}
	end
end
