/* eslint-disable import/extensions */
import KEYBOARD_KEYS from './keyboard_keys.js';
import Key from './key.js';
import { KEYS, createElement } from './helpers.js';

class Keyboard {
  constructor(lang = 'en') {
    this.keys = [];
    this.lang = lang;
    this.isCaps = false;
    this.isShiftPressed = false;
    this.isCtrl = false;
    this.isAlt = false;
    this.textarea = null;
  }

  init() {
    // Textarea

    const wrapperText = createElement('div', 'wrapper');
    document.body.append(wrapperText);

    const text = createElement('textarea', 'text');
    wrapperText.append(text);

    this.textarea = document.querySelector('.text');

    // Keyboard

    const keyboard = createElement('div', 'keyboard');
    document.body.append(keyboard);

    const wrapperKeyboard = createElement('div', 'wrapper');
    keyboard.append(wrapperKeyboard);

    const keyboardKeys = createElement('div', 'keyboard__keys');
    wrapperKeyboard.append(keyboardKeys);

    keyboardKeys.append(this.createKeys());

    this.keys = document.querySelectorAll('.keyboard__key');

    keyboardKeys.addEventListener('click', this.clickHandler.bind(this));
    document.addEventListener('keydown', this.keyDownHandler.bind(this));
    document.addEventListener('keyup', this.keyUpHandler.bind(this));

    // Description

    const wrapperDesc = createElement('div', 'wrapper');
    document.body.append(wrapperDesc);

    const description = createElement('div', 'description');
    wrapperDesc.append(description);

    const descOS = createElement('p', 'description__os');
    descOS.innerHTML = 'Created in Windows';
    description.append(descOS);

    const descSwitchLang = createElement('p', 'description__switch-lang');
    descSwitchLang.innerHTML = 'Switch the language: Ctrl + Alt';
    description.append(descSwitchLang);
  }

