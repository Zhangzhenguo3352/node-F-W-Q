(function () {
    //title为微信分享的主标题
    var _title = '火码互动-中国资深移动互联服务商';
    //dese为副标题（详细描述）
    var _desc = '你还在靠推送图文消息来吸引粉丝们的眼球？你OUT了！来看看火码在玩什么？';
    //link为分享页所在的地址
    var _link = 'http://minisite.hocodo.com/test/propaganda/html/index.html';
    //_imgUrl 为 分享小图标的链接
    var _imgUrl = 'http://minisite.hocodo.com/test/recruitMain/images/share.jpg';
    var url = window.location.href.split("#")[0];
    var signPackage;
    var info = {
        appId: '',
        secret: '',
        url: url
    };

    $.ajax({
        type: "GET",
        dataType: "jsonp",
        //url需要后台php返回一段数据，，具体是什么数据，我忘了，，文档上有写
        url: "http://app.hocodo.com/webapps/weixinservice/weixinservice.php?callback=?",
        data: {"param": JSON.stringify(info)},
        async: false,
        success: function (data) {
            console.dir(data);
            wx.config({
                //debug: true,
                appId: data.appId,
                timestamp: data.timestamp,
                nonceStr: data.nonceStr,
                signature: data.signature,
                jsApiList: [
                    // 所有要调用的 API 都要加到这个列表中
                    'checkJsApi',
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage',
                    'onMenuShareQQ',
                    'onMenuShareWeibo',
                    'hideMenuItems',
                    'showMenuItems',
                    'hideAllNonBaseMenuItem',
                    'showAllNonBaseMenuItem',
                    'getNetworkType',
                    'openLocation',
                    'getLocation',
                    'hideOptionMenu',
                    'showOptionMenu',
                    'closeWindow'
                ]
            });

            wx.ready(function () {
                // 在这里调用 API
                // 2. 分享接口
                // 2.1 监听“分享给朋友”，按钮点击、自定义分享内容及分享结果接口

                wx.onMenuShareAppMessage({
                    title: _title,
                    desc: _desc,
                    link: _link,
                    imgUrl: _imgUrl,
                    trigger: function (res) {
                        //alert('用户点击发送给朋友');
                    },
                    success: function (res) {
                        //alert('已分享');
                    },
                    cancel: function (res) {
                        //alert('已取消');
                    },
                    fail: function (res) {
                        //alert(JSON.stringify(res));
                    }
                });


                // 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口

                wx.onMenuShareTimeline({
                    title: _title,
                    link: _link,
                    imgUrl: _imgUrl,
                    trigger: function (res) {
                        // alert('用户点击分享到朋友圈');
                    },
                    success: function (res) {
                        // alert('已分享');
                    },
                    cancel: function (res) {
                        // alert('已取消');
                    },
                    fail: function (res) {
                        // alert(JSON.stringify(res));
                    }
                });
            });	//end of wx.ready
        }
    })
})();
