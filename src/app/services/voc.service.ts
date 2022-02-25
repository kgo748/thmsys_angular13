/* VOC模块的服务 */
import { Injectable } from '@angular/core';
// HttpHeaders当作一个服务
import { HttpClient } from '@angular/common/http';
import {requestRxjsData} from '../utils/requestData';

@Injectable({
  providedIn: 'root'
})
export class VocService {

  constructor(public http: HttpClient) { }

  // 单选站点树
  getSiteInfoData(){
    const token=JSON.parse(localStorage.getItem('userinfo')||'').token;
    return requestRxjsData(this.http, 'VocMs/Vocs/SiteInfo', 'get', {token});
  }

  // Vocs和NOx小时数据查询
  getVocsNOxHourData(params: any){
    return requestRxjsData(this.http, 'VocMs/Vocs/VocsNOxHour', 'get', params);
  }

}
