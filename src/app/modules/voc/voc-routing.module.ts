import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/// 因为此模块下不需要再嵌套路由，所以就没有创建该模块下的根组件
// 引入当前模块的子组件
import { EkmaComponent } from './components/ekma/ekma.component';
import { VocsNOxO38DayComponent } from './components/vocs-nox-o38-day/vocs-nox-o38-day.component';
import { TVocsHourGroupMComponent } from './components/tvocs-hour-group-m/tvocs-hour-group-m.component';
import { TVocsHourGroupMCompleteComponent } from './components/tvocs-hour-group-mcomplete/tvocs-hour-group-mcomplete.component';
import { TVocsTopComponent } from './components/tvocs-top/tvocs-top.component';
import { VocsNOxHourComponent } from './components/vocs-nox-hour/vocs-nox-hour.component';

const routes: Routes = [
  { path: 'Ekma', component: EkmaComponent },
  { path: 'VocsNOxO38Day', component: VocsNOxO38DayComponent },
  { path: 'TVocsHourGroupM', component: TVocsHourGroupMComponent },
  { path: 'TVocsHourGroupMComplete', component: TVocsHourGroupMCompleteComponent },
  { path: 'TVocsTop', component: TVocsTopComponent },
  { path: 'VocsNOxHour', component: VocsNOxHourComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VocRoutingModule { }
