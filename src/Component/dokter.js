import React from 'react';
import {DateInput,NumberInput,List, Datagrid, TextField, EditButton, TextInput, Edit, SimpleForm, Create} from 'react-admin';
/* import {  TimeInput} from 'react-admin-date-inputs'; */

export const dokterList = props =>(
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="nama" />
            <TextField source="alamat" />
            <TextField source="telepon" />
            <TextField source="tempatPraktek" />
            <TextField source="hariKerja" />
            <TextField source="jamMulai" />
            <TextField source="jamSelesai" />
            <EditButton />
        </Datagrid>
    </List>
);


export const DokterEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="nama" />
            <TextInput source="alamat" />
            <NumberInput source="telepon" />
            <TextInput source="tempatPraktek" />
            <TextInput source="hariKerja" />
            <DateInput source="jamMulai" label="Jam Mulai"/>
            <DateInput source="jamSelesai" label="Jam Selesai"/>
         {/*    <TimeInput source="jamMulai" label="Jam Mulai" options={{ format: 'HH:mm:ss' }} />
            <TimeInput source="jamSelesai" label="Jam Selesai" options={{ format: 'HH:mm:ss' }} /> */}
        </SimpleForm>
    </Edit>
);



export const DokterCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="nama" />
            <TextInput source="alamat" />
            <NumberInput source="telepon" />
            <TextInput source="tempatPraktek" />
            <TextInput source="hariKerja" />
            <DateInput source="jamMulai" label="Jam Mulai"/>
            <DateInput source="jamSelesai" label="Jam Selesai"/>
          {/*   <TimeInput source="jamMulai" label="Jam Mulai" options={{ format: 'HH:mm:ss' }} />
            <TimeInput source="jamSelesai" label="Jam Selesai" options={{ format: 'HH:mm:ss' }} /> */}
        </SimpleForm>
    </Create>
);