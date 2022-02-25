/*
VOCs化学组成  VocMs/Vocs/TVocsHourGroupM
图表渲染完整版写法，没有使用提取的公共组件。
*/
import { Component, OnInit } from '@angular/core';
import { ViewChild, ViewContainerRef, ElementRef } from '@angular/core';
import { format } from 'date-fns';
import { NzMessageService } from 'ng-zorro-antd/message';
import { VocService } from '../../services/voc.service';
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts'; // 方式1里使用
// 引入 ECharts 主模块
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-tvocs-hour-group-mcomplete',
  templateUrl: './tvocs-hour-group-mcomplete.component.html',
  styleUrls: ['./tvocs-hour-group-mcomplete.component.scss'],
})
export class TVocsHourGroupMCompleteComponent implements OnInit {
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

  /// 创建折线图对象，方式1
  chartObj1: any = null; /// echarts整个对象
  /// 创建折线图对象，方式2
  chartOption2: EChartsOption = {};
  /// 创建折线图对象，方式3；chartOption3是echart的option配置对象
  chartObj3: any = null; /// echarts整个对象
  chartOption3: EChartsOption = {}; // echarts的配置对象
  // 是否显示折线图表
  isShowChart: boolean = false;
  // 后台返回的提示信息
  chartDataDesc: string = '暂无数据';

  //// 获取 方式1创建图表的容器；获取的容器对象在 ngif 中，ngif为true时才能获取到元素，必须将操作包装到setTimeout(()=>{},1)中
  /// 获取DOM对象方式1
  // @ViewChild('chartBox', { read: ViewContainerRef }) chartBox: any;
  /// 获取DOM对象方式2，还是得必须将操作包装到setTimeout(()=>{},1)中
  /* chartBox: any;
  @ViewChild('chartBox', { static: false }) set content(content: ElementRef) {
    if(content) { // initially setter gets called with undefined
      this.chartBox = content;
    }
  } */
  // 其实初始化chart配置对象时加了定时器也就不用上面这么麻烦的编码了
  @ViewChild('chartBox') chartBox: any;

  constructor(
    public vocService: VocService,
    private message: NzMessageService
  ) {
    setTimeout(() => {
      this.value = 'VOC410800001';
    }, 10);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    // 组件销毁前
    /* 释放图表实例 clear() */
    // this.chartObj1.dispose();
    /* dispose 会释放内部占用的一些资源和事件绑定，但是解除实例的引用我们是做不到的，所以需要重新赋值为null */
    // this.chartObj1 = null;


  }

  // 提供给子组件的查询按钮事件
  doSearch() {
    const params = this.getParams();
    // return false;
    const rxjsData = this.vocService.getTVocsHourGroupMData(params);
    rxjsData.subscribe((data) => {
      console.log(data);
      if (data && data.success === 200) {
        this.isShowChart = true;
        this.initChartOption1(data.data);
        this.initChartOption2(data.data);
        this.initChartOption3(data.data);
      } else {
        this.chartDataDesc = data.desc;
      }
    });
  }

  // 方式3使用；定义方法获取echart对象
  // html：(chartInit)="onChartInit($event)" 将会把当前生成的echart对象当作参数传入到onChartInit()方法中
  /// 这个原本是一上来就执行了，但echarts容器放在ngif里后，获取不到echarts对象，后面 this.chartObj3.setOption 就会报错，所以不用这个的话就和方式2一样的。
  onChartInit3(e: any) {
    // console.log(e);
    // e 是定义的用于接受echart的变量
    this.chartObj3 = e;
  }

