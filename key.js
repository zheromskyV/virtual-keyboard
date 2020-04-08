/* global document */

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

export default Key;