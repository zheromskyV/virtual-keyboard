const KEYBOARD_KEYS = [
	{
		text: { en: '`', ru: 'ё' },
		width: 1,
		upperText: { en: '~', ru: 'Ё' },
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
		upperText: { en: '&amp;', ru: '?' },
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
		upperText: { en: 'Q', ru: 'Й' },
		lastInRow: false,
		code: 'KeyQ',
	},
	{
		text: { en: 'w', ru: 'ц' },
		width: 1,
		upperText: { en: 'W', ru: 'Ц' },
		lastInRow: false,
		code: 'KeyW',
	},
	{
		text: { en: 'e', ru: 'у' },
		width: 1,
		upperText: { en: 'E', ru: 'У' },
		lastInRow: false,
		code: 'KeyE',
	},
	{
		text: { en: 'r', ru: 'к' },
		width: 1,
		upperText: { en: 'R', ru: 'К' },
		lastInRow: false,
		code: 'KeyR',
	},
	{
		text: { en: 't', ru: 'е' },
		width: 1,
		upperText: { en: 'T', ru: 'Е' },
		lastInRow: false,
		code: 'KeyT',
	},
	{
		text: { en: 'y', ru: 'н' },
		width: 1,
		upperText: { en: 'Y', ru: 'Н' },
		lastInRow: false,
		code: 'KeyY',
	},
	{
		text: { en: 'u', ru: 'г' },
		width: 1,
		upperText: { en: 'U', ru: 'Г' },
		lastInRow: false,
		code: 'KeyU',
	},
	{
		text: { en: 'i', ru: 'ш' },
		width: 1,
		upperText: { en: 'I', ru: 'Ш' },
		lastInRow: false,
		code: 'KeyI',
	},
	{
		text: { en: 'o', ru: 'щ' },
		width: 1,
		upperText: { en: 'O', ru: 'Щ' },
		lastInRow: false,
		code: 'KeyO',
	},
	{
		text: { en: 'p', ru: 'з' },
		width: 1,
		upperText: { en: 'P', ru: 'З' },
		lastInRow: false,
		code: 'KeyP',
	},
	{
		text: { en: '[', ru: 'х' },
		width: 1,
		upperText: { en: '{', ru: 'Х' },
		lastInRow: false,
		code: 'BracketLeft',
	},
	{
		text: { en: ']', ru: 'ъ' },
		width: 1,
		upperText: { en: '}', ru: 'Ъ' },
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
		text: { en: 'Del', ru: 'Del' },
		width: 1,
		upperText: { en: 'Del', ru: 'Del' },
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
		upperText: { en: 'A', ru: 'Ф' },
		lastInRow: false,
		code: 'KeyA',
	},
	{
		text: { en: 's', ru: 'ы' },
		width: 1,
		upperText: { en: 'S', ru: 'Ы' },
		lastInRow: false,
		code: 'KeyS',
	},
	{
		text: { en: 'd', ru: 'в' },
		width: 1,
		upperText: { en: 'D', ru: 'В' },
		lastInRow: false,
		code: 'KeyD',
	},
	{
		text: { en: 'f', ru: 'а' },
		width: 1,
		upperText: { en: 'F', ru: 'А' },
		lastInRow: false,
		code: 'KeyF',
	},
	{
		text: { en: 'g', ru: 'п' },
		width: 1,
		upperText: { en: 'G', ru: 'П' },
		lastInRow: false,
		code: 'KeyG',
	},
	{
		text: { en: 'h', ru: 'р' },
		width: 1,
		upperText: { en: 'H', ru: 'Р' },
		lastInRow: false,
		code: 'KeyH',
	},
	{
		text: { en: 'j', ru: 'о' },
		width: 1,
		upperText: { en: 'J', ru: 'О' },
		lastInRow: false,
		code: 'KeyJ',
	},
	{
		text: { en: 'k', ru: 'л' },
		width: 1,
		upperText: { en: 'K', ru: 'Л' },
		lastInRow: false,
		code: 'KeyK',
	},
	{
		text: { en: 'l', ru: 'д' },
		width: 1,
		upperText: { en: 'L', ru: 'Д' },
		lastInRow: false,
		code: 'KeyL',
	},
	{
		text: { en: ';', ru: 'ж' },
		width: 1,
		upperText: { en: ':', ru: 'Ж' },
		lastInRow: false,
		code: 'Semicolon',
	},
	{
		text: { en: `'`, ru: 'э' },
		width: 1,
		upperText: { en: '"', ru: 'Э' },
		lastInRow: false,
		code: 'Quote',
	},
	{
		text: { en: 'Enter', ru: 'Enter' },
		width: 2,
		upperText: { en: 'Enter', ru: 'Enter' },
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
		upperText: { en: 'Z', ru: 'Я' },
		lastInRow: false,
		code: 'KeyZ',
	},
	{
		text: { en: 'x', ru: 'ч' },
		width: 1,
		upperText: { en: 'X', ru: 'Ч' },
		lastInRow: false,
		code: 'KeyX',
	},
	{
		text: { en: 'c', ru: 'с' },
		width: 1,
		upperText: { en: 'C', ru: 'С' },
		lastInRow: false,
		code: 'KeyC',
	},
	{
		text: { en: 'v', ru: 'м' },
		width: 1,
		upperText: { en: 'V', ru: 'М' },
		lastInRow: false,
		code: 'KeyV',
	},
	{
		text: { en: 'b', ru: 'и' },
		width: 1,
		upperText: { en: 'B', ru: 'И' },
		lastInRow: false,
		code: 'KeyB',
	},
	{
		text: { en: 'n', ru: 'т' },
		width: 1,
		upperText: { en: 'N', ru: 'Т' },
		lastInRow: false,
		code: 'KeyN',
	},
	{
		text: { en: 'm', ru: 'ь' },
		width: 1,
		upperText: { en: 'M', ru: 'Ь' },
		lastInRow: false,
		code: 'KeyM',
	},
	{
		text: { en: ',', ru: 'б' },
		width: 1,
		upperText: { en: '&lt;', ru: 'Б' },
		lastInRow: false,
		code: 'Comma',
	},
	{
		text: { en: '.', ru: 'ю' },
		width: 1,
		upperText: { en: '&gt;', ru: 'Ю' },
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
		text: { en: '&uarr;', ru: '&uarr;' },
		width: 1,
		upperText: { en: '&uarr;', ru: '&uarr;' },
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
		code: 'MetaLeft',
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
		text: { en: '&larr;', ru: '&larr;' },
		width: 1,
		upperText: { en: '&larr;', ru: '&larr;' },
		lastInRow: false,
		code: 'ArrowLeft',
		extra: true,
	},
	{
		text: { en: '&darr;', ru: '&darr;' },
		width: 1,
		upperText: { en: '&darr;', ru: '&darr;' },
		lastInRow: false,
		code: 'ArrowDown',
		extra: true,
	},
	{
		text: { en: '&rarr;', ru: '&rarr;' },
		width: 1,
		upperText: { en: '&rarr;', ru: '&rarr;' },
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
];

export default KEYBOARD_KEYS;