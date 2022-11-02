import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import {UserList} from "./components/UserList/UserList"
import { PostList, PostEdit, PostCreate } from "./components/PostList/PostList";
import {ProductList, ProductEdit } from "./components/ProductList/ProductList"
import { CategoryList, CategoryEdit, CategoryCreate } from "./components/CategoryList/Categorylist";
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';
//import dataProvider from "../src/dataProvider/dataProvider"
import dataProvider from "../src/dataProvider/productProvider"

//const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
console.log(dataProvider)

const App = () => (
  
  <>  
  <Admin dataProvider={dataProvider}>
    {/* <Resource name="users" list={UserList} icon={UserIcon} recordRepresentation="name"/>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} /> */}
    <Resource name="products" list={ProductList} edit={ProductEdit} icon={PostIcon} />
    <Resource name="categorys" list={CategoryList} edit={CategoryEdit} icon={PostIcon} />
  </Admin> 
  </> 
  );

export default App;