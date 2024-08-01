import requests

ENDPOINT= 'http://127.0.0.1:5555'

def test_can_get_pickup_games():
    response= requests.get(ENDPOINT + '/api/v1/pickup_games')
    assert response.status_code == 200

def test_can_get_player_signups():
    response= requests.get(ENDPOINT + '/api/v1/player_signups')
    assert response.status_code == 200

def test_create_user_success():
    payload= {
        'username' : 'testing1',
        'email' : 'testing1@test.com',
        'password' : 'testing1'
    }
    response= requests.post(ENDPOINT + '/api/v1/users', json= payload)
    assert response.status_code == 201

    data= response.json()
    print(data)