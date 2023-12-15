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
        game1= PickupGame(location= 'Maryland Sports Arena', city= 'Edgewood', state= 'MD', date= '2023-12-23', time= '19:30', sport= 'Soccer', image= 'https://s3-media0.fl.yelpcdn.com/bphoto/jMgAm9iujApYifv5yHTglQ/1000s.jpg', total_attendees= 32)

        game2= PickupGame(location= 'Rucker Park', city= 'New York', state= 'NY', date= '2024-01-01', time= '00:01', sport= 'Basketball', image= 'https://boardroom.tv/wp-content/uploads/2021/10/20211008-NBPA-RUCKER-JL-84.jpg', total_attendees= 212)

        game3= PickupGame(location= 'The Sandlot', city= 'Los Angeles', state= 'CA', date= '2024-03-13', time= '14:00', sport='Baseball', image= 'https://i2.wp.com/jacobbarlow.com/wp-content/uploads/2019/05/Screenshot-2019-03-18-23.10.05.png?fit=529%2C285&ssl=1', total_attendees= 23)

        game4= PickupGame(location= 'Venice Beach Courts', city= 'Los Angeles', state= 'CA', date= '2023-12-28', time= '13:00', sport= 'Basketball', image= 'https://i.pinimg.com/originals/d9/7f/1d/d97f1d658ed51fd2b3bca996cacfb2dc.jpg', total_attendees= 51)

        game5= PickupGame(location= 'Met Oval Field', city= 'New York', state= 'NY', date= '2024-01-12', time= '10:00', sport= 'Soccer', image= 'https://images.squarespace-cdn.com/content/v1/515e1bace4b0bca14d7a6ed3/1589414655900-A3UKH3L0A9HL2RUWYOOV/IMG_7929+2.jpg?format=1000w', total_attendees= 42)

        game6= PickupGame(location= 'The Backyard Rink', city= 'Saint Paul', state= 'MN', date= '2023-12-24', time= '13:30', sport= 'Hockey', image= 'https://mybackyardsports.com/wp-content/uploads/bfi_thumb/rink2-157eiga10ycnqoa5gt7sg1s7cmvqc8j8jfr3al0o8fqv4tg6.jpg', total_attendees= 102)

        game7= PickupGame(location= 'Clothier Field', city= 'Swarthmore', state= 'PA', date= '2023-12-22', time= '14:45', sport= 'Soccer', image= 'https://pbs.twimg.com/media/E5S3mB1WYAEJI90?format=jpg&name=4096x4096', total_attendees= 18)

        game8= PickupGame(location= 'Cardozo High School', city='Washington', state= 'DC', date= '2023-12-29', time= '11:00', sport= 'Football', image= 'https://cdn18.picryl.com/photo/2019/10/05/youth-football-game-at-cardozo-senior-high-school-1200-clifton-st-nw-washington-387444-1024.jpg', total_attendees= 22)

        db.session.add_all([game1, game2, game3, game4, game5, game6, game7, game8])
        db.session.commit()

        signup1= PlayerSignup(name= 'Steve Walker', preferred_position= 'Midfielder', user= user1, pickup_game= game1)

        db.session.add_all([signup1])
        db.session.commit()

        print('Creating Player Signups')

        print('Finished seeding')
