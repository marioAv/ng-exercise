import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'users',
    children :[

        {
          path:'',
          loadChildren : () => import('./users-list/users-list.module').then(m => m.UsersListModule),
        },

        {
          path:'user-detail/:userId',
          loadChildren : () => import('./user-detail/user-detail.module').then(m => m.UserDetailModule),
        }
    ]
  },
  {
    path: '**',
    redirectTo: 'landing'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
