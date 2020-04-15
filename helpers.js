const KEY_STD = 1;
const KEY_WIDE = 2;
const KEY_EXTRA_WIDE = 3;

const KEYS = {
  BACKSPACE: 'Backspace',
  DELETE: 'Del',
  TAB: 'Tab',
  CAPS: 'Caps Lock',
  SHIFT: 'Shift',
  ENTER: 'Enter',
  ALT: 'Alt',
  CTRL: 'Ctrl',
  WIN: 'Win',
  UAR: '↑',
  UARC: '&uarr;',
  LAR: '←',
  LARC: '&larr;',
  DAR: '↓',
  DARC: '&darr;',
  RAR: '→',
  RARC: '&rarr;',
};

function createElement(tagName, className) {
  const element = document.createElement(tagName);
  element.classList.add(className);
  return element;
}


export {
  KEY_STD,
  KEY_WIDE,
  KEY_EXTRA_WIDE,
  KEYS,
  createElement,
};
