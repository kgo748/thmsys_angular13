/*
臭氧及前体物变化  VocMs/Vocs/VocsNOxO38Day
*/
import { Component, OnInit } from '@angular/core';
import { VocService } from '../../services/voc.service';
// 引入 ECharts 主模块
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-vocs-nox-o38-day',
  templateUrl: './vocs-nox-o38-day.component.html',
  styleUrls: ['./vocs-nox-o38-day.component.scss']
})
export class VocsNOxO38DayComponent implements OnInit {
  // 创建图表的配置对象
  chartOption: EChartsOption = {};
  // 后台返回的提示信息
  chartDataDesc: string = '暂无数据';
  // 图表的显示与隐藏
  isShowChart: boolean = false;

  constructor(public vocService: VocService) { }

  ngOnInit(): void {
    this.initChartOption();
  }

  // 提供给子组件的查询按钮事件
  doSearch(e: any) {
    // console.log(e);
    // return false;
    const rxjsData = this.vocService.getVocsNOxO38DayData(e);
    rxjsData.subscribe((data) => {
      console.log(data);
      if (data && data.success === 200) {
        this.initChartOption();
        const chartData: any = new Object();
        chartData['dimensions']=data.data['dimensions'];
        chartData['source']=data.data['source'];
        // this.chartOption?.dataset[0]['dimensions']=data.data['dimensions'];
        // this.chartOption?.dataset[0]['source']=data.data['source'];
        // 忙的时候就使用万能的any;
        // (this.chartOption.dataset as any)[0]['dimensions']=data.data['dimensions'];
        (this.chartOption.dataset as any).push(chartData);
        this.isShowChart = true;
      } else {

      }
    });
  }

  // 柱形图和折线图；初始化图表配置对象
  initChartOption() {
    this.chartOption = {
      dataset: [
        // {
        //   dimensions: [],
        //   source: []
        // }
      ],
      xAxis: {
        type: 'category'
      },
      // 底部标题
      legend: { orient: 'horizontal', bottom: '0' },
      // 鼠标滑过显示数据
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      // 左右两边y轴的配置，只需一个y轴就只在里面配置一个对象
      yAxis: [
        {
          type: 'value',
          name: 'TVocs、NOx (ppb)',
          nameLocation: 'middle',
          nameTextStyle: {
            padding: [0, 0, 25, 0]
          },
          position: 'left'
        },
        {
          type: 'value',
          name: 'O₃ (ppb)',
          nameLocation: 'middle',
          nameTextStyle: {
            padding: [25, 0, 0, 0]
          },
          position: 'right'
        }
      ],
      // 数据展示方式的配置，是折线、饼图、柱子还是其它的等
      series: [
        {
          name: 'TVocs',
          type: 'line',
          datasetIndex: 0,
          lineStyle: {
            width: 3
          }
        },
        {
          name: 'NOx',
          type: 'line',
          datasetIndex: 0,
          lineStyle: {
            color: '#208627',
            width: 3
          }
        },
        {
          name: 'O3',
          type: 'bar',
          yAxisIndex: 1,
          datasetIndex: 0,
          itemStyle: {
            color: 'red'
          }
        }
      ]
    };
  }
}
