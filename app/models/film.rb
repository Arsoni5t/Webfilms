class Film < ApplicationRecord
    validates :title, :year, :rating, :genre, :description, presence: true

    has_one_attached :film
    has_one_attached :poster


end
