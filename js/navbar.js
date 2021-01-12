//nav bar

$(document).ready(function() {
  $('#resume_page').click(function(){

    $('#resume_page').attr("href", "Assets/Hsin-Yu Yang_Resume_2021 Winter_V1.pdf");
    
  })
  $('#blog_page').click(function(){
  
    $('#blog_page').attr("href", "https://medium.com/@annieyanghy");    
  })

  $('#about_page').click(function(){

    $('#about_page').attr("href", "about.html");

  })

  });

  //footer social

  $(document).ready(function() {
    $('#social_medium').click(function(){
 
      $('#social_medium').attr("href", "https://medium.com/@annieyanghy");
      
    })
    $('#social_dribbble').click(function(){
    
      $('#social_dribbble').attr("href", "https://dribbble.com/annieyanghy");    
    })
  
    $('#social_linkedin').click(function(){
    
      $('#social_linkedin').attr("href", "https://www.linkedin.com/in/hsinyuyang/");    
    })

    $('#social_ig').click(function(){
   
      $('#social_ig').attr("href", "https://www.instagram.com/designedbyahy/");    
    })

    $('social_email').click(function(){
   
      $('social_email').attr("href", "mailto:hsinyuy@umich.edu");    
    })
  
    });

 