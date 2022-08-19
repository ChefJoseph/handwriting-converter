require 'nokogiri'
require 'httparty'
require 'byebug'


def scraper(url)
    unparsed_page = HTTParty.get(url)
    parsed_page = Nokogiri::HTML(unparsed_page.body)
end



scraper("https://www.instagram.com/ebenezersamuel23/")

byebug