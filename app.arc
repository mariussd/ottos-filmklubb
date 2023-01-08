@app
ottos-filmklubb-5c9f

@aws
region
  eu-north-1

@http
/*
  method any
  src server

@static

@tables
user
  pk *String

password
  pk *String # userId

note
  pk *String  # userId
  sk **String # noteId
