$( function () {


	var $main_one = $(".main_one");
	var $main_two = $(".main_two");
	var $main_three = $(".main_three");
	var $main_four = $(".main_four");
	var $main_five = $(".main_five");
	var $main_six = $(".main_six");
	var $main_seven = $(".main_seven");
	var $main_eight = $(".main_eight");
	var $main_nine = $(".main_nine");
	var $main_ten = $(".main_ten");
	var $main_eleven = $(".main_eleven");
	$('#dowebok').fullpage({
		afterRender: function () {
			$(".shinian",$main_one).addClass("animated fadeIn");
			setTimeout(function(){
				$(".qinian",$main_one).addClass("animated fadeInDown");
				$(".biankuan2",$main_one).addClass("animated fadeInUp");
				$(".jian",$main_one).addClass("animated rollIn");
				$(".fuhui",$main_one).addClass("animated fadeInLeft");
				$(".yinzhang",$main_one).addClass("animated fadeInDown");
			},1000);
			setTimeout(function(){
				$(".yuncai",$main_one).addClass("animated fadeIn");
				$(".yuncai2",$main_one).addClass("animated fadeIn");
			},2000);
		},
		afterLoad: function(anchorLink, index){
			if(index == 1){
				$(".main_one .shinian").addClass("animated fadeIn");
				setTimeout(function(){
					$(".qinian",$main_one).addClass("animated fadeInDown");
					$(".biankuan2",$main_one).addClass("animated fadeInUp");
					$(".jian",$main_one).addClass("animated rollIn");
					$(".fuhui",$main_one).addClass("animated fadeInLeft");
					$(".yinzhang",$main_one).addClass("animated fadeInDown");
				},1000);
				setTimeout(function(){
					$(".yuncai",$main_one).addClass("animated fadeIn");
					$(".yuncai2",$main_one).addClass("animated fadeIn");
				},2000)
			}
			if(index == 2){
				$(".whoweare",$main_two).addClass("animated lightSpeedIn");
				$(".whoweare2",$main_two).addClass("animated lightSpeedIn");
				setTimeout(function(){
					$(".article1",$main_two).addClass("animated rotateInDownLeft");
				},500);
				setTimeout(function(){
					$(".article2",$main_two).addClass("animated rotateInDownLeft");
				},700);
				setTimeout(function(){
					$(".article3",$main_two).addClass("animated rotateInDownLeft");
				},900);
				setTimeout(function(){
					$(".article4",$main_two).addClass("animated rotateInDownLeft");
				},1100);
				setTimeout(function(){
					$(".article5",$main_two).addClass("animated rotateInDownLeft");
				},1300);
				setTimeout(function(){
					$(".article6",$main_two).addClass("animated rotateInDownLeft");
					$(".yinzhang",$main_two).addClass("animated fadeInUp");
					$(".renzhe",$main_two).addClass("animated fadeInLeft");
					$(".yuncai",$main_two).addClass("animated fadeInRightBig");
				},1500)
			}
			if(index == 3){
				$(".service",$main_three).addClass("animated flip opy-1");
				$(".service2",$main_three).addClass("animated slideInRight opy-1");
				setTimeout(function () {
					$(".liangshen",$main_three).addClass("animated bounceInDown opy-1");
				},1000);
				setTimeout(function () {
					$(".article1",$main_three).addClass("animated bounceInDown opy-1");
				},1200);
				setTimeout(function () {
					$(".article2",$main_three).addClass("animated bounceInDown opy-1");
				},1400);
				setTimeout(function () {
					$(".article3",$main_three).addClass("animated bounceInDown opy-1");
				},1600);
				setTimeout(function () {
					$(".article4",$main_three).addClass("animated bounceInDown opy-1");
				},1800);
				setTimeout(function () {
					$(".article5",$main_three).addClass("animated bounceInDown opy-1");
				},2000);
				setTimeout(function () {
					$(".article6",$main_three).addClass("animated bounceInDown opy-1");
				},2200);
				setTimeout(function () {
					$(".article7",$main_three).addClass("animated bounceInDown opy-1");
				},2400);
				setTimeout(function () {
					$(".yuncai",$main_three).addClass("animated fadeInLeftBig opy-1");
					$(".dajia",$main_three).addClass("animated fadeInUpBig opy-1");
				},2600);
			}
			if(index == 4){
				$(".service",$main_four).addClass("animated flip opy-1");
				$(".service2",$main_four).addClass("animated slideInRight opy-1");
				setTimeout(function () {
					$(".liangshen",$main_four).addClass("animated bounceInDown opy-1");
				},1000);
				setTimeout(function () {
					$("#hd_one",$main_four).addClass("animated flipInY opy-1");
				},2000);
				setTimeout(function () {
					$("#hd_two",$main_four).addClass("animated flipInY opy-1");
				},2200);
				setTimeout(function () {
					$("#hd_three",$main_four).addClass("animated flipInY opy-1");
				},2400);
				setTimeout(function () {
					$(".yuncai",$main_four).addClass("animated fadeInRightBig opy-1");
					$(".dajia",$main_four).addClass("animated fadeInUpBig opy-1");
				},2400);
			}
			if(index == 5){
				$(".service",$main_five).addClass("animated flip opy-1");
				$(".service2",$main_five).addClass("animated slideInRight opy-1");
				setTimeout(function () {
					$(".liangshen",$main_five).addClass("animated bounceInDown opy-1");
				},1000);
				setTimeout(function () {
					$(".article1",$main_five).addClass("animated fadeInRightBig opy-1");
				},1000);
				setTimeout(function () {
					$(".article2",$main_five).addClass("animated fadeInRightBig opy-1");
				},1100);
				setTimeout(function () {
					$(".article3",$main_five).addClass("animated fadeInRightBig opy-1");
				},1200);
				setTimeout(function () {
					$(".article4",$main_five).addClass("animated fadeInRightBig opy-1");
				},1300);
				setTimeout(function () {
					$(".article5",$main_five).addClass("animated fadeInRightBig opy-1");
				},1400);
				setTimeout(function () {
					$(".article6",$main_five).addClass("animated fadeInRightBig opy-1");
				},1500);
				setTimeout(function () {
					$(".dayan",$main_five).addClass("animated fadeInRightBig opy-1");
					$(".yuncai",$main_five).addClass("animated fadeInLeftBig opy-1");
				},2500);
			}
			if(index == 6){
				$(".service",$main_six).addClass("animated fadeInLeft opy-1");
				$(".service2",$main_six).addClass("animated fadeInRight opy-1");
				setTimeout(function () {
					$(".article1",$main_six).addClass("animated fadeInRight opy-1");
				},1000);
				setTimeout(function () {
					$(".article2",$main_six).addClass("animated rotateInDownLeft opy-1");
				},1100);
				setTimeout(function () {
					$(".article3",$main_six).addClass("animated rotateInDownLeft opy-1");
				},1200);
				setTimeout(function () {
					$(".article4",$main_six).addClass("animated rotateInDownLeft opy-1");
				},1300);
				setTimeout(function () {
					$(".article5",$main_six).addClass("animated rotateInDownLeft opy-1");
				},1400);
				setTimeout(function () {
					$(".article6",$main_six).addClass("animated rotateInDownLeft opy-1");
				},1500);
				setTimeout(function () {
					$(".article7",$main_six).addClass("animated rotateInUpRight opy-1");
				},1600);
				setTimeout(function () {
					$(".article8",$main_six).addClass("animated rotateInUpRight opy-1");
				},1700);
				setTimeout(function () {
					$(".article9",$main_six).addClass("animated rotateInUpRight opy-1");
				},1800);
				setTimeout(function () {
					$(".article10",$main_six).addClass("animated rotateInUpRight opy-1");
				},1900);
				setTimeout(function () {
					$(".article11",$main_six).addClass("animated rotateInUpRight opy-1");
				},2000);
				setTimeout(function () {
					$(".article12",$main_six).addClass("animated rotateInUpRight opy-1");
				},2100);
				setTimeout(function () {
					$(".bd",$main_six).addClass("animated fadeIn opy-1");
					$(".qima",$main_six).addClass("animated fadeInUpBig opy-1");
				},3000);
			}
			if(index == 7){
				$(".service",$main_seven).addClass("animated rollIn opy-1");
				setTimeout(function () {
					$(".service2",$main_seven).addClass("animated bounceInDown opy-1");
				},1000);
				setTimeout(function () {
					$(".caseTitle",$main_seven).addClass("animated lightSpeedIn opy-1");
				},1500);
				setTimeout(function () {
					$(".caseCont",$main_seven).addClass("animated lightSpeedIn opy-1");
				},2000);
				setTimeout(function () {
					$(".caseCont2",$main_seven).addClass("animated lightSpeedIn opy-1");
				},2500);
				setTimeout(function () {
					$(".huazhou",$main_seven).addClass("animated slideInLeft opy-1");
					$(".qizhi",$main_seven).addClass("animated slideInRight opy-1");
				},3000);
			}
			if(index == 8){
				$(".service",$main_eight).addClass("animated rollIn opy-1");
				setTimeout(function () {
					$(".service2",$main_eight).addClass("animated bounceInDown opy-1");
				},1000);
				setTimeout(function () {
					$(".caseTitle",$main_eight).addClass("animated lightSpeedIn opy-1");
				},1500);
				setTimeout(function () {
					$(".caseCont",$main_eight).addClass("animated lightSpeedIn opy-1");
				},2000);
				setTimeout(function () {
					$(".caseCont2",$main_eight).addClass("animated lightSpeedIn opy-1");
				},2500);
				setTimeout(function () {
					$(".huazhou",$main_eight).addClass("animated slideInLeft opy-1");
					$(".qizhi",$main_eight).addClass("animated slideInRight opy-1");
				},3000);
			}
			if(index == 9){
				$(".service",$main_nine).addClass("animated rollIn opy-1");
				setTimeout(function () {
					$(".service2",$main_nine).addClass("animated bounceInDown opy-1");
				},1000);
				setTimeout(function () {
					$(".caseTitle",$main_nine).addClass("animated lightSpeedIn opy-1");
				},1500);
				setTimeout(function () {
					$(".caseCont",$main_nine).addClass("animated lightSpeedIn opy-1");
				},2000);
				setTimeout(function () {
					$(".caseCont2",$main_nine).addClass("animated lightSpeedIn opy-1");
				},2500);
				setTimeout(function () {
					$(".huazhou",$main_nine).addClass("animated slideInLeft opy-1");
					$(".qizhi",$main_nine).addClass("animated slideInRight opy-1");
				},3000);
			}
			if(index == 10){
				$(".service",$main_ten).addClass("animated swing opy-1");
				setTimeout(function () {
					$(".service2",$main_ten).addClass("animated bounceIn opy-1");
				},1000);
				setTimeout(function () {
					$(".moyijian",$main_ten).addClass("animated flipInY opy-1");
				},1500);
				setTimeout(function () {
					$(".chengyao",$main_ten).addClass("animated flipInY opy-1");
				},2000);
				setTimeout(function () {
					$(".chengyao2",$main_ten).addClass("animated flipInY opy-1");
				},2500);
				setTimeout(function () {
					$(".huazhou",$main_ten).addClass("animated rubberBand opy-1");
				},3000);
				setTimeout(function () {
					$(".service2",$main_ten).addClass("animated hinge opy-1");
				},4000);
			}
			if(index == 11){
				$(".service",$main_eleven).addClass("animated swing opy-1");
				setTimeout(function () {
					$(".service2",$main_eleven).addClass("animated bounceIn opy-1");
				},1000);
				setTimeout(function () {
					$(".moyijian",$main_eleven).addClass("animated flipInY opy-1");
				},1500);
				setTimeout(function () {
					$(".huazhou",$main_eleven).addClass("animated rubberBand opy-1");
				},2000);
				setTimeout(function () {
					$(".service2",$main_eleven).addClass("animated hinge opy-1");
				},3000);
			}
		},
		onLeave: function(index, direction){
				$(".shinian",$main_one).removeClass("animated fadeIn");
				$(".qinian",$main_one).removeClass("animated fadeInDown");
				$(".biankuan2",$main_one).removeClass("animated fadeInUp");
				$(".jian",$main_one).removeClass("animated rollIn");
				$(".fuhui",$main_one).removeClass("animated fadeInLeft");
				$(".yinzhang",$main_one).removeClass("animated fadeInDown");
				$(".yuncai",$main_one).removeClass("animated fadeIn");
				$(".yuncai2",$main_one).removeClass("animated fadeIn");

				$(".whoweare",$main_two).removeClass("animated lightSpeedIn");
				$(".whoweare2",$main_two).removeClass("animated lightSpeedIn");
				$(".article1",$main_two).removeClass("animated rotateInDownLeft");
				$(".article2",$main_two).removeClass("animated rotateInDownLeft");
				$(".article3",$main_two).removeClass("animated rotateInDownLeft");
				$(".article4",$main_two).removeClass("animated rotateInDownLeft");
				$(".article5",$main_two).removeClass("animated rotateInDownLeft");
				$(".article6",$main_two).removeClass("animated rotateInDownLeft");
				$(".yinzhang",$main_two).removeClass("animated fadeInUp");
				$(".renzhe",$main_two).removeClass("animated fadeInLeft");
				$(".yuncai",$main_two).removeClass("animated fadeInRightBig");

				$(".service",$main_three).removeClass("animated flip opy-1");
				$(".service2",$main_three).removeClass("animated slideInRight opy-1");
				$(".liangshen",$main_three).removeClass("animated bounceInDown opy-1");
				$(".article1",$main_three).removeClass("animated bounceInDown opy-1");
				$(".article2",$main_three).removeClass("animated bounceInDown opy-1");
				$(".article3",$main_three).removeClass("animated bounceInDown opy-1");
				$(".article4",$main_three).removeClass("animated bounceInDown opy-1");
				$(".article5",$main_three).removeClass("animated bounceInDown opy-1");
				$(".article6",$main_three).removeClass("animated bounceInDown opy-1");
				$(".article7",$main_three).removeClass("animated bounceInDown opy-1");
				$(".dajia",$main_three).removeClass("animated fadeInUpBig opy-1");
				$(".yuncai",$main_three).removeClass("animated fadeInLeftBig opy-1");

				$(".service",$main_four).removeClass("animated flip opy-1");
				$(".service2",$main_four).removeClass("animated slideInRight opy-1");
				$(".liangshen",$main_four).removeClass("animated bounceInDown opy-1");
				$("#hd_one",$main_four).removeClass("animated flipInY opy-1");
				$("#hd_two",$main_four).removeClass("animated flipInY opy-1");
				$("#hd_three",$main_four).removeClass("animated flipInY opy-1");
				$(".yuncai",$main_four).removeClass("animated fadeInRightBig opy-1");
				$(".dajia",$main_four).removeClass("animated fadeInUpBig opy-1");

				$(".service",$main_five).removeClass("animated flip opy-1");
				$(".service2",$main_five).removeClass("animated slideInRight opy-1");
				$(".liangshen",$main_five).removeClass("animated bounceInDown opy-1");
				$(".article1",$main_five).removeClass("animated fadeInRightBig opy-1");
				$(".article2",$main_five).removeClass("animated fadeInRightBig opy-1");
				$(".article3",$main_five).removeClass("animated fadeInRightBig opy-1");
				$(".article4",$main_five).removeClass("animated fadeInRightBig opy-1");
				$(".article5",$main_five).removeClass("animated fadeInRightBig opy-1");
				$(".article6",$main_five).removeClass("animated fadeInRightBig opy-1");
				$(".dayan",$main_five).removeClass("animated fadeInRightBig opy-1");
				$(".yuncai",$main_five).removeClass("animated fadeInLeftBig opy-1");

				$(".service",$main_six).removeClass("animated fadeInLeft opy-1");
				$(".service2",$main_six).removeClass("animated fadeInRight opy-1");
				$(".article1",$main_six).removeClass("animated fadeInRight opy-1");
				$(".article2",$main_six).removeClass("animated rotateInDownLeft opy-1");
				$(".article3",$main_six).removeClass("animated rotateInDownLeft opy-1");
				$(".article4",$main_six).removeClass("animated rotateInDownLeft opy-1");
				$(".article5",$main_six).removeClass("animated rotateInDownLeft opy-1");
				$(".article6",$main_six).removeClass("animated rotateInDownLeft opy-1");
				$(".article7",$main_six).removeClass("animated rotateInUpRight opy-1");
				$(".article8",$main_six).removeClass("animated rotateInUpRight opy-1");
				$(".article9",$main_six).removeClass("animated rotateInUpRight opy-1");
				$(".article10",$main_six).removeClass("animated rotateInUpRight opy-1");
				$(".article11",$main_six).removeClass("animated rotateInUpRight opy-1");
				$(".article12",$main_six).removeClass("animated rotateInUpRight opy-1");
				$(".bd",$main_six).removeClass("animated fadeIn opy-1");
				$(".qima",$main_six).removeClass("animated fadeInUpBig opy-1");


				$(".service",$main_seven).removeClass("animated rollIn opy-1");
				$(".service2",$main_seven).removeClass("animated bounceInDown opy-1");
				$(".caseTitle",$main_seven).removeClass("animated lightSpeedIn opy-1");
				$(".caseCont",$main_seven).removeClass("animated lightSpeedIn opy-1");
				$(".caseCont2",$main_seven).removeClass("animated lightSpeedIn opy-1");
				$(".huazhou",$main_seven).removeClass("animated slideInLeft opy-1");
				$(".qizhi",$main_seven).removeClass("animated slideInRight opy-1");

			$(".service",$main_eight).removeClass("animated rollIn opy-1");
			$(".service2",$main_eight).removeClass("animated bounceInDown opy-1");
			$(".caseTitle",$main_eight).removeClass("animated lightSpeedIn opy-1");
			$(".caseCont",$main_eight).removeClass("animated lightSpeedIn opy-1");
			$(".caseCont2",$main_eight).removeClass("animated lightSpeedIn opy-1");
			$(".huazhou",$main_eight).removeClass("animated slideInLeft opy-1");
			$(".qizhi",$main_eight).removeClass("animated slideInRight opy-1");

			$(".service",$main_nine).removeClass("animated rollIn opy-1");
			$(".service2",$main_nine).removeClass("animated bounceInDown opy-1");
			$(".caseTitle",$main_nine).removeClass("animated lightSpeedIn opy-1");
			$(".caseCont",$main_nine).removeClass("animated lightSpeedIn opy-1");
			$(".caseCont2",$main_nine).removeClass("animated lightSpeedIn opy-1");
			$(".huazhou",$main_nine).removeClass("animated slideInLeft opy-1");
			$(".qizhi",$main_nine).removeClass("animated slideInRight opy-1");

				$(".service",$main_ten).removeClass("animated swing opy-1");
				$(".service2",$main_ten).removeClass("animated bounceIn opy-1");
				$(".moyijian",$main_ten).removeClass("animated flipInY opy-1");
				$(".chengyao",$main_ten).removeClass("animated flipInY opy-1");
				$(".chengyao2",$main_ten).removeClass("animated flipInY opy-1");
				$(".huazhou",$main_ten).removeClass("animated rubberBand opy-1");
				$(".service2",$main_ten).removeClass("animated hinge opy-1");
		}
	});
	var audio=$("#audio").get(0);
	audio.play();
	var audioBtn=$(".music");
	audioBtn.toggle(function(){
		audio.pause();
		audioBtn.css({background:"url('../images/yinyue.png')"});
		audioBtn.find("i").removeClass("music-f");
	},function(){
		audio.play();
		audioBtn.css({background:"url('../images/music-bg.png')"});
		audioBtn.find("i").addClass("music-f");
	});
})