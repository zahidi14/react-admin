import React from 'react';
import {Admin,  Resource} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import {dokterList, DokterEdit, DokterCreate} from './Component/dokter';
import { PasienList, PasienEdit, PasienCreate } from './Component/pasien';
import { PemeriksaanList, PemeriksaanEdit, PemeriksaanCreate } from './Component/pemeriksaan';
import { PendaftaranList, PendaftaranEdit, PendaftaranCreate } from './Component/pendaftaran';
import { PersonAdd, People } from '@material-ui/icons';


const dataProvider = jsonServerProvider('https://my-json-server.typicode.com/zahidi14/jsonTest/');
const App = () => 
<Admin dataProvider={dataProvider}>
  <Resource name="dokter" list={dokterList} edit={DokterEdit} create={DokterCreate} options={{label: 'Dokter'}}/>
  <Resource name="pasien" list={PasienList} edit={PasienEdit} create={PasienCreate} options={{label: 'Pasien'}} icon={People}/>
  <Resource name="pendaftaran" list={PendaftaranList} edit={PendaftaranEdit} create={PendaftaranCreate}  options={{label: 'Pendaftaran'}} icon={PersonAdd}/>
  <Resource name="pemeriksaan" list={PemeriksaanList} edit={PemeriksaanEdit} create={PemeriksaanCreate}  options={{label: 'Pemeriksaan'}} /* icon={AssignmentTurnedInIcon} *//>

</Admin>

export default App;
