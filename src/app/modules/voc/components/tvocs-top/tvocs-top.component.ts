/*
关键物质排名  VocMs/Vocs/TVocsTop
*/
import { Component, OnInit } from '@angular/core';
import { VocService } from '../../services/voc.service';
// 引入 ECharts 主模块
// import { EChartsOption } from 'echarts';
type EChartsOption = echarts.EChartsOption;

@Component({
  selector: 'app-tvocs-top',
  templateUrl: './tvocs-top.component.html',
  styleUrls: ['./tvocs-top.component.scss']
})
export class TVocsTopComponent implements OnInit {
  // 创建图表的配置对象
  chartOption: EChartsOption = {};
  // 后台返回的提示信息
  chartDataDesc: string = '暂无数据';
  // 图表的显示与隐藏
  isShowChart: boolean = false;

  constructor(public vocService: VocService) { }

  ngOnInit(): void {
  }

  // 提供给子组件的查询按钮事件
  doSearch(e: any) {
    // console.log(e);
    // return false;
    const rxjsData = this.vocService.getTVocsTopData(e);
    rxjsData.subscribe((data) => {
      console.log(data);
      if (data && data.success === 200) {
        this.initChartOption();
        this.chartOption.dataset = data.data;
        this.isShowChart = true;
      } else {
        this.chartDataDesc = data.desc;
      }
    });
  }

  // 折线数据；初始化图表配置对象
  initChartOption() {
    this.chartOption = {
      title: [
        {
          text: 'VOCs浓度',
          left: '20%',
          top: 'center',
          textStyle: {
            fontSize: 15
          }
        },
        {
          text: '臭氧生成潜势(OFP)',
          right: '18%',
          top: 'center',
          textStyle: {
            fontSize: 15
          }
        },
        {
          text: '二次有机气溶胶生成潜势(SOAP)',
          left: '15%',
          bottom: '0',
          textStyle: {
            fontSize: 15
          }
        },
        {
          text: '致癌风险',
          right: '20%',
          bottom: '0',
          textStyle: {
            fontSize: 15
          }
        }
      ],
      dataset: [
        {
          dimensions: [
            'name',
            'value'
          ],
          source: [
            {
              name: '烷烃',
              value: 28.2
            },
            {
              name: '烯烃',
              value: 6
            },
            {
              name: '炔烃',
              value: 3.9
            },
            {
              name: '芳香烃',
              value: 6.9
            },
            {
              name: 'OVOCs',
              value: 5.7
            },
            {
              name: '卤代烃',
              value: 6.6
            }
          ]
        }
      ],
      legend: {
        show: false
      },
      grid: [
        { left: '8%', top: '5%', width: '40%', height: '40%' },
        { right: '3%', top: '5%', width: '40%', height: '40%' },
        { left: '8%', bottom: '8%', width: '40%', height: '40%' },
        { right: '3%', bottom: '8%', width: '40%', height: '40%' }
      ],
      xAxis: [
        { gridIndex: 0, type: 'value' },
        { gridIndex: 1, type: 'value' },
        { gridIndex: 2, type: 'value' },
        { gridIndex: 3, type: 'value' }
      ],
      yAxis: [
        { gridIndex: 0, type: 'category', inverse: true },
        { gridIndex: 1, type: 'category', inverse: true },
        { gridIndex: 2, type: 'category', inverse: true },
        { gridIndex: 3, type: 'category', inverse: true }
      ],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        },
        formatter: (params: any) => {
          // console.log(params);
          // let its = ''
          // params.forEach((item: { value: { cas: any; ppb: any; }; }) => {
          //   its = `${item.value.cas}-${item.value.ppb}`
          // })
          // return its
          return `${params[0].value.cas}: ${params[0].value.ppb}`;
        }
      },
      series: [
        {
          type: 'bar',
          xAxisIndex: 0,
          yAxisIndex: 0,
          datasetIndex: 0,
          itemStyle: {
            color: '#5470c6'
          }
        },
        {
          type: 'bar',
          xAxisIndex: 1,
          yAxisIndex: 1,
          datasetIndex: 1,
          itemStyle: {
            color: '#91cc75'
          }
        },
        {
          type: 'bar',
          xAxisIndex: 2,
          yAxisIndex: 2,
          datasetIndex: 2,
          itemStyle: {
            color: '#fac858'
          }
        },
        {
          type: 'bar',
          xAxisIndex: 3,
          yAxisIndex: 3,
          datasetIndex: 3,
          itemStyle: {
            color: '#ee6666'
          }
        }
      ]
    };
  }

}
