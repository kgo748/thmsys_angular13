/* 渲染echarts相关图表的组件 */
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
// 引入 ECharts 主模块
import { EChartsOption } from 'echarts';
import { BehaviorSubject } from 'rxjs';

interface IChartData {
  name: string;
  age: number;
}

@Component({
  selector: 'app-echarts',
  templateUrl: './echarts.component.html',
  styleUrls: ['./echarts.component.scss'],
})
export class EchartsComponent implements OnInit {
  /* 博客地址：https://blog.csdn.net/culiu9261/article/details/107541955
  angular数据异步问题_将异步数据传递给Angular 子组件的3种方法；
  解决方案1：使用* ngIf ( Solution 1: Use *ngIf )
    解决方案一是最简单的。 在Blogger组件中使用*ngIf延迟发布组件的初始化。 仅当posts变量具有值时，我们才会绑定post组件 。 然后，我们可以安全地在posts组件ngOnInit运行分组逻辑。
    由于分组逻辑在ngOnInit运行，这意味着它将仅运行一次。 如果将来有任何data更新（从Blogger组件传入），则不会再次触发。

  解决方案2：使用ngOnChanges ( Solution 2: Use ngOnChanges )
    ngOnChanges是一个生命周期挂钩， 只要它检测到输入属性的更改就运行。 这意味着可以确保每次数据输入值更改时，如果将代码放在此处，都会触发分组逻辑。
    关于此解决方案，我不喜欢的一件事是，我们失去了强类型，而需要使用魔术字符串“ data”。 如果将属性名称data更改为其他名称，则需要记住也要进行更改。

  解决方案3：使用RxJs BehaviorSubject ( Solution 3: Use RxJs BehaviorSubject )
    利用RxJs BehaviorSubject来检测更改；
    要为BehaviorSubject设置一个值，我们使用.next(theValue) 。 为了获得该值，我们使用.getValue()就.getValue()简单。
    然后在组件初始化期间，我们订阅_data ，侦听更改，并在发生更改时调用我们的分组逻辑。
    以记下observable和subject ，你需要取消，以避免性能问题和可能的内存泄漏。
    您可以在ngOnDestroy手动执行此操作，也可以使用一些运算符来指示observable subject ，并在满足特定条件时自行取消订阅。


  著名的问题伴随着著名的答案： 这取决于：
    如果您确定所做的更改仅运行一次，则使用*ngIf ，这非常简单。
    如果您要连续收听更改或需要保证，请使用ngOnChanges或BehaviorSubject 。

  */
  chartObj: any=null;
  /* ********************************************方式1： */
  /// 接收的父组件传递的数据
  // 创建图表的配置对象
  @Input()
  chartOption: EChartsOption = {
    // 这是接收父组件传过来的整个配置项并使用的方式；
    // 其实这里可以提供一些公共的配置项，那后面在设置配置项的时候就需要结构出 接收的父组件的配置项，再组装新的配置项并使用
  };
  // 后台返回的提示信息
  @Input()
  chartDataDesc: string = '暂无数据';
  // 图表容器的高度
  @Input()
  height: string = '600px';

  constructor() {}
  ngOnInit(): void {}

  /// 请注意， changes是一个键值对对象。 关键是input属性的名称
  // ngOnChanges是一个生命周期挂钩， 只要它检测到输入属性的更改就运行。
  // 这意味着可以确保每次数据输入值更改时，如果将代码放在此处，都会触发图表逻辑。
  ngOnChanges(change: SimpleChanges) {
    // console.log(change);
    if (change['chartOption']) {
      this.chartOption = change['chartOption'].currentValue;
    }
  }

  /* ********************************************方式2： */
  /* /// 接收的父组件的值
  // 创建图表的配置对象
  @Input()
  chartOption: EChartsOption = {};
  // 后台返回的提示信息
  @Input()
  chartDataDesc: string = '暂无数据';
  // 图表容器的高度
  @Input()
  height: string = '600px';
  private _data=new BehaviorSubject<[]>([]);
  // 图表数据
  @Input()
  set chartData(value){
    // 为BehaviorSubject设置一个值，我们使用.next(theValue)
    this._data.next(value);
  }
  get chartData(){
    // 获得该值，我们使用.getValue()
    return this._data.getValue();
  }

  constructor() { }

  ngOnInit(): void {
    // 在组件初始化期间，我们订阅_data，侦听更改，并在发生更改时调用我们的逻辑
    this._data
    // .takeWhile(()=>!this._data) //??? 报错 // 完成后它将自动取消订阅。 还有其他自动取消订阅的方法，例如take ， take Util ，但这超出了本主题。
    .subscribe((res: any)=>{
      console.log(res, this.chartData);
      this.chartOption.dataset=this.chartData;
    })
  }

  ngOnDestroy(): void {
    this._data.unsubscribe();
  } */

  /* ********************************************公共部分 */
  onChartInit(e: any) {
    console.log(e);
    // e 是定义的用于接受echart的变量
    this.chartObj = e;
  }

  ngOnDestroy(): void {
    if (!this.chartObj) {
      return;
    }
    /* 释放图表实例 clear() */
    this.chartObj.dispose();
    /* dispose 会释放内部占用的一些资源和事件绑定，但是解除实例的引用我们是做不到的，所以需要重新赋值为null */
    this.chartObj = null;
  }
}
