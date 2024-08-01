import requests

ENDPOINT1= '/api/v1/pickup_games'
ENDPOINT2= '/api/v1/player_signups'

def test_can_call_enpoint1():
    response= requests.get('http://127.0.0.1:5555' + ENDPOINT1)
    assert response.status_code == 200

def test_can_call_enpoint2():
    response= requests.get('http://127.0.0.1:5555' + ENDPOINT2)
    assert response.status_code == 200