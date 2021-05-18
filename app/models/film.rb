class Film < ApplicationRecord
    validates :title, :year, :list, :rating, :genre, :description, presence: true

    has_one_attached :film
    has_one_attached :poster

    # has_many :users,
    # through: :queues,
    # source: :user

    #has_many :queues,
       # foreign_key: :film_id,
       # class_name: :Queue

    # has_many :queues,
    # primary_key: :id,
    # foreign_key: :user_id,
    # class_name: :Queue

end
