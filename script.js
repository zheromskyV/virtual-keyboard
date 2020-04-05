import KEYBOARD_KEYS from './keyboard_keys.js';

class Key {
	constructor({
		text = { en: 'a', ru: 'а' },
    	width = 1,
		upperText = { en: 'A', ru: 'А' },
		lastInRow = false,
		code = 'KeyA',
		extra = false
	}, 
	lang = 'en') {
		this.text = text;
		this.width = width;
		this.upperText = upperText;
		this.lastInRow = lastInRow;
		this.code = code;
		this.extra = extra;
		this.lang = lang;
	}

	generate() {
		const key = document.createElement('button');
		key.classList.add('keyboard__key');

		if (this.width === 2) {
			key.classList.add('keyboard__key--wide');
		} else if (this.width === 3) {
			key.classList.add('keyboard__key--space');
		}
		if (this.extra === true) {
			key.classList.add('keyboard__key--extra');
		}

		key.innerHTML = this.text[this.lang]

		return key;
	}

	isLastInRow() {
		return this.lastInRow;
	}
}

class Keyboard {
	constructor(lang = 'en') {
		this.keys = [];
		this.lang = lang;
		this.isCaps = false;
		this.isShiftPressed = false;
		this.isCtrl = false;
		this.isAlt = false;
	}

	init() {
		const wrapperText = document.createElement('div');
		wrapperText.classList.add('wrapper');
		document.body.append(wrapperText);

		const text = document.createElement('textarea');
		text.classList.add('text');
		wrapperText.append(text);

		const keyboard = document.createElement('div');
		keyboard.classList.add('keyboard');
		document.body.append(keyboard);

		const wrapperKeyboard = document.createElement('div');
		wrapperKeyboard.classList.add('wrapper');
		keyboard.append(wrapperKeyboard);

		const keyboardKeys = document.createElement('div');
		keyboardKeys.classList.add('keyboard__keys');
		wrapperKeyboard.append(keyboardKeys);

		keyboardKeys.append(this.createKeys());

		this.keys = document.querySelectorAll('.keyboard__key');
		
		keyboardKeys.addEventListener('click', this.clickHandler.bind(this));
		document.addEventListener('keydown', this.keyDownHandler.bind(this));
		document.addEventListener('keyup', this.keyUpHandler.bind(this));
	}

	createKeys() {
		const keys = document.createDocumentFragment();
		let row = document.createElement('div');
		row.classList.add('keyboard__row');

		KEYBOARD_KEYS.forEach((k) => {
			const key = new Key(k, this.lang);
			row.append(key.generate())
			
			if (key.isLastInRow()) {
				keys.append(row);
				row = document.createElement('div');
				row.classList.add('keyboard__row');
			}
		});

		return keys;
	}

	clickHandler(event) {
		event.preventDefault();
		if (event.target.classList.contains('keyboard__key')) {
			this.identifyKey(event.target.innerHTML);
		}
	}

	keyDownHandler(event) {
		event.preventDefault();
		const keyFound = KEYBOARD_KEYS.find((k) => k.code === event.code);
		if (!keyFound) return;
		let key = keyFound.text[this.lang];
		key = this.isShiftPressed ? keyFound.upperText[this.lang] : keyFound.text[this.lang];
		this.identifyKey(key);
		let target;
		for (const k of this.keys) {
			if (k.innerHTML === key || (k.innerHTML === '↑' && key === '&uarr;') || (k.innerHTML === '←' && key === '&larr;') || (k.innerHTML === '↓' && key === '&darr;') || (k.innerHTML === '→' && key === '&rarr;')) {
				if (k.classList.contains('keyboard__key--extra')) {
					if (event.code === keyFound.code) {
						target = k;
						if (event.code.includes('Left')) break;
						else if (event.code.includes('Right')) continue;
					}
				} else {
					target = k;
					break;
				}
			}
		}
		if (target) {
			if (target.classList.contains('keyboard__key--active') && target.innerHTML === 'Caps Lock') {
				target.classList.remove('keyboard__key--active');
			} else {
				target.classList.add('keyboard__key--active');
			}
		}
	}

