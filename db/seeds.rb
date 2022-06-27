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
    header: 'Стало известно о возможном возвращении Джонни Деппа к роли Джека Воробья',
    body: 'Американский актер Джонни Депп может вернуться к роли капитана Джека Воробья во франшизе 
    «Пираты Карибского моря». Об этом стало известно Daily Mail.
    Отмечается, что актер ведет переговоры со студией Disney о сделке на 300 миллионов долларов. 
    По данным Poptopic, компания заинтересована в том, чтобы восстановить отношения с Деппом. 
    Студия связалась с актером еще судебных разбирательств с его бывшей супругой Эмбер Херд.
    В апреле сообщалось, что Джонни Депп отказался возвращаться к съемкам «Пиратов Карибского моря». 
    Во время судебного заседания по иску артиста к Эмбер Херд Депп сказал, что обвинения с ее стороны 
    разрушили его карьеру. Из-за того, что актриса заявила о насилии со стороны экс-мужа, его лишили 
    нескольких проектов, в том числе шестой части «Пиратов Карибского моря». 
    https://lenta.ru/news/2022/06/27/johnny/',
    date: DateTime.current.to_date,
    state: 'created',
    source: 'Lenta.ru'
  }

News.create! hash_news
