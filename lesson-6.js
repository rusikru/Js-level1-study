

const figuers = {
  black: {
      king: '&#9818',
      rook: '&#9820',
      bishop: '&#9821',
      queen: '&#9819',
      knight: '&#9822',
      pawn: '&#9823',

  },
  white: {
      king: '&#9812',
      rook: '&#9814',
      bishop: '&#9815',
      queen: '&#9813',
      knight: '&#9816',
      pawn: '&#9817',
  }
};
	const chess = document.querySelector('#chess');
		for(let j = 0; j <=7; j++){
			for( let i = 0; i <= 7; i++) {
				const square = document.createElement('div');
				square.className = 'square';
				chess.append(square);
				if((j % 2 == 0 && i % 2 != 0) || (j %2 != 0 && i % 2 == 0)) {
					square.classList.add('black');
				}
				if (j == 0 || j == 7) {
					if (j == 7) {
					figuers.black = figuers.white;
					}
				switch (i) {
					case 0:
						square.innerHTML = figuers.black.rook;
						break;
					case 1:
						square.innerHTML = figuers.black.knight;
						break;
					case 2:
						square.innerHTML = figuers.black.bishop;
						break;
					case 3:
						square.innerHTML = figuers.black.queen;
						break;
					case 4:
						square.innerHTML = figuers.black.king;
						break;
					case 5:
						square.innerHTML = figuers.black.bishop;
						break;
					case 6:
						square.innerHTML = figuers.black.knight;
						break;
					case 7:
						square.innerHTML = figuers.black.rook;
						break;
				} 
			}
			else if(j == 1 || j == 6) {
					square.innerHTML = figuers.black.pawn;
					if (j == 6) {
					figuers.black = figuers.white;
					}
				}
				let clickGreen = function (){
					square.classList.add('green');

				}
				square.addEventListener('click', clickGreen);
				if(square.className == 'green') {
					square.removeEventListener('click', clickGreen);
				}
			}
		}
