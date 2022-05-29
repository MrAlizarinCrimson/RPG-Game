	let player;

	function Player(classType, hp, sp, attack, agility, speed) {
	    this.classType = classType ;
	    this.hp = hp;
	    this.sp = sp;
	    this.attack = attack;
	    this.agility = agility;
	    this.speed = speed;
	  

	}

	let PlayerMoves = {
	    calcAttack: function() {
	        //quien ataca primero?
	        let getPlayerSpeed = player.speed;
	        let getEnemySpeed = enemy.speed;
	    }
	        //Player Attack
	        let playerAttack = function() {
	                let calcBaseDamage;
	                if (player.sp > 0) {
	                    calcBaseDamage = player.attack * player.sp / 1000;

	                } else {
	                    calcBaseDamage = player.attack * player.agility / 1000;

	                }
	                //variabilidad en el daño
	                let offsetDamage = Math.floor(Math.random() * Math.floor(10)); 
	                let calcOutputDamage = calcBaseDamage + offsetDamage;
	                //Cantidad de golpes, +1 para evitar llegar a 0, al menos 1 de daño.
	                let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) / 2) + 1; 
	                let attackValues = [calcOutputDamage, numberOfHits];
	                return attackValues;

	            }
	            // Enemy Attack
	        let enemyAttack = function() {
	                let calcBaseDamage;
	                if (enemy.hp > 0) {
	                    calcBaseDamage = enemy.attack * enemy.hp / 1000;

	                } else {
	                    calcBaseDamage = enemy.attack * enemy.speed / 1000;

	                }
	                let offsetDamage = math.floor(Math.random() * Math.floor(10));
	                let calcOutputDamage = calcBaseDamage + offsetDamage;
	                //Cantidad de golpes
	                let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10) / 2) + 1;
	                let attackValues = [calcOutputDamage, numberOfHits];
	                return attackValues;
	            }
	            //get player/enemy hp para que cambie luego!
	        let getPlayerHp = document.querySelector(".hp-player");
	        let getEnemyHp = document.querySelector(".hp-enemy");
	        //Inicio de ataque
	        if (getPlayerSpeed >= getEnemySpeed) {
	            let playerAttackValues = playerAttack();
	            let totaldDamage = playerAttackValues[0] * playerAttackValues[1];
	            enemy.Hp = enemy.Hp - totaldDamage;
	            alert("Inflingiste" + playerAttackValues[0] + "de daño" + playerAttackValues[1] + "veces.");
	            if (enemy.hp <= 0) {
	                alert("¡Has ganado! Actualiza el navegador para jugar nuevamente.");
	                getPlayerHp.innerHTML = 'Hp: ' + player.hp;
	                getEnemyHp.innerHTML = 'Hp: 0 ';
	            } else {
	                getEnemyHp.innerHTML = 'Hp: ' + '$enemy.hp ';
	            }
	            //Ataque enemigo
	            let enemyAttackValues = enemyAttack();
	            let totaleDamage = enemyAttackValues[0] * enemyAttackValues[1];
	            player.hp = player.hp - totaleDamage;
	            alert("Golpe enemigo" + enemyAttackValues[0] + "de daño" + enemyAttackValues[1] + "veces.");
	            if (player.hp <= 0) {
	                alert("¡Has perdido! Actualiza el navegador para jugar nuevamente.");
	                getPlayerHp.innerHTML = 'Hp: 0 ';
	                getEnemyHp.innerHTML = 'Hp:' + enemy.hp;
	            } else {
	                getPlayerHp.innerHTML = 'Hp: ' + player.hp;
	            }
	        } else if (getEnemySpeed >= getPlayerSpeed) {
	            let enemyAttackValues = enemyAttack();
	            let totaldDamage = enemyAttackValues[0] * enemyAttackValues[1];
	            player.hp = player.hp - totaldDamage;
	            alert("Inflingiste" + enemyAttackValues[0] + "de daño" + enemyAttackValues[1] + "veces.");
	            if (player.hp <= 0) {
	                alert("¡Has perdido! Actualiza el navegador para jugar nuevamente.");
	                getEnemyHp.innerHTML = 'Hp:' + enemy.hp;
	                getPlayerHp.innerHTML = 'Hp:' + 0;
	            } else {
	                getPlayerHp.innerHTML = 'Hp: ' + player.hp;

	                //Ataque player
	                let playerAttackValues = playerAttack();
	                let totaldDamage = playerAttackValues[0] * playerAttackValues[1];
	                enemy.hp = enemy.hp - totaldDamage;
	                alert("Golpeaste" + playerAttackValues[0] + "de daño" + playerAttackValues[1] + "veces.");
	                if (enemy.hp <= 0) {
	                    alert("¡Has ganado! Actualiza el navegador para jugar nuevamente.");
	                    getEnemyHp.innerHTML = 'Hp: 0 ';
	                    getPlayerHp.innerHTML = 'Hp: ' + player.hp;
	                } else {
	                    getEnemyHp.innerHTML = 'Hp: ' + enemy.hp;

	                }

	            }

	        }
	    }

	}