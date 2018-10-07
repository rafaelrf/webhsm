import React from 'react';
import Loadable from 'react-loadable'
import DefaultLayout from './containers/DefaultLayout';

function Loading() {
  return <div>Carregando...</div>;
}

const Home = Loadable({
  loader: () => import('./views/home/Home'),
  loading: Loading,
});

const Doctor = Loadable({
  loader: () => import('./views/doctor/Doctor'),
  loading: Loading,
});

const Patient = Loadable({
  loader: () => import('./views/patient/patient'),
  loading: Loading,
});

const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/agendamento', exact: true, name: 'Agendamento', component: Home },
  { path: '/agendamento/medico', exact: true, name: 'Médico', component: Doctor },
  { path: '/agendamento/medico/paciente', name: 'Paciente', component: Patient }
];

export default routes;
