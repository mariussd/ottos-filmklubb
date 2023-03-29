@app
ottos-filmklubb-5c9f

@aws
region
  eu-north-1

profile
  otto

@http
get /
get /vote
get /search

@static

@tables
user
  pk *String

password
  pk *String # userId

note
  pk *String  # userId
  sk **String # noteId
