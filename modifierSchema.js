  {
            modifierId: Number, // increment by 1
            title: String,  // modifer label [eg: choose a size, size Options...]
            indexPosition: Number, // increment by 1
            noOfSelectionRequired: Number, // Number of selection allowed, 1,2,3 ---- if all put 100,
            required: Boolean,  // if choice are required or not.
         
            options: [
               
                { id: Number, item_name: String, dineInPrice: Number, takeOutPrice: Number, active: Boolean, checked: Boolean },
              /*
              id:Number, // increment by 1
               dineInPrice should be same as takeOutPrice
                 active:true  by default
                   checked: false by default
              */
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
