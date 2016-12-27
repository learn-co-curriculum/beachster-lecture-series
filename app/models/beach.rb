class Beach < ApplicationRecord
  validates :title, :city, :location, :latitude, :longitude, :photo_url, presence: true
end
