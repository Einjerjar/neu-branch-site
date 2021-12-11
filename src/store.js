import { writable } from 'svelte/store'

export const branch_data = writable({
    "name": "Lipa",
    "description": "Pellentesque interdum sem vel bibendum suscipit. Nam magna massa, volutpat id interdum vitae, scelerisque ac nisi. In sit amet risus eu ligula ultrices varius at quis arcu. Donec semper, massa dapibus rutrum vestibulum, mi nunc imperdiet neque, sit amet eleifend urna nibh a enim. Fusce lacinia risus vitae viverra gravida. Proin vel tincidunt orci. Duis vel finibus risus, quis tincidunt elit. Duis malesuada maximus elementum. In malesuada tincidunt sapien vel tincidunt. Aliquam erat volutpat. Quisque nec condimentum augue. Vestibulum turpis justo, rhoncus id fermentum iaculis, aliquam id sem. Nunc pellentesque purus sit amet interdum fermentum. Pellentesque at sapien odio. Nullam iaculis ante ut ultricies convallis. Proin velit mauris, ornare sed interdum a, finibus et lorem.",
    "admission_groups": [
        {
            "_id": "eeed8e1932636478100003b9",
            "link": "admission_groups",
            "display": "Admission Groups"
        },
        {
            "_id": "eee06ada3333633df5000299",
            "link": "admission_groups",
            "display": "Admission Groups"
        },
        {
            "_id": "eef1021a6633615d10000037",
            "link": "admission_groups",
            "display": "Admission Groups"
        }
    ],
    "_mby": "56500c4665393650ef0000cf",
    "_by": "56500c4665393650ef0000cf",
    "_o": 0,
    "_modified": 1639214991,
    "_created": 1635924472,
    "_id": "eef88680383935bda9000063",
    "urls": [
        {
            "field": {
                "type": "set",
                "label": "Urls",
                "options": {
                    "fields": [
                        {
                            "name": "label",
                            "type": "text"
                        },
                        {
                            "name": "url",
                            "type": "text"
                        }
                    ]
                }
            },
            "value": {
                "label": "facebook",
                "url": "https://www.facebook.com/newerauniversitylipacitybranchofficial"
            }
        }
    ],
    "telephone_numbers": [
        {
            "field": {
                "type": "set",
                "label": "Telephone",
                "options": {
                    "fields": [
                        {
                            "name": "label",
                            "type": "text"
                        },
                        {
                            "name": "number",
                            "type": "text"
                        }
                    ]
                }
            },
            "value": {
                "label": "default",
                "number": "(043) 773-3426"
            }
        }
    ],
    "mobile_numbers": [
        {
            "field": {
                "type": "set",
                "label": "Mobile Number",
                "options": {
                    "fields": [
                        {
                            "name": "label",
                            "type": "text"
                        },
                        {
                            "name": "number",
                            "type": "text"
                        }
                    ]
                }
            },
            "value": {
                "label": "default",
                "number": "0931 832 6916"
            }
        }
    ],
    "address": "1795 P. Plan St., Marawoy, Lipa City",
    "contact_emails": [
        {
            "field": {
                "type": "set",
                "label": "Email",
                "options": {
                    "fields": [
                        {
                            "name": "label",
                            "type": "text"
                        },
                        {
                            "name": "email",
                            "type": "text"
                        }
                    ]
                }
            },
            "value": {
                "label": "default",
                "email": "neulipa@neu.edu.ph"
            }
        }
    ],
    "id": "lipa",
    "home_icons": [
        {
            "field": {
                "type": "set",
                "label": "Icon",
                "options": {
                    "fields": [
                        {
                            "name": "Icon",
                            "type": "text"
                        },
                        {
                            "name": "Label",
                            "type": "text"
                        },
                        {
                            "name": "Link",
                            "type": "text"
                        }
                    ]
                }
            },
            "value": {
                "Icon": "fa-book",
                "Label": "NEUVLE",
                "Link": "https://vle.neu.edu.ph"
            }
        }
    ]
})