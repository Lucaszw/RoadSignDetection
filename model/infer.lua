require 'loadcaffe'

model = loadcaffe.load('deploy.prototxt', 'snapshot_iter_19140.caffemodel', 'cudnn')
