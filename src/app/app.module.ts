/*
用户登录
[HttpPost]
http://221.232.79.35:5029/VocMs/User/Login
参数：
username,password
返回：
dogid,token,expiredtime,typeid
单选站点树
[HttpGet]
http://221.232.79.35:5029/VocMs/Vocs/SiteInfo
参数：
token
Vocs和NOx小时数据查询
[HttpGet]
http://221.232.79.35:5029/VocMs/Vocs/VocsNOxHour
参数：
token,mn,stime,etime
EKMA 曲线数据查询
[HttpGet]
http://221.232.79.35:5029/VocMs/Vocs/Ekma
参数：
token,mn,stime,etime
臭氧及前体物变化
[HttpGet]
http://221.232.79.35:5029/VocMs/Vocs/VocsNOxO38Day
参数：
token,mn,stime,etime
VOCs化学组成
[HttpGet]
http://221.232.79.35:5029/VocMs/Vocs/TVocsHourGroupM
参数：
token,mn,stime,etime
关键物质排名
[HttpGet]
http://221.232.79.35:5029/VocMs/Vocs/TVocsTop
参数：
token,mn,stime,etime
结果：
VOCs浓度，臭氧生成潜势（OFP），二次有机气溶胶 生成潜势 (SOAP），致癌风险

*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// 路由
import { AppRoutingModule } from './app-routing.module';
// 引入angular的http请求模块 表单
import { HttpClientModule } from '@angular/common/http';
// 即使根模块里已经引入，在所使用的子组件的分模块的根模块文件里还需再次引入
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
/// 注意： nz-date-picker 的部分 locale 来自于 Angular 自身的国际化支持，需要在 app.module.ts 文件中 引入相应的 Angular 语言包。
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
// 按需导入；使用antd框架的 button按钮 layout form表单 组件
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzDividerModule } from 'ng-zorro-antd/divider';
// import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzSpaceModule } from 'ng-zorro-antd/space';

/// echarts
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
/// Viser
import { ViserModule } from 'viser-ng';

// 组件
// 引入项目的根组件
import { AppComponent } from './app.component';
// 引入自定义组件
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { MapComponent } from './components/map/map.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DayDataComponent } from './pages/voc/day-data/day-data.component';
import { VocComponent } from './pages/voc/voc/voc.component';

// 引入服务
import { CommonService } from './services/common.service';
import { VocService } from './services/voc.service';

// 数据共享
import { myShareDataClass } from './utils/myShareDataClass';

registerLocaleData(zh);
// 引入自定义的模块


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    HomeComponent,
    MapComponent,
    NotFoundComponent,
    DayDataComponent,
    VocComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    NzFormModule,
    NzButtonModule,
    NzIconModule,
    ReactiveFormsModule,
    FormsModule,
    NzInputModule,
    NzCheckboxModule,
    NzLayoutModule,
    NzMenuModule,
    NzCardModule,
    NzTreeSelectModule,
    NzDatePickerModule,
    NzMessageModule,
    NzTableModule,
    NzAlertModule,
    NzDividerModule,
    NzSpaceModule,
    /// 2种写法
    NgxEchartsModule.forRoot({ echarts }),
    /* NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }), */
    // NzBreadCrumbModule,
    /// Viser
    // ViserModule, /// 打开就报错

  ],
  providers: [CommonService, VocService, myShareDataClass],
  bootstrap: [AppComponent],
  exports: [
    // ViserModule
  ]
})
export class AppModule {}
