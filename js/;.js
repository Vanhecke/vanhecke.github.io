function show(x) {
  // var curr = $('.shown');
  // curr.removeClass('shown');
  // curr.addClass('hidden');
  // $($('.pages').children()[x]).removeClass('hidden');
  // $($('.pages').children()[x]).addClass('shown');

  switch (x){
  case "#cv":
  	$('.mainpage').load('/cv.html');
	break;
  default:
  	$('.mainpage').load('/main.html');
  }
}

$(window).load(function() {
  var param = document.URL.split('/').reverse().shift();
  console.log(param);
  if(param.substr(0,1) == '#'){
    show(param);
  }
});