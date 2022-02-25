import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// 引入当前模块的子组件
import { AreaChartComponent } from './components/area-chart/area-chart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';

const routes: Routes = [
  { path: 'AreaChart', component: AreaChartComponent },
  { path: 'LineChart', component: LineChartComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class G2RoutingModule { }
