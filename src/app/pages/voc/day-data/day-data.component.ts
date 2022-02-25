import { Component, OnInit } from '@angular/core';
import { myShareDataClass } from '../../../utils/myShareDataClass';
import { VocService } from '../../../services/voc.service';
import { format } from 'date-fns';
import { NzMessageService } from 'ng-zorro-antd/message';
// 引入 ECharts 主模块
import { EChartsOption } from 'echarts';

interface Person {
  DataTime: string;
  NOx: string;
  TVocs: number;
}

@Component({
  selector: 'app-day-data',
  templateUrl: './day-data.component.html',
  styleUrls: ['./day-data.component.scss'],
})
export class DayDataComponent implements OnInit {
  value?: string;
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
  date: Date[] = [new Date(), new Date()];

  tableData: Person[] = [];
  tableDataDesc: string = '暂无数据';

  // 创建折线图对象，测试用
  chartOption1: EChartsOption = {};
  chartOption2: EChartsOption = {};

  constructor(
    public shareData: myShareDataClass,
    public vocService: VocService,
    private message: NzMessageService
  ) {}

  ngOnInit(): void {
    // console.log(this.shareData.user);
    // 站点树数据
    /* const rxjsData = this.vocService.getSiteInfoData();
    rxjsData.subscribe((data) => {
      console.log(data);
      if (data && data.success === 200) {
      }
    }); */

    setTimeout(() => {
      this.value = 'VOC410800001';
    }, 10);
  }

  onChange($event: string): void {
    console.log($event);
  }

  onChangeTime(result: Date[]): void {
    console.log('onChange: ', result);
  }

  // 查询按钮事件
  doSearch() {
    this.tableData = [];
    const params = this.getParams();
    console.log(params);
    // return false;
    const rxjsData = this.vocService.getVocsNOxHourData(params);
    rxjsData.subscribe((data) => {
      console.log(data);
      if (data && data.success === 200) {
        this.tableData = data.data.table;
        // 在获取到表格数据时调用初始化方法
        this.initChart1();
      } else {
        this.tableDataDesc = data.desc;
      }
    });
  }

  // 测试折线数据；初始化表格对象
  initChart1() {
    this.chartOption1 = {
      title: {
        text: 'ECharts 入门示例',
      },
      tooltip: {},
      legend: {
        data: ['销量'],
      },
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    };
  }

  getParams() {
    const mn = this.value;
    if (mn === undefined || mn === null || mn === '') {
      this.message.warning('请选择一个站点', {
        nzDuration: 3000,
      });
      return false;
    }
    const params = {
      token: JSON.parse(localStorage.getItem('userinfo') || '').token,
      mn,
      stime: format(this.date[0], 'yyyy-MM-dd'),
      etime: format(this.date[1], 'yyyy-MM-dd'),
    };

    return params;
  }
}
