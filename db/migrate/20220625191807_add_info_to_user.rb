# frozen_string_literal: true

class AddInfoToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :info, :string, comment: 'Информация о пользователе'
  end
end
