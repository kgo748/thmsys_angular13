import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss']
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
  chart: any;
  // 图表数据

  // 是否显示折线图表
  isShowChart: boolean = false;
  // 后台返回的提示信息
  chartDataDesc: string = '暂无数据';

  forceFit: boolean = true;
  height: number = 400;
  data: any = [
    { "time": 1246406400000, "temperature": [ 14.3, 27.7 ] },
    { "time": 1246492800000, "temperature": [ 14.5, 27.8 ] },
    { "time": 1246579200000, "temperature": [ 15.5, 29.6 ] },
    { "time": 1246665600000, "temperature": [ 16.7, 30.7 ] },
    { "time": 1246752000000, "temperature": [ 16.5, 25.0 ] },
    { "time": 1246838400000, "temperature": [ 17.8, 25.7 ] },
    { "time": 1246924800000, "temperature": [ 13.5, 24.8 ] },
    { "time": 1247011200000, "temperature": [ 10.5, 21.4 ] },
    { "time": 1247097600000, "temperature": [ 9.2, 23.8 ] },
    { "time": 1247184000000, "temperature": [ 11.6, 21.8 ] },
    { "time": 1247270400000, "temperature": [ 10.7, 23.7 ] },
    { "time": 1247356800000, "temperature": [ 11.0, 23.3 ] },
    { "time": 1247443200000, "temperature": [ 11.6, 23.7 ] },
    { "time": 1247529600000, "temperature": [ 11.8, 20.7 ] },
    { "time": 1247616000000, "temperature": [ 12.6, 22.4 ] },
    { "time": 1247702400000, "temperature": [ 13.6, 19.6 ] },
    { "time": 1247788800000, "temperature": [ 11.4, 22.6 ] },
    { "time": 1247875200000, "temperature": [ 13.2, 25.0 ] },
    { "time": 1247961600000, "temperature": [ 14.2, 21.6 ] },
    { "time": 1248048000000, "temperature": [ 13.1, 17.1 ] },
    { "time": 1248134400000, "temperature": [ 12.2, 15.5 ] },
    { "time": 1248220800000, "temperature": [ 12.0, 20.8 ] },
    { "time": 1248307200000, "temperature": [ 12.0, 17.1 ] },
    { "time": 1248393600000, "temperature": [ 12.7, 18.3 ] },
    { "time": 1248480000000, "temperature": [ 12.4, 19.4 ] },
    { "time": 1248566400000, "temperature": [ 12.6, 19.9 ] },
    { "time": 1248652800000, "temperature": [ 11.9, 20.2 ] },
    { "time": 1248739200000, "temperature": [ 11.0, 19.3 ] },
    { "time": 1248825600000, "temperature": [ 10.8, 17.8 ] },
    { "time": 1248912000000, "temperature": [ 11.8, 18.5 ] },
    { "time": 1248998400000, "temperature": [ 10.8, 16.1 ] },
  ];
  averages: any = [
    { "time": 1246406400000, "temperature": 21.5 },
    { "time": 1246492800000, "temperature": 22.1 },
    { "time": 1246579200000, "temperature": 23 },
    { "time": 1246665600000, "temperature": 23.8 },
    { "time": 1246752000000, "temperature": 21.4 },
    { "time": 1246838400000, "temperature": 21.3 },
    { "time": 1246924800000, "temperature": 18.3 },
    { "time": 1247011200000, "temperature": 15.4 },
    { "time": 1247097600000, "temperature": 16.4 },
    { "time": 1247184000000, "temperature": 17.7 },
    { "time": 1247270400000, "temperature": 17.5 },
    { "time": 1247356800000, "temperature": 17.6 },
    { "time": 1247443200000, "temperature": 17.7 },
    { "time": 1247529600000, "temperature": 16.8 },
    { "time": 1247616000000, "temperature": 17.7 },
    { "time": 1247702400000, "temperature": 16.3 },
    { "time": 1247788800000, "temperature": 17.8 },
    { "time": 1247875200000, "temperature": 18.1 },
    { "time": 1247961600000, "temperature": 17.2 },
    { "time": 1248048000000, "temperature": 14.4 },
    { "time": 1248134400000, "temperature": 13.7 },
    { "time": 1248220800000, "temperature": 15.7 },
    { "time": 1248307200000, "temperature": 14.6 },
    { "time": 1248393600000, "temperature": 15.3 },
    { "time": 1248480000000, "temperature": 15.3 },
    { "time": 1248566400000, "temperature": 15.8 },
    { "time": 1248652800000, "temperature": 15.2 },
    { "time": 1248739200000, "temperature": 14.8 },
    { "time": 1248825600000, "temperature": 14.4 },
    { "time": 1248912000000, "temperature": 15 },
    { "time": 1248998400000, "temperature": 13.6 },
  ];

  scale = [{
    dataKey: 'temperature',
    sync: true,
  }, {
    dataKey: 'time',
    type: 'time',
    mask: 'MM-DD',
    tickInterval: 24 * 3600 * 1000 * 2,
  }];

  pointStyle = {
    stroke: '#fff',
    lineWidth: 1,
    fillOpacity: 1,
  };

  tooltipOpts = {
    crosshairs: {
      type: 'line'
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

  initChart(){


  }

}
