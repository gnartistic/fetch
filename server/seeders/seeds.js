// const faker = require('faker');
const userSeeds = require( './userSeed.json' );
const db = require( '../config/connection' );
const { User } = require( '../models' );

db.once( 'open', async () =>
{
    await User.deleteMany();
    await User.create( 
        
        //User data
        {
            username: "CharlieIsCool",
            email: "charliehouston912@gmail.com",
            password: "1234pa$$",
            friends: [],
            age:"24",
            gender: "Man",
            pets:[{
                petName: "Rose",
                petBio: "You're gonna love me",
                petPic: "ivana-la-61jg6zviI7I-unsplash.jpg",
                petAge: "3",
                personalityTraits: "Outgoing",
                breed: "Corgi",
                petGender: "Female",
                favActivity: "Snuggles",
                username: "CharlieIsCool"
            }]
        },
        {
            username: "Katlyn85",
            email: "Katlyn8550@gmail.com",
            password: "otK5YtXpcalD1cm",
            friends: [],
            age:"24",
            gender: "Woman",
            pets:[{
                petName: "Tom",
                petBio: "I am floof",
                petPic: "alvan-nee-egnAFVYS_h0-unsplash.jpg",
                petAge: "6",
                personalityTraits: "Outgoing",
                breed: "Corgi",
                petGender: "Male",
                username: "Katlyn85",
                favActivity: "Fetch"
            }]
        },
        {
            username: "Lessie_Kautzer61",
            email: "Lessie_Kautzer61_Walker81@hotmail.com",
            password: "AP3EUTRZoxzsiHn",
            age:"24",
            gender: "Woman",
            friends: [],
            pets:[{
                petName: "Andre",
                username: "Lessie_Kautzer61",
                petBio: "Beach days are best days",
                petPic: "andre-tan-ZQ_0jk66-1E-unsplash.jpg",
                petAge: "2",
                personalityTraits: "Outgoing",
                breed: "Shiba",
                petGender: "Male",
                favActivity: "Beach days"
            }]
        },
        {
            username: "Elton_Heaney",
            email: "Elton_Heaney.Kemmer6@yahoo.com",
            password: "3dVgRgSQmrGLaQE",
            friends: [],
            age:"24",
            gender: "Man",
            pets:[{
                petName: "Pebble",
                username: "Elton_Heaney",
                petBio: "Are you also amazing? I suppose we could be friends",
                petPic: "alvan-nee-egnAFVYS_h0-unsplash.jpg",
                petAge: "6",
                personalityTraits: "Outgoing",
                breed: "Pug",
                petGender: "Male",
                favActivity: "Fetch"
            }]
        },
        {
            username: "Josue67",
            email: "Josue6785@yahoo.com",
            password: "BNsmR75BHDH4na3",
            friends: [],
            age:"24",
            gender: "Man",
            pets:[{
                petName: "Henley",
                username: "Josue67",
                petBio: "I'm gonna need a minute to brush my hair.",
                petPic: "herbert-goetsch-Wpixq0Z1dfo-unsplash",
                petAge: "5",
                personalityTraits: "Outgoing",
                breed: "Long Hair Chi",
                petGender: "Female",
                favActivity: "Brushing"
            }]
        },
        {
            username: "Jaron98",
            email: "Jaron98_Will72@hotmail.com",
            password: "vNVT_y10PBpVaUV",
            friends: [],
            age:"24",
            gender: "Man",
            pets:[{
                petName: "Howie",
                username: "Jaron98",
                petBio: "I am just want friends",
                petPic: "howie-r-CjI_2QX7hvU-unsplash",
                petAge: "6",
                personalityTraits: "Outgoing",
                breed: "Collie Mix",
                petGender: "Male",
                favActivity: "Fetch"
            }]
        },
        {
            username: "Berta.Schmeler15",
            email: "Berta.Schmeler15_Hackett93@hotmail.com",
            password: "_cbdQwR8Vjn4wBk",
            friends: [],
            age:"24",
            gender: "Woman",
            pets:[ {
                petName: "Jazzy",
                username: "Berta.Schmeler15",
                petBio: "Outdoors are the best!!!",
                petPic: "josephine-menge-h7VBJRBcieM-unsplash",
                petAge: "3",
                personalityTraits: "Outgoing",
                breed: "Aussie",
                petGender: "Female",
                favActivity: "Running"
            }]
        },
        {
            username: "Kaley35",
            email: "Kaley35_Carroll@yahoo.com",
            password: "OodrBk3d1t5Ddhb",
            friends: [],
            age:"24",
            gender: "Woman",
            pets:[{
                petName: "Mimi",
                username: "Kaley35",
                petBio: "I just want my snuggie, mate.",
                petPic: "karsten-winegeart-Qb7D1xw28Co-unsplash",
                petAge: "9",
                personalityTraits: "Outgoing",
                breed: "Mini poodle",
                petGender: "Female",
                favActivity: "Movies and snugs"
            }]
        },
        {
            username: "Bryana.Hackett",
            email: "Bryana.Hackett94@yahoo.com",
            password: "WZ3brF0TKThmwU8",
            friends: [],
            age:"24",
            gender: "Woman",
            pets:[{
                petName: "French Fry",
                username: "Bryana.Hackett",
                petBio: "i like slow walks where I can see cool stuff",
                petPic: "karsten-winegeart-T7Hxkhv23yY-unsplash",
                petAge: "3",
                personalityTraits: "Outgoing",
                breed: "Frenchie",
                petGender: "Male",
                favActivity: "Scratches"
            }]
        },
        {
            username: "Madge.Feil",
            email: "Madge.Feil_Fadel@yahoo.com",
            password: "oKEuEU4FnlO4Efs",
            friends: [],
            age:"24",
            gender: "Woman",
            pets:[{
                petName: "Apollo",
                username: "Madge.Feil",
                petBio: "I freaking love the snow and the park. Lets do this!",
                petPic: "kieran-white-NKN25UfGfkQ-unsplash (1)",
                petAge: "4",
                personalityTraits: "Outgoing",
                breed: "Malamute",
                petGender: "Male",
                favActivity: "Chasing squirrels"
            }]
        },
        {
            username: "Vladimir_Block",
            email: "Vladimir_Block_Feil41@hotmail.com",
            password: "q9AgUcyAQPmK5jJ",
            friends: [],
            age:"24",
            gender: "Man",
            pets:[{
                petName: "Samson",
                username: "Vladimir_Block",
                petBio: "I do the cutest but wiggles and I find friends in everyone",
                petPic: "michael-g-2dMIlY1rHT4-unsplash",
                petAge: "6",
                personalityTraits: "Outgoing",
                breed: "Staffie",
                petGender: "Male",
                favActivity: "Snuggles"
            }]
        },
        {
            username: "Mona_Hilll",
            email: "Mona_Hilll_Zemlak@hotmail.com",
            password: "GkOySb7J56E0Hpz",
            friends: [],
            age:"24",
            gender: "Woman",
            pets:[{
                petName: "Dollie",
                username: "Mona_Hilll",
                petBio: "I'm a bit nervous around new dogs, but I really want to play.",
                petPic: "michael-g-lDCkfCoiF9c-unsplash",
                petAge: "1",
                personalityTraits: "Outgoing",
                breed: "Staffie",
                petGender: "Female",
                favActivity: "Tug of War"
            }]
        },
        {
            username: "Alice_Simonis",
            email: "Alice_Simonis8@gmail.com",
            password: "ElVXqVGn9Tm_L38",
            friends: [],
            age:"24",
            gender: "Woman",
            pets:[{
                petName: "Romeo",
                username: "Alice_Simonis",
                petBio: "I get a little excited and lick everyone.",
                petPic: "michael-g-OUFMDLeuTnI-unsplash",
                petAge: "3",
                personalityTraits: "Outgoing",
                breed: "Bully",
                petGender: "Male",
                favActivity: "Snuggles"
            }]
        },
        {
            username: "Tyree17",
            email: "Tyree17_Tillman@yahoo.com",
            password: "TLhhBXjOVGKWP43",
            friends: [],
            age:"24",
            gender: "Man",
            pets:[{
                petName: "Kesha",
                username: "Tyree17",
                petBio: "I really love dock jumping!",
                petPic: "minnie-zhou-E_YBgxDRVbM-unsplash",
                petAge: "6",
                personalityTraits: "Outgoing",
                breed: "Border Collie",
                petGender: "Female",
                favActivity: "Swimming"
            }]
        },
        {
            username: "Eldridge42",
            email: "Eldridge4262@yahoo.com",
            password: "dcWBuw3ugFODuNy",
            friends: [],
            age:"24",
            gender: "Man",
            pets:[{
                petName: "Momo",
                username: "Eldridge42",
                petBio: "OH EM GEEE!!! Are we gonna go to the groomer together???",
                petPic: "mohamad-alnaimi-lHJ9K-tZ3cM-unsplash",
                petAge: "2",
                personalityTraits: "Outgoing",
                breed: "Pomeranian",
                petGender: "Female",
                favActivity: "Looking my best!"
            }]
        },
        {
            username: "Natasha_Beier59",
            email: "Natasha_Beier5944@hotmail.com",
            password: "F5ikR9RByGAc0NQ",
            friends: [],
            age:"24",
            gender: "Woman",
            pets:[{
                petName: "Milo",
                username: "Natasha_Beier59",
                petBio: "Best days are Sundays.",
                petPic: "mollie-sivaram-P2igqqmbiKE-unsplash",
                petAge: "3",
                personalityTraits: "Outgoing",
                breed: "Dachshund",
                petGender: "Male",
                favActivity: "Chasing bunnies"
            }]
        },
        {
            username: "Kory_Roob",
            email: "Kory_Roob.Kuhic9@yahoo.com",
            password: "tJzeZZghPa_trcS",
            friends: [],
            age:"24",
            gender: "Man",
            pets:[{
                petName: "Percy",
                username: "Kory_Roob",
                petBio: "I just really like meeting new dogs and wrestling",
                petPic: "peri-stojnic-5Vr_RVPfbMI-unsplash",
                petAge: "3",
                personalityTraits: "Outgoing",
                breed: "Samoyed",
                petGender: "Female",
                favActivity: "wrestling"
            }]
        },
        {
            username: "Gianni_Kiehn14",
            email: "Gianni_Kiehn14_Weissnat@gmail.com",
            password: "QWkEC6Ymn4AuZez",
            friends: [],
            age:"24",
            gender: "Man",
            pets:[{
                petName: "Pirate",
                username: "Gianni_Kiehn14",
                petBio: "Toys are just the coolest thing ever",
                petPic: "rafael-forseck-qVfSbJjtocI-unsplash",
                petAge: "3",
                personalityTraits: "Outgoing",
                breed: "Dalmatian",
                petGender: "Male",
                favActivity: "Ripping toys"
            }]
        },
        {
            username: "Damion87",
            email: "Damion87.Wuckert@yahoo.com",
            password: "7tcyz7bT2N_iJCw",
            friends: [],
            age:"24",
            gender: "Man",
            pets:[{
                petName: "Bex",
                username: "Damion87",
                petBio: "There is nothing better than rolling in the grass!",
                petPic: "ralu-gal-G8cB8hY3yvU-unsplash",
                petAge: "6",
                personalityTraits: "Outgoing",
                breed: "Dachshund",
                petGender: "Male",
                favActivity: "Rolling"
            }]
        },
        {
            username: "Chanel_Windler",
            email: "Chanel_Windler.Zemlak@gmail.com",
            password: "zCIDszgLNEfQmfw",
            friends: [],
            age:"24",
            gender: "Woman",
            pets:[{
                petName: "Ross",
                username: "Chanel_Windler",
                petBio: "I'm a good boy. I love playing with new friends.",
                petPic: "richard-brutyo-Sg3XwuEpybU-unsplash",
                petAge: "3",
                personalityTraits: "Outgoing",
                breed: "Golden Retriever",
                petGender: "Male",
                favActivity: "Playing ball."
            }]
        },
        {
            username: "Jody.Eichmann",
            email: "Jody.Eichmann_Roberts19@hotmail.com",
            password: "CG0IfJRxeSZSWyp",
            friends: [],
            age:"24",
            gender: "Woman",
            pets:[{
                petName: "Suki",
                username: "Jody.Eichmann",
                petBio: "I prefer going on long hikes.",
                petPic: "tahoe-mr58GkEDKMI-unsplash.jpg",
                petAge: "5",
                personalityTraits: "Outgoing",
                breed: "Huskie mix",
                petGender: "Female",
                favActivity: "Hiking"
            }]
        },
        {
            username: "Delbert.Cruickshank5",
            email: "Delbert.Cruickshank5.Bradtke@gmail.com",
            password: "7iP1wJfqcEe_pzC",
            friends: [],
            age:"24",
            gender: "Man",
            pets:[{
                petName: "Sabora",
                username: "Delbert.Cruickshank5",
                petBio: "Running with my person brings me joy.",
                petPic: "tahoe-VZukgvBgSPg-unsplash",
                petAge: "6",
                personalityTraits: "Outgoing",
                breed: "Corgi",
                petGender: "Female",
                favActivity: "Snuggles"
            }]
        },
        {
            username: "Reggie_Lang",
            email: "Reggie_Lang_Dicki@gmail.com",
            password: "1o6Y0JCF14gUa8k",
            friends: [],
            age:"24",
            gender: "Man",
            pets:[{
                petName: "Flax",
                username: "Reggie_Lang",
                petBio: "I really want to make new friends!",
                petPic: "taylor-kopel-WX4i1Jq_o0Y-unsplash",
                petAge: '<1',
                personalityTraits: "Outgoing",
                breed: "Yellow lab",
                petGender: "Male",
                favActivity: "Tug"
            }]
        },
        {
            username: "Meagan_Cummings36",
            email: "Meagan_Cummings36_Kautzer@gmail.com",
            password: "8O9Bf9KVfab3ESE",
            friends: [],
            age:"24",
            gender: "Woman",
            pets:[{
                petName: "Fury",
                username: "Meagan_Cummings36",
                petBio: "Ball herding is my thing! Wanna race?",
                petPic: "yoav-hornung-ulGabVbgA6s-unsplash",
                petAge: '4',
                personalityTraits: "Outgoing",
                breed: "Border Collie",
                petGender: "Male",
                favActivity: "Herding"
            }]
        },
     );
    console.log( 'users seeded' );

    process.exit();
}
);