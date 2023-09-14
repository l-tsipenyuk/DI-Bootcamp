import requests 
# print(dir(requests))

def retrieve_data():
    response = requests.get("http://api.open-notify.org/iss-now.json")
    print(response.status_code)
    print(response.json())
    #converts the data from json format to py dict

retrieve_data()


