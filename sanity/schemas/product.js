function randomSymbols(size) {
  return crypto.randomUUID(4).slice(0,size)
   
}

export default {
    name: 'product',
    type: 'document',
    title: 'Products',
    initialValue: () => ({
      slug: { _type: "slug", current: randomSymbols(12)},
    }),
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
        title: 'Brand',
        name: 'brandChoose',
        type: 'reference',
        to: [
          {type: 'brands'},
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
            source: () => randomSymbols(12)
        }
      },
      
      
    ]
  }