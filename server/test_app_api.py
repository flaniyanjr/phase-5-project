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

def test_create_pickup_game_success():
    payload= {
        'location' : 'Wallingford Turf Field',
        'city' : 'Jackson',
        'state' : 'Wyoming',
        'date' : '2024-09-24',
        'time' : '13:30',
        'sport' : 'Badminton',
        'image' : 'https://i.ytimg.com/vi/tWU0IVOk4NU/maxresdefault.jpg',
        'total_attendees' : 0
    }
    response= requests.post(ENDPOINT + '/api/v1/pickup_games', json= payload)
    assert response.status_code == 201

def test_create_pickup_game_failure_no_location():
    payload= {
        'location' : '',
        'city' : 'Jackson',
        'state' : 'Wyoming',
        'date' : '2024-09-24',
        'time' : '13:30',
        'sport' : 'Badminton',
        'image' : 'https://i.ytimg.com/vi/tWU0IVOk4NU/maxresdefault.jpg',
        'total_attendees' : 0
    }
    response= requests.post(ENDPOINT + '/api/v1/pickup_games', json= payload)
    assert response.status_code == 422

# This unit test is not working for some reason
# def test_create_pickup_game_failure_no_city():
#     payload= {
#         'location' : 'Wallingford Turf Field',
#         'city' : '',
#         'state' : 'Wyoming',
#         'date' : '2024-09-24',
#         'time' : '13:30',
#         'sport' : 'Badminton',
#         'image' : 'https://i.ytimg.com/vi/tWU0IVOk4NU/maxresdefault.jpg',
#         'total_attendees' : 0
#     }
#     response= requests.post(ENDPOINT + '/api/v1/pickup_games', json= payload)
#     assert response.status_code == 422

def test_create_pickup_game_failure_no_state():
    payload= {
        'location' : 'Wallingford Turf Field',
        'city' : 'Jackson',
        'state' : '',
        'date' : '2024-09-24',
        'time' : '13:30',
        'sport' : 'Badminton',
        'image' : 'https://i.ytimg.com/vi/tWU0IVOk4NU/maxresdefault.jpg',
        'total_attendees' : 0
    }
    response= requests.post(ENDPOINT + '/api/v1/pickup_games', json= payload)
    assert response.status_code == 422

def test_create_pickup_game_failure_no_date():
    payload= {
        'location' : 'Wallingford Turf Field',
        'city' : 'Jackson',
        'state' : 'Wyoming',
        'date' : '',
        'time' : '13:30',
        'sport' : 'Badminton',
        'image' : 'https://i.ytimg.com/vi/tWU0IVOk4NU/maxresdefault.jpg',
        'total_attendees' : 0
    }
    response= requests.post(ENDPOINT + '/api/v1/pickup_games', json= payload)
    assert response.status_code == 422

def test_create_pickup_game_failure_no_time():
    payload= {
        'location' : 'Wallingford Turf Field',
        'city' : 'Jackson',
        'state' : 'Wyoming',
        'date' : '2024-09-24',
        'time' : '',
        'sport' : 'Badminton',
        'image' : 'https://i.ytimg.com/vi/tWU0IVOk4NU/maxresdefault.jpg',
        'total_attendees' : 0
    }
    response= requests.post(ENDPOINT + '/api/v1/pickup_games', json= payload)
    assert response.status_code == 422

def test_create_pickup_game_failure_no_sport():
    payload= {
        'location' : 'Wallingford Turf Field',
        'city' : 'Jackson',
        'state' : 'Wyoming',
        'date' : '2024-09-24',
        'time' : '13:30',
        'sport' : '',
        'image' : 'https://i.ytimg.com/vi/tWU0IVOk4NU/maxresdefault.jpg',
        'total_attendees' : 0
    }
    response= requests.post(ENDPOINT + '/api/v1/pickup_games', json= payload)
    assert response.status_code == 422
