angular.module('starter.services', [])

    .service('Data', function () {
        var recipes = [{
                "image": "http://forkgasm.com/images/carbonara.jpg",
                "name": "Turnip Noodle Carbonara",
                "id": "turnip-carbonara",
                "description": "A healthier version of the classic dish that tastes just as good!"
            },
            {
                "image": "http://forkgasm.com/images/40813912_2213541505597183_7740637805202109577_n.jpg",
                "name": "Spiced lamb chops with mint-mango sauce",
                "id": "spiced-lamb-chops-with-mint-mango-sauce",
                "description": "Delicious, refreshing, and super quick to make!"
            },
            {
                "name": "Papoutsakia",
                "id": "papoutsakia",
                "description": "A traditional Greek dish that tastes very similar to moussaka, but is much quicker to cook. Fun fact: Papoutsakia in Greek means \"little shoes\" and a portion usually has two. However, when cooking with large American eggplants, you'll likely find that one per portion is enough.",
                "image": "http://forkgasm.com/images/6410429C-D04A-4624-9026-715C0A64A005.jpeg"
            },
            {
                "image": "http://forkgasm.com/images/gambas.png",
                "name": "Gambas al Ajillo",
                "id": "gambas-al-ajillo",
                "description": "Quick and garlicky!",
            },
            {
                "name": "Shakshuka",
                "id": "shakshuka",
                "description": "Breakfast of champions (one of them)",
                "image": "http://forkgasm.com/images/shakshuka.jpg"
            },
            {
                "name": "Real Caesar Salad",
                "id": "real-caesar-salad",
                "description": "Based on the original 1920's Italian-American table-side recipe",
                "image": "http://salad.com/salad.jpg",
            },
            {
                "image": "http://forkgasm.com/images/mushrooms.jpg",
                "name": "Garlic mushrooms a la crème with lardons and green pepper",
                "id": "garlic-mushrooms-a-la-creme-with-lardons-and-green-pepper",
                "description": "Not the most photogenic dish, but really easy, quick and delicious!",
            },
            {
                "image": "http://forkgasm.com/images/chicken-liver-pate.jpg",
                "name": "Chicken Liver Pâté",
                "id": "chicken-liver-pate",
                "description": "Rich and creamy, delicious on bread or even on its own",
            }
        ]

    });