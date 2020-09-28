class Film < ApplicationRecord

    validates :title, :year, :rating, :description, presence: true


    has_one_attached :video
    has_one_attached :photo
    

end
