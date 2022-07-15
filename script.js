// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// ! Кастомный Sellect--------------------------------------------------------------------
document.querySelectorAll('._select').forEach(function (customSellectBody) {
	const selectLangBtn = customSellectBody.querySelector('._select-button');
	const selectLangList = customSellectBody.querySelector('._select-list');
	const selectLangItem = selectLangList.querySelectorAll('._select-item');
	const selectLangHidden = customSellectBody.querySelector('._select-hidden');


	// Клик по кнопке, закрытие и открытие
	selectLangBtn.addEventListener('click', function () {
		selectLangList.classList.toggle('_list_visible');

	});
	// Закрытие после выбора
	selectLangItem.forEach(function (listItem) {
		listItem.addEventListener('click', function (e) {
			e.stopImmediatePropagation;
			selectLangBtn.innerText = this.innerText;
			selectLangHidden.value = this.dataset.value;
			selectLangList.classList.remove('_list_visible');
		})
	});
	// Закрытие после нажатия снаружи списка
	document.addEventListener('click', function (e) {
		if (e.target !== selectLangBtn) {
			selectLangList.classList.remove('_list_visible');
		}
	});
	// Нажатие таб и еск
	document.addEventListener('keydown', function (e) {
		if (e.key === 'Tab' || e.key === 'Escape') {
			selectLangList.classList.remove('_list_visible');
		}
	});
});
// !--------------------- Клонирование блока ------------------------------------------------------------

const newElement = document.querySelector('.header'); // Элемент который клонируем
const cloneElement = newElement.cloneNode(true);

const cloneWrapper = document.querySelector('.header__wrapper'); // Блок, куда клонируем элемент
cloneElement.classList.add('header--fixed'); // Добавляем класс клону
cloneWrapper.append(cloneElement);

// !--------------------- Добавление класа при скроле ----------------------------------------------------

$(window).scroll(function () {
	console.log($(window).scrollTop());
	if ($(window).scrollTop() > 250) {  // Высота на которой присвоится класс
		cloneElement.classList.add('header--is-show'); // Класс который добавится при скроле вниз
	} else {
		cloneElement.classList.remove('header--is-show'); // Убирается класс при скроле вверх
	}
});

// !---------------------------------------------------------------------------------------------
// !---------------------------------------------------------------------------------------------

