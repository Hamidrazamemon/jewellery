
	let slideIndex = 1;
        showSlides(slideIndex);
        
        function plusSlides(n) {
          showSlides(slideIndex += n);
        }
        
        function currentSlide(n) {
          showSlides(slideIndex = n);
        }
        
        function showSlides(n) {
          let i;
          let slides = document.getElementsByClassName("mySlides");
          let dots = document.getElementsByClassName("dot");
          if (n > slides.length) {slideIndex = 1}    
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
          }
          for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block";  
          dots[slideIndex-1].className += " active";
        }
        var btn = document.getElementsByClassName("btn");
        var slide = document.getElementById("slide");
        
        btn[0].onclick = function(){
          slide.style.transform = "translatex(0px)";
        }
        btn[1].onclick = function(){
          slide.style.transform = "translatex(-800px)";
        }
        btn[2].onclick = function(){
          slide.style.transform = "translatex(-1600px)";
        }
        btn[3].onclick = function(){
          slide.style.transform = "translatex(-2400px)";
        }

        function validation()
    {
      var fname = document.getElementById('fname').value;
      var lname = document.getElementById('lname').value;
			var emails = document.getElementById('emails').value;
			var mobileNumber = document.getElementById('mobileNumber').value;

      if(fname == ""){
				document.getElementById('firstname').innerHTML =" ** Please fill the firstname field";
				return false;
			}
			if((fname.length <= 2) || (fname.length > 20)) {
				document.getElementById('firstname').innerHTML =" ** firstname lenght must be between 2 and 20";
				return false;	
			}
			if(!isNaN(fname)){
				document.getElementById('firstname').innerHTML =" ** only characters are allowed";
				return false;
			}
		
			
			if(lname == ""){
				document.getElementById('lastname').innerHTML =" ** Please fill the firstname field";
				return false;
			}
			if((lname.length <= 2) || (fname.length > 20)) {
				document.getElementById('lastname').innerHTML =" ** lastname lenght must be between 2 and 20";
				return false;	
			}
			if(!isNaN(lname)){
				document.getElementById('lastname').innerHTML =" ** only characters are allowed";
				return false;
			}


      if(emails == ""){
				document.getElementById('emailids').innerHTML =" ** Please fill the email idx` field";
				return false;
			}
			if(emails.indexOf('@') <= 0 ){
				document.getElementById('emailids').innerHTML =" ** @ Invalid Position";
				return false;
			}

			if((emails.charAt(emails.length-4)!='.') && (emails.charAt(emails.length-3)!='.')){
				document.getElementById('emailids').innerHTML =" ** . Invalid Position";
				return false;
			}

      if(mobileNumber == ""){
				document.getElementById('mobileno').innerHTML =" ** Please fill the mobile NUmber field";
				return false;
			}
			if(isNaN(mobileNumber)){
				document.getElementById('mobileno').innerHTML =" ** user must write digits only not characters";
				return false;
			}
			if(mobileNumber.length!=11){
				document.getElementById('mobileno').innerHTML =" ** Mobile Number must be 11 digits only";
				return false;
			}

    }
