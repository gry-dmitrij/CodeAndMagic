'use strict';

const server = {
	_names: [
		'Иван',
		'Хуан Себастьян',
		'Мария',
		'Кристоф',
		'Виктор',
		'Юлия',
		'Люпита',
		'Вашингтон'
	],
	_surnames: [
		'да Марья',
		'Верон',
		'Мирабелла',
		'Вальц',
		'Онопко',
		'Топольницкая',
		'Нионго',
		'Ирвинг'
	],

	_coatColors: [
		'rgb(101, 137, 164)',
		'rgb(241, 43, 107)',
		'rgb(146, 100, 161)',
		'rgb(56, 159, 117)',
		'rgb(215, 210, 55)',
		'rgb(0, 0, 0)',
	],

	_eyesColors: [
		'black',
		'red',
		'blue',
		'yellow',
		'green',
	],

	getName() {
		const name = this._names[this.getRandom(this._names.length)];
		const surname = this._surnames[this.getRandom(this._surnames.length)];
		return name + ' ' + surname;
	},

	getCoatColor() {
		return this._coatColors[this.getRandom(this._coatColors.length)];
	},

	getEyesColor() {
		return this._eyesColors[this.getRandom(this._eyesColors.length)];
	},

	getRandom(maxValue) {
		return Math.floor(Math.random() * maxValue);
	}
}

const setupDialog = {

	show() {
		const setup = document.querySelector('.setup');
		setup.classList.remove('hidden');
		const wizardList = document.querySelector('.setup-similar');
		wizardList.classList.remove('hidden');
	},

	createWizards() {
		const wizardList = document.querySelector('.setup-similar-list');
		const template = document
			.querySelector('#similar-wizard-template')
			.content
			.querySelector('.setup-similar-item');
		for (let i = 0; i < 4; i++) {
			let wizard = template.cloneNode(true);
			this.updateWizard(wizard);
			wizardList.appendChild(wizard);
		}
	},

	updateWizard(wizard) {
		const name = wizard.querySelector('.setup-similar-label');
		name.textContent = server.getName();
		const coat = wizard.querySelector('.wizard-coat');
		coat.style.fill = server.getCoatColor();
		const  eyes = wizard.querySelector('.wizard-eyes');
		eyes.style.fill = server.getEyesColor();
	}
}

setupDialog.createWizards();
setupDialog.show();
