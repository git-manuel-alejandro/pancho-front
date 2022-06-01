import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from '../guards/auth.guard';

import { PagesComponent } from './pages.component';





const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        canActivate: [AuthGuard],
        loadChildren: () => import('./child-routes.module').then(m => m.ChildRoutesModule)

    },
    {
        path: 'dashboard',
        component: PagesComponent,
        canActivate: [AuthGuard],
        loadChildren: () => import('../page/pages-routes.module').then(m => m.PagesRoutesModule)
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }


