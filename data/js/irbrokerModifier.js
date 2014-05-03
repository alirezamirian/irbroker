

$.fn.textAsInt = function(){
	return parseInt($(this).text().replace(',',''));
}

if( $("#account_number_h").size() ){
	$(document).find("html").attr("ng-app","irbe");
	
	var mainModule = angular.module('irbe',[]);
	mainModule.controller('mainController',function($scope){
		$scope.totalWithFinal = 0;
		$scope.totalWithCurrent = 0;
		$scope.tax = 0.5;
	});
	$stat = $(
		  '<div id="irbrokeraddon-stat" ng-controller="mainController" class="irbrokeraddon-stat">'
		+ '	<div class="divTitleTable"><span class="spanTitle" style="width: auto;">اطلاعات تکمیلی</span></div>'
		+ '	<div class="divFotTable">'
		+ '		<label>جمع کل سرمایه با قیمت پایانی، با کسر <input class="irbrokeraddon-input1" ng-model="tax" /> درصد: '
		+ '			<span id="irbrokeraddon-total">{{(totalWithFinal - (tax/100)*totalWithFinal) | number:1}}</span> تومان</label><br />'
		+ '		<label>جمع کل سرمایه با آخرین قیمت، با کسر <input class="irbrokeraddon-input1" ng-model="tax" /> درصد: '
		+ '			<span id="irbrokeraddon-total2">{{(totalWithCurrent - (tax/100)*totalWithCurrent) | number:1}}</span> تومان</label>'
		+ '	</div>'
		+ '</div>');
	$btnToggleStat = $("<li id='irbrokeraddon-btnToggleStat'><a href='javascript:void(0)'>اطلاعات تکمیلی</a></li>");
	
	$btnToggleStat.click(function(){
		$("#irbrokeraddon-stat").slideToggle("normal");
		$("#irbrokeraddon-btnToggleStat").toggleClass("irbrokeraddon-open");
	});
	timer = setInterval(function(){
		var totalAmount = 0;
		var totalAmount2 = 0;
		$("#orderTable tr[id^=MarketWatch] td[id^=CELL_01]").each(function(){
			totalAmount += $(this).textAsInt() * $(this).siblings("[id^=CELL_14]").textAsInt()/10;
		});
		$("#orderTable tr[id^=MarketWatch] td[id^=CELL_01]").each(function(){
			totalAmount2 += $(this).textAsInt() * $(this).siblings("[id^=CELL_11]").textAsInt()/10;
		});
		var scope = angular.element($("#irbrokeraddon-stat")).scope();
		scope.$apply(function(){
			scope.totalWithFinal = totalAmount;
			scope.totalWithCurrent = totalAmount2;
		});
		//$("#irbrokeraddon-total").text(totalAmount/10);
		//$("#irbrokeraddon-total2").text(totalAmount2/10);
	},1000);
	$(".divDidban").before($stat);
	$("#tnav > ul > li:last").after($btnToggleStat);
}
