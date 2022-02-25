/* 根路由文件 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { MapComponent } from './components/map/map.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DayDataComponent } from './pages/voc/day-data/day-data.component';
import { VocComponent } from './pages/voc/voc/voc.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: 'layout', component: LayoutComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'map', component: MapComponent},
      {path: 'daydata', component: DayDataComponent},
      {path: 'voc', component: VocComponent},
      /// 引入分模块的 xxx.module.ts 文件，它里面引入了分模块的路由文件（里面配置了此模块的路由导航路径）
      {path: '', loadChildren: () => import('./modules/voc/voc.module').then(mod => mod.VocModule) },
      {path: '', loadChildren: () => import('./modules/g2/g2.module').then(mod => mod.G2Module) },
      {path: '', loadChildren: () => import('./modules/viser-chart/viser-chart.module').then(mod => mod.ViserChartModule) },
      {path: '', loadChildren: () => import('./modules/manage/manage.module').then(mod => mod.ManageModule) },
      {path: '**', component: NotFoundComponent},
    ]
  },
  {path: '**', redirectTo: 'login'},
];
// console.log(routes);


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
