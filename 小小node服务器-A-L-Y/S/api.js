
// 这个文件演示了 ，node.js 去调用了 微信的接口


var express = require('express');
var http = require('http');
var path = require('path')
var fs = require('fs')
var bodyParser = require('body-parser');
var request = require('request');
var md5 = require('md5');

var token = '';
var app_id = 'wxdb0b83006fe07fa6';
var app_secret = 'd28ba63b80b40f6a970ab6c15cc2e034'

// 生成 随机 32位的字符串
function strFn(A_length){
    var data=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    var result="";
    for(var i=0;i<A_length;i++){
        var r=Math.floor(Math.random()*62);     //取得0-62间的随机数，目的是以此当下标取数组data里的值！
        result+=data[r];        //输出20次随机数的同时，让rrr加20次，就是20位的随机字符串了。
    }
    return result;
}
// 用三组字符串，进行加密
var str = 'aaaabbsssbsaewHHHSDKkflwklkclwl3434123d'
// 盐（自己写 一段自己都不认识的 字母）
var yan = 'JJKkkkfkk9c949vjJJJjvwi4izk  kk';

function md5Fn(length) {

    return md5(md5(md5(`${strFn(length)}${str}${yan}`)))
}

var app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.get('/', (req, res) => {
    console.log('req.body',req.query.code)
    console.log('md5',)
      // res.send({'8999':111})

    // 第一种 get 方式
    // 这里去调用了  另外一个接口， 就可以认为是调用了 微信的接口  
    request(`https://api.weixin.qq.com/sns/jscode2session?appid=${app_id}&secret=${app_secret}&js_code=${req.query.code}&grant_type=authorization_code`, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log('body',body) // Show the HTML for the baidu homepage.

        if(!token) { // 没有token 去生成 token,  有token 用token
            token = md5Fn(32);
            // 5分钟后token 失效
            setTimeout(function() {
                token = '';
            },300000)
        }
        res.send({token: token, body: body})
      } else {
        res.send({'error': error})
      }
    })

    // 第二种 post 方式
    // request({
    //     url: 'http://localhost:8888/',
    //     method: "POST",
    //     json: true,
    //     headers: {
    //         "content-type": "application/json",
    //     },
    //     data: {
    //         js_code: req.query,
    //         appid: 'wxdb0b83006fe07fa6',
    //         secret: 'd28ba63b80b40f6a970ab6c15cc2e034',
    //         grant_type: 'authorization_code'
    //     },
    //     // body: JSON.stringify({name:1})
    //     body: {"aaa": "111"}
    // }, function(error, response, body) {
    //     console.log('response ',response)
    //     console.log('body ',body)
    //     console.log('!error ',error)
    //     console.log('response.statusCode == 200',response.statusCode == 200)
    //     console.log('!error && response.statusCode == 200',!error && response.statusCode == 200)
    //     if (!error && response.statusCode == 200) {
    //         console.log('body',body)

    //     }
    //     res.send({'8999':111})
    // }); 
})


app.listen(6000,() => {
    console.log('服务启动成功 6000')
})
