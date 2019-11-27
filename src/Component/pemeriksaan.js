import React from 'react';
import {List, Datagrid, TextField, ReferenceField, EditButton, SimpleForm, TextInput, Edit, SelectInput, ReferenceInput, Create} from 'react-admin';

const PostTitle = ({ record }) => {
    return <span>Edit Pasien {record ? `"${record.id}"` : ''}</span>;
};

export const PemeriksaanList = props => (
    <List {...props} title="Pemeriksaan Pasien">
        <Datagrid>
            <ReferenceField source="pasienId" reference="pendaftaran"><TextField source="nama" /></ReferenceField>
             
            <TextField source="keluhan" />
            <TextField source="diagnosa" />
            <TextField source="perawatan" />
            <TextField source="tindakan" />
            <TextField source="beratBadan" />
            <TextField source="tensiSistolik" />
            <TextField source="tensiDiastolik" />
            <EditButton />
        </Datagrid>
    </List>
);

export const PemeriksaanEdit = props => (
    <Edit {...props}  title={<PostTitle />}>
        <SimpleForm>
        <TextInput disabled source="id" />
            <ReferenceInput source="pasienId" reference="pendaftaran"><SelectInput optionText="nama" /></ReferenceInput>
          
            <TextInput source="keluhan" />
            <TextInput source="diagnosa" />
            <TextInput source="perawatan" />
            <TextInput source="tindakan" />
            <TextInput source="beratBadan" />
            <TextInput source="tensiSistolik" />
            <TextInput source="tensiDiastolik" />
           
        </SimpleForm>
    </Edit>
);

export const PemeriksaanCreate = props => (
    <Create {...props} title="Tambah pasien">
        <SimpleForm>
            <ReferenceInput source="pasienId" reference="pendaftaran">
                <SelectInput optionText="nama" />
            </ReferenceInput>
            <TextInput source="keluhan" />
            <TextInput source="diagnosa" />
            <TextInput source="perawatan" />
            <TextInput source="tindakan" />
            <TextInput source="beratBadan" />
            <TextInput source="tensiSistolik" />
            <TextInput source="tensiDiastolik" />
        </SimpleForm>
    </Create>
);
