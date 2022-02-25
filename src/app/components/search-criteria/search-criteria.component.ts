/* 搜索条件组件 */
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { format } from 'date-fns';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.scss']
})
export class SearchCriteriaComponent implements OnInit {
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

  @Output() private outer=new EventEmitter();

  constructor(private message: NzMessageService) { }

  ngOnInit(): void {
    // 默认给站点一个值
    setTimeout(() => {
      this.value = 'VOC410800001';
    }, 10);
  }

  doSearch() {
    const mn = this.value;
    if (mn === undefined || mn === null || mn === '') {
      this.message.warning('请选择一个站点', {
        nzDuration: 3000,
      });
      return;
    }
    const params = {
      token: JSON.parse(localStorage.getItem('userinfo') || '{}').token,
      mn,
      // stime: format(this.date[0], 'yyyy-MM-dd'),
      // etime: format(this.date[1], 'yyyy-MM-dd'),
      stime: '2021-11-01',
      etime: '2021-11-10'
    };
    // console.log(params);
    this.outer.emit(params);

  }

}
