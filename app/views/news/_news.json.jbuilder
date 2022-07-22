# app/views/categories/index.json.jbuilder

json.extract! news, :id, :header, :body, :source, :date, :simple_rating
json.merge!({ heart: session[:flag] })
json.url news_url(news, format: :json)
