/* VOC模块的服务 */
import { Injectable } from '@angular/core';
// HttpHeaders当作一个服务
import { HttpClient } from '@angular/common/http';
import {requestRxjsData} from '../../../utils/requestData';

@Injectable({
  providedIn: 'root'
})
export class VocService {

  constructor(public http: HttpClient) { }

  // VOCs化学组成 TVocsHourGroupM
  getTVocsHourGroupMData(params: any){
    return requestRxjsData(this.http, 'VocMs/Vocs/TVocsHourGroupM', 'get', params);
  }

  // 臭氧及前体物变化  VocMs/Vocs/VocsNOxO38Day
  getVocsNOxO38DayData(params: any){
    return requestRxjsData(this.http, 'VocMs/Vocs/VocsNOxO38Day', 'get', params);
  }

  // Vocs和NOx小时数据查询  VocMs/Vocs/VocsNOxHour
  getVocsNOxHourData(params: any){
    return requestRxjsData(this.http, 'VocMs/Vocs/VocsNOxHour', 'get', params);
  }

  // 关键物质排名   VocMs/Vocs/TVocsTop
  getTVocsTopData(params: any){
    return requestRxjsData(this.http, 'VocMs/Vocs/TVocsTop', 'get', params);
  }

  // EKMA 曲线数据查询 VocMs/Vocs/Ekma
  getEkmapData(params: any){
    return requestRxjsData(this.http, 'VocMs/Vocs/Ekma', 'get', params);
  }

}
