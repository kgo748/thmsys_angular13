/*
VOCs化学组成  VocMs/Vocs/TVocsHourGroupM
*/
import { Component, OnInit } from '@angular/core';
import { VocService } from '../../services/voc.service';
// 引入 ECharts 主模块
// import { EChartsOption } from 'echarts';
type EChartsOption = echarts.EChartsOption;

@Component({
  selector: 'app-tvocs-hour-group-m',
  templateUrl: './tvocs-hour-group-m.component.html',
  styleUrls: ['./tvocs-hour-group-m.component.scss'],
})
export class TVocsHourGroupMComponent implements OnInit {
  // 创建图表的配置对象
  chartOption: EChartsOption = {};
  // 后台返回的提示信息
  chartDataDesc: string = '暂无数据';
  // 图表的显示与隐藏
  isShowChart: boolean = false;

  constructor(
    public vocService: VocService
  ) { }

  ngOnInit(): void { }

  // 提供给子组件的查询按钮事件
  doSearch(e: any) {
    // console.log(e);
    // return false;
    const rxjsData = this.vocService.getTVocsHourGroupMData(e);
    rxjsData.subscribe((data) => {
      console.log(data);
      if (data && data.success === 200) {
        // 清空chart， myChart.clearr();
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
      // 配置数据
      dataset: [
        // {
        //   dimensions: [],
        //   source: []
        // },
        // {
        //   dimensions: [],
        //   source: []
        // }
      ],
      // 位置配置
      grid: [
        { bottom: '55%', show: true, height: '50%' }
      ],
      // 底部标题
      legend: { orient: 'horizontal', bottom: '0' },
      // 鼠标滑过显示数据
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      toolbox: {
        feature: {
          saveAsImage: {
            type: 'png'
          }
        }
      },
      // 数据排列方式
      xAxis: { type: 'category' },
      // 左右两边y轴的配置(值为数组)，只需一个y轴就只在里面(对象)配置一个对象
      yAxis: { gridIndex: 0 },
      // 数据展示方式的配置，是折线、饼图、柱子还是其它的等
      series: [
        // 有几条折线就配置几个line对象
        {
          type: 'line',
          stack: 'Total',
          datasetIndex: 0,
          lineStyle: {
            width: 0
          },
          // 是否平滑折线
          smooth: true,
          showSymbol: false,
          // xAxisIndex: 0,
          // yAxisIndex: 0,
          areaStyle: {

          }
        },
        {
          type: 'line',
          stack: 'Total',
          datasetIndex: 0,
          lineStyle: {
            width: 0
          },
          smooth: true,
          showSymbol: false,
          // xAxisIndex: 0,
          // yAxisIndex: 0,
          areaStyle: {}
        },
        {
          type: 'line',
          stack: 'Total',
          datasetIndex: 0,
          lineStyle: {
            width: 0
          },
          smooth: true,
          showSymbol: false,
          // xAxisIndex: 0,
          // yAxisIndex: 0,
          areaStyle: {}
        },
        {
          type: 'line',
          stack: 'Total',
          datasetIndex: 0,
          lineStyle: {
            width: 0
          },
          smooth: true,
          showSymbol: false,
          // xAxisIndex: 0,
          // yAxisIndex: 0,
          areaStyle: {}
        },
        {
          type: 'line',
          stack: 'Total',
          datasetIndex: 0,
          lineStyle: {
            width: 0
          },
          smooth: true,
          showSymbol: false,
          // xAxisIndex: 0,
          // yAxisIndex: 0,
          areaStyle: {}
        },
        {
          type: 'line',
          stack: 'Total',
          datasetIndex: 0,
          lineStyle: {
            width: 0
          },
          smooth: true,
          showSymbol: false,
          // xAxisIndex: 0,
          // yAxisIndex: 0,
          areaStyle: {}
        },
        {
          type: 'pie',
          radius: '40%',
          center: ['50%', '75%'],
          datasetIndex: 1,
          // encode: {
          //   itemName: 'name',
          //   value: 'value'
          //   tooltip: ['name', 'value']
          // },
          label: {
            formatter: '{b}: {@value} ({d}%)'
          }
        }
      ]
    };
  }

}
