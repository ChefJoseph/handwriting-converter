require 'onnxruntime'
require 'mini_magick'


img = MiniMagick::Image.open("./images/test2.png")
pixels = img.get_pixels 

model = OnnxRuntime::Model.new('./testdata/snapshot-33.data-00000-of-00001')
result = model.predict({"inputs" => [pixels]})

p result["num_detections"]
p result["detection_classes"]