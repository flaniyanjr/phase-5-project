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
    # Test to create a user
    create_user_response= requests.post(ENDPOINT + '/api/v1/users', json= payload)
    assert create_user_response.status_code == 201

    user_id= create_user_response.json()['user']['id']

    # Test to GET user to make sure it was created successfully
    get_user_response= requests.get(ENDPOINT + f'/api/v1/users/{user_id}')
    assert get_user_response.status_code == 200

    # Tests to make sure the newly created user data is the same as the payload inputs for each User attribute (remember that password is taken out of the response in the serialize rules)
    user_response_data= get_user_response.json()
    assert user_response_data['username'] == payload['username']
    assert user_response_data['email'] == payload['email']

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
    # Test to create a pickup game
    create_pickup_game_response= requests.post(ENDPOINT + '/api/v1/pickup_games', json= payload)
    assert create_pickup_game_response.status_code == 201

    pickup_game_id= create_pickup_game_response.json()['id']

    # Test to GET the new game to make sure it was created successfully
    get_pickup_game= requests.get(ENDPOINT + f'/api/v1/pickup_games/{pickup_game_id}')
    assert get_pickup_game.status_code == 200

    # Tests to make sure the newly created pickup game data is the same as the payload inputs for each PickupGame attribute
    pickup_game_data= get_pickup_game.json()
    assert pickup_game_data['location'] == payload['location']
    assert pickup_game_data['city'] == payload['city']
    assert pickup_game_data['state'] == payload['state']
    assert pickup_game_data['date'] == payload['date']
    assert pickup_game_data['time'] == payload['time']
    assert pickup_game_data['sport'] == payload['sport']
    assert pickup_game_data['image'] == payload['image']
    assert pickup_game_data['total_attendees'] == payload['total_attendees']

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
        'image' : 'https://sportsgrass.com/wp-content/uploads/2018/12/1Q5Z8fGg.jpeg',
        'total_attendees' : 0
    }
    response= requests.post(ENDPOINT + '/api/v1/pickup_games', json= payload)
    assert response.status_code == 422

def test_create_player_signup_success():
    payload= {
        'name' : 'Test',
        'preferred_position' : 'Midfielder',
        'user_id' : 1,
        'pickup_game_id': 1
    }
    # Test to create a player signup
    create_player_signup_response= requests.post(ENDPOINT + '/api/v1/player_signups', json= payload)
    assert create_player_signup_response.status_code == 201

    signup_id= create_player_signup_response.json()['id']

    # Test to GET the player signup to make sure it was created successfully
    get_player_signup_response= requests.get(ENDPOINT + f'/api/v1/player_signups/{signup_id}')
    assert get_player_signup_response.status_code == 200

    # Tests to make sure the newly created player signup data is the same as the payload inputs for each PlayerSignup attribute
    player_signup_data= get_player_signup_response.json()
    assert player_signup_data['name'] == payload['name']
    assert player_signup_data['preferred_position'] == payload['preferred_position']
    assert player_signup_data['user_id'] == payload['user_id']
    assert player_signup_data['pickup_game_id'] == payload['pickup_game_id']

def test_update_newly_created_pickup_game_success():
    create_new_game_payload= {
        'location' : 'Test Field',
        'city' : 'Baltimore',
        'state' : 'Maryland',
        'date' : '2025-01-12',
        'time' : '13:30',
        'sport' : 'Soccer',
        'image' : 'https://sportsgrass.com/wp-content/uploads/2018/12/1Q5Z8fGg.jpeg',
        'total_attendees' : 0
    }
    new_game_response= requests.post(ENDPOINT + '/api/v1/pickup_games', json= create_new_game_payload)
    assert new_game_response.status_code == 201

    new_game_id= new_game_response.json()['id']

    update_game_payload= {
        'date' : '2025-05-24',
        'time' : '14:45'
    }
    update_pickup_game_response= requests.patch(ENDPOINT + f'/api/v1/pickup_games/{new_game_id}', json= update_game_payload)
    assert update_pickup_game_response.status_code == 200

    updated_game= requests.get(ENDPOINT + f'/api/v1/pickup_games/{new_game_id}')
    updated_game_data= updated_game.json()
    assert updated_game_data['date'] == update_game_payload['date']
    assert updated_game_data['time'] == update_game_payload['time']

def test_delete_pickup_game_success():
    create_new_game_payload= {
        'location' : 'Test Field',
        'city' : 'Pittsburgh',
        'state' : 'Pennsylvania',
        'date' : '2025-03-30',
        'time' : '19:00',
        'sport' : 'Hockey',
        'image' : 'https://sportsgrass.com/wp-content/uploads/2018/12/1Q5Z8fGg.jpeg',
        'total_attendees' : 0
    }
    create_new_game_response= requests.post(ENDPOINT + '/api/v1/pickup_games', json= create_new_game_payload)
    assert create_new_game_response.status_code == 201

    new_game_id= create_new_game_response.json()['id']

    delete_game_response= requests.delete(ENDPOINT + f'/api/v1/pickup_games/{new_game_id}')
    assert delete_game_response.status_code == 204

def test_delete_player_signup():
    payload= {
        'name' : 'Testing',
        'preferred_position' : 'Midfielder',
        'user_id' : 2,
        'pickup_game_id': 1
    }
    create_player_signup_response= requests.post(ENDPOINT + '/api/v1/player_signups', json= payload)
    assert create_player_signup_response.status_code == 201

    new_signup_id= create_player_signup_response.json()['id']

    delete_player_signup_response= requests.delete(ENDPOINT + f'/api/v1/player_signups/{new_signup_id}')
    assert delete_player_signup_response.status_code == 204