// Создаем словарь для транслитерации
const transliterationMap = {
    'а': 'ア', 'б': 'ブ', 'в': 'ヴ', 'г': 'グ', 'д': 'ド',
    'е': 'エ', 'ё': 'ヨ', 'ж': 'ジュ', 'з': 'ズ', 'и': 'イ',
    'й': 'イ', 'к': 'ク', 'л': 'ル', 'м': 'ム', 'н': 'ン',
    'о': 'オ', 'п': 'プ', 'р': 'ル', 'с': 'ス', 'т': 'ト',
    'у': 'ウ', 'ф': 'フ', 'х': 'ハ', 'ц': 'ツ', 'ч': 'チ',
    'ш': 'シュ', 'щ': 'シュ', 'ъ': '', 'ы': 'イ', 'ь': '',
    'э': 'エ', 'ю': 'ユ', 'я': 'ヤ', ' ': ' ', '.': '。', ',': '、',
};

// Функция для транслитерации
function transliterate() {
    const inputText = document.getElementById("inputText").value.toLowerCase();
    let result = "";

    for (let char of inputText) {
        result += transliterationMap[char] || char;
    }

    document.getElementById("resultText").textContent = result;
}

// Функция переключения темы
function toggleTheme() {
    const isChecked = document.getElementById('theme-toggle').checked;
    const theme = isChecked ? 'dark' : 'light';
    document.body.className = theme;

    // Сохраняем текущую тему в Local Storage
    localStorage.setItem('theme', theme);
}

// Функция инициализации темы при загрузке страницы
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.className = savedTheme;
    document.getElementById('theme-toggle').checked = (savedTheme === 'dark');
}

// Вызов функции инициализации при загрузке страницы
document.addEventListener('DOMContentLoaded', initializeTheme);

// Привязка переключателя темы к функции toggleTheme
document.getElementById('theme-toggle').addEventListener('change', toggleTheme);
