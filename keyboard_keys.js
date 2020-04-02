const KEYBOARD_KEYS = [
	{
	  text: { en: '`', ru: 'ё' },
	  width: 1,
	  upperText: { en: '~', ru: 'ё' },
	  lastInRow: false,
	  code: 'Backquote',
	},
	{
	  text: { en: '1', ru: '1' },
	  width: 1,
	  upperText: { en: '!', ru: '!' },
	  lastInRow: false,
	  code: 'Digit1',
	},
	{
	  text: { en: '2', ru: '2' },
	  width: 1,
	  upperText: { en: '@', ru: '"' },
	  lastInRow: false,
	  code: 'Digit2',
	},
	{
	  text: { en: '3', ru: '3' },
	  width: 1,
	  upperText: { en: '#', ru: '№' },
	  lastInRow: false,
	  code: 'Digit3',
	},
	{
	  text: { en: '4', ru: '4' },
	  width: 1,
	  upperText: { en: '$', ru: ';' },
	  lastInRow: false,
	  code: 'Digit4',
	},
	{
	  text: { en: '5', ru: '5' },
	  width: 1,
	  upperText: { en: '%', ru: '%' },
	  lastInRow: false,
	  code: 'Digit5',
	},
	{
	  text: { en: '6', ru: '6' },
	  width: 1,
	  upperText: { en: '^', ru: ':' },
	  lastInRow: false,
	  code: 'Digit6',
	},
	{
	  text: { en: '7', ru: '7' },
	  width: 1,
	  upperText: { en: '&', ru: '?' },
	  lastInRow: false,
	  code: 'Digit7',
	},
	{
	  text: { en: '8', ru: '8' },
	  width: 1,
	  upperText: { en: '*', ru: '*' },
	  lastInRow: false,
	  code: 'Digit8',
	},
	{
	  text: { en: '9', ru: '9' },
	  width: 1,
	  upperText: { en: '(', ru: '(' },
	  lastInRow: false,
	  code: 'Digit9',
	},
	{
	  text: { en: '0', ru: '0' },
	  width: 1,
	  upperText: { en: ')', ru: ')' },
	  lastInRow: false,
	  code: 'Digit0',
	},
	{
	  text: { en: '-', ru: '-' },
	  width: 1,
	  upperText: { en: '_', ru: '_' },
	  lastInRow: false,
	  code: 'Minus',
	},
	{
	  text: { en: '=', ru: '=' },
	  width: 1,
	  upperText: { en: '+', ru: '+' },
	  lastInRow: false,
	  code: 'Equal',
	},
	{
	  text: { en: 'Backspace', ru: 'Backspace' },
	  width: 2,
	  upperText: { en: 'Backspace', ru: 'Backspace' },
	  lastInRow: true,
	  code: 'Backspace',
	  extra: true,
	},
	{
	  text: { en: 'Tab', ru: 'Tab' },
	  width: 1,
	  upperText: { en: 'Tab', ru: 'Tab' },
	  lastInRow: false,
	  code: 'Tab',
	  extra: true,
	},
	{
	  text: { en: 'q', ru: 'й' },
	  width: 1,
	  upperText: { en: 'q', ru: 'й' },
	  lastInRow: false,
	  code: 'KeyQ',
	},
	{
	  text: { en: 'w', ru: 'ц' },
	  width: 1,
	  upperText: { en: 'w', ru: 'ц' },
	  lastInRow: false,
	  code: 'KeyW',
	},
	{
	  text: { en: 'e', ru: 'у' },
	  width: 1,
	  upperText: { en: 'e', ru: 'у' },
	  lastInRow: false,
	  code: 'KeyE',
	},
	{
	  text: { en: 'r', ru: 'к' },
	  width: 1,
	  upperText: { en: 'r', ru: 'к' },
	  lastInRow: false,
	  code: 'KeyR',
	},
	{
	  text: { en: 't', ru: 'е' },
	  width: 1,
	  upperText: { en: 't', ru: 'е' },
	  lastInRow: false,
	  code: 'KeyT',
	},
	{
	  text: { en: 'y', ru: 'н' },
	  width: 1,
	  upperText: { en: 'y', ru: 'н' },
	  lastInRow: false,
	  code: 'KeyY',
	},
	{
	  text: { en: 'u', ru: 'г' },
	  width: 1,
	  upperText: { en: 'u', ru: 'г' },
	  lastInRow: false,
	  code: 'KeyU',
	},
	{
	  text: { en: 'i', ru: 'ш' },
	  width: 1,
	  upperText: { en: 'i', ru: 'ш' },
	  lastInRow: false,
	  code: 'KeyI',
	},
	{
	  text: { en: 'o', ru: 'щ' },
	  width: 1,
	  upperText: { en: 'o', ru: 'щ' },
	  lastInRow: false,
	  code: 'KeyO',
	},
	{
	  text: { en: 'p', ru: 'з' },
	  width: 1,
	  upperText: { en: 'p', ru: 'з' },
	  lastInRow: false,
	  code: 'KeyP',
	},
	{
	  text: { en: '[', ru: 'х' },
	  width: 1,
	  upperText: { en: '{', ru: 'х' },
	  lastInRow: false,
	  code: 'BracketLeft',
	},
	{
	  text: { en: ']', ru: 'ъ' },
	  width: 1,
	  upperText: { en: '}', ru: 'ъ' },
	  lastInRow: false,
	  code: 'BracketRight',
	},
	{
	  text: { en: '\\', ru: '\\' },
	  width: 1,
	  upperText: { en: '|', ru: '/' },
	  lastInRow: false,
	  code: 'Backslash',
	},
	{
	  text: { en: 'DEL', ru: 'DEL' },
	  width: 1,
	  upperText: { en: 'DEL', ru: 'DEL' },
	  lastInRow: true,
	  code: 'Delete',
	  extra: true,
	},
	{
	  text: { en: 'Caps Lock', ru: 'Caps Lock' },
	  width: 2,
	  upperText: { en: 'Caps Lock', ru: 'Caps Lock' },
	  lastInRow: false,
	  code: 'CapsLock',
	  extra: true,
	},
	{
	  text: { en: 'a', ru: 'ф' },
	  width: 1,
	  upperText: { en: 'a', ru: 'ф' },
	  lastInRow: false,
	  code: 'KeyA',
	},
	{
	  text: { en: 's', ru: 'ы' },
	  width: 1,
	  upperText: { en: 's', ru: 'ы' },
	  lastInRow: false,
	  code: 'KeyS',
	},
	{
	  text: { en: 'd', ru: 'в' },
	  width: 1,
	  upperText: { en: 'd', ru: 'в' },
	  lastInRow: false,
	  code: 'KeyD',
	},
	{
	  text: { en: 'f', ru: 'а' },
	  width: 1,
	  upperText: { en: 'f', ru: 'а' },
	  lastInRow: false,
	  code: 'KeyF',
	},
	{
	  text: { en: 'g', ru: 'п' },
	  width: 1,
	  upperText: { en: 'g', ru: 'п' },
	  lastInRow: false,
	  code: 'KeyG',
	},
	{
	  text: { en: 'h', ru: 'р' },
	  width: 1,
	  upperText: { en: 'h', ru: 'р' },
	  lastInRow: false,
	  code: 'KeyH',
	},
	{
	  text: { en: 'j', ru: 'о' },
	  width: 1,
	  upperText: { en: 'j', ru: 'о' },
	  lastInRow: false,
	  code: 'KeyJ',
	},
	{
	  text: { en: 'k', ru: 'л' },
	  width: 1,
	  upperText: { en: 'k', ru: 'л' },
	  lastInRow: false,
	  code: 'KeyK',
	},
	{
	  text: { en: 'l', ru: 'д' },
	  width: 1,
	  upperText: { en: 'l', ru: 'д' },
	  lastInRow: false,
	  code: 'KeyL',
	},
	{
	  text: { en: ';', ru: 'ж' },
	  width: 1,
	  upperText: { en: ':', ru: 'ж' },
	  lastInRow: false,
	  code: 'Semicolon',
	},
	{
	  text: { en: `'`, ru: 'э' },
	  width: 1,
	  upperText: { en: '"', ru: 'э' },
	  lastInRow: false,
	  code: 'Quote',
	},
	{
	  text: { en: 'ENTER', ru: 'ENTER' },
	  width: 2,
	  upperText: { en: 'ENTER', ru: 'ENTER' },
	  lastInRow: true,
	  code: 'Enter',
	  extra: true,
	},
	{
	  text: { en: 'Shift', ru: 'Shift' },
	  width: 2,
	  upperText: { en: 'Shift', ru: 'Shift' },
	  lastInRow: false,
	  code: 'ShiftLeft',
	  extra: true,
	},
	{
	  text: { en: 'z', ru: 'я' },
	  width: 1,
	  upperText: { en: 'z', ru: 'я' },
	  lastInRow: false,
	  code: 'KeyZ',
	},
	{
	  text: { en: 'x', ru: 'ч' },
	  width: 1,
	  upperText: { en: 'x', ru: 'ч' },
	  lastInRow: false,
	  code: 'KeyX',
	},
	{
	  text: { en: 'c', ru: 'с' },
	  width: 1,
	  upperText: { en: 'c', ru: 'с' },
	  lastInRow: false,
	  code: 'KeyC',
	},
	{
	  text: { en: 'v', ru: 'м' },
	  width: 1,
	  upperText: { en: 'v', ru: 'м' },
	  lastInRow: false,
	  code: 'KeyV',
	},
	{
	  text: { en: 'b', ru: 'и' },
	  width: 1,
	  upperText: { en: 'b', ru: 'и' },
	  lastInRow: false,
	  code: 'KeyB',
	},
	{
	  text: { en: 'n', ru: 'т' },
	  width: 1,
	  upperText: { en: 'n', ru: 'т' },
	  lastInRow: false,
	  code: 'KeyN',
	},
	{
	  text: { en: 'm', ru: 'ь' },
	  width: 1,
	  upperText: { en: 'm', ru: 'ь' },
	  lastInRow: false,
	  code: 'KeyM',
	},
	{
	  text: { en: ',', ru: 'б' },
	  width: 1,
	  upperText: { en: '<', ru: 'б' },
	  lastInRow: false,
	  code: 'Comma',
	},
	{
	  text: { en: '.', ru: 'ю' },
	  width: 1,
	  upperText: { en: '>', ru: 'ю' },
	  lastInRow: false,
	  code: 'Period',
	},
	{
	  text: { en: '/', ru: '.' },
	  width: 1,
	  upperText: { en: '?', ru: ',' },
	  lastInRow: false,
	  code: 'Slash',
	},
	{
	  text: { en: '&#8593;', ru: '&#8593;' },
	  width: 1,
	  upperText: { en: '&#8593;', ru: '&#8593;' },
	  lastInRow: false,
	  code: 'ArrowUp',
	  extra: true,
	},
	{
	  text: { en: 'Shift', ru: 'Shift' },
	  width: 2,
	  upperText: { en: 'Shift', ru: 'Shift' },
	  lastInRow: true,
	  code: 'ShiftRight',
	  extra: true,
	},
	{
	  text: { en: 'Ctrl', ru: 'Ctrl' },
	  width: 1,
	  upperText: { en: 'Ctrl', ru: 'Ctrl' },
	  lastInRow: false,
	  code: 'ControlLeft',
	  extra: true,
	},
	{
	  text: { en: 'Win', ru: 'Win' },
	  width: 1,
	  upperText: { en: 'Win', ru: 'Win' },
	  lastInRow: false,
	  code: 'OSLeft',
	  extra: true,
	},
	{
	  text: { en: 'Alt', ru: 'Alt' },
	  width: 1,
	  upperText: { en: 'Alt', ru: 'Alt' },
	  lastInRow: false,
	  code: 'AltLeft',
	  extra: true,
	},
	{
	  text: { en: ' ', ru: ' ' },
	  width: 3,
	  upperText: { en: ' ', ru: ' ' },
	  lastInRow: false,
	  code: 'Space',
	},
	{
	  text: { en: 'Alt', ru: 'Alt' },
	  width: 1,
	  upperText: { en: 'Alt', ru: 'Alt' },
	  lastInRow: false,
	  code: 'AltRight',
	  extra: true,
	},
	{
	  text: { en: '&#8592;', ru: '&#8592;' },
	  width: 1,
	  upperText: { en: '&#8592;', ru: '&#8592;' },
	  lastInRow: false,
	  code: 'ArrowLeft',
	  extra: true,
	},
	{
	  text: { en: '&#8595;', ru: '&#8595;' },
	  width: 1,
	  upperText: { en: '&#8595;', ru: '&#8595;' },
	  lastInRow: false,
	  code: 'ArrowDown',
	  extra: true,
	},
	{
	  text: { en: '&#8594;', ru: '&#8594;' },
	  width: 1,
	  upperText: { en: '&#8594;', ru: '&#8594;' },
	  lastInRow: false,
	  code: 'ArrowRight',
	  extra: true,
	},
	{
	  text: { en: 'Ctrl', ru: 'Ctrl' },
	  width: 1,
	  upperText: { en: 'Ctrl', ru: 'Ctrl' },
	  lastInRow: true,
	  code: 'ControlRight',
	  extra: true,
	},
]

export default KEYBOARD_KEYS;