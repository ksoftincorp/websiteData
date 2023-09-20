{
            id: crypto.randomBytes(4).toString('hex'),
            item_name: String,

            description: String,
            image: String,
            active: Boolean,
            dineInPrice: Decimal,
            takeOutPrice: Decimal,
            spicyLevel: Number,
            vegan: Boolean,

            indexPosition: Number,
            linkedModifiers: [
                { modifierId: Number, title: String }
            ]

        },
