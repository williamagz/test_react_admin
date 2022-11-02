
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
    <ReferenceInput source="userId" label="User" reference="users" />,
    // <ReferenceInput source="title" label="Title" reference="title" />
]



export const PostList = () => (
    <>
    {/* <List filters={postFilters}> */}
    <List filters={postFilters}>
        <Datagrid rowClick="edit">
            <ReferenceField source="userId" reference="users" />
            <TextField source="id" />
            {/* <TextField source="id" /> */}
            <TextField source="title" />
            <TextField source="body" />
            <EditButton/>
        </Datagrid>
    </List>
    </>
);

export const PostEdit = () => (
    <Edit title={<PostTitle/>}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="users" />
            {/* <TextInput source="id" /> */}
            <TextInput disabled source="title" />
            {/* <TextInput source="title" /> */}
            {/* <TextInput source="body" /> */}
            <TextInput source="body" />
        </SimpleForm>
    </Edit>
);

export const PostCreate= (props) => (
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