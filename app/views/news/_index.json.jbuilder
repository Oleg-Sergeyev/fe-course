# app/views/categories/index.json.jbuilder

json.extract! news, :date, :header 
json.url news_index_url(news, format: :json)