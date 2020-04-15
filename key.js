// eslint-disable-next-line import/extensions
import { KEY_STD, KEY_WIDE, KEY_EXTRA_WIDE } from './helpers.js';

class Key {
  constructor({
    text = { en: 'a', ru: 'а' },
    width = KEY_STD,
    upperText = { en: 'A', ru: 'А' },
    lastInRow = false,
    code = 'KeyA',
    extra = false,
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
    const key = document.createElement('button');
    key.classList.add('keyboard__key');

    if (this.width === KEY_WIDE) {
      key.classList.add('keyboard__key--wide');
    } else if (this.width === KEY_EXTRA_WIDE) {
      key.classList.add('keyboard__key--space');
    }
    if (this.extra === true) {
      key.classList.add('keyboard__key--extra');
    }

    key.innerHTML = this.text[this.lang];

    return key;
  }

  isLastInRow() {
    return this.lastInRow;
  }
}

export default Key;
