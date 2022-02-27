环境：
  node.v.16，npm.v.8.3.1 有些依赖需要8；
项目运行前其对应的脚手架需已全局首次安装。

angular.json 文件的styles里引用了全局样式文件 style.scss;
注意创建的模块或服务等名称不要和第三方包里需要引入的模块同名，否则声明或使用的时候会冲突报错。


在angular中使用图表库：
echart，必须安装echart依赖和ngx-echart依赖：
  安装命令：
    npm install echarts -S
    npm install ngx-echarts -S
  在app.module.ts中导入ngx-echarts依赖之后，在@NgModule中导入 echarts 依赖；
  渲染echarts主要是配置它的配置项，可以在官网文档查看有哪些可以配置的配置项，及其每一个配置项的含义。
步骤
  1.安装依赖：
  echarts；
  ngx-echarts: New major version of npm available! 8.3.1
  echarts-stat; 散点图用
  2.angular.json 找到第一个 scripts 在里面加入，其实不引入也行，估计是版本写法差异，但也不知是不是缓存的原因:
    "node_modules/echarts/dist/echarts.min.js"
  3.在 app.modules.ts根模块中引入 NgxEchartsModule 并声明 NgxEchartsModule.forRoot({echarts})
    module文件中导入NgxEchartsModule模块，一般都是全局使用，放到项目中的共有模块中，
    因为并不是其他的每个模块都会用到echarts，所以放到app.module.ts文件下并不是最佳的实践方式。
    在项目中单独创建一个共享shared.module，在使用的component中引用即可。
    但是，使用公共module时，必须加入exports中，否则报错！
      import {NgxEchartsModule} from 'ngx-echarts';
      ...
      imports: [
      　　...,
      　　NgxEchartsModule,
      　　...
      ],
      exports: [
      　　...,
      　　NgxEchartsModule
      　　, ...
      ]

  4.在项目中使用
    ①. 在.html
    <div echarts [options]="lineChart" class="line-chart"></div>
    ②. 在 .ts，数据推荐使用数据集的方式，
    this.lineChart = {
          title: {
              text: 'ECharts 入门示例'
          },
          tooltip: {},
          legend: {
              data:['销量']
          },
          xAxis: {
              data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          yAxis: {},
          series: [{
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
          }]
      };

g2:
  npm install @antv/g2 --save
  在图表容器被销毁时，总是应调用 chart.destroy() 以销毁实例释放资源，避免内存泄漏。

Viser Viser-Graph 为 React, Vue 和 Angular 提供了 3 个不同的分发版本。我们同时提供了 npm 安装和 umd 引入两种方式来使用 Viser:
  Angular 分发版
  您需要使用版本 2.4 及以上的 Angular，来使用 Angular 分发版 Viser。
  另外，你还需要版本 0.1 及以上的 reflect-metadata，版本 5 及以上的 rxjs，版本 0.7 及以上的 zone.js。
    npm install reflect-metadata
    npm install viser-ng
      requires a peer of @angular/core@^8.2.11 but @angular/core@13.1.2 was installed
      网络慢的建议用cnpm，
      --save这种写法可以添加依赖，
        cnpm install viser-ng --save

  这样viser-ng就算输安装完成了；如果出现报错，执行：
    npm install
    npm audit fix
  3.引入viser-ng到AppModule，并在imports里声明，就报错
    Uncaught TypeError: Cannot assign to read only property 'constructor' of object '[object Object]'
    在tsconfig.json 中把target的es2017改成es5 // err
    # angualr.json
      "scripts": [
        "node_modules/@antv/g2/build/g2.js"
      ]

npm install 安装依赖时报错：
  1.This version of npm is compatible with lockfileVersion@1, but package-lock.json was generated for lockfileVersion@2
  根据这个报错信息可以得出，目前你电脑npm的版本是适合于lockfileVersion@1的，但是你的package-lock.json是源于lockfileVersion@2的；
    因为代码中使用的某个插件只能用特定版本的npm下载，所以会报错导致npm install失败。这时就需要升级一下npm，
      cmd>npm install -g npm
  升级完npm版本之后，即可 npm install 成功；有的错误可能是因为npm版本太高导致的。。。比如这个错
    npm error code ERESOLVE
    npm error ERESOLVE unable to resolve dependency tree
    这时需要降级，降级方法:
      cmd>npm install npm@6 -g
  2.npm ERR! ERESOLVE unable to resolve dependency tree
    这是npm版本兼容导致的；
    当团队项目中，团队成员的npm包管理工具版本不一致时执行npm install报此错；
    npm -v查看版本信息：7.x与6.x之间的兼容问题；
    解决方案：
      一：升级或降级npm版本，保持一致 npm install -g npm@x.x.x
      二：npm install --legacy-peer-deps（推荐，解决后之后正常命令安装即可）

vscode npm install 安装依赖时报错：
  因为在此系统上禁止运行脚本；
  1.以管理员身份打开cmd，再cd到要下载依赖的文件夹里进行npm install下载，不过过程比较繁琐。
  2.以管理员身份打开命令行，输入：
    cmd>npm install --unsafe-perm=true --allow-root  
  3.解禁权限（推荐）
    3.1解决方法：
      1. 以管理员身份运行vscode或 window.powershell（注意不是cmd窗口 ）;
      2. 执行：get-ExecutionPolicy，显示Restricted，表示状态是禁止的;
      3. 执行：set-ExecutionPolicy，会提示输入参数；
      4. 输入参数 RemoteSigned，会提示进行 选择： 输入：Y
      5. 这时再执行 get-ExecutionPolicy，就显示RemoteSigned;
      这时就可在vscode运行脚本了；
    3.2解禁vscode的权限:
      右键打开vscode，在 兼容性选项 里进行设置，以管理员身份运行程序（勾上此选项）。之后再次运行npm install


    科普window.powershell 知识点：
      Windows给powershell设定了一个叫“执行策略”的东西。
      为什么要弄这么一个执行策略呢，因为powershell能做的事情太多了，为了避免一些恶意脚本直接运行，
      一般家用的windows系统默认将执行策略设置成了“Restricted”，即受限制的。

npm ERR! The operation was rejected by your operating system.
npm ERR! It's possible that the file was already in use (by a text editor or antivirus),
npm ERR! or that you lack permissions to access it.
npm ERR!
npm ERR! If you believe this might be a permissions issue, please double-check the
npm ERR! permissions of the file and its containing directories, or try running
npm ERR! the command again as root/Administrator.
... ...
  也是权限的问题，以管理员身份执行命令即可解决？？？；
  也可能是win10防火墙的问题：
	  In windows10 I disabled the windows defender / windows security ==> realtime protection and try again npm install command and it worked
	难搞呀！！！



interface 里是用分号还是逗号呢?

cmd>npm install mockjs --save-dev