  // 折线数据；初始化表格对象，方式1
  initChartOption1(dataset: any) {
     // 清空
    //  this.chartObj1.clear();
    // console.log(this.chartBox);// undefined
    // return false;
    /// 定时器解决：Uncaught Error: setOption should not be called during main process
    setTimeout(() => {
      var chartBoxDom: any = document.getElementById('chartBox');// 使用原生方式获取的echarts容器DOM
      var myChart = echarts.init(chartBoxDom);
      // var myChart = echarts.init(this.chartBox.nativeElement);// 使用angular方式获取的echarts容器DOM
      // console.log(this.chartBox.nativeElement, chartBoxDom);


      var option: EChartsOption = {
        dataset /* : [
          // {
          //   dimensions: [],
          //   source: []
          // }
        ] */,
        grid: [{ bottom: '55%', show: true, height: '50%' }],
        legend: { orient: 'horizontal', bottom: '0' },
        xAxis: { type: 'category' },
        yAxis: { gridIndex: 0 },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
          },
        },
        series: [
          // 有几条折线就配置几个line对象
          {
            type: 'line',
            stack: 'Total',
            datasetIndex: 0,
            lineStyle: {
              width: 0,
            },
            smooth: true,
            showSymbol: false,
            // xAxisIndex: 0,
            // yAxisIndex: 0,
            areaStyle: {},
          },
          {
            type: 'line',
            stack: 'Total',
            datasetIndex: 0,
            lineStyle: {
              width: 0,
            },
            smooth: true,
            showSymbol: false,
            // xAxisIndex: 0,
            // yAxisIndex: 0,
            areaStyle: {},
          },
          {
            type: 'line',
            stack: 'Total',
            datasetIndex: 0,
            lineStyle: {
              width: 0,
            },
            smooth: true,
            showSymbol: false,
            // xAxisIndex: 0,
            // yAxisIndex: 0,
            areaStyle: {},
          },
          {
            type: 'line',
            stack: 'Total',
            datasetIndex: 0,
            lineStyle: {
              width: 0,
            },
            smooth: true,
            showSymbol: false,
            // xAxisIndex: 0,
            // yAxisIndex: 0,
            areaStyle: {},
          },
          {
            type: 'line',
            stack: 'Total',
            datasetIndex: 0,
            lineStyle: {
              width: 0,
            },
            smooth: true,
            showSymbol: false,
            // xAxisIndex: 0,
            // yAxisIndex: 0,
            areaStyle: {},
          },
          {
            type: 'line',
            stack: 'Total',
            datasetIndex: 0,
            lineStyle: {
              width: 0,
            },
            smooth: true,
            showSymbol: false,
            // xAxisIndex: 0,
            // yAxisIndex: 0,
            areaStyle: {},
          },
          {
            type: 'pie',
            radius: '40%',
            center: ['50%', '70%'],
            datasetIndex: 1,
            // encode: {
            //   itemName: 'name',
            //   value: 'value'
            //   tooltip: ['name', 'value']
            // },
            label: {
              formatter: '{b}: {@value} ({d}%)',
            },
          },
        ],
      };
      /// 这里使用全局的echart对象就报错了
      myChart.on('updateAxisPointer', function (event: any) {
        const xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
          const dimension = xAxisInfo.value + 1;
          myChart.setOption<echarts.EChartsOption>({
            series: {
              id: 'pie',
              label: {
                formatter: '{b}: {@[' + dimension + ']} ({d}%)',
              },
              encode: {
                value: dimension,
                tooltip: dimension,
              },
            },
          });
        }
      });
      myChart.setOption(option);
    }, 1);
  }

  // 折线数据；初始化表格对象，方式2---推荐
  initChartOption2(dataset: any) {
    // 清空
    // this.chartOption2 = {};/// 并无多大意义，后面赋值就是覆盖了原来的配置项
    // 这种方式不加定时器也可以哈，就是不知道数据多了会不会出问题呢？？？
    this.chartOption2 = {
      dataset /* : [
        // {
        //   dimensions: [],
        //   source: []
        // }
      ] */,
      grid: [{ bottom: '55%', show: true, height: '50%' }],
      xAxis: { type: 'category' },
      yAxis: { gridIndex: 0 },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
        },
      },
      series: [
        // 有几条折线就配置几个line对象
        {
          type: 'line',
          stack: 'Total',
          datasetIndex: 0,
          lineStyle: {
            width: 0,
          },
          smooth: true,
          showSymbol: false,
          // xAxisIndex: 0,
          // yAxisIndex: 0,
          areaStyle: {},
        },
        {
          type: 'line',
          stack: 'Total',
          datasetIndex: 0,
          lineStyle: {
            width: 0,
          },
          smooth: true,
          showSymbol: false,
          // xAxisIndex: 0,
          // yAxisIndex: 0,
          areaStyle: {},
        },
        {
          type: 'line',
          stack: 'Total',
          datasetIndex: 0,
          lineStyle: {
            width: 0,
          },
          smooth: true,
          showSymbol: false,
          // xAxisIndex: 0,
          // yAxisIndex: 0,
          areaStyle: {},
        },
        {
          type: 'line',
          stack: 'Total',
          datasetIndex: 0,
          lineStyle: {
            width: 0,
          },
          smooth: true,
          showSymbol: false,
          // xAxisIndex: 0,
          // yAxisIndex: 0,
          areaStyle: {},
        },
        {
          type: 'line',
          stack: 'Total',
          datasetIndex: 0,
          lineStyle: {
            width: 0,
          },
          smooth: true,
          showSymbol: false,
          // xAxisIndex: 0,
          // yAxisIndex: 0,
          areaStyle: {},
        },
        {
          type: 'line',
          stack: 'Total',
          datasetIndex: 0,
          lineStyle: {
            width: 0,
          },
          smooth: true,
          showSymbol: false,
          // xAxisIndex: 0,
          // yAxisIndex: 0,
          areaStyle: {},
        },
        {
          type: 'pie',
          radius: '45%',
          center: ['50%', '75%'],
          datasetIndex: 1,
          // encode: {
          //   itemName: 'name',
          //   value: 'value'
          //   tooltip: ['name', 'value']
          // },
          label: {
            formatter: '{b}: {@value} ({d}%)',
          },
        },
      ],
    };
  }

  // 折线数据；初始化表格对象，方式3；数据切换之后调用此函数来渲染echarts
  initChartOption3(dataset: any) {
    // console.log(this.chartObj3);// 容器在ngif里就是 undefined 了

    // 清空
    // this.chartOption3={};
    // 这种方式不加定时器也可以哈，就是不知道数据多了会不会出问题呢？？？
    this.chartOption3 = {
      dataset /* : [
        // {
        //   dimensions: [],
        //   source: []
        // }
      ] */,
      grid: [{ bottom: '55%', show: true, height: '50%' }],
      xAxis: { type: 'category' },
      yAxis: { gridIndex: 0 },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
        },
      },
      series: [
        // 有几条折线就配置几个line对象
        {
          type: 'line',
          stack: 'Total',
          datasetIndex: 0,
          lineStyle: {
            width: 0,
          },
          smooth: true,
          showSymbol: false,
          // xAxisIndex: 0,
          // yAxisIndex: 0,
          areaStyle: {},
        },
        {
          type: 'line',
          stack: 'Total',
          datasetIndex: 0,
          lineStyle: {
            width: 0,
          },
          smooth: true,
          showSymbol: false,
          // xAxisIndex: 0,
          // yAxisIndex: 0,
          areaStyle: {},
        },
        {
          type: 'line',
          stack: 'Total',
          datasetIndex: 0,
          lineStyle: {
            width: 0,
          },
          smooth: true,
          showSymbol: false,
          // xAxisIndex: 0,
          // yAxisIndex: 0,
          areaStyle: {},
        },
        {
          type: 'line',
          stack: 'Total',
          datasetIndex: 0,
          lineStyle: {
            width: 0,
          },
          smooth: true,
          showSymbol: false,
          // xAxisIndex: 0,
          // yAxisIndex: 0,
          areaStyle: {},
        },
        {
          type: 'line',
          stack: 'Total',
          datasetIndex: 0,
          lineStyle: {
            width: 0,
          },
          smooth: true,
          showSymbol: false,
          // xAxisIndex: 0,
          // yAxisIndex: 0,
          areaStyle: {},
        },
        {
          type: 'line',
          stack: 'Total',
          datasetIndex: 0,
          lineStyle: {
            width: 0,
          },
          smooth: true,
          showSymbol: false,
          // xAxisIndex: 0,
          // yAxisIndex: 0,
          areaStyle: {},
        },
        {
          type: 'pie',
          radius: '45%',
          center: ['50%', '75%'],
          datasetIndex: 1,
          // encode: {
          //   itemName: 'name',
          //   value: 'value'
          //   tooltip: ['name', 'value']
          // },
          label: {
            formatter: '{b}: {@value} ({d}%)',
          },
        },
      ],
    };
    // console.log(this.chartOption3);
    /// 不要这行代码echarts也渲染成功了；但echarts容器在ngif里这里就会报错了
    // this.chartObj3.setOption(this.chartOption3, true);
  }

  // 获取参数
  getParams() {
    const mn = this.value;
    if (mn === undefined || mn === null || mn === '') {
      this.message.warning('请选择一个站点', {
        nzDuration: 3000,
      });
      return;
    }
    const params = {
      token: JSON.parse(localStorage.getItem('userinfo') || '').token,
      mn,
      stime: format(this.date[0], 'yyyy-MM-dd'),
      etime: format(this.date[1], 'yyyy-MM-dd'),
      // stime: '2021-11-01',
      // etime: '2021-11-10'
    };
    return params;
  }
}
