@app
ottos-filmklubb-5c9f

@aws
region
  eu-north-1

profile
  otto

@http
/vote
  method get
  src server

/search
  method get
  src server

/rate/:rateID
  method get
  src server

/
  method get
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
