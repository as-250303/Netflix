let x=0,y=15;
    function menu(){
        if(x==1){
           
           var element= document.querySelector(".menu");
           element.classList.add("mout");
           setTimeout(function(){ element.style.display="none"; }, 300);
           setTimeout(function(){element.classList.remove("mout"); }, 300);
           
        x=0;
        }
        else{
            
        document.querySelector(".menu").style.display ="block";
        x=1;}
        console.log(y);
    }
    function testjs(name) {
        var b = name,
        url = 'https://as-250303.github.io/Netflix/index2.html?name=' + encodeURIComponent(b);
    
            window.location.assign(url);
    }
    window.onload = function () {
        var url = document.location.href,
            params = url.split('?')[1].split('&'),
            data = {}, tmp;
        for (var i = 0, l = params.length; i < l; i++) {
             tmp = params[i].split('=');
             data[tmp[0]] = tmp[1];
        }
       if(data.name=="godvskong"){
        document.querySelector("video").src="https://techarmy-new.driveas.workers.dev/0:/Godzilla.vs.Kong.2021.1080p.WEBRip.x264-RARBG.mp4";
        document.querySelector(".name").innerHTML ="Godzilla vs. Kong (2021)";
        document.querySelector("h5").innerHTML ="12A | 1h 53min | Action, Sci-Fi, Thriller";
        document.querySelector("track").src= "/Subtitle/godvskong.vtt";
    }
       if(data.name=="JL2"){
        document.querySelector("video").src="https://techarmy-new.driveas.workers.dev/0:/Tg%20@StreamersHub%20Snyder%20Cut%20720p.mkv";
        document.querySelector(".name").innerHTML ="Justice League Snyder Cut (2021)";
        document.querySelector("h5").innerHTML ="12A | 2h 30min | Action, Sci-Fi, Thriller ";
        document.querySelector("track").src= "/Subtitle/godvskong.vt";
    }
       if(data.name=="incep"){
        document.querySelector("video").src="https://techarmy-new.driveas.workers.dev/0:/Telegram@AlPacinoDumpInception_2010_720p_Bluray_Hindi_English_AAC.mkv";
        document.querySelector(".name").innerHTML ="Inception (2010)";
        document.querySelector("h5").innerHTML ="12A | 2h 28min | Action, Adventure, Sci-Fi";
        document.querySelector("track").src= "/Subtitle/godvskong.vt";
    }
       if(data.name=="inter"){
        document.querySelector("video").src="https://techarmy-new.driveas.workers.dev/0:/@nkit/Copy%20of%20Interstellar.2014.720p.BluRay.x264.YIFY.mp4";
        document.querySelector(".name").innerHTML ="Interstellar (2014)";
        document.querySelector("h5").innerHTML ="12A | 2h 49min | Adventure, Drama, Sci-Fi ";
        document.querySelector("track").src= "/Subtitle/godvskong.vt";
    }
       if(data.name=="shutter"){
        document.querySelector("video").src="https://techarmy-new.driveas.workers.dev/0:/Telegram@AlpacinodumpShutter_Island_2010_720p_Hindi_English.mkv";
        document.querySelector(".name").innerHTML ="Shutter Island (2010)";
        document.querySelector("h5").innerHTML ="15 | 2h 18min | Mystery, Thriller ";
        document.querySelector("track").src= "/Subtitle/godvskong.vt";
    }
}
