
import * as React from "react";
import { 
        List,
        Datagrid,
        TextField,
        ReferenceField,
        EditButton,
        Edit,
        SimpleForm,
        ReferenceInput,
        TextInput,
        Create,
        useRecordContext,
        UrlField
        } from 'react-admin';

const PostTitle = () => {
    const record = useRecordContext()
    return <span> Post {record? `"${record.title}`: ""}</span>
}

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="_id" label="productId" reference="products" />,
    // <ReferenceInput source="title" label="Title" reference="title" />
]


export const ProductList = () => (
    <>
    <List filters={postFilters}>
        <Datagrid rowClick="edit">
            <ReferenceField source="categoryId" reference="categorys" />
            <TextField source="id" />
            {/* <TextField source="id" /> */}
            <TextField source="sku" />
            <TextField source="name" />
            <TextField source="price" />
            <TextField source="weight" />
            <TextField source="description" />
            <UrlField source="image" />
            <TextField source="status" />
            <TextField source="brand" />
            <TextField source="benchmark" />
            <TextField source="category" />
            <TextField source="stock" />
            <EditButton/>
        </Datagrid>
    </List>
    </>
);

export const ProductEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled source="_id" />
            <TextInput source="sku" />
            <TextInput source="name" />
            <TextInput source="price" />
            <TextInput source="weight" />
            <TextInput source="description" />
            <TextInput source="image" />
            <TextInput source="status" />
            <TextInput source="brand" />
            <TextInput source="benchmark" />
            <ReferenceInput source="name" reference="categorys" />
            <TextInput source="category" />
            <TextInput source="stock" />

            {/* <ReferenceInput source="userId" reference="users" /> */}
            {/* <TextInput source="id" /> */}
            {/* <TextInput disabled source="title" /> */}
            {/* <TextInput source="title" /> */}
            {/* <TextInput source="body" /> */}
            {/* <TextInput source="body" /> */}
        </SimpleForm>
    </Edit>
);

export const ProductCreate= (props) => (
    <Create {...props}>
        <SimpleForm>
            {/* <TextInput disabled source="id" /> */}
            <ReferenceInput source="userId" reference="users" />
            {/* <TextInput disabled source="title" /> */}
            <TextInput source="title" />
            {/* <TextInput source="body" /> */}
            <TextInput source="body" />
        </SimpleForm>
    </Create>
);