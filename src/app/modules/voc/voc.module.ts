/* VOCs 数据查询模块 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/*
html页面报错：Can't bind to 'ngModel' since it isn't a known property of 'select'.
最近做前端的时候，经常会遇到Can't bind to '...' since it isn't a known property of '...',
比如今天想在<select />上加一个双向绑定，就提示Can't bind to 'ngModel' since it isn't a known property of 'select'.
出现这个问题的原因就是没有引用，所以需要先在module添加引用；
即使根模块里已经引入，在当前子组件使用的分模块里还需再次引入。
*/
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
/// echarts
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
/* 散点图
解决 只能在使用 “allowSyntheticDefaultImports“ 标志时进行默认导入。
在tsconfig.json的compilerOptions添加"allowSyntheticDefaultImports":true
*/
import ecStat from 'echarts-stat';
// TS是静态类型的语言，就像我们用java类的语言，一定要提前定义，未定义的属性直接调用会报错。
echarts.registerTransform((ecStat as any).transform.regression);

// 引入当前分模块的路由
import { VocRoutingModule } from './voc-routing.module';
// 引入当前模块组件
import { EkmaComponent } from './components/ekma/ekma.component';
import { VocsNOxO38DayComponent } from './components/vocs-nox-o38-day/vocs-nox-o38-day.component';
import { TVocsHourGroupMComponent } from './components/tvocs-hour-group-m/tvocs-hour-group-m.component';
import { TVocsTopComponent } from './components/tvocs-top/tvocs-top.component';
import { TVocsHourGroupMCompleteComponent } from './components/tvocs-hour-group-mcomplete/tvocs-hour-group-mcomplete.component';
import { VocsNOxHourComponent } from './components/vocs-nox-hour/vocs-nox-hour.component';
/*
公用组件SearchCriteriaComponent已经在 app.module.ts 里引入并声明了，
但当前分模块里子组件的html使用时还是无法识别到，所以需在使用的子组件的根模块里进行引入并声明才能被html识别到。
*/
import { SearchCriteriaComponent } from '../../components/search-criteria/search-criteria.component';
import { EchartsComponent } from '../../components/echarts/echarts.component';

@NgModule({
  declarations: [
    EkmaComponent,
    VocsNOxO38DayComponent,
    TVocsHourGroupMComponent,
    TVocsTopComponent,
    SearchCriteriaComponent,
    EchartsComponent,
    TVocsHourGroupMCompleteComponent,
    VocsNOxHourComponent,
  ],
  imports: [
    CommonModule,
    VocRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NzCardModule,
    NzButtonModule,
    NzTreeSelectModule,
    NzDatePickerModule,
    NzDividerModule,
    NzMessageModule,
    NzAlertModule,
    NgxEchartsModule.forRoot({echarts}),
    NzTableModule,
    NzBreadCrumbModule,
    NzGridModule,
    NzSpaceModule
  ]
})
export class VocModule { }
