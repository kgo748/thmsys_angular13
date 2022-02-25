/*
Vocs和NOx小时数据查询   VocMs/Vocs/VocsNOxHour
 */
import { Component, OnInit } from '@angular/core';
import { VocService } from '../../services/voc.service';
// 引入 ECharts 主模块
import { EChartsOption } from 'echarts';

interface Person {
  DataTime: string;
  NOx: string;
  TVocs: number;
}

@Component({
  selector: 'app-vocs-nox-hour',
  templateUrl: './vocs-nox-hour.component.html',
  styleUrls: ['./vocs-nox-hour.component.scss']
})
export class VocsNOxHourComponent implements OnInit {
  // 创建图表的配置对象
  chartOption: EChartsOption = {};
  // 后台返回的提示信息
  chartDataDesc: string = '暂无数据';
  // 图表的显示与隐藏
  isShowChart: boolean = false;
  // table表格
  tableData: Person[] = [];
  tableDataDesc: string = '暂无数据';

  constructor(public vocService: VocService) { }

  ngOnInit(): void {
  }

  // 提供给子组件的查询按钮事件
  doSearch(e: any) {
    // console.log(e);
    // return false;
    const rxjsData = this.vocService.getVocsNOxHourData(e);
    rxjsData.subscribe((data) => {
      console.log(data);
      if (data && data.success === 200) {
        /// 清空表格和chart
        this.tableData = [];
        /// chart有时候渲染数据的时候，因为数据的先后顺序导致出现的这种问题，加一个小小的延时即可以解决
        // setTimeout(() => {
          this.initChartOption();
          (this.chartOption as any).dataset[0].source = data.data.chart;
          this.tableData=data.data.table;
        // }, 100);
        this.isShowChart = true;
      } else {
        this.chartDataDesc = data.desc;
        this.tableDataDesc = data.desc;
      }
    });
  }

  // 折线数据；初始化图表配置对象
  initChartOption() {
    this.chartOption = {
      dataset: [
        {
          source: [
            // [1.65853655, 44.755],
            // [2.09756112, 39.967],
            // [1.70731711, 40.783],
            // [1.85365856, 40.047],
            // [1.60975611, 53.63],
            // [1.60975611, 39.305],
            // [1.60975611, 38.007],
            // [2.04878044, 46.475],
            // [4.097561, 41.824],
            // [4.634146, 43.6840019],
            // [3.95121956, 43.081]
          ]
        },
        {
          transform: {
            type: 'ecStat:regression'
          }
        }
      ],
      xAxis: {
        // type: 'category'
        name: 'NOx'
        // splitLine: { show: false }
      },
      yAxis: {
        name: 'TVocs'
        // splitLine: { show: false }
      },
      legend: { orient: 'horizontal', bottom: '0' },
      // 鼠标滑过显示数据
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
        // formatter: (params) => {
        // console.log(params)
        // params.forEach(item => {
        //   item.
        // })
        // }
      },
      series: [
        {
          name: '散点',
          type: 'scatter',
          datasetIndex: 0
        },
        {
          name: '线性回归',
          type: 'line',
          datasetIndex: 1,
          symbolSize: 0.1,
          symbol: 'circle',
          lineStyle: {
            color: '#ee6666'
          },
          /* label: {
            show: true,
            fontSize: 16,
            formatter: (params) => {
              if (params.value[2]) {
                return params.value[2] + '\n\n' + 'R²=' + this.R2
              } else {
                return ''
              }
            }
          }, */
          encode: { label: 2, tooltip: 1 }
        }
      ]
    };
  }

}
