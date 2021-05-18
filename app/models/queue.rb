class Queue < ApplicationRecord
   # validates :user_id, :film_id, presence: true
                    # validates :user_id, uniqueness: {scope: :film_id}
   # validates :film_id, uniqueness: {scope: :user_id}
    
  #  belongs_to :user,
       # foreign_key: :user_id,
      #  class_name: :User
    
   # belongs_to :film,
      #  foreign_key: :film_id,
       # class_name: :Film


end