class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  validates :name, presence: true, uniqueness: true
  validates :name, length: { maximum: 50, minimum: 2 }
  validates :email, presence: true, uniqueness: true

  has_rich_text :info
end
