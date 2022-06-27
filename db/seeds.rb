# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

hash_users = 
  {
    name: 'user1@example.com',
    email:'user1@example.com',
    password: 'user1@example.com',
  }

User.create! hash_users

hash_news = 
  {
    header: 'Стартует распродажа',
    body: 'Распродажа новых лопат',
    date: DateTime.current.to_date,
    state: 'created',
    source: 'Some news'
  }

News.create! hash_news
