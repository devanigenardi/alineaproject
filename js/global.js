var qsColor="blue"

var isIE11=false;
if(navigator.userAgent.indexOf('MSIE')!==-1
|| navigator.appVersion.indexOf('Trident/') > -1){
  isIE11=true;
}

let options = {
  threshold: 1.0,
  rootMargin: '0px 0px -50px 0px'
}

$(document).ready(function() {
	$(".tc-wst, .wstBG").addClass("wstAnim");
	$(".fb-content .cta-text").attr("tabindex","-1");
	$(".fb-content p a").attr("tabindex","-1");
	$(".fb-title-open .fb-content .cta-text").attr("tabindex","0");
	$(".ob-content a").attr("tabindex","-1");
});

$(".navOC").on("click",function() {
	$(".explore-links").toggleClass("explore-links-open");
	$(".explore-close").toggleClass("displayFlex");
	if($(".explore-links").hasClass("explore-links-open")) {
		$(".explore-link").attr("tabindex","0");
	} else {
		$(".explore-link").attr({"tabindex":"-1"});
	}
});

var fn=1
$("fn").each(function(index) {
	if($(this).attr("data-fn") != undefined) {
		$(this).html("<sup>" + $(this).attr("data-fn") + "</sup>")
	} else {
		$(this).html("<sup>" + fn + "</sup>")
		fn=fn+1;
	}
})

$(".terms-link").on("click",function() {
	$(".all-terms").toggleClass("hideMe");
});

$(".fb-link").on("click",function() {
	$(this).parent().toggleClass('fb-title-open');
	if($(this).parent().hasClass("fb-title-open")) {
		$(this).parent().find(".fb-content .cta-text").attr("tabindex","0")
		$(this).parent().find(".fb-content p a").attr("tabindex","0")
	} else {
		$(this).parent().find(".fb-content .cta-text").attr("tabindex","-1")
		$(this).parent().find(".fb-content p a").attr("tabindex","-1")
	}
});

$(".obHead").on("click",function() {
	$(this).parent().next().toggleClass('ob-content-open');
	$(this).parent().toggleClass("ob-arrow-open");
	if($(this).parent().hasClass("ob-arrow-open")) {
		$(this).parent().next().find("a").attr("tabindex","0")
	} else {
		$(this).parent().next().find("a").attr("tabindex","-1")
	}
});


/* GOLD */
$(".fb-text-gold .fbTHC").addClass("fb-title-open")


function createObserver(o) {
	window['observer' + o] = new IntersectionObserver(window['onChange' + o], options);
	window['observer' + o].observe(eval(o));
}

var hash = window.location.hash;
if(hash=="#legal") {
	$(".shared").css({"outline":"0"});
	$(".ob-content-open.shared").css({"outline":"0"})
}
