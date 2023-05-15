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


/*
<div class="list-abc-box js-list-abc-box-wrapper">
          <div class="list-abc-box-result js-list-abc-box-result">
            <div class="list-abc-box__selected">Выбрано: 
              <span class="list-abc-box__selected">0</span>
            </div>
            <div class="list-abc-box__btn-result"><button class="btn-result">Показать</button></div>
          </div><!--end list-abc-box-result -->
          <div class="list-abc">
            <div class="list-abc__title">A</div>
            <ul class="list-abc__list">
              <li class="list-abc__item">
                <div class="rc-item rc-item--abc js-rc-item--abc">
                    <input class="js-rc-item__input" id="c1119" type="checkbox" value="1">
                    <label for="c1119"><span>Авиамоторная1</span></label>
                  </div>
              </li>
              */