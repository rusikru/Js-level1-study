
<!-- <script type="text/javascript"> -->
	//YOUTUBE

		
	// 	function seacrhLinkVideo(){
	// 	let linkVideo = document.querySelectorAll('#video-title-link');
	// 	linkVideo.forEach(function(item){
 //    		console.log("https://youtube.com" + item.getAttribute('href'));
	// 	})
	// }


	// 	//GEEKBRAINS


	// 	function LinkGeeks ( name, link ) {
	// 		this.name = name;
	// 		this.link = link;
	// 	}
	// 	let users = [];
	// 	let name = document.querySelectorAll('.mates-list__mate-name-block');
	// 	name.forEach(function(item){
 //    		users.push(new LinkGeeks(item.innerText, item.getAttribute('href') ));
	// 	})
	// 	console.log(users);



		//CHESS
		const chess = document.querySelector('#chess');
		for(let j = 0; j <=7; j++){
			for( let i = 0; i <4; i++) {
				const whiteDiv = document.createElement('div');
				whiteDiv.className = 'whiteDiv';
				chess.append(whiteDiv);
				const blackDiv = document.createElement('div');
				blackDiv.className = 'blackDiv';
				chess.append(blackDiv);
				if(j % 2 != 0) {
			whiteDiv.className = 'blackDiv';
			blackDiv.className = 'whiteDiv';

		}
			}
			
		}
<!-- </script> -->
