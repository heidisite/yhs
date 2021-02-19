京东Cookie：
  hostname = wq.jd.com, un.m.jd.com, api.m.jd.com
  
  微信访问含有会员机制的京东自营店会员页面
  ^https?://wq\.jd\.com/pinbind/pintokenredirect url script-request-header NE.cookie.js
  访问京东APP内嵌了H5页面：后台杀京东APP后再进入或进首页的免费水果都可获取
  ^https?://un\.m\.jd\.com/cgi-bin/app/appjmp url script-request-header NE.cookie.js

  ^https?://api\.m\.jd\.com/client\.action.*functionId=signBean(Index|GroupStageIndex) url script-request-header NE.cookie.js
  复制 https://home.m.jd.com/myJd/newhome.action 到浏览器打开 ，在个人中心自动获取 cookie，没成功就试试刷新页面
  ^https?://wq\.jd\.com/user_new/info/GetJDUserInfoUnion url script-request-header NE.cookie.js

快手Cookie：
  hostname = nebula.kuaishou.com, *.gifshow.com, *.ksapisrv.com

  访问快手极速版签到日历页面
  ^https?://nebula\.kuaishou\.com/rest/n/nebula/sign/query url script-request-header NE.cookie.js

  点金币收益/积分收益/现金收益去访问我的收益页面时获取cookie数据
  ^https://nebula\.kuaishou\.com/rest/n/nebula/account/overview url script-request-header NE.cookie.js
  ^https://zt\.gifshow\.com/rest/zt/encourage/account/summary/withKscoinTrial url script-request-header NE.cookie.js
