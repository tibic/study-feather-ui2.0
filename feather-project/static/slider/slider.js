require.async([
    "common:jquery",
    "common:bootstrap",
    "common:slider"
], function($,bootstrap,Slider) {

	// 例子1
	var slider = new Slider({
		time: 1000,
		dom: '#slide-test-easing',
		noGap: true,
		mode: 'vertical'
	});

	setInterval(function(){
	    slider.toNext();
	}, 300);

	// $('#slide-test-easing').on('slider:before',function(){
	// 	alert(123);
	// });
	

});
