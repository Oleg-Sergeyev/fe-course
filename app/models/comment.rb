class Comment < ApplicationRecord
  validates :author, presence: true, length: { maximum: 100, minimum: 2 }
  validates :text, presence: true, length: { maximum: 1000, minimum: 2 }

  belongs_to :news
end
