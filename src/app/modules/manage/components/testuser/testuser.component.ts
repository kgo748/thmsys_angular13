import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';

interface Person {
  key: string;
  nickname: string;
  age: number;
  address: string;
  username: string;
  password?: string;
  confirmPassword?: string;
}
// 其它地方也用得着就导出一些
export interface IModalTitle {
  add: string;
  edit: string;
}

@Component({
  selector: 'app-testuser',
  templateUrl: './testuser.component.html',
  styleUrls: ['./testuser.component.scss']
})

export class TestuserComponent implements OnInit {
  // table表格数据
  listOfData: Person[] = [
    {
      key: '1',
      nickname: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      username: 'John Brown',
      password: 'admin',
      confirmPassword: 'admin'
    },
    {
      key: '2',
      nickname: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      username: 'Jim Green',
      password: 'admin',
      confirmPassword: 'admin'
    },
    {
      key: '3',
      nickname: 'Joe Black',
      username: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      nickname: 'Jack',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      username: 'Jack',
    },
    {
      key: '5',
      nickname: 'Rose',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      username: 'Rose',
    },
    {
      key: '6',
      nickname: 'Tom',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      username: 'Tom',
    },
  ];
  // Modal的显隐
  isVisible: boolean = false;
  // 是否正在异步请求种
  isOkLoading: boolean = false;
  // Modal标题
  modalTitle: IModalTitle = {
    add: '新增角色',
    edit: '编辑角色',
  };
  // 标题默认是新增角色
  modalTitleStatus: string = 'add';
  // 默认是新增角色
  addOrEdit = 'add';

  validateForm!: FormGroup;

  constructor(
    private nzMessageService: NzMessageService,
    private fb: FormBuilder
  ) {
    this.validateForm = this.fb.group({
      userName: ['', [Validators.required], [this.userNameAsyncValidator]], // 自定义函数来校验规则
      password: ['', [Validators.required]], // 必填项  添加Validators.email就是邮箱格式的数据
      confirm: ['', [this.confirmValidator]], // 自定义函数来校验规则
    });
  }

  ngOnInit(): void {
    // console.log(this.modalTitle.add);
    console.log(this.validateForm);
  }
  // 新增角色打开对话框
  openAddRoleModal(): void {
    console.log('openRoleModal');
    this.isVisible = true;
  }
  // 编辑角色打开对话框
  openEditRoleModal(row: Person): void {
    this.addOrEdit = 'edit';
    this.isVisible = true;
    console.log(row);
  }
  // 确认删除
  confirm(row: Person): void {
    this.nzMessageService.info('click confirm');
    console.log(row);
  }
  // 取消删除
  cancel(): void {
    // Message全局提示
    // this.nzMessageService.info('取消删除');
    const type: string = 'success'; // success error warning
    this.nzMessageService.create(type, '已取消删除');
  }
  // Modal表单提交
  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 1000);
  }
  // 关闭Modal
  handleCancel(): void {
    this.isVisible = false;
    this.addOrEdit = 'edit';
  }

  // 表单提交
  submitForm(): void {
    console.log('submit', this.validateForm.value);
  }

  // 重置表单
  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(key)) {
        this.validateForm.controls[key].markAsPristine();
        this.validateForm.controls[key].updateValueAndValidity();
      }
    }
  }

  validateConfirmPassword(): void {
    // setTimeout(() => this.validateForm.controls.confirm.updateValueAndValidity());
  }

  // 模拟异步校验
  userNameAsyncValidator = (control: FormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        if (control.value === 'JasonWood') {
          // you have to return `{error: true}` to mark it as an error event
          observer.next({ error: true, duplicated: true });
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 1000);
    });

  // 自定义校验规则
  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    /* if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    } */
    return {};
  };
}
