let gamemanager = {
	setgamestart: function(classtype){
		this.resetplayer(classtype);
		this.setprefight();
	},
	resetplayer: function(classtype) {
		switch (classtype) {
			case "Bulbasaur":
			player = new player(classtype, 200, 92, 92, 121, 85, 121);
				break;

			case "Charmander":
			player = new player(classtype, 188, 98, 81, 112, 121, 94);
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
		getInterface.innerHTML = '<img src="">';

	},
	setprefight: function() {

	}
}