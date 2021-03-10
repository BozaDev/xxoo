const clog = console.log;



//responsive game box (viewport and full window dimensions will change)

window.addEventListener('resize', function() {
	
    var viewport_width = window.innerWidth;
    var viewport_height = window.innerHeight;
    var game_width = document.querySelector('.game');
    
    if(viewport_height > viewport_width){
        if(viewport_width<500){
            game_width.style.width = viewport_width - 20 +"px";
            game_width.style.height = viewport_width - 20 +"px";
        }
    }else if(viewport_height < viewport_width){
        if(viewport_height<500){
            game_width.style.width = viewport_height - 20 +"px";
            game_width.style.height = viewport_height - 20 +"px";
        }
    }
});


var content = ` <div class="main">
                    <div class="game">

                    </div>
                </div>`
    
var container = document.querySelector('#container');

container.insertAdjacentHTML("afterbegin", content);