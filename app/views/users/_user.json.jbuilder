json.extract! user, :id,:email,:password_digest,:remember_digest,:name,:phone,:college, :created_at, :updated_at
json.url user_url(user, format: :json)