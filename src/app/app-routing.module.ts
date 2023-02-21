import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'user', loadChildren: './user/user.module#UserPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'biometrico', loadChildren: './biometrico/biometrico.module#BiometricoPageModule', canActivate: [AuthGuard] },  { path: 'formulario', loadChildren: './formulario/formulario.module#FormularioPageModule' },
  { path: 'github', loadChildren: './github/github.module#GithubPageModule' },
  { path: 'localstorage', loadChildren: './localstorage/localstorage.module#LocalstoragePageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
