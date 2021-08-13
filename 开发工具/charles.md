#### Charles FQA?

> 1. 如何连接手机?

- A: help-> SSL Proxying -> Install Charles Root Certificate on a Mobile Device or Remote Browser -> 设置手机的无线网手动代理端口是 8888 服务器换成电脑的地址-> 点击同意接受-> 手机端的 safari 访问提示的地址下载证书然后授权安装到手机内即可（ios 手机需要在关于手机里让证书授权下）

> 2. 如何使用 breakPoints(断点)?

- A: 点击红色的六边形开启断点 -> 点击 proxy -> 选择 breakPoints Setting 设置所需要的断点域名（query 用\*代表全部）

> 3. macOs 如何代理?

- A: help-> SSL Proxying -> Install Charles Root Certificate -> 弹出的本地钥齿串然后授权即可

> 4. throttling 有何用?

- A: 弱网配置

> 5. Compose,repeat... 如何使用?

- A: 修改已经请求的接口参数然后重新发送(execute); repeat:重新发一条； repeat Advanced...:配置多次请求

> 6. 小米手机安装证书貌似跟自由的有冲突~可能比较麻烦
