import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/// 因为此模块下不需要再嵌套路由，所以就没有创建该模块下的根组件
// 引入当前分模块的子组件
import { UserComponent } from './components/user/user.component';
import { RoleComponent } from './components/role/role.component';
import { AuthComponent } from './components/auth/auth.component';
import { SiteComponent } from './components/site/site.component';
import { CompoundComponent } from './components/compound/compound.component';
import { TestuserComponent } from './components/testuser/testuser.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'role', component: RoleComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'site', component: SiteComponent },
  { path: 'compound', component: CompoundComponent },
  { path: 'testuser', component: TestuserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
