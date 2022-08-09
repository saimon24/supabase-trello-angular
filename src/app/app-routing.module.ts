import { AuthGuard } from './guards/auth.guard';
import { BoardComponent } from './components/inside/board/board.component';
import { WorkspaceComponent } from './components/inside/workspace/workspace.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'workspace',
    component: WorkspaceComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'workspace/:id',
    component: BoardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
