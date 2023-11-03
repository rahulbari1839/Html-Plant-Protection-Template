
$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('.back-to-top:hidden').stop(true, true).fadeIn();
    } else {
        $('back-to-top').stop(true, true).fadeOut();
    }
});
 
 jQuery('document').ready( function() {



        setTimeout( function(){
          
        
           jQuery('.rbt-wrapper-loder').hide(2000);
           jQuery('.body-layout').show("slow");
           $('.rbt-silder-inner').owlCarousel({
				items: 1,
				animateOut: '.rbt-silder-inner',
				loop: true,
				margin: 10,
				nav:true,
				dots: true,
				lazyLoad: true,
				autoplay:true,
				navText:["<div class='nav-btn prev-slide'> <span><i class='fa-solid fa-circle-arrow-left rbt-sl-fo'></i></span> </div>","<div class='nav-btn next-slide'><span></span><i class='fa-solid fa-circle-arrow-right rbt-sl-fo'></i></div>"],
			});
				 
       });


 	


       $(".navbar-toggler").click(function(){
         $(".donection").hide(1000);
       });

       


       $('.blog-silder-slow').owlCarousel({                                  
              animateOut:'.blog-silder-slow',
              loop:true,
              margin:10,
              nav:true,
              dots:false,
              autoplay:false,
             /* lazyLoad: true,*/
              responsive:{

                     0 :{
                            items:1
                     },

                      600 :{
                            items:2
                     },
                      1000 :{
                            items:3
                     }



              }

       });



        $('.feed-back-silder').owlCarousel({
              animateOut:'.feed-back-silder',
              loop:true,
              margin:10,
              nav:false,
              dots:true,
              autoplay:true,
              lazyLoad: true,

              responsive:{

                     0 :{
                            items:1
                     },

                      600 :{
                            items:2
                     },
                      1000 :{
                            items:3
                     }



              }

       });



       const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / 200;
    if (count < target) {
      counter.innerText = `${Math.ceil(count + increment)}`;
      setTimeout(updateCounter, 1);
    } else counter.innerText = target;
  };
  updateCounter();
});




 	



 });






 
