import React from 'react';
import Loadable from 'react-loadable'
import DefaultLayout from './containers/DefaultLayout';
import LoadingComp from './componentes/loading'

function Loading() {
  return <LoadingComp loading="true" />
}

const Dashboard = Loadable({
  loader: () => import('./views/Dashboard'),
  loading: Loading,
});

const Ramais = Loadable({
  loader: () => import('./views/menu/ramais'),
  loading: Loading,
});

const TIChamados = Loadable({
  loader: () => import('./views/ti/chamados'),
  loading: Loading,
});

const servExecutados = Loadable({
  loader: () => import('./views/medico/servExecutados'),
  loading: Loading,
});

const repasses = Loadable({
  loader: () => import('./views/medico/repasses'),
  loading: Loading,
});

const repassesContador = Loadable({
  loader: () => import('./views/contador/repassesContador'),
  loading: Loading,
});

const pesqPac = Loadable({
  loader: () => import('./views/medico/pesqPac'),
  loading: Loading,
});

const exames = Loadable({
  loader: () => import('./views/medico/exames'),
  loading: Loading,
});

const contracheque = Loadable({
  loader: () => import('./views/funcionario/contracheque'),
  loading: Loading,
});

const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout }
  , { path: '/dashboard', name: 'Dashboard', component: Dashboard }
  , { path: '/ramais', name: 'Ramais', component: Ramais }
  , { path: '/contracheque', name: 'Contra Cheque', component: contracheque }
  , { path: '/ti', name: 'T.I.', component: TIChamados }
  , { path: '/servexec', name: 'Serviços Executados', component: servExecutados }
  , { path: '/repasses', name: 'Repasses', component: repasses }
  , { path: '/contador', name: 'Repasses', component: repassesContador }
  , { path: '/paciente/pesquisar', name: 'Pesquisar Paciente', component: pesqPac }
  , { path: '/paciente/:id/exames', name: 'Laudo dos Exames', component: exames }
];

export default routes;
