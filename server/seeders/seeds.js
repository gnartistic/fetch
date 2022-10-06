// const faker = require('faker');
const userSeeds = require( './userSeed.json' );
const db = require( '../config/connection' );
const { User } = require( '../models' );

db.once( 'open', async () =>
{
    const pets = await Pets.insertMany( [
            
        {
            petName: "Rose",
            petBio: "You're gonna love me",
            petPic: "ivana-la-61jg6zviI7I-unsplash.jpg",
            petAge: 3,
            personalityTraits: "Outgoing",
            breed: "Corgi",
            petGender: "Female",
            favActivity: "Snuggles"
        },
        {
            petName: "Tom",
            petBio: "I am floof",
            petPic: "alvan-nee-egnAFVYS_h0-unsplash.jpg",
            petAge: 6,
            personalityTraits: "Outgoing",
            breed: "Corgi",
            petGender: "Male",
            favActivity: "Fetch"
        },
    ] );

    console.log( 'pets seeded' );

    await User.deleteMany();
    await User.create( {
        //User data
    } );
    console.log( 'users seeded' );

    process.exit();
}
);