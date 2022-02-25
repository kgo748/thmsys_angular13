import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/*即使根模块里已经引入，在当前子组件使用的分模块里还需再次引入。*/
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// 按需导入，这里按需导入的都是以Module后缀结尾的UI组件，有些UI组件的使用只需在子组件的xxx.component.ts里导入，比如NzMessageService；
// 即使根模块里已经引入，在当前子组件使用的分模块里还需再次引入。
// 使用antd框架的 button按钮 layout form表单等UI组件；
// import { NzButtonModule } from 'ng-zorro-antd/button';
// import { NzCardModule } from 'ng-zorro-antd/card';
// import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
// import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
// import { NzMessageModule } from 'ng-zorro-antd/message';
// import { NzAlertModule } from 'ng-zorro-antd/alert';
// import { NzDividerModule } from 'ng-zorro-antd/divider';
// import { NzTableModule } from 'ng-zorro-antd/table';
// import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
// import { NzGridModule } from 'ng-zorro-antd/grid';
// import { NzSpaceModule } from 'ng-zorro-antd/space';
// import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
// import { NzModalModule } from 'ng-zorro-antd/modal';
// import { NzInputModule } from 'ng-zorro-antd/input';
/*
第一步：在app目录下新建文件：ng-zorro-antd.module.ts。 代码见内容，里面把UI组件该导入的都导入了，上面重复导入的就可以注释掉了；
第二步：引入并导入
功成
 */
import {NgZorroAntdModule} from '../../ng-zorro-antd.module';

// 创建组件时会自动引入当前分模块的路由
import { ManageRoutingModule } from './manage-routing.module';
// 及自动引入当前模块的组件
import { UserComponent } from './components/user/user.component';
import { RoleComponent } from './components/role/role.component';
import { AuthComponent } from './components/auth/auth.component';
import { SiteComponent } from './components/site/site.component';
import { CompoundComponent } from './components/compound/compound.component';
import { TestuserComponent } from './components/testuser/testuser.component';

@NgModule({
  declarations: [
    UserComponent,
    RoleComponent,
    AuthComponent,
    SiteComponent,
    CompoundComponent,
    TestuserComponent,
  ],
  imports: [
    CommonModule,
    ManageRoutingModule,
    // NzCardModule,
    // NzButtonModule,
    // NzTreeSelectModule,
    // NzDatePickerModule,
    // NzDividerModule,
    // NzMessageModule,
    // NzAlertModule,
    // NzTableModule,
    // NzBreadCrumbModule,
    // NzGridModule,
    // NzSpaceModule,
    // NzPopconfirmModule,
    // NzModalModule,
    // NzInputModule,
    ReactiveFormsModule,
    FormsModule,
    // 总的
    NgZorroAntdModule
  ]
})
export class ManageModule { }
