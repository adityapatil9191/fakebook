$(document).ready(function(){
	var facebook = 'EAACEdEose0cBAFU7CU846ZAfiZCbxNBZB8YghpacZBgxKDWPdb9LaVMZAqESQdjR6WrZBEouwhYaTkjPE3utCPRZBx1K0HVTAerPy9mE7NOEh456EXzRWanBBj25oa2zaAOkXmqIl9U3laNbfjPtthQS5kq7H4GNg0e2Nwgg9Xg7x0ZBlflhvsMfktQ7mRKKmUAZD';
	
	(function getprofileinfo(){
		$.ajax('https://graph.facebook.com/me?fields=id,name,about,education,email,address,birthday,picture,work,hometown,first_name,last_name,gender&access_token='+facebook,{

			success: function(response){
				console.log(response);
				console.log(response.name);
				$("#myemail").text(response.email);
				$("#myname").text(response.name);
				$(".myname").text(response.name);
				$("#mycity").text(response.hometown.name);
				$("#mystate").text(response.hometown.name.substring(','));
				$("#mygender").text(response.gender);
				$("#mybirthdate").text(response.birthday);

				$('#myimage').prepend('<img id="myphoto" src="https://scontent.fnag1-1.fna.fbcdn.net/v/t1.0-1/p160x160/13707691_1268340716544471_8811540704103684853_n.jpg?oh=be62b20cc87441dd15cc768872a90d22&amp;oe=5AF1B24D" alt ="images/user.jpg" />');


			},
			error:function(){
					$("#myname").text("User Name");
					$(".myname").text("User Name");
					$('#myimage').prepend('<img id="myphoto" src="images/user.jpg" />');
				

				

			}

		});//end ajax call

	})();//end get facebook info


});