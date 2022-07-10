# app/views/categories/index.json.jbuilder

json.extract! news, :id, :header, :body, :source, :date
json.url news_url(news, format: :json)