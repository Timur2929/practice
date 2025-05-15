    // Здесь можно добавить JavaScript функциональность
    document.addEventListener('DOMContentLoaded', function() {
        // Фильтрация рецептов
        const categorySelect = document.getElementById('category');
        const difficultySelect = document.getElementById('difficulty');
        const timeSelect = document.getElementById('time');
        const recipeCards = document.querySelectorAll('.recipe-card');
        
        function filterRecipes() {
            const categoryValue = categorySelect.value;
            const difficultyValue = difficultySelect.value;
            const timeValue = timeSelect.value;
            
            recipeCards.forEach(card => {
                const difficulty = card.querySelector('.difficulty').textContent.toLowerCase();
                const timeText = card.querySelector('.time').textContent;
                const time = parseInt(timeText.replace(' мин', ''));
                
                let show = true;
                
                if (difficultyValue !== 'all' && difficulty !== difficultyValue) {
                    show = false;
                }
                
                if (timeValue !== 'all') {
                    const maxTime = parseInt(timeValue);
                    if (time > maxTime) {
                        show = false;
                    }
                }
                
                if (show) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }
        
        categorySelect.addEventListener('change', filterRecipes);
        difficultySelect.addEventListener('change', filterRecipes);
        timeSelect.addEventListener('change', filterRecipes);
        
        // Поиск рецептов
        const searchInput = document.querySelector('.search-bar input');
        
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            recipeCards.forEach(card => {
                const title = card.querySelector('.recipe-title').textContent.toLowerCase();
                
                if (title.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    // Main initialization function
document.addEventListener("DOMContentLoaded", function () {
initNewsletterValidation();
});
// Main initialization function
document.addEventListener("DOMContentLoaded", function () {
initNewsletterValidation();
});
// Main initialization function
document.addEventListener("DOMContentLoaded", function () {
initNewsletterValidation();
});

// Main initialization function
document.addEventListener("DOMContentLoaded", function () {
initNewsletterValidation();
});

function initNewsletterValidation() {
const subscribeDiv = document.querySelector(".subscribe");
if (!subscribeDiv) return;

const emailInput = subscribeDiv.querySelector("input[type='email']");
const submitButton = subscribeDiv.querySelector("button");

// Создаем элемент для сообщений
const formMessage = document.createElement("div");
formMessage.className = "form-message";
subscribeDiv.appendChild(formMessage);

// Обработчик для кнопки
submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    validateEmail();
});

// Также обрабатываем нажатие Enter в поле ввода
emailInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        validateEmail();
    }
});

function validateEmail() {
    const email = emailInput.value.trim();

    // Сначала убираем все сообщения и стили
    resetForm();

    // Если email пустой или невалидный
    if (!email || !isValidEmail(email)) {
        showError("Пожалуйста, введите корректный email адрес");
        return;
    }

    // Если email валидный
    showSuccess("Спасибо за подписку!");
    emailInput.value = "";
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(message) {
    emailInput.classList.add("input-error");
    formMessage.textContent = message;
    formMessage.classList.add("error");
}

function showSuccess(message) {
    formMessage.textContent = message;
    formMessage.classList.add("success");
    
    // Автоматически скрываем сообщение через 3 секунды
    setTimeout(resetForm, 3000);
}

function resetForm() {
    emailInput.classList.remove("input-error");
    formMessage.textContent = "";
    formMessage.classList.remove("error", "success");
}
}