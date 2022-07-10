# app/views/categories/index.json.jbuilder

json.extract! news, :id, :date, :header, :simple_rating 
json.url news_index_url(news, format: :json)