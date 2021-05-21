document.getElementById('iconBtn').addEventListener('click', myFunction);
function myFunction() {
			var showhide = document.querySelector('.menubar');
			if(showhide.style.display ==="block") {
				showhide.style.display="none";
			}
			else{
				showhide.style.display="block";
			}

			}