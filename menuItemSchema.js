{
            id: Number, // increment by 1
            item_name: String,

            description: String,
            image: String,
            active: Boolean, // default value: true
            dineInPrice: Decimal,
            takeOutPrice: Decimal,
            spicyLevel: Number, //default value: 0
            vegan: Boolean,  // default value:false

            indexPosition: Number,  // increment by 1
            linkedModifiers: [ // list of modifier linked to the given item
                { modifierId: Number, title: String }  //
            ]

        },
