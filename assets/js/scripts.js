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

//CaruselPortfolio
