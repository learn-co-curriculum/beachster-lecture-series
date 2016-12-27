class Beach < ApplicationRecord
  validates :title, :city, :state, :latitude, :longitude, :photo_url, presence: true
end
