export default {
    name: 'category',
    type: 'document',
      title: 'Category',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Category name'
      },
      {
        name: 'image',
        type: 'image',
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
        name: 'bgname',
        type: 'string',
        title: 'Background Name'
    },

    ]
  }