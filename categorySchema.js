
const crypto = require("crypto")
const painintoztsandwinches = {
    id: crypto.randomBytes(4).toString('hex'),

    subMenu:String,
    backgroundColor: String, // default value: ''
    color: String, // default value: ''
    description: String, // if no description value: ''
    modifiers: [
      modifierSchema,
      modifierSchmea,
    ],
    submenu_items: [
      itemSchema,
      itemSchema,
      ]

}
