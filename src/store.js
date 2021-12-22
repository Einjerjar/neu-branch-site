import { writable } from 'svelte/store'
import { branch_data as bd } from './sample_data/branch_data'

export const branch_data = writable({
  ...bd,
  temp: true
})

export const footer_links = writable({
  links: [

  ],
  social_icons: [
    {
      field: {
        type: 'set',
        label: 'Icon',
        options: {
          fields: [
            {
              name: 'Icon',
              type: 'text'
            },
            {
              name: 'Label',
              type: 'text'
            },
            {
              name: 'Link',
              type: 'text'
            }
          ]
        }
      },
      value: {
        Icon: 'fa-facebook-square',
        Label: 'Facebook',
        Link: 'https://facebook.com'
      }
    },
    {
      field: {
        type: 'set',
        label: 'Icon',
        options: {
          fields: [
            {
              name: 'Icon',
              type: 'text'
            },
            {
              name: 'Label',
              type: 'text'
            },
            {
              name: 'Link',
              type: 'text'
            }
          ]
        }
      },
      value: {
        Icon: 'fa-twitter-square',
        Label: 'Twitter',
        Link: 'https://twitter.com'
      }
    },
    {
      field: {
        type: 'set',
        label: 'Icon',
        options: {
          fields: [
            {
              name: 'Icon',
              type: 'text'
            },
            {
              name: 'Label',
              type: 'text'
            },
            {
              name: 'Link',
              type: 'text'
            }
          ]
        }
      },
      value: {
        Icon: 'fa-instagram-square',
        Label: 'Instagram',
        Link: 'https://instagram.com'
      }
    },
    {
      field: {
        type: 'set',
        label: 'Icon',
        options: {
          fields: [
            {
              name: 'Icon',
              type: 'text'
            },
            {
              name: 'Label',
              type: 'text'
            },
            {
              name: 'Link',
              type: 'text'
            }
          ]
        }
      },
      value: {
        Icon: 'fa-youtube-square',
        Label: 'Youtube',
        Link: 'https://youtube.com'
      }
    }
  ],
  _mby: '56500c4665393650ef0000cf',
  _by: '56500c4665393650ef0000cf',
  campus_links: [
    {
      field: {
        type: 'set',
        label: 'Link',
        options: {
          fields: [
            {
              name: 'Label',
              type: 'text'
            },
            {
              name: 'Link',
              type: 'text'
            }
          ]
        }
      },
      value: {
        Label: 'NEU Quezon City (Main)',
        Link: 'https://neu.edu.ph'
      }
    },
    {
      field: {
        type: 'set',
        label: 'Link',
        options: {
          fields: [
            {
              name: 'Label',
              type: 'text'
            },
            {
              name: 'Link',
              type: 'text'
            }
          ]
        }
      },
      value: {
        Label: 'NEU Batangas',
        Link: 'https://neu.edu.ph'
      }
    },
    {
      field: {
        type: 'set',
        label: 'Link',
        options: {
          fields: [
            {
              name: 'Label',
              type: 'text'
            },
            {
              name: 'Link',
              type: 'text'
            }
          ]
        }
      },
      value: {
        Label: 'NEU Pampanga',
        Link: 'https://neu.edu.ph'
      }
    },
    {
      field: {
        type: 'set',
        label: 'Link',
        options: {
          fields: [
            {
              name: 'Label',
              type: 'text'
            },
            {
              name: 'Link',
              type: 'text'
            }
          ]
        }
      },
      value: {
        Label: 'NEU General Santos City',
        Link: 'https://neu.edu.ph'
      }
    },
    {
      field: {
        type: 'set',
        label: 'Link',
        options: {
          fields: [
            {
              name: 'Label',
              type: 'text'
            },
            {
              name: 'Link',
              type: 'text'
            }
          ]
        }
      },
      value: {
        Label: 'NEU Rizal',
        Link: 'https://neu.edu.ph'
      }
    }
  ],
  other_links: [
    {
      field: {
        type: 'set',
        label: 'Link',
        options: {
          fields: [
            {
              name: 'Label',
              type: 'text'
            },
            {
              name: 'Link',
              type: 'text'
            }
          ]
        }
      },
      value: {
        Label: 'School Calendar',
        Link: 'https://neu.edu.ph'
      }
    },
    {
      field: {
        type: 'set',
        label: 'Link',
        options: {
          fields: [
            {
              name: 'Label',
              type: 'text'
            },
            {
              name: 'Link',
              type: 'text'
            }
          ]
        }
      },
      value: {
        Label: 'Research and Publication',
        Link: 'https://neu.edu.ph'
      }
    },
    {
      field: {
        type: 'set',
        label: 'Link',
        options: {
          fields: [
            {
              name: 'Label',
              type: 'text'
            },
            {
              name: 'Link',
              type: 'text'
            }
          ]
        }
      },
      value: {
        Label: 'NEUTECH',
        Link: 'https://neu.edu.ph'
      }
    },
    {
      field: {
        type: 'set',
        label: 'Link',
        options: {
          fields: [
            {
              name: 'Label',
              type: 'text'
            },
            {
              name: 'Link',
              type: 'text'
            }
          ]
        }
      },
      value: {
        Label: 'MCLE',
        Link: 'https://neu.edu.ph'
      }
    },
    {
      field: {
        type: 'set',
        label: 'Link',
        options: {
          fields: [
            {
              name: 'Label',
              type: 'text'
            },
            {
              name: 'Link',
              type: 'text'
            }
          ]
        }
      },
      value: {
        Label: 'Russian Studies Center',
        Link: 'https://neu.edu.ph'
      }
    }
  ],
  alumni_links: null,
  extra_links: [
    {
      field: {
        type: 'set',
        label: 'Link',
        options: {
          fields: [
            {
              name: 'Label',
              type: 'text'
            },
            {
              name: 'Link',
              type: 'text'
            }
          ]
        }
      },
      value: {
        Label: 'Automate',
        Link: 'https://automate.neu.edu.ph'
      }
    },
    {
      field: {
        type: 'set',
        label: 'Link',
        options: {
          fields: [
            {
              name: 'Label',
              type: 'text'
            },
            {
              name: 'Link',
              type: 'text'
            }
          ]
        }
      },
      value: {
        Label: 'NEUVLE',
        Link: 'https://vle.neu.edu.ph'
      }
    },
    {
      field: {
        type: 'set',
        label: 'Link',
        options: {
          fields: [
            {
              name: 'Label',
              type: 'text'
            },
            {
              name: 'Link',
              type: 'text'
            }
          ]
        }
      },
      value: {
        Label: 'Subscribe',
        Link: 'https://automate.neu.edu.ph'
      }
    }
  ]
})

export const img_path = writable('')