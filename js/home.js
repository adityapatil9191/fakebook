 // main document ready function to check if dom is loaded fully or not
  $( document ).ready(function() {

    var myFacebookToken = 'EAACEdEose0cBAEhV3RCgEhOADZBQWpwgATXE5CxZBANJk7zeC9oQBZBsdzQmGMLUuICqCuTlZCpvvKIRMcE48JjhOtNUsAQJf81BrKgCGkbZBg82oJZCP88zohZBYvn6Lc5zOigZA0ZBSYnR82yomNHBMvcBR5t07x95ykTsCi1xJ5ZAgQrEzthE3W2meZBpQZCnWUsZD';

    function getFacebookInfo(){

        $.ajax('https://graph.facebook.com/me/feed?fields=id,link,source&access_token='+myFacebookToken,{
        		
                success : function(response){
                	var arr = [];	

                	for(var i = 0;i<response.data.length;i++){

                		arr.push($('<iframe>', {
						   src: response.data[i].source,
						   id:  'myFrame',
						   frameborder: 0,
						   scrolling: 'no',
						   width:'700px',
						   height:'700px',
						  autoplay:'false',
						   frameborder:'0',
						   allowTransparency:'true',
						   allowFullScreen:'true'
						   }));
                	}

                	
                    
                    $(".pointer0").append(arr[0]);
                    $(".pointer1").append(arr[1]);
                    $(".pointer2").append(arr[2]);
                    $(".pointer3").append(arr[3]);
                    $(".pointer4").append(arr[4]);
                    $(".pointer5").append(arr[5]);
                   

                }
            }//end argument list 



        );// end ajax call 


    }// end get facebook info

   getFacebookInfo();


  });