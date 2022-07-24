# frozen_string_literal: true

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
    email: 'user1@example.com',
    password: 'user1@example.com'
  }

User.create! hash_users

hash_users2 =
  {
    name: 'user2@example.com',
    email: 'user2@example.com',
    password: 'user2@example.com'
  }

User.create! hash_users2

blob = ActiveStorage::Blob.create_and_upload!(io: File.open("#{Rails.root}/app/assets/images/news/jdep.jpg"),
                                              filename: 'jdep.jpg')
attachment = ActionText::Attachment.from_attachable(blob)
document = "<div class='news-text-content'><h5 class='mb-3 mt-2'>Американский актер Джонни Депп может вернуться к роли капитана Джека Воробья
            во франшизе «Пираты Карибского моря».</h5><div class='main-text'><div class='leftimg'>#{attachment.to_html}</div>
            Об этом стало известно Daily Mail.
            Отмечается, что актер ведет переговоры со студией Disney о сделке на 300 миллионов долларов.
            По данным Poptopic, компания заинтересована в том, чтобы восстановить отношения с Деппом.
            Студия связалась с актером еще судебных разбирательств с его бывшей супругой Эмбер Херд.
            В апреле сообщалось, что Джонни Депп отказался возвращаться к съемкам «Пиратов Карибского моря».
            Во время судебного заседания по иску артиста к Эмбер Херд Депп сказал, что обвинения с ее стороны
            разрушили его карьеру. Из-за того, что актриса заявила о насилии со стороны экс-мужа, его лишили
            нескольких проектов, в том числе шестой части «Пиратов Карибского моря».
            Повтор!!! Отмечается, что актер ведет переговоры со студией Disney о сделке на 300 миллионов долларов.
            По данным Poptopic, компания заинтересована в том, чтобы восстановить отношения с Деппом.
            Студия связалась с актером еще судебных разбирательств с его бывшей супругой Эмбер Херд.
            В апреле сообщалось, что Джонни Депп отказался возвращаться к съемкам «Пиратов Карибского моря».
            Во время судебного заседания по иску артиста к Эмбер Херд Депп сказал, что обвинения с ее стороны
            разрушили его карьеру. Из-за того, что актриса заявила о насилии со стороны экс-мужа, его лишили
            нескольких проектов, в том числе шестой части «Пиратов Карибского моря»
            <br><a href='https://lenta.ru/news/2022/06/27/johnny/'>Источник</a></div></div>"
hash_news =
  {
    header: 'Стало известно о возможном возвращении Джонни Деппа к роли Джека Воробья',
    body: document,
    date: DateTime.current.to_date,
    state: 'created',
    source: 'Lenta.ru',
    simple_rating: 25
  }

News.create! hash_news

document2 = "<div class='news-text-content'><h5 class='mb-3 mt-2'>Американский актер Джонни Депп может вернуться к роли капитана Джека Воробья
            во франшизе «Пираты Карибского моря».</h5><div class='main-text'>
            Об этом стало известно Daily Mail.
            Отмечается, что актер ведет переговоры со студией Disney о сделке на 300 миллионов долларов.
            По данным Poptopic, компания заинтересована в том, чтобы восстановить отношения с Деппом.
            Студия связалась с актером еще судебных разбирательств с его бывшей супругой Эмбер Херд.
            В апреле сообщалось, что Джонни Депп отказался возвращаться к съемкам «Пиратов Карибского моря».
            Во время судебного заседания по иску артиста к Эмбер Херд Депп сказал, что обвинения с ее стороны
            разрушили его карьеру. Из-за того, что актриса заявила о насилии со стороны экс-мужа, его лишили
            нескольких проектов, в том числе шестой части «Пиратов Карибского моря».
            <br><a href='https://lenta.ru/news/2022/06/27/johnny/'>Источник</a></div></div>"
hash_news2 =
  {
    header: 'Стало известно о возвращении Джонни Деппа к роли Джека Воробья',
    body: document2,
    date: DateTime.current.to_date,
    state: 'created',
    source: 'Somenews.org',
    simple_rating: 19
  }

News.create! hash_news2

document3 = "<div class='news-text-content'><h5 class='mb-3 mt-2'>Эксперт Юрлова сообщила, что в России деревянные дома подешевели почти до себестоимости.</h5><div class='main-text'>
            Деревянные дома в России подешевели почти до себестоимости на фоне ограничения экспорта пиломатериала в Европу. Об этом сообщила 
            сопредседатель правления Ассоциации деревянного домостроения Юлия Юрлова.<br>
            Как пояснила эксперт, цены на деревянные дома зависят от экспорта пиломатериала и внутренней покупательской способности. 
            Так, с начала года стоимость на этот вид жилья снизилась в среднем на 10-15 процентов, вернувшись к уровню апреля-мая прошлого года. 
            В июне стоимость деревянного дома варьировалась от 50 до 70 тысяч рублей за квадратный метр.
            <br><a href='https://lenta.ru/news/2022/07/23/domaa/'>Источник</a></div></div>"
hash_news3 =
  {
    header: 'Деревянные дома в России подешевели почти до себестоимости',
    body: document3,
    date: DateTime.current.to_date,
    state: 'created',
    source: 'Somenews.org',
    simple_rating: 4
  }

News.create! hash_news3

# author = 'Киноман'
# text = 'Отличнная новость'
# hash_comment1 =
#   {
#     author: author,
#     text: text,
#   }
#   Comment.create! hash_comment1 

# hash_comment2 =
#   {
#     author: 'Любитель',
#     text: 'Так себе, надоел',
#   }
#   Comment.create! hash_comment2