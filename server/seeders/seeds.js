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
            petAge: "3",
            personalityTraits: "Outgoing",
            breed: "Corgi",
            petGender: "Female",
            favActivity: "Snuggles",
            username: "CharlieIsCool"
        },
        {
            petName: "Tom",
            petBio: "I am floof",
            petPic: "alvan-nee-egnAFVYS_h0-unsplash.jpg",
            petAge: "6",
            personalityTraits: "Outgoing",
            breed: "Corgi",
            petGender: "Male",
            username: "Katlyn85",
            favActivity: "Fetch"
        },
        {
            petName: "Andre",
            username: "Lessie_Kautzer61",
            petBio: "Beach days are best days",
            petPic: "andre-tan-ZQ_0jk66-1E-unsplash.jpg",
            petAge: "2",
            personalityTraits: "Outgoing",
            breed: "Shiba",
            petGender: "Male",
            favActivity: "Beach days"
        },
        {
            petName: "Pebble",
            username: "Elton_Heaney",
            petBio: "Are you also amazing? I suppose we could be friends",
            petPic: "alvan-nee-egnAFVYS_h0-unsplash.jpg",
            petAge: "6",
            personalityTraits: "Outgoing",
            breed: "Pug",
            petGender: "Male",
            favActivity: "Fetch"
        },
        {
            petName: "Henley",
            username: "Josue67",
            petBio: "I'm gonna need a minute to brush my hair.",
            petPic: "herbert-goetsch-Wpixq0Z1dfo-unsplash",
            petAge: "5",
            personalityTraits: "Outgoing",
            breed: "Long Hair Chi",
            petGender: "Female",
            favActivity: "Brushing"
        },
        {
            petName: "Howie",
            username: "Jaron98",
            petBio: "I am just want friends",
            petPic: "howie-r-CjI_2QX7hvU-unsplash",
            petAge: "6",
            personalityTraits: "Outgoing",
            breed: "Collie Mix",
            petGender: "Male",
            favActivity: "Fetch"
        },
        {
            petName: "Jazzy",
            username: "Berta.Schmeler15",
            petBio: "Outdoors are the best!!!",
            petPic: "josephine-menge-h7VBJRBcieM-unsplash",
            petAge: "3",
            personalityTraits: "Outgoing",
            breed: "Aussie",
            petGender: "Female",
            favActivity: "Running"
        },
        {
            petName: "Mimi",
            username: "Kaley35",
            petBio: "I just want my snuggie, mate.",
            petPic: "karsten-winegeart-Qb7D1xw28Co-unsplash",
            petAge: "9",
            personalityTraits: "Outgoing",
            breed: "Mini poodle",
            petGender: "Female",
            favActivity: "Movies and snugs"
        },
        {
            petName: "French Fry",
            username: "Bryana.Hackett",
            petBio: "i like slow walks where I can see cool stuff",
            petPic: "karsten-winegeart-T7Hxkhv23yY-unsplash",
            petAge: "3",
            personalityTraits: "Outgoing",
            breed: "Frenchie",
            petGender: "Male",
            favActivity: "Scratches"
        },
        {
            petName: "Apollo",
            username: "Madge.Feil",
            petBio: "I freaking love the snow and the park. Lets do this!",
            petPic: "kieran-white-NKN25UfGfkQ-unsplash (1)",
            petAge: "4",
            personalityTraits: "Outgoing",
            breed: "Malamute",
            petGender: "Male",
            favActivity: "Chasing squirrels"
        },
        {
            petName: "Samson",
            username: "Vladimir_Block",
            petBio: "I do the cutest but wiggles and I find friends in everyone",
            petPic: "michael-g-2dMIlY1rHT4-unsplash",
            petAge: "6",
            personalityTraits: "Outgoing",
            breed: "Staffie",
            petGender: "Male",
            favActivity: "Snuggles"
        },
        {
            petName: "Dollie",
            username: "Mona_Hilll",
            petBio: "I'm a bit nervous around new dogs, but I really want to play.",
            petPic: "michael-g-lDCkfCoiF9c-unsplash",
            petAge: "1",
            personalityTraits: "Outgoing",
            breed: "Staffie",
            petGender: "Female",
            favActivity: "Tug of War"
        },
        {
            petName: "Romeo",
            username: "Alice_Simonis",
            petBio: "I get a little excited and lick everyone.",
            petPic: "michael-g-OUFMDLeuTnI-unsplash",
            petAge: "3",
            personalityTraits: "Outgoing",
            breed: "Bully",
            petGender: "Male",
            favActivity: "Snuggles"
        },
        {
            petName: "Kesha",
            username: "Tyree17",
            petBio: "I really love dock jumping!",
            petPic: "minnie-zhou-E_YBgxDRVbM-unsplash",
            petAge: "6",
            personalityTraits: "Outgoing",
            breed: "Border Collie",
            petGender: "Female",
            favActivity: "Swimming"
        },
        {
            petName: "Momo",
            username: "Eldridge42",
            petBio: "OH EM GEEE!!! Are we gonna go to the groomer together???",
            petPic: "mohamad-alnaimi-lHJ9K-tZ3cM-unsplash",
            petAge: "2",
            personalityTraits: "Outgoing",
            breed: "Pomeranian",
            petGender: "Female",
            favActivity: "Looking my best!"
        },
        {
            petName: "Milo",
            username: "Natasha_Beier59",
            petBio: "Best days are Sundays.",
            petPic: "mollie-sivaram-P2igqqmbiKE-unsplash",
            petAge: "3",
            personalityTraits: "Outgoing",
            breed: "Dachshund",
            petGender: "Male",
            favActivity: "Chasing bunnies"
        },
        {
            petName: "Percy",
            username: "Kory_Roob",
            petBio: "I just really like meeting new dogs and wrestling",
            petPic: "peri-stojnic-5Vr_RVPfbMI-unsplash",
            petAge: "3",
            personalityTraits: "Outgoing",
            breed: "Samoyed",
            petGender: "Female",
            favActivity: "wrestling"
        },
        {
            petName: "Pirate",
            username: "Gianni_Kiehn14",
            petBio: "Toys are just the coolest thing ever",
            petPic: "rafael-forseck-qVfSbJjtocI-unsplash",
            petAge: "3",
            personalityTraits: "Outgoing",
            breed: "Dalmatian",
            petGender: "Male",
            favActivity: "Ripping toys"
        },
        {
            petName: "Bex",
            username: "Damion87",
            petBio: "There is nothing better than rolling in the grass!",
            petPic: "ralu-gal-G8cB8hY3yvU-unsplash",
            petAge: "6",
            personalityTraits: "Outgoing",
            breed: "Dachshund",
            petGender: "Male",
            favActivity: "Rolling"
        },
        {
            petName: "Ross",
            username: "Chanel_Windler",
            petBio: "I'm a good boy. I love playing with new friends.",
            petPic: "richard-brutyo-Sg3XwuEpybU-unsplash",
            petAge: "3",
            personalityTraits: "Outgoing",
            breed: "Golden Retriever",
            petGender: "Male",
            favActivity: "Playing ball."
        },
        {
            petName: "Suki",
            username: "Jody.Eichmann",
            petBio: "I prefer going on long hikes.",
            petPic: "tahoe-mr58GkEDKMI-unsplash.jpg",
            petAge: "5",
            personalityTraits: "Outgoing",
            breed: "Huskie mix",
            petGender: "Female",
            favActivity: "Hiking"
        },
        {
            petName: "Sabora",
            username: "Delbert.Cruickshank5",
            petBio: "Running with my person brings me joy.",
            petPic: "tahoe-VZukgvBgSPg-unsplash",
            petAge: "6",
            personalityTraits: "Outgoing",
            breed: "Corgi",
            petGender: "Female",
            favActivity: "Snuggles"
        },
        {
            petName: "Flax",
            username: "Reggie_Lang",
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
            username: "Meagan_Cummings36",
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
    await User.create( 
        
        //User data
        {
            username: "CharlieIsCool",
            email: "charliehouston912@gmail.com",
            password: "1234pa$$",
            friends: [],
            pets:[]
        },
        {
            username: "Katlyn85",
            email: "Katlyn8550@gmail.com",
            password: "otK5YtXpcalD1cm",
            friends: [],
            pets:[]
        },
        {
            username: "Lessie_Kautzer61",
            email: "Lessie_Kautzer61_Walker81@hotmail.com",
            password: "AP3EUTRZoxzsiHn",
            friends: [],
            pets:[]
        },
        {
            username: "Elton_Heaney",
            email: "Elton_Heaney.Kemmer6@yahoo.com",
            password: "3dVgRgSQmrGLaQE",
            friends: [],
            pets:[]
        },
        {
            username: "Josue67",
            email: "Josue6785@yahoo.com",
            password: "BNsmR75BHDH4na3",
            friends: [],
            pets:[]
        },
        {
            username: "Jaron98",
            email: "Jaron98_Will72@hotmail.com",
            password: "vNVT_y10PBpVaUV",
            friends: [],
            pets:[]
        },
        {
            username: "Berta.Schmeler15",
            email: "Berta.Schmeler15_Hackett93@hotmail.com",
            password: "_cbdQwR8Vjn4wBk",
            friends: [],
            pets:[]
        },
        {
            username: "Kaley35",
            email: "Kaley35_Carroll@yahoo.com",
            password: "OodrBk3d1t5Ddhb",
            friends: [],
            pets:[]
        },
        {
            username: "Bryana.Hackett",
            email: "Bryana.Hackett94@yahoo.com",
            password: "WZ3brF0TKThmwU8",
            friends: [],
            pets:[]
        },
        {
            username: "Madge.Feil",
            email: "Madge.Feil_Fadel@yahoo.com",
            password: "oKEuEU4FnlO4Efs",
            friends: [],
            pets:[]
        },
        {
            username: "Vladimir_Block",
            email: "Vladimir_Block_Feil41@hotmail.com",
            password: "q9AgUcyAQPmK5jJ",
            friends: [],
            pets:[]
        },
        {
            username: "Mona_Hilll",
            email: "Mona_Hilll_Zemlak@hotmail.com",
            password: "GkOySb7J56E0Hpz",
            friends: [],
            pets:[]
        },
        {
            username: "Alice_Simonis",
            email: "Alice_Simonis8@gmail.com",
            password: "ElVXqVGn9Tm_L38",
            friends: [],
            pets:[]
        },
        {
            username: "Tyree17",
            email: "Tyree17_Tillman@yahoo.com",
            password: "TLhhBXjOVGKWP43",
            friends: [],
            pets:[]
        },
        {
            username: "Eldridge42",
            email: "Eldridge4262@yahoo.com",
            password: "dcWBuw3ugFODuNy",
            friends: [],
            pets:[]
        },
        {
            username: "Natasha_Beier59",
            email: "Natasha_Beier5944@hotmail.com",
            password: "F5ikR9RByGAc0NQ",
            friends: [],
            pets:[]
        },
        {
            username: "Kory_Roob",
            email: "Kory_Roob.Kuhic9@yahoo.com",
            password: "tJzeZZghPa_trcS",
            friends: [],
            pets:[]
        },
        {
            username: "Gianni_Kiehn14",
            email: "Gianni_Kiehn14_Weissnat@gmail.com",
            password: "QWkEC6Ymn4AuZez",
            friends: [],
            pets:[]
        },
        {
            username: "Damion87",
            email: "Damion87.Wuckert@yahoo.com",
            password: "7tcyz7bT2N_iJCw",
            friends: [],
            pets:[]
        },
        {
            username: "Chanel_Windler",
            email: "Chanel_Windler.Zemlak@gmail.com",
            password: "zCIDszgLNEfQmfw",
            friends: [],
            pets:[]
        },
        {
            username: "Jody.Eichmann",
            email: "Jody.Eichmann_Roberts19@hotmail.com",
            password: "CG0IfJRxeSZSWyp",
            friends: [],
            pets:[]
        },
        {
            username: "Delbert.Cruickshank5",
            email: "Delbert.Cruickshank5.Bradtke@gmail.com",
            password: "7iP1wJfqcEe_pzC",
            friends: [],
            pets:[]
        },
        {
            username: "Reggie_Lang",
            email: "Reggie_Lang_Dicki@gmail.com",
            password: "1o6Y0JCF14gUa8k",
            friends: [],
            pets:[]
        },
        {
            username: "Meagan_Cummings36",
            email: "Meagan_Cummings36_Kautzer@gmail.com",
            password: "8O9Bf9KVfab3ESE",
            friends: [],
            pets:[]
        },
     );
    console.log( 'users seeded' );

    process.exit();
}
);