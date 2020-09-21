class User < ApplicationRecord
    validates :email, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length:{minimum: 6, allow_nil: true}
    attr_reader :password
    after_initialize :ensure_session_token
end
