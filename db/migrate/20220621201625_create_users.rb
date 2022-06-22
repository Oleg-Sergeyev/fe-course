# frozen_string_literal: true

class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users, comment: 'Пользователи системы' do |t|
      t.with_options index: { unique: true } do
        string :name, comment: 'Имя, которое используется для входа'
        string :email, comment: 'Электронный адрес пользователя'
      end
      t.string :state,
               default: 'created',
               comment: 'статус пользователя'

      t.timestamps
    end
  end
end
