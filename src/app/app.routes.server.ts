import { RenderMode, ServerRoute } from '@angular/ssr';
import { HomeComponent } from './features/home/home.component';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
  { path: 'home', renderMode: RenderMode.Client },
  { path: 'login', renderMode: RenderMode.Client },
];
