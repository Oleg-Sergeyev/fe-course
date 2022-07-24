# app/views/categories/index.json.jbuilder

json.extract! news, :id, :date, :header, :simple_rating
#json.merge!({ heart: session[:flag] })
json.url news_index_url(news, format: :json)
