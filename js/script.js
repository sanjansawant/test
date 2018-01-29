  $(document).ready(function() {
        var obj = document.createElement("audio");
        obj.src="https://kahimyang.com/resources/sound/click.mp3";
        obj.volume=0.10;
        obj.autoPlay=false;
        obj.preLoad=true;       
 		
        $(".playsong").click(function() {
        	alert("clicked");
            obj.play();
        });
 
    });




// var song=$(".playsong");

// song.click(function(){
// 	alert("clicked");
// 	var audio = new Audio('sample.mp3');
// 	audio.play();

// });

