
 $(document).ready(function(){
	$('.header-menu__btn').click(function () {
	    $(this).toggleClass("open")
		$('.layout__viewport').toggleClass( "layout__viewport--pushed" );
		});
	});
