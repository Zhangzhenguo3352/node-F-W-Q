var express = require('express');
var path = require('path')
var fs = require('fs')
var bodyParser = require('body-parser');

var app = express();
var compression = require('compression')
// serve our static stuff like index.css
app.use(express.static(path.join(__dirname), {index: false}))
app.get('*', (req, res) => {
  
      res.send(renderPage())
   
  
})
function renderPage() {
	return `
		<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-COMPATIBLE" content="IE=edge"/>
    <meta content="width=640,inital-scale=1.0,maximum-scale=1.0,user-scalable=0" name="viewport"/>
    <meta content="yes" name=""apple-mobile-web-app-capable/>
    <meta name="format-detection" content="telephone=no"/>
    <title>火码互动宣传页</title>
    <link rel="stylesheet" href="../css/reset.css"/>
    <link rel="stylesheet" href="../css/jquery.fullPage.css"/>
    <link rel="stylesheet" href="../css/animate.min.css"/>
    <link rel="stylesheet" href="../css/main.css"/>
</head>
<body>
<div class="music ab ">
    <i class="ab music-f"></i>
</div>
<audio id="audio" src="../images/yinyue.mp3" loop="loop" autoplay="autoplay"></audio>
<i class="arrow_up"></i>
<div id="dowebok">
    <div class="section">
        <div class="main main_one">
            <div class="shinian opy">
                <div class="qinian">
                    <img src="../images/one/shinian.png" alt=""/>
                </div>
                <div class="biankuan2">
                    <img src="../images/one/biankuang2.png" alt=""/>
                </div>
                <div class="yinzhang opy">
                    <img src="../images/one/yinzhang.png" alt=""/>
                </div>
            </div>
            <div class="yuncai opy">
                <img src="../images/one/yuncai.png" alt=""/>
            </div>
            <div class="yuncai2 opy">
                <img src="../images/one/yuncai2.png" alt=""/>
            </div>
            <div class="jian opy">
                <img src="../images/one/baojian.png" alt=""/>
            </div>
            <div class="fuhui opy">
                <img src="../images/one/fuhui.png" alt=""/>
            </div>
        </div>
    </div>
    <div class="section">
        <div class="main main_two">
            <div class="whoweare opy">
                <img src="../images/two/whoweare.png" alt=""/>
            </div>
            <div class="whoweare2 opy">
                <img src="../images/two/whoweare1.png" alt=""/>
            </div>
            <div class="article">
                <div class="article1 opy">
                    <img src="../images/two/article-1.png" alt=""/>
                </div>
                <div class="article2 opy">
                    <img src="../images/two/article-2.png" alt=""/>
                </div>
                <div class="article3 opy">
                    <img src="../images/two/article-4.png" alt=""/>
                </div>
                <div class="article4 opy">
                    <img src="../images/two/article-3.png" alt=""/>
                </div>
                <div class="article5 opy">
                    <img src="../images/two/article-5.png" alt=""/>
                </div>
                <div class="article6 opy">
                    <img src="../images/two/article-6.png" alt=""/>
                </div>
            </div>
            <div class="yuncai opy">
                <img src="../images/two/yuncai.png" alt=""/>
            </div>
            <div class="yinzhang opy">
                <img src="../images/two/qinian.png" alt=""/>
            </div>
            <div class="renzhe opy">
                <img src="../images/two/renzhe.png" alt=""/>
            </div>
        </div>
    </div>
    <div class="section">
        <div class="main main_three">
            <div class="ourservice">
                <div class="service opy">
                    <!--<img src="../images/three/fuwu.png" alt=""/>-->
                </div>
                <div class="service2 opy">
                    <!--<img src="../images/three/fuwu2.png" alt=""/>-->
                </div>
                <div class="liangshen opy">
                    <!--<img src="../images/three/liangshen.png" alt=""/>-->
                </div>
            </div>
            <div class="article">
                <div class="article1 opy">
                    <img src="../images/three/article-1.png" alt=""/>
                </div>
                <div class="article2 opy">
                    <img src="../images/three/article-2.png" alt=""/>
                </div>
                <div class="article3 opy">
                    <img src="../images/three/article-3.png" alt=""/>
                </div>
                <div class="article4 opy">
                    <img src="../images/three/article-4.png" alt=""/>
                </div>
                <div class="article5 opy">
                    <img src="../images/three/article-5.png" alt=""/>
                </div>
                <div class="article6 opy">
                    <img src="../images/three/article-6.png" alt=""/>
                </div>
                <div class="article7 opy">
                    <img src="../images/three/article-7.png" alt=""/>
                </div>
            </div>
            <div class="yuncai opy">
                <img src="../images/one/yuncai.png" alt=""/>
            </div>
            <div class="dajia opy">
                <img src="../images/three/dajia.png" alt=""/>
            </div>
        </div>
    </div>
    <div class="section">
        <div class="main main_four">
            <div class="ourservice">
                <div class="service opy">
                    <img src="../images/three/fuwu.png" alt=""/>
                </div>
                <div class="service2 opy">
                    <img src="../images/three/fuwu2.png" alt=""/>
                </div>
                <div class="liangshen opy">
                    <img src="../images/three/liangshen.png" alt=""/>
                </div>
            </div>
            <div class="businessBox">
                <div id="hd_one" class="hudongBox2 opy">
                    <div class="box_title">
                        <img src="../images/four/jishu.png" alt=""/>
                    </div>
                    <div class="box_content">
                        <img src="../images/four/jishu2.png" alt=""/>
                    </div>
                </div>
                <div id="hd_two" class="hudongBox2 opy">
                    <div class="box_title">
                        <img src="../images/four/gongguan.png" alt=""/>
                    </div>
                    <div class="box_content">
                        <img src="../images/four/gongguan2.png" alt=""/>
                    </div>
                </div>
                <div id="hd_three" class="hudongBox opy">
                    <div class="box_title">
                        <img src="../images/four/hudong.png" alt=""/>
                    </div>
                    <div class="box_content">
                        <img src="../images/four/hudong2.png" alt=""/>
                    </div>
                </div>
            </div>
            <div class="yuncai opy">
                <img src="../images/four/yuncai.png" alt=""/>
            </div>
            <div class="dajia opy">
                <img src="../images/three/dajia.png" alt=""/>
            </div>
        </div>
    </div>
    <div class="section">
        <div class="main main_five">
            <div class="ourservice">
                <div class="service opy">
                    <img src="../images/five/youshi.png" alt=""/>
                </div>
                <div class="service2 opy">
                    <img src="../images/five/youshi2.png" alt=""/>
                </div>
                <div class="liangshen opy">
                    <img src="../images/five/shuangxian.png" alt=""/>
                </div>
            </div>
            <div class="yuncai opy">
                <img src="../images/five/yuncai.png" alt=""/>
            </div>
            <div class="article">
                <div class="article1 opy">
                    <img src="../images/five/article-1.png" alt=""/>
                </div>
                <div class="article2 opy">
                    <img src="../images/five/article-2.png" alt=""/>
                </div>
                <div class="article3 opy">
                    <img src="../images/five/article-3.png" alt=""/>
                </div>
                <div class="article4 opy">
                    <img src="../images/five/article-4.png" alt=""/>
                </div>
                <div class="article5 opy">
                    <img src="../images/five/article-5.png" alt=""/>
                </div>
                <div class="article6 opy">
                    <img src="../images/five/article-6.png" alt=""/>
                </div>
            </div>
            <div class="dayan opy">
                <img src="../images/five/dayan.png" alt=""/>
            </div>
        </div>
    </div>
    <div class="section">
        <div class="main main_six">
            <div class="ourservice">
                <div class="service opy">
                    <img src="../images/six/tuandui.png" alt=""/>
                </div>
                <div class="service2 opy">
                    <img src="../images/six/tuandui2.png" alt=""/>
                </div>
            </div>
            <div class="article">
                <div class="article1 opy">
                    北京火码互动的顶尖团队
                    <!--<img src="../images/six/article-1.png" alt=""/>-->
                </div>
                <div class="article2 opy">
                    囊括一线城市的
                    <!--<img src="../images/six/article-2.png" alt=""/>-->
                </div>
                <div class="article3 opy">
                    资深web专家、广告人、网络营销人，
                    <!--<img src="../images/six/article-3.png" alt=""/>-->
                </div>
                <div class="article4 opy">
                    配合深谙北京本土优势、
                    <!--<img src="../images/six/article-4.png" alt=""/>-->
                </div>
                <div class="article5 opy">
                    熟悉营销流程的创意执行精英，
                    <!--<img src="../images/six/article-5.png" alt=""/>-->
                </div>
                <div class="article6 opy">
                    北京、重庆第一批H5营销。
                    <!--<img src="../images/six/article-6.png" alt=""/>-->
                </div>
                <div class="article7 opy">
                    曾经服务过的项目：
                    <!--<img src="../images/six/article-7.png" alt=""/>-->
                </div>
                <div class="article8 opy">
                    东风日产
                    <!--<img src="../images/six/article-8.png" alt=""/>-->
                </div>
                <div class="article9 opy">
                    中粮集团五谷道场
                    <!--<img src="../images/six/article-9.png" alt=""/>-->
                </div>
                <div class="article10 opy">
                    宝沃汽车中国
                    <!--<img src="../images/six/article-10.png" alt=""/>-->
                </div>
                <div class="article11 opy">
                    蓝色光标
                    <!--<img src="../images/six/article-11.png" alt=""/>-->
                </div>
                <div class="article12 opy">
                    <img src="../images/six/article-12.png" alt=""/>
                </div>
            </div>
            <div class="bd opy">
                <img src="../images/six/wanma.png" alt=""/>
            </div>
            <div class="qima opy">
                <img src="../images/six/qima.png" alt=""/>
            </div>
        </div>
    </div>
    <div class="section">
        <div class="main main_seven">
            <div class="ourservice">
                <div class="service opy">
                    <img src="../images/seven/anli.png" alt=""/>
                </div>
                <div class="service2 opy">
                    <img src="../images/seven/anli2.png" alt=""/>
                </div>
            </div>
            <div class="case">
                <div class="caseTitle opy">
                    <span style="font-size: 18px">案例一：</span>东风日产
                    <!--<img src="../images/seven/anli-title.png" alt=""/>-->
                </div>
                <div class="caseCont opy">
                    东风日产乘用车公司成立于2003年6月16日，
                    <!--<img src="../images/seven/article-1.png" alt=""/>-->
                </div>
                <div class="caseCont2 opy">
                   是国内为数不多的具备全价值链的汽车生产企业。
                    <!--<img src="../images/seven/article-2.png" alt=""/>-->
                </div>
            </div>
            <div class="huazhou opy">
                <img src="../images/seven/huazhou.png" alt=""/>
            </div>
            <div class="qizhi opy">
                <img src="../images/seven/qizhi.png" alt=""/>
            </div>
            <div class="shidiao">
                <img src="../images/seven/shidiao.png" alt=""/>
            </div>
        </div>
    </div>
    <div class="section ">
        <div class="main main_eight">
            <div class="ourservice">
                <div class="service opy">
                    <img src="../images/seven/anli.png" alt=""/>
                </div>
                <div class="service2 opy">
                    <img src="../images/seven/anli2.png" alt=""/>
                </div>
            </div>
            <div class="case">
                <div class="caseTitle opy">
                    <span style="font-size: 18px">案例二：</span>中粮集团五谷道场
                    <!--<img src="../images/eight/anli-titel.png" alt=""/>-->
                </div>
                <div class="caseCont opy">
                    世界500强中粮集团旗下品牌，
                    <!--<img src="../images/eight/article-1.png" alt=""/>-->
                </div>
                <div class="caseCont2 opy">
                    致力于让消费者安享健康无忧的营养美食，成就消费者放心之选。
                    <!--<img src="../images/eight/article-2.png" alt=""/>-->
                </div>
            </div>
            <div class="huazhou opy">
                <img src="../images/eight/huazhou.png" alt=""/>
            </div>
            <div class="qizhi opy">
                <img src="../images/seven/qizhi.png" alt=""/>
            </div>
            <div class="shidiao">
                <img src="../images/seven/shidiao.png" alt=""/>
            </div>
        </div>
    </div>
    <div class="section">
        <div class="main main_nine">
            <div class="ourservice">
                <div class="service opy">
                    <img src="../images/seven/anli.png" alt=""/>
                </div>
                <div class="service2 opy">
                    <img src="../images/seven/anli2.png" alt=""/>
                </div>
            </div>
            <div class="case">
                <div class="caseTitle opy">
                    <span style="font-size: 18px">案例三：</span>宝沃汽车中国
                    <!--<img src="../images/nine/anli-title.png" alt=""/>-->
                </div>
                <div class="caseCont opy">
                    德国汽车品牌宝沃在日内瓦车展宣布复活，
                    <!--<img src="../images/nine/article-1.png" alt=""/>-->
                </div>
                <div class="caseCont2 opy">
                    来自中国的商用车企业北汽福田是此次宝沃品牌复活的合作伙伴之一。
                    <!--<img src="../images/nine/article-2.png" alt=""/>-->
                </div>
            </div>
            <div class="huazhou opy">
                <img src="../images/nine/huazhou.png" alt=""/>
            </div>
            <div class="qizhi opy">
                <img src="../images/seven/qizhi.png" alt=""/>
            </div>
            <div class="shidiao">
                <img src="../images/seven/shidiao.png" alt=""/>
            </div>
        </div>
    </div>
    <div class="section">
        <div class="main main_ten">
            <div class="ourservice">
                <div class="service opy">
                    <img src="../images/ten/yingxiong.png" alt=""/>
                </div>
                <div class="service2 opy">
                    <img src="../images/ten/yingxiong2.png" alt=""/>
                </div>
            </div>
            <div class="box">
                <div class="moyijian opy">
                    <img src="../images/ten/moyijian.png" alt=""/>
                </div>
                <div class="chengyao opy">
                    <img src="../images/ten/chengyao.png" alt=""/>
                </div>
                <div class="chengyao2 opy">
                    <img src="../images/ten/chengyao2.png" alt=""/>
                </div>
            </div>
            <div class="huazhou opy">
                <img src="../images/ten/huazhou.png" alt=""/>
            </div>
        </div>
    </div>
    <div class="section">
        <div class="main main_eleven">
            <div class="ourservice">
                <div class="service opy">
                    <img src="../images/eleven/zhengjiling.png" alt=""/>
                </div>
                <div class="service2 opy">
                    <img src="../images/eleven/zhengjiling2.png" alt=""/>
                </div>
            </div>
            <div class="box">
                <div class="moyijian opy">
                    <img src="../images/eleven/nashi.png" alt=""/>
                </div>
            </div>
            <div class="huazhou opy">
                <img src="../images/eleven/guanggao.png" alt=""/>
            </div>
            <div class="yizi opy">
                <img src="../images/eleven/yizi.png" alt=""/>
            </div>
        </div>
    </div>
    <div class="section section-8">
        <div class="box">
            <div class="cloud ab"></div>
            <div class="title ab"></div>
            <div class="contact ab">
                <p>联系电话：<a href="tel:010-57536658">010-57536658</a></p>
                <p>联系人：<a href="tel:13901087215">13901087215</a></p>
                <p>简历投递：huomahudong@qq.com</p>
                <p>官方网址：www.hocodo.com</p>
                <p>微信号：北京火码互动科技有限公司</p>
            </div>
        </div>
    </div>
</div>
</body>
<script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script src="../js/jquery-1.8.3.min.js"></script>
<script src="../js/jquery.fullPage.min.js"></script>
<script src="../js/main.js"></script>
<script src="../js/share.js"></script>
</html>

	`
}
app.listen(2000,() => {
	console.log('服务启动成功 2000')
})











