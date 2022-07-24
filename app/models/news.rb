class News < ApplicationRecord
  validates :header, presence: true, uniqueness: true, length: { maximum: 200, minimum: 2 }
  validates :body, presence: true
  validates :source, presence: true
  validates :date, presence: true
  validates :state, presence: true

  has_rich_text :body
  has_many :comments, as: :commentable
  has_many :likes
end
