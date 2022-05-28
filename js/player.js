	let player;

	function Player(clase, Vida, ataque, defensa, ataquesp, velocidad, defensasp) {
		this.clase = clase;
		this.vida = vida;
		this.ataque = ataque;
		this.defensa = defensa;
		this.ataquesp = ataquesp;
		this.velocidad = velocidad;
		this.defensasp = defensasp;

	}

	let PlayerMoves = {
		calcAttack: function() {
			//quien ataca primero?
			let getPlayerVelocidad = player.velocidad;
			let getEnemyVelocidad = enemy.velocidad;
			//Player Attack
			let player.Attack = function() {´
				let calcBaseDamage;
				if (player.defensa > 0) {
					calcBaseDamage = player.ataque * player.vida / 1000;

				} else {
					calcBaseDamage = player.ataque * player.defensa / 1000;

				}
				let offsetDamage = math.floor(Math.random() * Math.floor(10));
				let calcOutputDamage = calcBaseDamage + offsetDamage;
				//Cantidad de golpes
				let numberOfHits = Math.floor(Math.random() * Math.floor(player.velocidad/ 10) / 2) + 1;
				let attackValues = [calcOutputDamage, numberOfHits];
				return attackValues;

				}
				// Enemy Attack
				let enemy.Attack = function() {´
				let calcBaseDamage;
				if (enemy.vida > 0) {
					calcBaseDamage = enemy.strength * enemy.vida / 1000;

				} else {
					calcBaseDamage = enemy.strength * enemy.velocidad/ 1000;

				}
				let offsetDamage = math.floor(Math.random() * Math.floor(10));
				let calcOutputDamage = calcBaseDamage + offsetDamage;
				//Cantidad de golpes
				let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.velocidad / 10) / 2) + 1;
				let attackValues = [calcOutputDamage, numberOfHits];
				return attackValues;
			}
			//get player/enemy vida para que cambie luego!
			let getPlayerVida = document.querySelector(".vida-player");
			let getEnemyVida = document.querySelector(".vida-enemy");
			//Inicio de ataque
			if(getPlayerVelocidad >= getEnemyVelocidad) {
				let playerAttackValues = playerAttack();
				let totaldDamage = playerAttackValues[0] * playerAttackValues[1];
				enemy.vida = enemy.vida - totaldDamage;
				alert("Inflingiste" + playerAttackValues[0] + "de daño" + playerAttackValues[1] + "veces.");
				if (enemy.vida<=0) {
					alert("¡Has ganado! Actualiza el navegador para jugar nuevamente."); 
					getPlayerVida.innerHTML ='Vida': ' + player.vida;
					getEnemyVida.innerHTML ='Vida': 0';
				} else {
					getEnemyVida.innerHTML ='Vida': ' + enemy.vida;

			//Ataque enemigo
			let enemyAttackValues = enemyAttack();
			let totaldDamage = enemyAttackValues[0] * enemyAttackValues[1];
				player.vida = player.vida - totaldDamage;
				alert("Golpe enemigo" + enemyAttackValues[0] + "de daño" + enemyAttackValues[1] + "veces.");
				if (player.vida<=0) {
					alert("¡Has perdido! Actualiza el navegador para jugar nuevamente."); 
					getPlayerVida.innerHTML ='Vida': 0 ';
					getEnemyVida.innerHTML ='Vida': ' + enemy.vida;
				} else {
					getPlayerVida.innerHTML = 'Vida: ' + player.vida;
				}


			} else if(getEnemyVelocidad >= getPlayerVelocidad) {
				let enemyAttackValues = enemyAttack();
				let totaldDamage = enemyAttackValues[0] * enemyAttackValues[1];
				player.vida = player.vida - totaldDamage;
				alert("Inflingiste" + enemyAttackValues[0] + "de daño" + enemyAttackValues[1] + "veces.");
				if (player.vida<=0) {
					alert("¡Has perdido! Actualiza el navegador para jugar nuevamente."); 
					getEnemyVida.innerHTML ='Vida': ' + enemy.vida;
					getPlayerVida.innerHTML ='Vida': 0';
				} else {
					getPlayerVida.innerHTML ='Vida': ' + player.vida;

			//Ataque player
			let playerAttackValues = playerAttack();
			let totaldDamage = playerAttackValues[0] * playerAttackValues[1];
				enemy.vida = enemy.vida - totaldDamage;
				alert("Golpeaste" + playerAttackValues[0] + "de daño" + playerAttackValues[1] + "veces.");
				if (enemy.vida<=0) {
					alert("¡Has ganado! Actualiza el navegador para jugar nuevamente."); 
					getEnemyVida.innerHTML ='Vida': 0 ';
					getPlayerVida.innerHTML ='Vida': ' + player.vida;
				} else {
					getEnemyVida.innerHTML = 'Vida: ' + enemy.vida;
		
		}

		}