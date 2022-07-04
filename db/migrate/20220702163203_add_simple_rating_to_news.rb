class AddSimpleRatingToNews < ActiveRecord::Migration[7.0]
  def change
    add_column :news,
               :simple_rating,
               :integer,
               default: 0,
               comment: 'Простой счетчик рейтинга новости'
  end
end
