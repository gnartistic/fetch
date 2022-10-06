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
        {
            petName: "Andre",
            petBio: "Beach days are best days",
            petPic: "andre-tan-ZQ_0jk66-1E-unsplash.jpg",
            petAge: 2,
            personalityTraits: "Outgoing",
            breed: "Shiba",
            petGender: "Male",
            favActivity: "Beach days"
        },
        {
            petName: "Pebble",
            petBio: "Are you also amazing? I suppose we could be friends",
            petPic: "alvan-nee-egnAFVYS_h0-unsplash.jpg",
            petAge: 6,
            personalityTraits: "Outgoing",
            breed: "Pug",
            petGender: "Male",
            favActivity: "Fetch"
        },
        {
            petName: "Henley",
            petBio: "I'm gonna need a minute to brush my hair.",
            petPic: "herbert-goetsch-Wpixq0Z1dfo-unsplash",
            petAge: 5,
            personalityTraits: "Outgoing",
            breed: "Long Hair Chi",
            petGender: "Female",
            favActivity: "Brushing"
        },
        {
            petName: "Howie",
            petBio: "I am just want friends",
            petPic: "howie-r-CjI_2QX7hvU-unsplash",
            petAge: 6,
            personalityTraits: "Outgoing",
            breed: "Collie Mix",
            petGender: "Male",
            favActivity: "Fetch"
        },
        {
            petName: "Jazzy",
            petBio: "Outdoors are the best!!!",
            petPic: "josephine-menge-h7VBJRBcieM-unsplash",
            petAge: 3,
            personalityTraits: "Outgoing",
            breed: "Aussie",
            petGender: "Female",
            favActivity: "Running"
        },
        {
            petName: "Mimi",
            petBio: "I just want my snuggie, mate.",
            petPic: "karsten-winegeart-Qb7D1xw28Co-unsplash",
            petAge: 9,
            personalityTraits: "Outgoing",
            breed: "Mini poodle",
            petGender: "Female",
            favActivity: "Movies and snugs"
        },
        {
            petName: "French Fry",
            petBio: "i like slow walks where I can see cool stuff",
            petPic: "karsten-winegeart-T7Hxkhv23yY-unsplash",
            petAge: 3,
            personalityTraits: "Outgoing",
            breed: "Frenchie",
            petGender: "Male",
            favActivity: "Scratches"
        },
        {
            petName: "Apollo",
            petBio: "I freaking love the snow and the park. Lets do this!",
            petPic: "kieran-white-NKN25UfGfkQ-unsplash (1)",
            petAge: 4,
            personalityTraits: "Outgoing",
            breed: "Malamute",
            petGender: "Male",
            favActivity: "Chasing squirrels"
        },
        {
            petName: "Samson",
            petBio: "I do the cutest but wiggles and I find friends in everyone",
            petPic: "michael-g-2dMIlY1rHT4-unsplash",
            petAge: 6,
            personalityTraits: "Outgoing",
            breed: "Staffie",
            petGender: "Male",
            favActivity: "Snuggles"
        },
        {
            petName: "Dollie",
            petBio: "I'm a bit nervous around new dogs, but I really want to play.",
            petPic: "michael-g-lDCkfCoiF9c-unsplash",
            petAge: 1,
            personalityTraits: "Outgoing",
            breed: "Staffie",
            petGender: "Female",
            favActivity: "Tug of War"
        },
        {
            petName: "Romeo",
            petBio: "I get a little excited and lick everyone.",
            petPic: "michael-g-OUFMDLeuTnI-unsplash",
            petAge: 3,
            personalityTraits: "Outgoing",
            breed: "Bully",
            petGender: "Male",
            favActivity: "Snuggles"
        },
        {
            petName: "Kesha",
            petBio: "I really love dock jumping!",
            petPic: "minnie-zhou-E_YBgxDRVbM-unsplash",
            petAge: 6,
            personalityTraits: "Outgoing",
            breed: "Border Collie",
            petGender: "Female",
            favActivity: "Swimming"
        },
        {
            petName: "Momo",
            petBio: "OH EM GEEE!!! Are we gonna go to the groomer together???",
            petPic: "mohamad-alnaimi-lHJ9K-tZ3cM-unsplash",
            petAge: 2,
            personalityTraits: "Outgoing",
            breed: "Pomeranian",
            petGender: "Female",
            favActivity: "Looking my best!"
        },
        {
            petName: "Milo",
            petBio: "Best days are Sundays.",
            petPic: "mollie-sivaram-P2igqqmbiKE-unsplash",
            petAge: 3,
            personalityTraits: "Outgoing",
            breed: "Dachshund",
            petGender: "Male",
            favActivity: "Chasing bunnies"
        },
        {
            petName: "Percy",
            petBio: "I just really like meeting new dogs and wrestling",
            petPic: "peri-stojnic-5Vr_RVPfbMI-unsplash",
            petAge: 3,
            personalityTraits: "Outgoing",
            breed: "Samoyed",
            petGender: "Female",
            favActivity: "wrestling"
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
        {
            petName: "Pirate",
            petBio: "Toys are just the coolest thing ever",
            petPic: "rafael-forseck-qVfSbJjtocI-unsplash",
            petAge: 3,
            personalityTraits: "Outgoing",
            breed: "Dalmatian",
            petGender: "Male",
            favActivity: "Ripping toys"
        },
        {
            petName: "Bex",
            petBio: "There is nothing better than rolling in the grass!",
            petPic: "ralu-gal-G8cB8hY3yvU-unsplash",
            petAge: 6,
            personalityTraits: "Outgoing",
            breed: "Dachshund",
            petGender: "Male",
            favActivity: "Rolling"
        },
        {
            petName: "Ross",
            petBio: "I'm a good boy. I love playing with new friends.",
            petPic: "richard-brutyo-Sg3XwuEpybU-unsplash",
            petAge: 3,
            personalityTraits: "Outgoing",
            breed: "Golden Retriever",
            petGender: "Male",
            favActivity: "Playing ball."
        },
        {
            petName: "Suki",
            petBio: "I prefer going on long hikes.",
            petPic: "tahoe-mr58GkEDKMI-unsplash.jpg",
            petAge: 5,
            personalityTraits: "Outgoing",
            breed: "Huskie mix",
            petGender: "Female",
            favActivity: "Hiking"
        },
        {
            petName: "Sabora",
            petBio: "Running with my person brings me joy.",
            petPic: "tahoe-VZukgvBgSPg-unsplash",
            petAge: 6,
            personalityTraits: "Outgoing",
            breed: "Corgi",
            petGender: "Female",
            favActivity: "Snuggles"
        },
        {
            petName: "Tom",
            petBio: "I really want to make new friends!",
            petPic: "taylor-kopel-WX4i1Jq_o0Y-unsplash",
            petAge: '<1',
            personalityTraits: "Outgoing",
            breed: "Yellow lab",
            petGender: "Male",
            favActivity: "Tug"
        }
        ,
        {
            petName: "Fury",
            petBio: "Ball herding is my thing! Wanna race?",
            petPic: "yoav-hornung-ulGabVbgA6s-unsplash",
            petAge: '4',
            personalityTraits: "Outgoing",
            breed: "Border Collie",
            petGender: "Male",
            favActivity: "Herding"
        }
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