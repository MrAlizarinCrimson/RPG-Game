let GameManager = {
    setgamestart: function(classType) {
        this.resetPlayer(classType);
        this.setPreFight();
    },
    resetplayer: function(classtype) {
        switch (classType) {
            case "Bulbasaur":
                player = new player(classType, 200, 121, 92, 121, 85);  //hp, sp, attack, agility, speed (el orden)...
                break;

            case "Charmander":
                player = new Player(classType, 188, 112, 98, 94, 121);
                break;

            case "Jigglypuff":
                player = new player(classType, 340, 85, 85, 49, 40);
                break;

            case "Pikachu":
                player = new player(classType, 180, 94, 103, 94, 166);
                break;

            case "Psyduck":
                player = new player(classType, 210, 121, 98, 94, 103);
                break;

            case "Snorlax":
                player = new player(classType, 430, 121, 202, 202, 58);    //hp, sp, attack, agility, speed (el orden)...
                break;

            case "Evee":
                player = new player(classType, 220, 94, 103, 121,103);
                break;

            case "Caterpie":
                player = new player(classType, 200, 67, 58, 40, 85);
                break;

            case "Venonat":
                player = new player(classType, 230, 94, 103, 103, 85);
                break;

            case "Dratini":
                player = new player(classType, 192, 85, 119, 94, 94);
                break;

            case "Meowth":
                player = new player(classType, 190, 67, 85, 76, 166);
                break;

            case "Squirtle":
                player = new player(classType, 198, 121, 90, 119, 81);
                break;


        }

        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="img/' + classType.tolowerCase() + '.svg" class="img-avatar"><div><h3>' + classType + '</h3><p class=Hp: ' + player.hp + '</p><p class=Sp: ' + player.sp + '</p><p class=Attack: ' + player.attack + '</p><p class=Agility: ' + player.agility + '</p><p class=Speed: ' + player.speed + '</p></div>';

    },
    setPrefight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions"); //emparejar con lo de nat
        let getArena = document.querySelector(".arena");//emparejar con lo de nat

        getHeader.innerHTML = '<p>Elige un enemigo</p>'; //esto no va
        getActions.innerHTML = '<a href="./console.html"  class="btn-prefight" onclick = "GameManager.setFight()" > Selecciona un contricante < /a>';
             
    },


    setFight: function() {
        let getHeader = document.querySelector(".header"); //setfight method, 
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");

      
        getHeader.innerHTML = '<p>Elige tu movimiento</p>'
        getActions.innerHTML = '<a href="#'


   

    }
  
}
}