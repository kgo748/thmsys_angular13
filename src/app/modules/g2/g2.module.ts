import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 即使根模块里已经引入，在当前子组件使用的分模块里还需再次引入。 */
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// 按需导入；使用antd框架的 button按钮 layout form表单；即使根模块里已经引入，在当前子组件使用的分模块里还需再次引入。
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpaceModule } from 'ng-zorro-antd/space';

// 路由
import { G2RoutingModule } from './g2-routing.module';
// 组件
import { AreaChartComponent } from './components/area-chart/area-chart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';


@NgModule({
  declarations: [
    AreaChartComponent,
    LineChartComponent
  ],
  imports: [
    CommonModule,
    G2RoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NzCardModule,
    NzButtonModule,
    NzTreeSelectModule,
    NzDatePickerModule,
    NzDividerModule,
    NzMessageModule,
    NzAlertModule,
    NzTableModule,
    NzBreadCrumbModule,
    NzGridModule,
    NzSpaceModule
  ]
})
export class G2Module { }
