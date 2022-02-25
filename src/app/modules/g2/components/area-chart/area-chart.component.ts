import { Component, OnInit } from '@angular/core';
// import * as G2 from '@antv/g2';
import { Chart } from '@antv/g2';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss'],
})
export class AreaChartComponent implements OnInit {
  size: 'small' | 'middle' | 'large' | number = 'middle';

  // 数结构上的mn号
  value?: string;
  // 数结构数据
  nodes = [
    {
      key: '湖北',
      title: '湖北',
      children: [
        {
          key: '武汉',
          title: '武汉',
          children: [
            {
              key: 'VOC410800001',
              title: '测试',
              children: [],
            },
          ],
        },
      ],
    },
  ];
  // 时间
  date: Date[] = [new Date(), new Date()];
  // chart对象
  chart: any=null;
  // 图表数据
  data: any = [];
  averages: any = [];
  // 是否显示折线图表
  isShowChart: boolean = false;
  // 后台返回的提示信息
  chartDataDesc: string = '暂无数据';

  constructor() {}

  ngOnInit(): void {
    // this.isShowChart=true;
    // 初始化图表数据
    this.data = [
      { time: 1246406400000, temperature: [14.3, 27.7] },
      { time: 1246492800000, temperature: [14.5, 27.8] },
      { time: 1246579200000, temperature: [15.5, 29.6] },
      { time: 1246665600000, temperature: [16.7, 30.7] },
      { time: 1246752000000, temperature: [16.5, 25.0] },
      { time: 1246838400000, temperature: [17.8, 25.7] },
    ];

    this.averages = [
      { time: 1246406400000, temperature: 21.5 },
      { time: 1246492800000, temperature: 22.1 },
      { time: 1246579200000, temperature: 23 },
      { time: 1246665600000, temperature: 23.8 },
      { time: 1246752000000, temperature: 21.4 },
      { time: 1246838400000, temperature: 21.3 },
    ];

  }

  ngAfterViewInit(): void {
    this.initAreaChart();
  }


  initAreaChart() {

    // 1.创建 Chart 图表对象，指定图表所在的容器 id、图表的宽高、边距等信息；
    // this.chart = new G2.Chart(); /// 这种方式创建也可以
    this.chart = new Chart({
      container: 'container',// 容器id
      autoFit: true,
      height: 500,
    });

    // 2.chart.data() 载入图表数据源；
    // 3.使用图形语法进行图表的绘制；
    this.chart.scale({
      temperature: {
        sync: true,
        nice: true,
      },
      time: {
        type: 'time',
        mask: 'MM-DD',
        nice: true,
        tickInterval: 24 * 3600 * 1000 * 2,
      },
    });
    this.chart.tooltip({
      shared: true,
      showMarkers: false,
      showCrosshairs: true,
    });

    const v1 = this.chart.createView({
      padding: 32,
    });
    v1.data(this.data);
    v1.scale('temperature', {
      alias: '温度区间',
    });
    v1.area().position('time*temperature');

    const v2 = this.chart.createView({
      padding: 32,
    });
    v2.data(this.averages);
    v2.axis(false);
    v2.scale('temperature', {
      alias: '平均温度',
    });
    v2.line().position('time*temperature');
    v2.point().position('time*temperature').size(4).shape('circle').style({
      stroke: '#fff',
      lineWidth: 1,
      fillOpacity: 1,
    });
    // 4.
    this.chart.render();
  }

  ngOnDestroy(): void {
    this.chart.destroy();
    this.chart=null;
  }
}
