
import React from 'react';
import {NumberInput,ReferenceField, ReferenceInput,SelectInput, List, Datagrid,TextField, EditButton, SimpleForm, Edit, TextInput, Create} from 'react-admin';

export const PasienList = props => (
    <List {...props}>
        <Datagrid>
        <ReferenceField source="daftarID" label="Nama" reference="pendaftaran"><TextField label="Nama" source="nama" /></ReferenceField>
            <TextField source="alamat" />
            <TextField source="telepon" />
            <TextField source="ttl" />
            <TextField source="gender" />
            <TextField source="tanggalDaftar" />
            <EditButton />
        </Datagrid>
    </List>
);

export const PasienEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="daftarID" label="Nama" reference="pendaftaran"><SelectInput optionText="nama" /></ReferenceInput>
            <TextInput source="alamat" />
            <NumberInput source="telepon" />
            <TextInput source="ttl" />
            <TextInput source="gender" />
            <TextInput source="tanggalDaftar" />
        </SimpleForm>
    </Edit>
); 

export const PasienCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="daftarID" label="Nama" reference="pendaftaran"><SelectInput optionText="nama" /></ReferenceInput>
            <TextInput source="alamat" />
            <NumberInput source="telepon" />
            <TextInput source="ttl" />
            <TextInput source="gender" />
            <TextInput source="tanggalDaftar" />
        </SimpleForm>
    </Create>
);

