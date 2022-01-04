export const branch_data = {
  name: 'Lipa',
  description: 'Pellentesque interdum sem vel bibendum suscipit. Nam magna massa, volutpat id interdum vitae, scelerisque ac nisi. In sit amet risus eu ligula ultrices varius at quis arcu. Donec semper, massa dapibus rutrum vestibulum, mi nunc imperdiet neque, sit amet eleifend urna nibh a enim. Fusce lacinia risus vitae viverra gravida. Proin vel tincidunt orci. Duis vel finibus risus, quis tincidunt elit. Duis malesuada maximus elementum. In malesuada tincidunt sapien vel tincidunt. Aliquam erat volutpat. Quisque nec condimentum augue. Vestibulum turpis justo, rhoncus id fermentum iaculis, aliquam id sem. Nunc pellentesque purus sit amet interdum fermentum. Pellentesque at sapien odio. Nullam iaculis ante ut ultricies convallis. Proin velit mauris, ornare sed interdum a, finibus et lorem.',
  admission_groups: [
    {
      _id: 'eeed8e1932636478100003b9',
      link: 'admission_groups',
      display: 'Admission Groups'
    },
    {
      _id: 'eee06ada3333633df5000299',
      link: 'admission_groups',
      display: 'Admission Groups'
    },
    {
      _id: 'eef1021a6633615d10000037',
      link: 'admission_groups',
      display: 'Admission Groups'
    }
  ],
  _mby: '56500c4665393650ef0000cf',
  _by: '56500c4665393650ef0000cf',
  _o: 0,
  _modified: 1640159223,
  _created: 1635924472,
  _id: 'eef88680383935bda9000063',
  urls: [
    {
      field: {
        type: 'set',
        label: 'Urls',
        options: {
          fields: [
            {
              name: 'label',
              type: 'text'
            },
            {
              name: 'url',
              type: 'text'
            }
          ]
        }
      },
      value: {
        label: 'facebook',
        url: 'https://www.facebook.com/newerauniversitylipacitybranchofficial'
      }
    }
  ],
  telephone_numbers: [
    {
      field: {
        type: 'set',
        label: 'Telephone',
        options: {
          fields: [
            {
              name: 'label',
              type: 'text'
            },
            {
              name: 'number',
              type: 'text'
            }
          ]
        }
      },
      value: {
        label: 'default',
        number: '(043) 773-3426'
      }
    }
  ],
  mobile_numbers: [
    {
      field: {
        type: 'set',
        label: 'Mobile Number',
        options: {
          fields: [
            {
              name: 'label',
              type: 'text'
            },
            {
              name: 'number',
              type: 'text'
            }
          ]
        }
      },
      value: {
        label: 'default',
        number: '0931 832 6916'
      }
    }
  ],
  address: '1795 P. Plan St., Marawoy, Lipa City',
  contact_emails: [
    {
      field: {
        type: 'set',
        label: 'Email',
        options: {
          fields: [
            {
              name: 'label',
              type: 'text'
            },
            {
              name: 'email',
              type: 'text'
            }
          ]
        }
      },
      value: {
        label: 'default',
        email: 'neulipa@neu.edu.ph'
      }
    }
  ],
  id: 'lipa',
  home_icons: [
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
        Icon: 'fa-book',
        Label: 'NEUVLE',
        Link: 'https://vle.neu.edu.ph'
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
        Icon: 'fa-robot',
        Label: 'Automate',
        Link: 'https://automate.neu.edu.ph'
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
        Icon: 'fa-globe',
        Label: 'Main Website',
        Link: 'https://neu.edu.ph'
      }
    }
  ],
  admission_procs: [
    {
      field: {
        type: 'set',
        label: 'Procedure',
        options: {
          fields: [
            {
              name: 'id',
              type: 'text'
            },
            {
              name: 'name',
              type: 'text'
            },
            {
              name: 'short_desc',
              type: 'text'
            },
            {
              name: 'cover',
              type: 'image'
            },
            {
              name: 'content',
              label: 'content',
              type: 'wysiwyg',
              options: {
                editor: {
                  format: 'Basic'
                }
              }
            }
          ]
        }
      },
      value: {
        id: 'basic',
        name: 'Basic Education',
        short_desc: 'basic edu desc',
        cover: {
          path: '/cockpit/storage/uploads/2021/12/22/basic_uid_61c2be238d6e2.jpg'
        },
        content: '<h3 class="text-left pb-2 text-2xl"><strong>Step 1: Request for Temporary Student ID </strong><strong style="font-size: 14px;">@ basic</strong></h3>\n<p>&lt;p"&gt;Request for your Temporary Student ID thru sending the following details to admissionrequirements@neu.edu.ph</p>\n<ul class="mb-10 list-disc ml-10">\n<li>Name: (Last Name, First Name, Middle Name)</li>\n<li>Course Applying:</li>\n<li>Gender:</li>\n<li>Year Graduated:</li>\n</ul>\n<p>&nbsp;</p>\n<h3 class="text-left pb-2 text-2xl "><strong>Step 2: Edit your personal sheet thru NEU Automate</strong></h3>\n<p>Once you received the Temporary Username and Password thru email, You can now edt your Personal Information Sheet thru this link NEU Automate for Application</p>\n<ul class="mb-10 list-roman ml-10 ">\n<li>Enter your log-in credentials (username and password)</li>\n<li>Click Personal Info</li>\n<li>Click Edit Personal Info</li>\n<li>Fill out the General Student Personal Information Sheet (Special characters are not allowed)</li>\n<li>CLick Proceed and Print Personal Info then Save/Print as PDF</li>\n</ul>\n<p>&nbsp;</p>\n<h3 class="text-left pb-2 text-2xl "><strong>Step 3: Submission</strong></h3>\n<p>Submit all the following requirements thru this link Admission Requirements Submission Link Admission Requirements for Freshmen</p>\n<ul class="list-disc ml-10 ">\n<li>General Student Personal Information Sheet (GSPIS)</li>\n<li>PSA Authenticated Birth Certificate</li>\n<li>Senior High School Report Card (F-138) with Graduated Remarks</li>\n<li>2x2 picture with white background</li>\n</ul>\n<p>Admission Requirements for Transferees and Graduate School</p>\n<ul class="mb-10 list-disc ml-10">\n<li>General Student Personal Information Sheet (GSPIS)</li>\n<li>PSA Authenticated Birth Certificate</li>\n<li>Transcript of Records</li>\n<li>Honorable Dismissal / Transfer Credential Certificate</li>\n<li>2x2 picture with white background</li>\n</ul>\n<p>&nbsp;</p>\n<h3 class="text-left pb-2 text-2xl "><strong>Step 4: Admission Approval</strong></h3>\n<p class="max-w-screen-lg mb-30 ">Upon receipt of the advise from the College Admissions Office on the Approval of admission, you may now log-in thru this link NEU Automate for Student Enrollment using the log-in credentials (Username and Password) that you have created in filling out your General Information Sheet.</p>'
      }
    },
    {
      field: {
        type: 'set',
        label: 'Procedure',
        options: {
          fields: [
            {
              name: 'id',
              type: 'text'
            },
            {
              name: 'name',
              type: 'text'
            },
            {
              name: 'short_desc',
              type: 'text'
            },
            {
              name: 'cover',
              type: 'image'
            },
            {
              name: 'content',
              label: 'content',
              type: 'wysiwyg',
              options: {
                editor: {
                  format: 'Basic'
                }
              }
            }
          ]
        }
      },
      value: {
        id: 'shs',
        name: 'Senior High School',
        short_desc: 'shs desc',
        cover: {
          path: '/cockpit/storage/uploads/2021/12/22/shs_uid_61c2be22a4caf.jpg'
        },
        content: '<h3 class="text-left pb-2 text-2xl"><strong>Step 1: Request for Temporary Student ID </strong><strong style="font-size: 14px;">@ shs</strong></h3>\n<p>&lt;p"&gt;Request for your Temporary Student ID thru sending the following details to admissionrequirements@neu.edu.ph</p>\n<ul class="mb-10 list-disc ml-10">\n<li>Name: (Last Name, First Name, Middle Name)</li>\n<li>Course Applying:</li>\n<li>Gender:</li>\n<li>Year Graduated:</li>\n</ul>\n<p>&nbsp;</p>\n<h3 class="text-left pb-2 text-2xl "><strong>Step 2: Edit your personal sheet thru NEU Automate</strong></h3>\n<p>Once you received the Temporary Username and Password thru email, You can now edt your Personal Information Sheet thru this link NEU Automate for Application</p>\n<ul class="mb-10 list-roman ml-10 ">\n<li>Enter your log-in credentials (username and password)</li>\n<li>Click Personal Info</li>\n<li>Click Edit Personal Info</li>\n<li>Fill out the General Student Personal Information Sheet (Special characters are not allowed)</li>\n<li>CLick Proceed and Print Personal Info then Save/Print as PDF</li>\n</ul>\n<p>&nbsp;</p>\n<h3 class="text-left pb-2 text-2xl "><strong>Step 3: Submission</strong></h3>\n<p>Submit all the following requirements thru this link Admission Requirements Submission Link Admission Requirements for Freshmen</p>\n<ul class="list-disc ml-10 ">\n<li>General Student Personal Information Sheet (GSPIS)</li>\n<li>PSA Authenticated Birth Certificate</li>\n<li>Senior High School Report Card (F-138) with Graduated Remarks</li>\n<li>2x2 picture with white background</li>\n</ul>\n<p>Admission Requirements for Transferees and Graduate School</p>\n<ul class="mb-10 list-disc ml-10">\n<li>General Student Personal Information Sheet (GSPIS)</li>\n<li>PSA Authenticated Birth Certificate</li>\n<li>Transcript of Records</li>\n<li>Honorable Dismissal / Transfer Credential Certificate</li>\n<li>2x2 picture with white background</li>\n</ul>\n<p>&nbsp;</p>\n<h3 class="text-left pb-2 text-2xl "><strong>Step 4: Admission Approval</strong></h3>\n<p class="max-w-screen-lg mb-30 ">Upon receipt of the advise from the College Admissions Office on the Approval of admission, you may now log-in thru this link NEU Automate for Student Enrollment using the log-in credentials (Username and Password) that you have created in filling out your General Information Sheet.</p>'
      }
    },
    {
      field: {
        type: 'set',
        label: 'Procedure',
        options: {
          fields: [
            {
              name: 'id',
              type: 'text'
            },
            {
              name: 'name',
              type: 'text'
            },
            {
              name: 'short_desc',
              type: 'text'
            },
            {
              name: 'cover',
              type: 'image'
            },
            {
              name: 'content',
              label: 'content',
              type: 'wysiwyg',
              options: {
                editor: {
                  format: 'Basic'
                }
              }
            }
          ]
        }
      },
      value: {
        id: 'undergraduate',
        name: 'Undergraduate',
        short_desc: 'undergrad desc',
        cover: {
          path: '/cockpit/storage/uploads/2021/12/22/under_uid_61c2be2320e6a.jpg'
        },
        content: '<h3 class="text-left pb-2 text-2xl"><strong>Step 1: Request for Temporary Student ID </strong><strong style="font-size: 14px;">@ under</strong></h3>\n<p>&lt;p"&gt;Request for your Temporary Student ID thru sending the following details to admissionrequirements@neu.edu.ph</p>\n<ul class="mb-10 list-disc ml-10">\n<li>Name: (Last Name, First Name, Middle Name)</li>\n<li>Course Applying:</li>\n<li>Gender:</li>\n<li>Year Graduated:</li>\n</ul>\n<p>&nbsp;</p>\n<h3 class="text-left pb-2 text-2xl "><strong>Step 2: Edit your personal sheet thru NEU Automate</strong></h3>\n<p>Once you received the Temporary Username and Password thru email, You can now edt your Personal Information Sheet thru this link NEU Automate for Application</p>\n<ul class="mb-10 list-roman ml-10 ">\n<li>Enter your log-in credentials (username and password)</li>\n<li>Click Personal Info</li>\n<li>Click Edit Personal Info</li>\n<li>Fill out the General Student Personal Information Sheet (Special characters are not allowed)</li>\n<li>CLick Proceed and Print Personal Info then Save/Print as PDF</li>\n</ul>\n<p>&nbsp;</p>\n<h3 class="text-left pb-2 text-2xl "><strong>Step 3: Submission</strong></h3>\n<p>Submit all the following requirements thru this link Admission Requirements Submission Link Admission Requirements for Freshmen</p>\n<ul class="list-disc ml-10 ">\n<li>General Student Personal Information Sheet (GSPIS)</li>\n<li>PSA Authenticated Birth Certificate</li>\n<li>Senior High School Report Card (F-138) with Graduated Remarks</li>\n<li>2x2 picture with white background</li>\n</ul>\n<p>Admission Requirements for Transferees and Graduate School</p>\n<ul class="mb-10 list-disc ml-10">\n<li>General Student Personal Information Sheet (GSPIS)</li>\n<li>PSA Authenticated Birth Certificate</li>\n<li>Transcript of Records</li>\n<li>Honorable Dismissal / Transfer Credential Certificate</li>\n<li>2x2 picture with white background</li>\n</ul>\n<p>&nbsp;</p>\n<h3 class="text-left pb-2 text-2xl "><strong>Step 4: Admission Approval</strong></h3>\n<p class="max-w-screen-lg mb-30 ">Upon receipt of the advise from the College Admissions Office on the Approval of admission, you may now log-in thru this link NEU Automate for Student Enrollment using the log-in credentials (Username and Password) that you have created in filling out your General Information Sheet.</p>'
      }
    }
  ],
  homepage_video: {
    path: '/2021/12/22/mov_bbb_uid_61c2d6945f6c6.mp4',
    title: 'mov_bbb.mp4',
    mime: 'video/mp4',
    description: '',
    tags: [

    ],
    size: 788493,
    image: false,
    video: true,
    audio: false,
    archive: false,
    document: false,
    code: false,
    colors: null,
    width: null,
    height: null,
    created: 1640158868,
    modified: 1640158868,
    _by: '56500c4665393650ef0000cf',
    folder: 'cadb6ade6165338f51000170',
    _id: 'cade05d4343935249b000338'
  },
  homepage_embed: '-laHrCrn64U',
  facilities: [
    {
      field: {
        type: 'set',
        label: 'Facility',
        options: {
          fields: [
            {
              name: 'title',
              type: 'text'
            },
            {
              name: 'content',
              type: 'textarea'
            },
            {
              name: 'image',
              type: 'image'
            }
          ]
        }
      },
      value: {
        title: 'Professional Schools Library',
        content: 'Into the details of the infamy at which I thus connived (for even now I can scarce grant that I committed it) I have no design of entering; I mean but to point out the warnings and the successive steps with which my chastisement approached. I met with one accident which, as it brought on no consequence, I shall no more than mention. An act of cruelty to a child aroused against me the anger of a passer-by, whom I recognised the other day in the person of your kinsman; the doctor and the child’s family joined him; there were moments when I feared for my life; and at last, in order to pacify their too just resentment, Edward Hyde had to bring them to the door, and pay them in a cheque drawn in the name of Henry Jekyll. But this danger was easily eliminated from the future, by opening an account at another bank in the name of Edward Hyde himself; and when, by sloping my own hand backward, I had supplied my double with a signature, I thought I sat beyond the reach of fate.',
        image: {
          path: '/cockpit/storage/uploads/2021/12/17/C_uid_61bca2190385d.jpg'
        }
      }
    },
    {
      field: {
        type: 'set',
        label: 'Facility',
        options: {
          fields: [
            {
              name: 'title',
              type: 'text'
            },
            {
              name: 'content',
              type: 'textarea'
            },
            {
              name: 'image',
              type: 'image'
            }
          ]
        }
      },
      value: {
        title: 'Professional Schools Canteen',
        content: 'The intent of this License, each Contributor hereby grants you a world-wide, royalty-free, non-exclusive license, to the Recipient. The Recipient must attach a copy of this Package or making it accessible to anyone else, or in combination with Original Code. The Indemnified Contributor must: a) promptly notify the Commercial Contributor would have been validly granted by said Respondent under Sections 1 and 2 above provided that you delete from the Licensed Program. The Recipient may conduct Reproduction and Other Exploitation of the remainder of the preceding Article, the Recipient retains any such claim is necessary to make reasonable modifications.',
        image: {
          path: '/cockpit/storage/uploads/2021/12/17/B_uid_61bca21871c16.jpg'
        }
      }
    }
  ]
}