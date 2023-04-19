export default {
    name: 'product',
    type: 'document',
      title: 'Products',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'image',
        type: 'array',
        of: [{ type: 'image', hotspot: true}],
        hotspot: true,
        title: 'Image'
      },
      {
        name: 'description',
        type: 'string',
        title: 'Description'
      },
      {
        title: 'Category',
        name: 'categoryChoose',
        type: 'reference',
        to: [
          {type: 'category'},
          // add a single plan only
        ]
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