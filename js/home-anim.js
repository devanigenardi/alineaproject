var elem;
var animData;

elem=document.getElementById("uyb");
animData={ container: elem, renderer: 'svg', loop: false, autoplay: false,	path: '../img/hm_benefits.json' };
var oUyb=lottie.loadAnimation(animData);

elem=document.getElementById("sup");
animData={ container: elem, renderer: 'svg', loop: false, autoplay: false,	path: '../img/hm_setup.json' };
var oSup=lottie.loadAnimation(animData);

elem=document.getElementById("erp");
animData={ container: elem, renderer: 'svg', loop: false, autoplay: false,	path: '../img/hm_rewards.json' };
var oErp=lottie.loadAnimation(animData);


var bcDelay=0

//if(window.matchMedia('(min-width: 1000px)').matches) { bcDelay=2000; }

const BenefitCategories = document.querySelector('.three-cols');
if(!isIE11) { createObserver('BenefitCategories'); }

function onChangeBenefitCategories(changes, observerBenefitCategories) {
  changes.forEach(function (change) {
    if (change.intersectionRatio >= 1) {
	      console.log("visible")
			setTimeout(function(){ oSup.play(); }, bcDelay);
			setTimeout(function(){ oUyb.play(); }, bcDelay + 500);
			setTimeout(function(){ oErp.play(); }, bcDelay + 1000);
    } else {
	      console.log("hidden")
    }
  });
}


//http://tutorialshares.com/change-background-image-position-scroll-jquery/
if(window.matchMedia('(min-width: 1000px)').matches) {
	$(window).bind("load resize scroll",function(e) {
		var y = $(window).scrollTop();
		$(".ribbonBG").filter(function() {
			return $(this).offset().top < (y + $(window).height()) &&
				   $(this).offset().top + $(this).height() > y;
		}).css('background-position', 'calc(100% + 500px) ' + (parseInt(-y / 5) + 333) + '%');
	});
}
