export default {
    name: 'recomendations',
    type: 'document',
      title: 'Recomendations',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'image',
        type: 'array',
        of: [{ type: 'image'}],
        hotspot: true,
        title: 'Image'
      },
      {
        name: 'description',
        type: 'string',
        title: 'Description'
      },
      {
        name: 'price',
        type: 'number',
        title: 'Price'
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
            source: 'title',
            maxLength: 15,
        }
      },
      
    ]
  }