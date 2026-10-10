import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Dev Core | Páginas web y publicidad para empresas pequeñas',
  },
  {
    path: '**',
    component: NotFound,
    title: 'Página no encontrada | Dev Core',
  },
];