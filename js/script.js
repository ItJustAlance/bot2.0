$(function() {
    var win_w = $(document).width();
    var win_h = $(window).height();
	$(".js-search-toggler__btn").on("click", function() {
		let wrap = $(this).closest(".js-search-toggler__wrapper");
		wrap.toggleClass("active");
		wrap.find(".js-search-toggler__content").slideToggle();
		wrap.hasClass("active") ? $(this).find(".text").text("Меньше параметров") : $(this).find(".text").text("Больше параметров")
	});

	// Проверяем выделенные чебоксы при загрузке
	// $('.js-rc-item__input:checked').each(function(){
    // 	$(this).closest(".js-rc-item--abc").addClass("selected");
  	// });
	$(".js-popup-open").on("click", function() {
		let modal = $(this).data("modal");
		$("body").addClass("lock");
		$("#"+modal).addClass("show");
	});

    $(".js-rc-item__input").on("click", function() {
    	let wrap = $(this).closest(".js-list-abc-box-wrapper");
		let result = 0;
		wrap.addClass("active");
		$(this).closest(".js-rc-item--abc").toggleClass("selected")
		wrap.find('.js-rc-item__input:checked').each(function(){
	    	$(this).closest(".js-rc-item--abc").addClass("selected");
	    	result++;
	  	});
	  	wrap.find(".js-list-abc-box__selected").text(result);
	  	if(result == 0){
	  		wrap.removeClass("active");
	  	}
    });
    
    $(".js-list-abc-group__item").on("click", function() {
    	$(this).toggleClass("active");
    	const str = $(this).data('group'); // исходная строка
		const arrResult = str.split(',');
    	if($(this).hasClass("active")){
		arrResult.forEach(el => {
			$("#"+el).closest(".js-rc-item--abc").addClass("selected");
			$("#"+el).prop('checked', true);
		})
    	} else {
    		arrResult.forEach(el => {
			$("#"+el).closest(".js-rc-item--abc").removeClass("selected");
			$("#"+el).prop('checked', false);
		})
		
    	}
		
		

    	let wrap = $(this).closest(".js-group-wrapper");
		let result = 0;
		wrap.find(".js-list-abc-box-wrapper").addClass("active");
		$(this).closest(".js-rc-item--abc").toggleClass("selected")
		wrap.find('.js-rc-item__input:checked').each(function(){
	    	$(this).closest(".js-rc-item--abc").addClass("selected");
	    	result++;
	  	});
	  	wrap.find(".js-list-abc-box__selected").text(result);
	  	if(result == 0){
	  		wrap.find(".js-list-abc-box-wrapper").removeClass("active");
	  	}
    });



	$(".js-modal-close").on("click", function() {
		$("body").removeClass("lock");
		$(this).closest(".b-modal").removeClass("show");
	});
    
});

