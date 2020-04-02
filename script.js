import KEYBOARD_KEYS from './keyboard_keys.js';

class Key {
	constructor({
		text = { en: 'a', ru: 'а' },
    	width = 1,
		upperText = { en: 'A', ru: 'А' },
		lastInRow = false,
		code = 'KeyA',
		extra = false
	}, lang = 'en') {
		this.text = text;
		this.width = width;
		this.upperText = upperText;
		this.lastInRow = lastInRow;
		this.code = code;
		this.extra = extra;
		this.lang = lang;
	}

	generate() {
		const key = document.createElement("button");
		key.classList.add("keyboard__key");

		if (this.width === 2) {
			key.classList.add("keyboard__key--wide");
		} else if (this.width === 3) {
			key.classList.add("keyboard__key--space");
		}
		if (this.extra === true) {
			key.classList.add("keyboard__key--extra");
		}

		key.innerHTML = this.text[this.lang]

		return key;
	}

	isLastInRow() {
		return this.lastInRow;
	}
}

class Keyboard {
	constructor(keys = []) {
		this.keys = keys;
	}

	init() {
		const wrapperText = document.createElement("div");
		wrapperText.classList.add("wrapper");
		document.body.append(wrapperText);

		const text = document.createElement("textarea");
		text.classList.add("text");
		wrapperText.append(text);

		const keyboard = document.createElement("div");
		keyboard.classList.add("keyboard");
		document.body.append(keyboard);

		const wrapperKeyboard = document.createElement("div");
		wrapperKeyboard.classList.add("wrapper");
		keyboard.append(wrapperKeyboard);

		const keyboardKeys = document.createElement("div");
		keyboardKeys.classList.add("keyboard__keys");
		wrapperKeyboard.append(keyboardKeys);

		keyboardKeys.append(this.createKeys());
	}

	createKeys() {
		const keys = document.createDocumentFragment();
		let row = document.createElement("div");
		row.classList.add("keyboard__row");

		KEYBOARD_KEYS.forEach((k) => {
			const key = new Key(k, "en");
			row.append(key.generate())
			
			if (key.isLastInRow()) {
				keys.append(row);
				row = document.createElement("div");
				row.classList.add("keyboard__row");
			}
		});

		return keys;
	}
}


window.onload = () => {
	const keyboard = new Keyboard();
	keyboard.init();
}