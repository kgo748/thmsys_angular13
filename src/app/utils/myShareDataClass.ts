/*
关于如何在Angular项目中共享数据：
一般的套路会想到 父子组件如何传递数据 ，也有人想到redux 。
但我想说这两种方式都有点反人类，我想在某一个范围内共享数据，但又不想用localstorage或者cookie存储这些数据，我该怎么办呢？
其实Angluar里面有个非常非常简单的方法 可以让你在任意范围内共享数据，无论是全局 某个子路由模块内，还是父子组件间 。

1.首先你只需要新建一个ts文件 写一个class 并暴露出来 ，记得在这个class前面写 @Injectable() ，大概的样子长这样：
2.在你希望共享的页面间都引用这个class ，且在 constructor里以public的方式注入，大概长这样：
  注意一定是 public的方式， 默认不写public关键词 或者写private都不能共享，
  constructor(public shareData: myShareDataClass){}
  然后再函数中使用，this.shareData.user=xxx;
3.最后一步，需要在主路由 或者子路由 或者父组件 模块的providers 中引入 共享类名  形式如下：
  providers: [myShareDataClass],

注意 你导入共享类的范围 就直接影响了 这个共享数据的共享范围。
服务在每个注入器的范围内是单例的。 在任何一个注入器中，最多只会有同一个服务的一个实例。
比如 你在主路由下导入 那么这个共享就是全局的，如果在子路由模块下导入 就是在子路下页面间共享， 如果在某一个组件中导入 则在这个组件和他的子组件中共享
*/
import { Injectable } from "@angular/core";

@Injectable()
export class myShareDataClass{
  user: null | undefined
}
