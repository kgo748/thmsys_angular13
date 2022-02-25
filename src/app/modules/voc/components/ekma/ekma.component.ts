/*
EKMA 曲线数据查询 VocMs/Vocs/Ekma
npm install plotly.js-dist-min
import Plotly from 'plotly.js-dist-min'
*/
import { Component, OnInit } from '@angular/core';
// import * as Plotly from 'plotly.js';
// import {Config, Data, Layout} from 'plotly.js';
import { VocService } from '../../services/voc.service';
// 引入 ECharts 主模块
// import { EChartsOption } from 'echarts';
type EChartsOption = echarts.EChartsOption;


@Component({
  selector: 'app-ekma',
  templateUrl: './ekma.component.html',
  styleUrls: ['./ekma.component.scss']
})
export class EkmaComponent implements OnInit {
  // 创建图表的配置对象
  chartOption: EChartsOption = {};
  // 后台返回的提示信息
  chartDataDesc: string = '暂无数据';
  // 图表的显示与隐藏
  isShowChart: boolean = false;

  constructor(public vocService: VocService) { }

  ngOnInit(): void {
    // console.log(Plotly);

  }

  // 提供给子组件的查询按钮事件
  doSearch(e: any) {
    // console.log(e);
    // return false;
    const rxjsData = this.vocService.getEkmapData(e);
    rxjsData.subscribe((data) => {
      console.log(data);
      if (data && data.success === 200) {

        this.isShowChart = true;
      } else {
        this.chartDataDesc = data.desc;
      }
    });
  }

}
