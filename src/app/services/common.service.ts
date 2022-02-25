import { Injectable } from '@angular/core';
// HttpHeaders当作一个服务
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export const baseUrl = 'http://221.232.79.35:5029/';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(public http: HttpClient) {}

  /// 封装返回rxjs类型的数据请求
  requestRxjsData(url: string, method: string = 'get', params: any = {}) {
    return new Observable<any>((observer) => {
      if (method.toLowerCase() === 'get') {
        /// 注意这里的get请求params参数对象外面还得包裹一层对象
        this.http.get(baseUrl + url, { params }).subscribe((response: any) => {
          observer.next(response);
        });
      } else {
        // post请求，这里只有get、post2种请求
        // 手动设置请求数据的类型
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json;charset=utf-8',
          }),
        };
        this.http
          .post(baseUrl + url, params, httpOptions)
          .subscribe((response: any) => {
            observer.next(response);
          });
      }
    });
  }
}
