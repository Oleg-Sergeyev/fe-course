# app/views/categories/index.json.jbuilder

# json.extract! user, :id, :name, :email, :password
# json.url user_edit_url(user, format: :json)
json.extract! @user, :id, :name, :email
#json.array! @user