  createKeys() {
    const keys = document.createDocumentFragment();
    let row = createElement('div', 'keyboard__row');

    KEYBOARD_KEYS.forEach((k) => {
      const key = new Key(k, this.lang);
      row.append(key.generate());

      if (key.isLastInRow()) {
        keys.append(row);
        row = createElement('div', 'keyboard__row');
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

  findKey(eventCode) {
    let key = null;
    const keyFound = KEYBOARD_KEYS.find((k) => k.code === eventCode);
    if (keyFound) {
      key = keyFound.text[this.lang];
      key = this.isShiftPressed ? keyFound.upperText[this.lang] : keyFound.text[this.lang];
    }
    const keyFoundCode = keyFound.code;
    return { key, keyFoundCode };
  }

  findTarget(key, keyFoundCode, eventCode) {
    let target;
    // eslint-disable-next-line no-restricted-syntax
    for (const k of this.keys) { // iterating through the keys
      // find pressed key on html-keyboard
      if (k.innerHTML === key || k.innerHTML === key.toUpperCase()
        || k.innerHTML === key.toLowerCase() || (k.innerHTML === KEYS.UAR && key === KEYS.UARC)
        || (k.innerHTML === KEYS.LAR && key === KEYS.LARC)
        || (k.innerHTML === KEYS.DAR && key === KEYS.DARC)
        || (k.innerHTML === KEYS.RAR && key === KEYS.RARC)) {
        // handle cases with keys sush as shift, ctrl, alt (pair keys)
        if (k.classList.contains('keyboard__key--extra')) {
          if (eventCode === keyFoundCode) {
            target = k;
            // check whather the key is left or right
            // if left - break the loop
            // if not - continue the search
            if (eventCode.includes('Left')) break;
            // eslint-disable-next-line no-continue
            else if (eventCode.includes('Right')) continue;
          }
        } else {
          target = k;
          break;
        }
      }
    }
    return target;
  }

  keyDownHandler(event) {
    event.preventDefault();
    const { key, keyFoundCode } = this.findKey(event.code);
    if (!key) return;
    this.identifyKey(key);
    const target = this.findTarget(key, keyFoundCode, event.code);
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
    const { key, keyFoundCode } = this.findKey(event.code);
    if (!key) return;
    if (key === KEYS.CAPS) return;
    if (key === KEYS.CTRL) this.isCtrl = false;
    if (key === KEYS.ALT) this.isAlt = false;
    if (key === KEYS.SHIFT) {
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
    const target = this.findTarget(key, keyFoundCode, event.code);
    if (target) {
      target.classList.remove('keyboard__key--active');
    }
  }

  identifyKey(key) {
    switch (key) {
      case KEYS.BACKSPACE:
        this.backspaceKeyHandler();
        break;
      case KEYS.TAB:
        this.tabKeyHandler();
        break;
      case KEYS.DELETE:
        this.deleteKeyHandler();
        break;
      case KEYS.CAPS:
        this.isCaps = !this.isCaps;
        this.capsKeyHandler();
        break;
      case KEYS.SHIFT:
        this.isShiftPressed = true;
        this.shiftKeyHandler();
        break;
      case KEYS.CTRL:
        this.ctrlKeyHandler();
        break;
      case KEYS.WIN:
        break;
      case KEYS.ALT:
        this.altKeyHandler();
        break;
      case KEYS.ENTER:
        this.enterKeyHandler();
        break;
      case KEYS.UAR:
      case KEYS.LAR:
      case KEYS.DAR:
      case KEYS.RAR:
      case KEYS.UARC:
      case KEYS.LARC:
      case KEYS.DARC:
      case KEYS.RARC:
        this.arrowsKeyHandler(key);
        break;
      default:
        this.stdKeyHandler(key);
        break;
    }
  }

  handleStdTabEnter(value, cursorPos) {
    this.textarea.value = this.textarea.value.substring(0, cursorPos)
      + value + this.textarea.value.substring(cursorPos);
    this.setCursor(cursorPos + value.length);
  }

  handleBackspaceDelete(cursorPos) {
    this.textarea.value = this.textarea.value.substring(0, cursorPos)
      + this.textarea.value.substring(cursorPos + 1);
    this.setCursor(cursorPos);
  }

  stdKeyHandler(key) {
    // const textarea = document.querySelector('.text');
    switch (key) {
      case '&amp;':
        // eslint-disable-next-line no-param-reassign
        key = '&';
        break;
      case '&lt;':
        // eslint-disable-next-line no-param-reassign
        key = '<';
        break;
      case '&gt;':
        // eslint-disable-next-line no-param-reassign
        key = '>';
        break;
      default:
        break;
    }

    // eslint-disable-next-line no-bitwise
    const value = this.isCaps ^ this.isShiftPressed ? key.toUpperCase() : key.toLowerCase();
    this.handleStdTabEnter(value, this.textarea.selectionStart);
  }

  backspaceKeyHandler() {
    this.handleBackspaceDelete(this.textarea.selectionStart - 1);
  }

  deleteKeyHandler() {
    this.handleBackspaceDelete(this.textarea.selectionStart);
  }

  tabKeyHandler() {
    this.handleStdTabEnter('    ', this.textarea.selectionStart);
  }

  enterKeyHandler() {
    this.handleStdTabEnter('\n', this.textarea.selectionStart);
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
      case KEYS.UAR:
      case KEYS.UARC:
        this.setCursor(0);
        break;
      case KEYS.LAR:
      case KEYS.LARC:
        this.setCursor(textarea.selectionStart - 1);
        break;
      case KEYS.DAR:
      case KEYS.DARC:
        this.setCursor(textarea.value.length);
        break;
      case KEYS.RAR:
      case KEYS.RARC:
        this.setCursor(textarea.selectionStart + 1);
        break;
      default: break;
    }
  }

  capsKeyHandler() {
    this.keys.forEach((btn) => {
      let key = KEYBOARD_KEYS.find((k) => k.text[this.lang] === btn.innerHTML
        || k.upperText[this.lang] === btn.innerHTML);
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
        // eslint-disable-next-line no-bitwise
        key = this.isCaps ^ this.isShiftPressed ? key.upperText[this.lang] : key.text[this.lang];
        // eslint-disable-next-line no-param-reassign
        btn.innerHTML = key;
      }
    });
  }

  shiftKeyHandler() {
    this.keys.forEach((btn) => {
      let key = KEYBOARD_KEYS.find((k) => k.text[this.lang] === btn.innerHTML
        || k.upperText[this.lang] === btn.innerHTML);
      if (key) {
        key = this.isShiftPressed ? key.upperText[this.lang] : key.text[this.lang];
        // eslint-disable-next-line no-param-reassign
        btn.innerHTML = key;
      }
    });
    if (this.isCaps && this.isShiftPressed) {
      this.capsKeyHandler();
    }
  }

  setCursor(pos) {
    // const textarea = document.querySelector('.text');
    this.textarea.focus();
    this.textarea.selectionStart = pos;
    this.textarea.selectionEnd = pos;
  }

  switchLang() {
    if (this.isShiftPressed) this.shiftKeyHandler();
    const notLang = this.lang;
    this.lang = this.lang === 'en' ? 'ru' : 'en';
    localStorage.setItem('lang', this.lang);
    // eslint-disable-next-line no-restricted-syntax
    for (const btn of this.keys) {
      let key = KEYBOARD_KEYS.find((k) => k.text[notLang] === btn.innerHTML
        || k.upperText[notLang] === btn.innerHTML);
      if (key) {
        // eslint-disable-next-line no-continue
        if (key.code.includes('Digit')) continue;
        if (key.code.includes('Key') || key.code === 'Backquote' || key.code === 'BracketLeft' || key.code === 'BracketRight' || key.code === 'Semicolon' || key.code === 'Quote' || key.code === 'Comma' || key.code === 'Period' || key.code === 'Slash') {
          key = this.isCaps ? key.upperText[this.lang] : key.text[this.lang];
          btn.innerHTML = key;
        }
      }
    }
  }
}


window.onload = () => {
  const keyboard = new Keyboard(localStorage.getItem('lang') || 'en');
  keyboard.init();
};
