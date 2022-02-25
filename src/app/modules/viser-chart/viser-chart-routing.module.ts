import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 引入当前模块的子组件
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { AreaChartComponent } from './components/area-chart/area-chart.component';

const routes: Routes = [
  { path: 'ViserAreaChart', component: AreaChartComponent },
  { path: 'ViserLineChart', component: LineChartComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViserChartRoutingModule { }
