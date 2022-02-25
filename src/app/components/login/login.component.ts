import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { NzIconService } from 'ng-zorro-antd/icon';
// 引入服务
import { CommonService } from '../../services/common.service';
import {myShareDataClass} from '../../utils/myShareDataClass';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private commonService: CommonService,
    private router: Router,
    // private iconService: NzIconService,
    public shareData: myShareDataClass
  ) {
    // this.iconService.fetchFromIconfont({
    //   scriptUrl: 'https://at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
    // });
  }

  ngOnInit(): void {
    // 校验规则
    this.validateForm = this.fb.group({
      userName: ['admin', [Validators.required]],// 默认值为 null
      password: ['whth1234', [Validators.required]],// 默认值为 null
      remember: [false],
    });
  }

  // 登录
  submitForm(): void {
    if (this.validateForm.valid) {
      const params=this.validateForm.value;
      delete params['remember']
      // console.log('submit', this.validateForm.value, params);
      const api = 'VocMs/User/Login';// 此接口已失效
      /* const rxjsData=this.commonService.requestRxjsData(api, 'post', params)
      rxjsData.subscribe(data=>{
        // console.log(data);
        if(data && data.success === 200){
          // 存储用户信息并跳转
          this.shareData.user=data.data;
          /// 暂时将信息也存入本地，写数据持久化和路由守卫后就不用了
          localStorage.setItem('userinfo', JSON.stringify(data.data));
          this.router.navigate(['/layout/home']);
        }
      }); */
      // 模拟登录成功
      const userInfo = {
        dogid: 489190410,
        expiredtime: "2023-01-01T23:59:59",
        roleid: 0,
        token: "a7ebf690f0e054b5c507e8eed4e31ab4",
        uid: 2,
        username: "超级管理员2号"
      }
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      this.router.navigate(['/layout/home']);
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

}
