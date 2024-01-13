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