require 'rtesseract'
# require 'mini_magick'

#image_path = ApplicationController::Base.helpers.image_url('./images/handwriting.jpg')
image = RTesseract.new('./images/textbook.jpg', lang: 'eng')
puts image.to_s # Getting the value