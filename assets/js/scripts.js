var isOpen = false;

function openSidebar() {
	if (!isOpen) {
		document.querySelector('.sidebar').style.display = 'block';
		isOpen = true;
	}
}

function closeSidebar() {
	document.querySelector('.close-btn').addEventListener('click', function () {
		document.querySelector('.sidebar').style.display = 'none';
		isOpen = false;
	});
}

// Вызываем функцию closeSidebar для добавления обработчика события
closeSidebar();
