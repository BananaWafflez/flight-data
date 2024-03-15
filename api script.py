import requests
auth = "31b5587f2d0365a4c74faf808f14582b1c8a6248e61a945b99ce14b759fbdac9fce822ce20fb5cdeebbcde817d85f80c"

response = requests.get("https://airportdb.io/api/v1/airport/KJFK?apiToken=" + auth)
print(response.json())