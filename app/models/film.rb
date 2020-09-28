class Film < ApplicationRecord

    validates :title, :year, :rating, :description, presence: true


    has_one_attached :film
    has_one_attached :poster
    

end
