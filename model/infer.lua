require 'image'
require 'loadcaffe'
require 'optim'

collectgarbage()
net = loadcaffe.load('deploy.prototxt', 'snapshot_iter_19140.caffemodel','cudnn')
net:cuda()

local img = image.load('../static/images/TestSet/00002.ppm')

local input_size = {1,3,227,227}
local inputs = torch.Tensor(torch.LongStorage(input_size)):cuda()
local im = image.scale(img,input_size[3],input_size[4])
inputs[1] = im
image.display(im)
outputs = net:forward(inputs)
print(outputs)
