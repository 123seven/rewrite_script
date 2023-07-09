/******************************

脚本功能：考驾宝典解锁会员
脚本作者：seven
更新时间：2023-07-09
脚本发布：
使用声明：‼️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
# > 考驾宝典解锁会员
^https?:\/\/*\.kakamobi\.cn\/api\/open\/* url script-request-header https://raw.githubusercontent.com/123seven/rewrite_script/main/kaojiabaodian.js
[mitm] 
hostname = *.kakamobi.cn
*******************************/


var body = $response.body;
var resp = {
  "success": true,
  "data": {
    "itemList": [
      {
        "status": 0,
        "title": "高效过科一",
        "uiList": [
          {
            "url": "http:\/\/jiakao.nav.mucang.cn\/difficultQuickPractice?from=45",
            "conditions": null,
            "desc": "精简500题",
            "filterConditions": null
          },
          {
            "url": "http:\/\/jiakao.nav.mucang.cn\/doExam?type=kaochangkaoshi&from=45",
            "conditions": null,
            "desc": "真实考场模拟",
            "filterConditions": null
          },
          {
            "url": "http:\/\/jiakao.nav.mucang.cn\/vip\/difficultPractice?from=45",
            "conditions": null,
            "desc": "考前秘卷",
            "filterConditions": null
          }
        ],
        "identityCode": "vip-ke1",
        "dispatchUrl": "http:\/\/jiakao.nav.mucang.cn\/vip\/new-vip?from=45&page=%2Fjkbd-vip%2Fbuy%2Fvip.html"
      }
    ]
  },
  "errorCode": 0,
  "message": null
}
$done({ body: JSON.stringify(resp) });