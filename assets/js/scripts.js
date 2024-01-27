function openSidebar() {
	if (window.innerWidth >= 768) {
		document.querySelector('.sidebar_desktop').style.display = 'block';
	} else {
		document.querySelector('.sidebar_mobile').style.display = 'block';
	}
}

function closeSidebar() {
	document.querySelector('.sidebar_desktop').style.display = 'none';
	document.querySelector('.sidebar_mobile').style.display = 'none';
}
function activateLink(link) {
	closeSidebar();
}
// Вызов функции closeSidebar после полной загрузки DOM
document.addEventListener('DOMContentLoaded', function () {
	closeSidebar();
});

//Skills Animation
document.addEventListener("DOMContentLoaded", function () {
	var items = document.querySelectorAll(".portfolio_item");

	function checkVisibility() {
		items.forEach(function (item, index) {
			var position = item.getBoundingClientRect();
			var windowCenter = window.innerHeight / 2;
			var isMobile = window.innerWidth < 768;

			// Проверяем, виден ли элемент
			if (position.top < windowCenter && position.bottom > windowCenter) {
				// Применяем анимацию
				item.style.transition = "opacity 0.9s, transform 0.5s";
				item.style.opacity = 1;
				item.style.transform = "translateX(" + (isMobile ? "-11%" : "0%") + ")";
			} else {
				// Возвращаем не видимые элементы в центр
				item.style.transition = "none";
				item.style.opacity = 0;
				item.style.transform = index % 2 === 0 ? (isMobile ? "translateX(-50%)" : "translateX(0%)") : (isMobile ? "translateX(50%)" : "translateX(0%)");
			}
		});
	}

	// Вызываем функцию при загрузке страницы и при прокрутке
	window.addEventListener("scroll", checkVisibility);
	window.addEventListener("resize", checkVisibility); // Добавляем обработчик изменения размера окна
	checkVisibility();
});


//Animation about item

document.addEventListener("DOMContentLoaded", function () {
	var items = document.querySelectorAll(".item");

	function checkScroll() {
		var windowHeight = window.innerHeight;

		items.forEach(function (item) {
			var bounding = item.getBoundingClientRect();

			if (bounding.top >= 0 && bounding.top <= windowHeight) {
				item.style.opacity = "1";
				item.style.transform = "translateX(0)";
			}
		});
	}

	window.addEventListener("scroll", checkScroll);
	checkScroll(); // проверка при загрузке страницы
});

//Scrol To Top
function scrollToTop() {
	var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;

	if (currentPosition > 0) {
		window.requestAnimationFrame(scrollToTop);
		window.scrollTo(0, currentPosition - currentPosition / 10);
	}
}

// Animation Skills_item

document.addEventListener("DOMContentLoaded", function () {
	var skillsItems = document.querySelectorAll('.skills_item');

	function fadeInElements() {
		skillsItems.forEach(function (item, index) {
			setTimeout(function () {
				item.style.opacity = '1';
				item.style.transform = 'translateY(0)';
			}, index * 300); // Измените значение задержки, если необходимо
		});
	}

	function checkVisibility() {
		skillsItems.forEach(function (item) {
			var itemPosition = item.getBoundingClientRect().top;
			var windowHeight = window.innerHeight;

			if (itemPosition - windowHeight <= 0) {
				fadeInElements();
			}
		});
	}

	window.addEventListener('scroll', checkVisibility);

	// Вызовем функцию при загрузке страницы для проверки видимости блоков
	checkVisibility();
});

//Animation Text in Greting

document.addEventListener("DOMContentLoaded", function () {
	// Возможно, вы захотите добавить дополнительные проверки видимости перед запуском анимации

	var letters = document.querySelectorAll('.animated-letter');
	var heading = document.querySelector('.animated-heading');
	var paragraph = document.querySelector('.animated-paragraph');
	var button = document.querySelector('.animated-button');

	function fadeInElements() {
		letters.forEach(function (letter, index) {
			setTimeout(function () {
				letter.style.opacity = '1';
				letter.style.transform = 'translateY(0)';
			}, index * 100);
		});

		setTimeout(function () {
			heading.style.opacity = '1';
			heading.style.transform = 'translateY(0)';
		}, 1000);

		setTimeout(function () {
			paragraph.style.opacity = '1';
			paragraph.style.transform = 'translateY(0)';
		}, 1500);

		setTimeout(function () {
			button.style.opacity = '1';
			button.style.transform = 'translateY(0)';
		}, 2000);
	}

	fadeInElements();
});

//Link Animation Klick 
document.addEventListener("DOMContentLoaded", function () {
	// Обработчик событий для всех якорных ссылок
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();

			const targetId = this.getAttribute('href').substring(1);
			const targetElement = document.getElementById(targetId);

			if (targetElement) {
				window.scrollTo({
					top: targetElement.offsetTop,
					behavior: 'smooth'
				});
			}
		});
	});
});

//Header Sticky
document.addEventListener('DOMContentLoaded', function () {
	var header = document.querySelector('.header');
	var scrollPosition = 0;

	function handleScroll() {
		var newScrollPosition = window.scrollY;

		if (newScrollPosition > 500 && newScrollPosition > scrollPosition) {
			header.classList.add('sticky');
		} else {
			header.classList.remove('sticky');
		}

		scrollPosition = newScrollPosition;
	}

	window.addEventListener('scroll', handleScroll);
});




//Animation Pointer

function updateProgressBar(event) {
	const progressBar = document.querySelector(".progress-bar");
	const progress = document.querySelector(".progress");
	const points = document.querySelectorAll(".point");

	let mouseX = event.pageX - progressBar.offsetLeft;
	let width = (mouseX / progressBar.offsetWidth) * 100 + "%";
	progress.style.width = width;

	points.forEach((point) => {
		if (mouseX >= point.offsetLeft) {
			point.style.backgroundColor = "#66ccff";
		} else {
			point.style.backgroundColor = "#66ccff";
		}
	});
}


//Animation Work

