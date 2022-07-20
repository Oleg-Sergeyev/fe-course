class Comment < ApplicationRecord
  # validates :author, presence: true, length: { maximum: 100, minimum: 2 }
  # validates :text, presence: true, length: { maximum: 1000, minimum: 2 }

  belongs_to :commentable, polymorphic: true
  has_many :comments, as: :commentable

  #scope :news_comments, -> { self.all }
  #scope :news_comments, -> { where(commentable_type: 'News').or where(commentable_type: 'Comment') }
  #scope :news_comments, -> { where(commentable_type: "News")}.or{where(commentable_type: "Comment") }
  
  scope :comment_comments, -> { where(commentable_type: 'Comment') }
  scope :news_comments, -> { where(commentable_type: 'News') }
end
