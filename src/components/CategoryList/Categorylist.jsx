
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
        } from 'react-admin';

const PostTitle = () => {
    const record = useRecordContext()
    return <span> Post {record? `"${record.title}`: ""}</span>
}

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="id" label="productId" reference="products" />,
    // <ReferenceInput source="title" label="Title" reference="title" />
]


export const CategoryList = () => (
    <>
    <List filters={postFilters}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <EditButton/>
        </Datagrid>
    </List>
    </>
);

export const CategoryEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled source="_id" />
            <TextInput source="name" />
            <TextInput source="description" />
        </SimpleForm>
    </Edit>
);

export const CategoryCreate= (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="description" />
        </SimpleForm>
    </Create>
);