	keyUpHandler(event) {
		event.preventDefault();
		const keyFound = KEYBOARD_KEYS.find((k) => k.code === event.code);
		if (!keyFound) return;
		let key = keyFound.text[this.lang];
		key = this.isShiftPressed ? keyFound.upperText[this.lang] : keyFound.text[this.lang];
		if (key === 'Caps Lock') return;
		if (key === 'Ctrl') this.isCtrl = false;
		if (key === 'Alt') this.isAlt = false;
		if (key === 'Shift') {
			if (this.isCaps) {
				this.isShiftPressed = false;
				this.isCaps = !this.isCaps;
				this.capsKeyHandler();
				this.shiftKeyHandler();
				this.isCaps = !this.isCaps;
				this.capsKeyHandler();
			} else {
				this.isShiftPressed = false;
				this.shiftKeyHandler();
			}
		}
		let target;
		for (const k of this.keys) {
			if (k.innerHTML === key || (k.innerHTML === '↑' && key === '&uarr;') || (k.innerHTML === '←' && key === '&larr;') || (k.innerHTML === '↓' && key === '&darr;') || (k.innerHTML === '→' && key === '&rarr;')) {
				if (k.classList.contains('keyboard__key--extra')) {
					if (event.code === keyFound.code) {
						target = k;
						if (event.code.includes('Left')) break;
						else if (event.code.includes('Right')) continue;
					}
				} else {
					target = k;
					break;
				}
			}
		}
		if (target) {
			target.classList.remove('keyboard__key--active');
		}
	}

	identifyKey(key) {
		switch (key) {
			case 'Backspace':
				this.backspaceKeyHandler();
				break;
			case 'Tab':
				this.tabKeyHandler();
				break;
			case 'Del':
				this.deleteKeyHandler();
				break;
			case 'Caps Lock':
				this.isCaps = !this.isCaps;
				this.capsKeyHandler();
				break;
			case 'Shift':
				this.isShiftPressed = true;
				this.shiftKeyHandler();
				break;
			case 'Ctrl':
				this.ctrlKeyHandler();
				break;
			case 'Win':
				break;
			case 'Alt':
				this.altKeyHandler();
				break;
			case 'Enter':
				this.enterKeyHandler();
				break;
			case '&uarr;':
			case '&larr;':
			case '&darr;':
			case '&rarr;':
				this.arrowsKeyHandler(key);
				break;
			default:
				this.stdKeyHandler(key);
				break;
		}
	}
	
	stdKeyHandler(key) {
		const textarea = document.querySelector('.text');
		switch (key) {
			case '&amp;':
				key = '&';
				break;
			case '&lt;':
				key = '<';
				break;
			case '&gt;':
				key = '>';
				break;
			default:
				break;
		}

		const value = this.isCaps ^ this.isShiftPressed ? key.toUpperCase() : key.toLowerCase();
		const cursorPos = textarea.selectionStart;
		textarea.value = textarea.value.substring(0, cursorPos) + value + textarea.value.substring(cursorPos);
		this.setCursor(cursorPos + 1);
	}

	backspaceKeyHandler() {
		const textarea = document.querySelector('.text');
		const cursorPos = textarea.selectionStart;
		textarea.value = textarea.value.substring(0, cursorPos - 1) + textarea.value.substring(cursorPos);
		this.setCursor(cursorPos - 1);
	}

	deleteKeyHandler() {
		const textarea = document.querySelector('.text');
		const cursorPos = textarea.selectionStart;
		textarea.value = textarea.value.substring(0, cursorPos) + textarea.value.substring(cursorPos + 1);
		this.setCursor(cursorPos);
	}

