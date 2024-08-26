// Словарь для транслитерации
const transliterationMap = {
    'а': 'ア', 'б': 'ブ', 'в': 'ヴ', 'г': 'グ', 'д': 'ド',
    'е': 'エ', 'ё': 'ヨ', 'ж': 'ジュ', 'з': 'ズ', 'и': 'イ',
    'й': 'イ', 'к': 'ク', 'л': 'ル', 'м': 'ム', 'н': 'ン',
    'о': 'オ', 'п': 'プ', 'р': 'ル', 'с': 'ス', 'т': 'ト',
    'у': 'ウ', 'ф': 'フ', 'х': 'ハ', 'ц': 'ツ', 'ч': 'チ',
    'ш': 'シュ', 'щ': 'シュ', 'ъ': '', 'ы': 'イ', 'ь': '',
    'э': 'エ', 'ю': 'ユ', 'я': 'ヤ', ' ': ' ', '.': '。', ',': '、'
};

// Функция для транслитерации
function transliterateToJapanese() {
    const inputText = document.getElementById("inputText").value.toLowerCase();
    let result = "";
    for (let char of inputText) {
        result += transliterationMap[char] || char;
    }
    document.getElementById("result").innerText = result;
}

// Функция для переключения темы
function toggleTheme() {
    const body = document.body;
    const container = document.querySelector('.container');
    const textarea = document.querySelector('textarea');
    
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'dark');
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        container.classList.remove('light-mode');
        container.classList.add('dark-mode');
        textarea.classList.remove('light-mode');
        textarea.classList.add('dark-mode');
    } else {
        localStorage.setItem('theme', 'light');
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        container.classList.remove('dark-mode');
        container.classList.add('light-mode');
        textarea.classList.remove('dark-mode');
        textarea.classList.add('light-mode');
    }
}

// Установка темы при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    // Определяем переменные внутри обработчика события
    const body = document.body;
    const container = document.querySelector('.container');
    const textarea = document.querySelector('textarea');
    
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        container.classList.remove('light-mode');
        container.classList.add('dark-mode');
        textarea.classList.remove('light-mode');
        textarea.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        container.classList.remove('dark-mode');
        container.classList.add('light-mode');
        textarea.classList.remove('dark-mode');
        textarea.classList.add('light-mode');
    }
});
