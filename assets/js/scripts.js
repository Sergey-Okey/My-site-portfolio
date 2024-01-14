var isOpen = false;

function openSidebar() {
	if (!isOpen) {
		document.querySelector('.sidebar').style.display = 'block';
		isOpen = true;
	}
}

function closeSidebar() {
	// Переместите присвоение обработчика события за пределы функции closeSidebar
	document.querySelector('.close-btn').addEventListener('click', function () {
		document.querySelector('.sidebar').style.display = 'none';
		isOpen = false;
	});
}

// Вызовите функцию closeSidebar после полной загрузки DOM
document.addEventListener('DOMContentLoaded', function () {
	closeSidebar();
});

//Active Link Header
function activateLink(link) {
	var links = document.querySelectorAll('.menu a'); // Получаем все ссылки в меню
	links.forEach(function (item) {
		item.classList.remove('active'); // Удаляем класс "active" у всех ссылок
	});
	link.classList.add('active'); // Добавляем класс "active" к ссылке, на которую нажали
}

//Skills Animation

document.addEventListener("DOMContentLoaded", function () {
	var items = document.querySelectorAll(".portfolio_item");

	function checkVisibility() {
		items.forEach(function (item, index) {
			var position = item.getBoundingClientRect();
			var windowCenter = window.innerHeight / 2;

			// Проверяем, виден ли элемент
			if (position.top < windowCenter && position.bottom > windowCenter) {
				// Применяем анимацию
				item.style.transition = "opacity 0.9s, transform 0.5s";
				item.style.opacity = 1;
				item.style.transform = "translateX(0)";
			} else {
				// Возвращаем не видимые элементы в центр
				item.style.transition = "none";
				item.style.opacity = 0;
				item.style.transform = index % 2 === 0 ? "translateX(-50%)" : "translateX(50%)";
			}
		});
	}

	// Вызываем функцию при загрузке страницы и при прокрутке
	window.addEventListener("scroll", checkVisibility);
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

//Logo About

document.addEventListener("DOMContentLoaded", function () {
	var aboutTitle = document.querySelector(".about_title");

	function isElementInViewport(el) {
		var rect = el.getBoundingClientRect();
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	}

	function animateOnScroll() {
		if (isElementInViewport(aboutTitle)) {
			aboutTitle.style.opacity = 1;
			aboutTitle.style.transform = "translateX(0)";
			window.removeEventListener("scroll", animateOnScroll);
		}
	}

	window.addEventListener("scroll", animateOnScroll);
});

//Scrol To Top
function scrollToTop() {
	var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;

	if (currentPosition > 0) {
		window.requestAnimationFrame(scrollToTop);
		window.scrollTo(0, currentPosition - currentPosition / 8);
	}
}