	tabKeyHandler() {
		const textarea = document.querySelector('.text');
		const value = '    ';
		const cursorPos = textarea.selectionStart;
		textarea.value = textarea.value.substring(0, cursorPos) + value + textarea.value.substring(cursorPos);
		this.setCursor(cursorPos + 4);
	}

	enterKeyHandler() {
		const textarea = document.querySelector('.text');
		const value = '\n';
		const cursorPos = textarea.selectionStart;
		textarea.value = textarea.value.substring(0, cursorPos) + value + textarea.value.substring(cursorPos);
		this.setCursor(cursorPos + 1);
	}

	ctrlKeyHandler() {
		this.isCtrl = !this.isCtrl;
		if (this.isCtrl && this.isAlt) {
			this.switchLang();
		}
	}

	altKeyHandler() {
		this.isAlt = !this.isAlt;
		if (this.isCtrl && this.isAlt) {
			this.switchLang();
		}
	}

	arrowsKeyHandler(arrow) {
		const textarea = document.querySelector('.text');
		switch (arrow) {
			case '&uarr;':
				this.setCursor(0);
				break;
			case '&larr;':
				this.setCursor(textarea.selectionStart - 1);
				break;
			case '&darr;':
				this.setCursor(textarea.value.length);
				break;
			case '&rarr;':
				this.setCursor(textarea.selectionStart + 1);
				break;
			default: break;
		}
	}

	capsKeyHandler() {
		this.keys.forEach((btn) => {
			let key = KEYBOARD_KEYS.find((k) => k.text[this.lang] === btn.innerHTML || k.upperText[this.lang] === btn.innerHTML);
			let shouldChangeKey = false;
			if (key) {
				if (key.code.includes('Key')) {
					shouldChangeKey = true;
				}
				if (this.lang === 'ru') {
					if (key.code === 'Backquote' || key.code === 'BracketLeft' || key.code === 'BracketRight' || key.code === 'Semicolon' || key.code === 'Quote' || key.code === 'Comma' || key.code === 'Period') {
						shouldChangeKey = true;
					}
				}
			}
			if (shouldChangeKey) {
				key = this.isCaps ^ this.isShiftPressed ? key.upperText[this.lang] : key.text[this.lang];
				btn.innerHTML = key;
			}
		});
	}

	shiftKeyHandler() {
		this.keys.forEach((btn) => {
			let key = KEYBOARD_KEYS.find((k) => k.text[this.lang] === btn.innerHTML || k.upperText[this.lang] === btn.innerHTML);
			if (key) {
				key = this.isShiftPressed ? key.upperText[this.lang] : key.text[this.lang];
				btn.innerHTML = key;
			}
		});
		if (this.isCaps && this.isShiftPressed) {
			this.capsKeyHandler();
		}
	}

	setCursor(pos) {
		const textarea = document.querySelector('.text');
		textarea.focus();
		textarea.selectionStart = pos;
		textarea.selectionEnd = pos; 
	}

	switchLang() {
		if (this.isShiftPressed) this.shiftKeyHandler();
		const notLang = this.lang;
		this.lang = this.lang === 'en' ? 'ru' : 'en';
		localStorage.setItem('lang', this.lang);
		for (const btn of this.keys) {
			let key = KEYBOARD_KEYS.find((k) => k.text[notLang] === btn.innerHTML || k.upperText[notLang] === btn.innerHTML);
			if (key) {
				if (key.code.includes('Digit')) continue;
				if (key.code.includes('Key') || key.code === 'Backquote' || key.code === 'BracketLeft' || key.code === 'BracketRight' || key.code === 'Semicolon' || key.code === 'Quote' || key.code === 'Comma' || key.code === 'Period' || key.code === 'Slash') {
					key = this.isCaps ? key.upperText[this.lang] : key.text[this.lang];
					btn.innerHTML = key;
				}
			}
		};
	}

}


window.onload = () => {
	const keyboard = new Keyboard(localStorage.getItem('lang') || 'en');
	keyboard.init();
}