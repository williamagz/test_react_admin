import jsonServerProvider from 'ra-data-json-server';




const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');


console.log(dataProvider)

export const {data} = await dataProvider.getList('posts', {
    pagination:{page: 1, perPage:5},
    sort: {field: 'title', order: 'ASC'},
    filter: {author_id: 12},
  }).then(response => console.log(response))