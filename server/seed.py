#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, User, PlayerSignup, PickupGame

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        User.query.delete()
        PlayerSignup.query.delete()
        PickupGame.query.delete()

        print('Creating Users')
        user1= User(username= 'swalker', email= 'swalker@gmail.com', password_hash= 'steve')

        db.session.add_all([user1])
        db.session.commit()

        print('Creating Pickup Games')
        game1= PickupGame(location= 'Maryland Sports Arena', city= 'Edgewood', state= 'MD', date= '12/23/2023', time= '7:30 PM', sport= 'Soccer', image= 'https://s3-media0.fl.yelpcdn.com/bphoto/jMgAm9iujApYifv5yHTglQ/1000s.jpg', total_attendees= 21)

        game2= PickupGame(location= 'Rucker Park', city= 'New York', state= 'NY', date= '1/1/2024', time= '12:01 AM', sport= 'Basketball', image= 'https://boardroom.tv/wp-content/uploads/2021/10/20211008-NBPA-RUCKER-JL-84.jpg', total_attendees= 212)

        db.session.add_all([game1, game2])
        db.session.commit()

        signup1= PlayerSignup(name= 'Steve Walker', preferred_position= 'Midfielder', user= user1, pickup_game= game1)

        db.session.add_all([signup1])
        db.session.commit()

        print('Creating Player Signups')

        print('Finished seeding')
