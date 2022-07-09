# app/views/categories/index.json.jbuilder
# json.array! @news do |news|
#   json.id news.id
#   json.header news.header
#   json.body news.body
#   json.source news.source
#   json.date news.date
#   json.state news.state
# end

json.extract! news, :id, :header, :body, :source, :date
json.url news_url(news, format: :json)