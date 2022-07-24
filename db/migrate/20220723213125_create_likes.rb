class CreateLikes < ActiveRecord::Migration[7.0]
  def change
    create_table :likes, comment: 'Учет лайков новостей' do |t|
      t.references :user, null: false, foreign_key: true
      t.references :news, null: false, foreign_key: true
      t.timestamps
    end
  end
end
