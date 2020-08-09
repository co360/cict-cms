export default {
    name: 'team',
    title: 'Team',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text'
      },
      {
        name: 'position',
        title: 'Position',
        type: 'array',
        of: [{type: 'string'}]
      },
      {
        name: 'education',
        title: 'Education',
        type: 'array',
        of: [{type: 'string'}]
      },
      {
        name: 'specialization',
        title: 'Specialization',
        type: 'array',
        of: [{type: 'string'}]
      },
      {
        name: 'avatar',
        title: 'Avatar',
        type: 'image',
      },
      {
        name: 'type',
        title: 'Type',
        type: 'array',
        of: [{type: 'string'}],
        options: {
            list: [
              {title: 'Faculty', value: 'faculty'},
              {title: 'Staff', value: 'staff'},
            ]
          }
      },
      {
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{type: 'string'}],
        options: {
            list: [
              {title: 'Admin', value: 'admin'},
              {title: 'Staff', value: 'staff'},
              {title: 'BSIT', value: 'it'},
              {title: 'BSIS', value: 'is'},
              {title: 'BSCS', value: 'cs'},
              {title: 'BSEMC', value: 'emc'},
              {title: 'BLIS', value: 'blis'},
              {title: 'Graduate School', value: 'gradschool'},
            ]
          }
      },
      {
        name: 'advisory',
        title: 'Advisory',
        type: 'array',
        of: [{type: 'string'}]
      },
    ]
  }
  