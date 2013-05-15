var gia = function(gia, $){
  
	gia.fullSize = true;
		
	gia.init = function(){
 
		setDisplayParams();
		$(window).resize(setDisplayParams);
		
		//adds the meta tag so that pages display properly on iOS
		$('head').append('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
		
        	//move the social tools on the page
        	moveSocialTools();
        
		$('head link').each(function(){
			//removes all css that does not have the id 'css-gia'
			if( $(this).attr('id') != 'css-gia' && $(this).attr('type') == 'text/css'){
				$(this).remove();
			}
		});
		
		$(document).ready(function(){
			//deletes the pesky dialogue box that is created by the identity api after the page is loaded
			$('#dialogue').remove();
		});
			
	}
	
	moveSocialTools = function(){
		//moves the native social tools: Twitter and Facebook, others are removed
		$('#content-actions').appendTo('#social-tools');
		$('.google-plus').remove();
		$('.linked-in').remove();
		$('.email').remove();
	}
 
	var setDisplayParams = function(){
		if($(window).width() > 780){
			gia.fullSize = true;
		} else {
			gia.fullSize = false;
		}
	}
	
 
	
	return gia;
	
}(gia || {}, jQuery);
 
gia.init();