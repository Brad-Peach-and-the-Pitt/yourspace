import { Meteor } from 'meteor/meteor';
import '../imports/api/rooms.js'

Meteor.startup(() => {
  // code to run on server at startup
  rooms: [
    {name: 'Kirby', seats: 6, tv: false, floor:'Lower Level'},
    {name: 'Pikachu', seats: 6, tv: true, floor:'Lower Level'},
    {name: 'Banana', seats: 6, tv: false, floor:'Lower Level'},
    {name: 'Mortal Kombat', seats: 12, tv: false, floor:'Lower Level'},
    {name: 'Pacman', seats: 6, tv: true, floor:'Lower Level'},
    {name: 'Triforce', seats: 12, tv: false, floor:'Lower Level'}
    {name: 'Bowser', seats: 6, tv: true, floor:'Third Floor'}
    {name: 'One Up', seats: 12, tv: true, floor:'Third Floor'}
    {name: 'Peach', seats: 8, tv: true, floor:'Third Floor'}
    { name: 'Sonic', seats: 6, tv: true, floor:'Third Floor'}
    { name: 'Gold Coin', seats: 12, tv: true, floor:'Fourth Floor'}
    { name: 'Mega Man', seats: 6, tv: true, floor:'Fourth Floor'}
  ]
});
