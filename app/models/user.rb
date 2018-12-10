# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord

    validates :username, :session_token, :password_digest, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}

    before_validation :ensure_session_token

    attr_reader :password

    def self.find_by_credentials(username, password) 
        @user = User.find_by(username: username)
        if @user && @user.valid_password?(password) 
            @user
        else 
            nil
        end 
    end 

    def password=(password) 
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end  

    def valid_password?(password) 
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end  

    def reset_session_token 
        self.session_token = SecureRandom.urlsafe_base64(16)
        self.save 
        self.session_token
    end 

    def ensure_session_token 
        self.session_token || self.reset_session_token
    end 

end
