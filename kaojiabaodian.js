/******************************

脚本功能：考驾宝典解锁会员
脚本作者：seven
更新时间：2023-07-09
脚本发布：
使用声明：‼️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
# > 考驾宝典解锁会员
^https:\/\/sirius\.kakamobi\.cn\/api\/open\/(.*?)$ url script-request-header https://raw.githubusercontent.com/123seven/rewrite_script/main/kaojiabaodian.js
[mitm] 
hostname = sirius.kakamobi.cn
*******************************/


var body = $response.body;
body = body.replace(/"status" : 0/g, '"status" : 1');
$done({ body });