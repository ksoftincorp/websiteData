

const crypto = require("crypto")
const painintoztsandwinches = {
    id: crypto.randomBytes(4).toString('hex'),

    subMenu: "painin tozt sandwinches",
    backgroundColor: " ",
    color: "",
    description: '',
    modifiers: [
        {
            modifierId: 1,
            title: 'choose a size',
            indexPosition: 1,
            noOfSelectionRequired: 50,
            required: true,
         
            options: [
               
                { id: 1, item_name: 'Add Avocado', dineInPrice: 0, takeOutPrice: 0, active: true, checked: false },
                { id: 2, item_name: 'Add Bacon', dineInPrice: 0, takeOutPrice: 0, active: true, checked: false },
                { id: 3, item_name: 'Add Cheese', dineInPrice: 0, takeOutPrice: 0, active: true, checked: false },
                { id: 4, item_name: 'Add Guacamole', dineInPrice: 0, takeOutPrice: 0, active: true, checked: false },
                { id: 5, item_name: 'Add Jalapeno', dineInPrice: 0, takeOutPrice: 0, active: true, checked: false },
                { id: 6, item_name: 'Add Meat', dineInPrice: 0, takeOutPrice: 0, active: true, checked: false },
                { id: 71, item_name: 'Add Mushrooms', dineInPrice: 0, takeOutPrice: 0, active: true, checked: false },
                { id: 8, item_name: 'Add Sweet Peppers', dineInPrice: 0, takeOutPrice: 0, active: true, checked: false },
                { id: 9, item_name: 'Add Tomato', dineInPrice: 0, takeOutPrice: 0, active: true, checked: false },

            ]
        },
          {
            modifierId: 2,
            title: 'Ads On',
            indexPosition: 1,
            noOfSelectionRequired: 50,
            required: false,
         
            options: [
               
                { id: 1, item_name: 'Add Avocado', dineInPrice: 0, takeOutPrice: 0, active: true, checked: false },
                { id: 2, item_name: 'Add Bacon', dineInPrice: 0, takeOutPrice: 0, active: true, checked: false },
                { id: 3, item_name: 'Add Cheese', dineInPrice: 0, takeOutPrice: 0, active: true, checked: false },
                { id: 4, item_name: 'Add Guacamole', dineInPrice: 0, takeOutPrice: 0, active: true, checked: false },
                { id: 5, item_name: 'Add Jalapeno', dineInPrice: 0, takeOutPrice: 0, active: true, checked: false },
                { id: 6, item_name: 'Add Meat', dineInPrice: 0, takeOutPrice: 0, active: true, checked: false },
                { id: 71, item_name: 'Add Mushrooms', dineInPrice: 0, takeOutPrice: 0, active: true, checked: false },
                { id: 8, item_name: 'Add Sweet Peppers', dineInPrice: 0, takeOutPrice: 0, active: true, checked: false },
                { id: 9, item_name: 'Add Tomato', dineInPrice: 0, takeOutPrice: 0, active: true, checked: false },

            ]
        },


    ],
    submenu_items: [
        {
            id: crypto.randomBytes(4).toString('hex'),
            item_name: "1. Grilled Cheese Tozt",

            description: "Melted American cheese, tomato.",
            image: "",
            active: true,
            dineInPrice: 9.99,
            takeOutPrice: 9.99,
            spicyLevel: 1,
            vegan: false,

            indexPosition: 1,
            linkedModifiers: [
                { modifierId: 1, title: "Ads On" }
            ]

        },
        {
            id: crypto.randomBytes(4).toString('hex'),
            item_name: "2. Grilled Ham Tozt",

            description: "Sliced ham, melted American cheese.",
            image: "",
            active: true,
            dineInPrice: 9.99,
            takeOutPrice: 9.99,
            spicyLevel: 1,
            vegan: false,

            indexPosition: 1,
            linkedModifiers: [
                { modifierId: 1, title: "Ads On" }
            ]

        },
        {
            id: crypto.randomBytes(4).toString('hex'),
            item_name: "3. Tuna Melted Tozt",

            description: "Tuna salad, melted American cheese.",
            image: "",
            active: true,
            dineInPrice: 9.99,
            takeOutPrice: 9.99,
            spicyLevel: 1,
            vegan: false,

            indexPosition: 1,
            linkedModifiers: [
                { modifierId: 1, title: "Ads On" }
            ]

        },
        {
            id: crypto.randomBytes(4).toString('hex'),
            item_name: "4. Classic Chicken Tozt",

            description: "Grilled chicken, American cheese, lettuce and tomato.",
            image: "",
            active: true,
            dineInPrice: 9.99,
            takeOutPrice: 9.99,
            spicyLevel: 1,
            vegan: false,

            indexPosition: 1,
            linkedModifiers: [
                { modifierId: 1, title: "Ads On" }
            ]

        },
        {
            id: crypto.randomBytes(4).toString('hex'),
            item_name: "5. BLT Tozt",

            description: "Crispy bacon, lettuce, tomato and mayo.",
            image: "",
            active: true,
            dineInPrice: 9.99,
            takeOutPrice: 9.99,
            spicyLevel: 1,
            vegan: false,

            indexPosition: 1,
            linkedModifiers: [
                { modifierId: 1, title: "Ads On" }
            ]

        },
        {
            id: crypto.randomBytes(4).toString('hex'),
            item_name: "6. Turkey Tozt",

            description: "Breast turkey, Swiss cheese, tomato, mayo.",
            image: "",
            active: true,
            dineInPrice: 9.99,
            takeOutPrice: 9.99,
            spicyLevel: 1,
            vegan: false,

            indexPosition: 1,
            linkedModifiers: [
                { modifierId: 1, title: "Ads On" }
            ]

        },
        {
            id: crypto.randomBytes(4).toString('hex'),
            item_name: "7. Honey Tozt",

            description: "Grilled chicken, American cheese, tomato, french fries, honey mustard.",
            image: "",
            active: true,
            dineInPrice: 9.99,
            takeOutPrice: 9.99,
            spicyLevel: 1,
            vegan: false,

            indexPosition: 1,
            linkedModifiers: [
                { modifierId: 1, title: "Ads On" }
            ]

        },
        {
            id: crypto.randomBytes(4).toString('hex'),
            item_name: "8. Cubano Tozt",

            description: "Roasted pork, sliced ham, Swiss cheese, pickle, mustard.",
            image: "",
            active: true,
            dineInPrice: 9.99,
            takeOutPrice: 9.99,
            spicyLevel: 1,
            vegan: false,

            indexPosition: 1,
            linkedModifiers: [
                { modifierId: 1, title: "Ads On" }
            ]

        },
        {
            id: crypto.randomBytes(4).toString('hex'),
            item_name: "9. Swiss Tozt",

            description: "Grilled chicken, sweet peppers, lettuce, Swiss cheese, mayo.",
            image: "",
            active: true,
            dineInPrice: 9.99,
            takeOutPrice: 9.99,
            spicyLevel: 1,
            vegan: false,

            indexPosition: 1,
            linkedModifiers: [
                { modifierId: 1, title: "Ads On" }
            ]

        },
        {
            id: crypto.randomBytes(4).toString('hex'),
            item_name: "10. Philly Tozt",

            description: "Steak, cheddar cheese, onions, lettuce and chipotle mayo.",
            image: "",
            active: true,
            dineInPrice: 9.99,
            takeOutPrice: 9.99,
            spicyLevel: 1,
            vegan: false,

            indexPosition: 1,
            linkedModifiers: [
                { modifierId: 1, title: "Ads On" }
            ]

        },
        {
            id: crypto.randomBytes(4).toString('hex'),
            item_name: "11. Parmesan Tozt",

            description: "Chicken cutlet, mozzarella, Parmesan cheese and marinara sauce.",
            image: "",
            active: true,
            dineInPrice: 9.99,
            takeOutPrice: 9.99,
            spicyLevel: 1,
            vegan: false,

            indexPosition: 1,
            linkedModifiers: [
                { modifierId: 1, title: "Ads On" }
            ]

        },
        {
            id: crypto.randomBytes(4).toString('hex'),
            item_name: "12. Asian Veggie Tozt",

            description: "Cucumber, avocado, jalapeno, pesto sauce, provolone, tomato and lettuce.",
            image: "",
            active: true,
            dineInPrice: 9.99,
            takeOutPrice: 9.99,
            spicyLevel: 1,
            vegan: false,

            indexPosition: 1,
            linkedModifiers: [
                { modifierId: 1, title: "Ads On" }
            ]

        },
        {
            id: crypto.randomBytes(4).toString('hex'),
            item_name: "14. Italian Tozt",

            description: "Ham, salami, pepperoni, provolone, lettuce, tomato, sweet peppers, oil and vinegar.",
            image: "",
            active: true,
            dineInPrice: 9.99,
            takeOutPrice: 9.99,
            spicyLevel: 1,
            vegan: false,

            indexPosition: 1,
            linkedModifiers: [
                { modifierId: 1, title: "Ads On" }
            ]

        },
        {
            id: crypto.randomBytes(4).toString('hex'),
            item_name: "15. Pesto Turkey Tozt",

            description: "Turkey, pepper Jack cheese, sweet peppers, lettuce and tomato.",
            image: "",
            active: true,
            dineInPrice: 9.99,
            takeOutPrice: 9.99,
            spicyLevel: 1,
            vegan: false,

            indexPosition: 1,
            linkedModifiers: [
                { modifierId: 1, title: "Ads On" }
            ]

        },
        {
            id: crypto.randomBytes(4).toString('hex'),
            item_name: "16. Cajun Chicken Tozt",

            description: "Cajun chicken, pepper Jack cheese, lettuce and pico de gallo.",
            image: "",
            active: true,
            dineInPrice: 9.99,
            takeOutPrice: 9.99,
            spicyLevel: 1,
            vegan: false,

            indexPosition: 1,
            linkedModifiers: [
                { modifierId: 1, title: "Ads On" }
            ]

        },
        {
            id: crypto.randomBytes(4).toString('hex'),
            item_name: "17. Mexican Tozt",

            description: "Crispy chicken, mozzarella cheese, pico de gallo, lettuce and chipotle sauce.",
            image: "",
            active: true,
            dineInPrice: 9.99,
            takeOutPrice: 9.99,
            spicyLevel: 1,
            vegan: false,

            indexPosition: 1,
            linkedModifiers: [
                { modifierId: 1, title: "Ads On" }
            ]

        },
        {
            id: crypto.randomBytes(4).toString('hex'),
            item_name: "18. American Tozt",

            description: "Grilled chicken, crispy bacon, melted American cheese, chipotle dressing.",
            image: "",
            active: true,
            dineInPrice: 9.99,
            takeOutPrice: 9.99,
            spicyLevel: 1,
            vegan: false,

            indexPosition: 1,
            linkedModifiers: [
                { modifierId: 1, title: "Ads On" }
            ]

        },
        {
            id: crypto.randomBytes(4).toString('hex'),
            item_name: "19. Tex-Mex Tozt",

            description: "Breast of turkey, jack cheese, crispy bacon, guacamole, ranch dressing.",
            image: "",
            active: true,
            dineInPrice: 9.99,
            takeOutPrice: 9.99,
            spicyLevel: 1,
            vegan: false,

            indexPosition: 1,
            linkedModifiers: [
                { modifierId: 1, title: "Ads On" }
            ]

        },
        {
            id: crypto.randomBytes(4).toString('hex'),
            item_name: "20. Pastrami Club Tozt",

            description: "Lean pastrami, Swiss cheese, red onion, mustard.",
            image: "",
            active: true,
            dineInPrice: 9.99,
            takeOutPrice: 9.99,
            spicyLevel: 1,
            vegan: false,

            indexPosition: 1,
            linkedModifiers: [
                { modifierId: 1, title: "Ads On" }
            ]

        },
        {
            id: crypto.randomBytes(4).toString('hex'),
            item_name: "21. Fresh Mozzarella Tozt",

            description: "Fresh mozzarella, sun-dried tomatoes, red sweet peppers, pesto sauce.",
            image: "",
            active: true,
            dineInPrice: 9.99,
            takeOutPrice: 9.99,
            spicyLevel: 1,
            vegan: false,

            indexPosition: 1,
            linkedModifiers: [
                { modifierId: 1, title: "Ads On" }
            ]

        },





    ]

}

module.exports = painintoztsandwinches;
