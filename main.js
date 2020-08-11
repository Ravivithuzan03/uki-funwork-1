SC.initialize({
    client_id: '340f063c670272fac27cfa67bffcafc4'
  });

  $(document).ready(function() { 
      
    SC.stream('/tracks/32128025',function(sound){
        //function start
        $('#start').click(function(e) {
            e.preventDefault();
            sound.start();
          });
          //function stop
          $('#stop').click(function(e) {
            e.preventDefault();
            sound.stop();
          });
 
 
     });
   });   