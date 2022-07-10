class AddColumnToComments < ActiveRecord::Migration[7.0]
  def change
    add_column :comments,
               :commentable_type,
               :string,
               comment: 'Тип комментируемого объекта'
    add_column :comments,
               :commentable_id,
               :bigint,
               comment: 'ID комментируемого объекта'
    remove_column :comments, :news_id
    add_reference :users, :user, index: true, comment: 'Внешний ключ для связи с таблицей users'
    add_reference :news, :news, index: true, comment: 'Внешний ключ для связи с таблицей news'
  end
end
