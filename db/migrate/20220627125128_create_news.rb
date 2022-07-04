# frozen_string_literal: true

class CreateNews < ActiveRecord::Migration[7.0]
  def change
    create_table :news, comment: "Новости" do |t|
      t.with_options index: { unique: true } do
        string :header, comment: 'Новостной заголовок'
      end
      t.string :body, comment: 'Тело новости'
      t.string :source, comment: 'Источник новости'
      t.date :date, comment: 'Дата новости'
      t.string :state,
               default: 'created',
               comment: 'статус новости'

      t.timestamps
    end
  end
end
