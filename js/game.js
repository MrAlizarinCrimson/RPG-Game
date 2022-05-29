let gameManager = {
    setgamestart: function(classtype) {
        this.resetPlayer(classType);
        this.setpreFight();
    },
    resetplayer: function(classtype) {
        switch (classType) {
            case "Bulbasaur":
                player = new player(classtype, 200, 92, 92, 121, 85, 121);
                break;

            case "Charmander":
                player = new Player(classtype, 188, 98, 81, 112, 121, 94);
                break;

            case "Jigglypuff":
                player = new player(classtype, 340, 85, 41, 85, 40, 49);
                break;

            case "Pikachu":
                player = new player(classtype, 180, 103, 76, 94, 166, 94);
                break;

            case "Psyduck":
                player = new player(classtype, 210, 98, 90, 121, 103, 94);
                break;

            case "Snorlax":
                player = new player(classtype, 430, 202, 121, 121, 58, 202);
                break;


        }

        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="img/avatar-player/' + classType.tolowerCase() + '.png" class="img-avatar"><div><h3>' + classType + '</h3><p class="vida-player">Vida: ' + player.vida + '</p><p>Ataque: ' + player.Ataque + ' </p><p>Defensa: ' + player.Defensa + '</p><p>AtaqueSp: ' + player.AtaqueSp + '</p><p>Velocidad: ' + player.Velocidad + '</p><p>DefensaSp: ' + player.DefensaSp + '</p></div>';

    },
    setprefight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");

        getHeader.innerHTML = '<p>Inicio de Batalla</p>';
        getActions.innerHTML = '<a href="#'
            /*  class = "btn-prefight"
             onclick = "gameManager.setFight()" > Selecciona un contricante < /a>';
             getArena.style.visibility = "visible"; */
    },


    setFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");

        /*  crear enemigo
         */
        let enemy00 = new Enemy("Evee", 200, 103, 94, 85, 103, 121)
        let enemy01 = new Enemy("Caterpie", 200, 58, 67, 40, 85, 40)
        let enemy02 = new Enemy("Venonat", 230, 103, 94, 76, 85, 103)
        let enemy03 = new Enemy("Dratini", 192, 119, 85, 94, 94, 94)
        let enemy04 = new Enemy("Meowth", 190, 85, 67, 76, 166, 76)
        let enemy05 = new Enemy("Squirtle", 198, 90, 121, 94, 81, 119)

        //pensaba en quizá el enemigo sea aleatorio... pero creo mejor no a estas alturas hahahah

        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
        console.log(chooseRandomEnemy);
        switch (chooseRandomEnemy) {
            case 0:
                enemy = enemy00;
                break;
            case 1:
                enemy = enemy01
                break;
        }

        getHeader.innerHTML = '<p>Elige tu movimiento</p>'
        getActions.innerHTML = '<a href="#'
            /*   class = "btn-prefight"
        onclick = "PlayerMoves.calcAttack()" > Ataca! < /a>';
        getEnemy.innerHTML = '<img src="img/avatar-enemies/' + enemy.enemyType.tolowerCase() + '.png" alt="' + enemy.enemyType + '" class="img-avatar"><div><h3>' + enemy.enemyType + '</h3><p class="vida-enemy">Vida: ' + enemy.vida + '</h3><p>Ataque: ' + enemy.Ataque + '</p><p>'
        Defensa: ' + enemy.Defensa + ' < /p><p>AtaqueSp: ' + enemy.AtaqueSp + '</p > < p > Velocidad: ' + enemy.Velocidad + ' < /p><p>DefensaSp: ' + enemy.DefensaSp + '</p > < /div>';
 */


    }
}