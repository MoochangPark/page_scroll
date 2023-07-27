// window.onload = function() {

//   //스크롤 퍼센트 구하는 함수
// 	function getPercent(){

// 		var scrollHeight = document.querySelector('.scroll').offsetHeight;
// 		var scrollRealHeight = scrollHeight - window.innerHeight;
// 		var winScrollTop = window.scrollY;
// 		var scrollPercent = Math.round((winScrollTop / scrollRealHeight) * 100); // 최종 퍼센트

// 	};

// 	function init(){
// 		getPercent();
// 	};

// 	document.addEventListener('scroll', function() {
// 		getPercent();
// 	}, false);

// 	init(); //초기화

// };

const d = document.querySelectorAll('.connect_svg');

d.forEach((svg) => {
  svg.addEventListener('click', () => {
    location.href = svg.getAttribute('data-svg-link');
    window.open(location.href, '_blank')
  })
})