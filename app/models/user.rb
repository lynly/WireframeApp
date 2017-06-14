class User < ApplicationRecord
  has_many :wireframes
  has_secure_password
end
