import React from 'react';
import {NumberInput, List, Datagrid, TextField, EditButton, ReferenceField, Edit, SimpleForm, ReferenceInput, SelectInput, TextInput, Create} from 'react-admin';

const PostTitle = ({ record }) => {
    return <span>Edit Pasien Nomor Urut  {record ? `"${record.nomorUrut}"` : ''}</span>;
};

export const PendaftaranList = props => (
    <List {...props} title="Pendaftaran Pasien">
        <Datagrid>
            <TextField source="nama" />
            <TextField source="nomorUrut" />
            <TextField source="biaya" />
            <ReferenceField source="dokterId" reference="dokter"><TextField label="Nama" source="nama" /></ReferenceField>
            <EditButton />
        </Datagrid>
    </List>
);

export const PendaftaranEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id"/>
            <TextInput source="nama"/>
            <NumberInput source="nomorUrut" />
            <NumberInput source="biaya" />
            <ReferenceInput source="dokterId" reference="dokter"><SelectInput optionText="nama" /></ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const PendaftaranCreate = props => (
    <Create {...props} title="Daftar baru">
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="nama"/>

            <NumberInput source="nomorUrut" />
            <NumberInput source="biaya" />
            <ReferenceInput source="dokterId" reference="dokter"><SelectInput optionText="nama" /></ReferenceInput>
        </SimpleForm>
    </Create>
);