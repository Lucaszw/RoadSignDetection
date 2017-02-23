# Road Sign Detection System

ECE 457B - Fuzzy Loggic and Neural Networks Project

## Installation

Install CUDA and Torch: 

https://developer.nvidia.com/cuda-downloads

http://torch.ch/docs/getting-started.html

Install Protobuf (Ubuntu):
```
sudo apt-get install libprotobuf-dev protobuf-compiler
```
Install Protobuf (Mac):
```
brew install protobuf
```

Install Dependencies:
```
git clone https://github.com/Lucaszw/RoadSignDetection.git
pip install requriements.txt
npm install
luarocks install loadcaffe
sh model/get_caffemodel.sh
cd static/images/TestSet
curl -O http://benchmark.ini.rub.de/Dataset_GTSDB/TestIJCNN2013.zip
```


## Credits
https://github.com/magnusja/GTSRB-caffe-model

http://benchmark.ini.rub.de/Dataset_GTSDB/TestIJCNN2013.zip
