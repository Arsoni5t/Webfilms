# require 'bcrypt'
class User < ApplicationRecord
    # validates :email, presence: true, uniqueness: true
    validates :email, presence: {message: " is required!"}, uniqueness: {message: " already taken!"}, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create, message: "must be formatted name@domain.com!" }
    validates :password_digest, presence: {message: 'Password is required!'}
    validates :password, length:{message: " must be between 6 and 40 characters!", minimum: 6, allow_nil: true}
    attr_reader :password
    after_initialize :ensure_session_token

    # has_one_attached :photo

        def self.find_by_credentials(email,password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.base64
        self.save
        self.session_token
    end
end
