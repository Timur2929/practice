document.addEventListener('DOMContentLoaded', function() {
    // Элементы формы
    const recipeForm = document.getElementById('recipeForm');
    const titleField = document.getElementById('titleField');
    const descriptionField = document.getElementById('descriptionField');
    const ingredientsList = document.getElementById('ingredientsList');
    const stepsList = document.getElementById('stepsList');
    const addIngredientBtn = document.getElementById('addIngredientBtn');
    const addStepBtn = document.getElementById('addStepBtn');
    const previewBtn = document.getElementById('previewBtn');
    const publishBtn = document.getElementById('publishBtn');
    
    // Элементы модального окна
    const previewModal = document.getElementById('previewModal');
    const closeModal = document.getElementById('closeModal');
    const previewTitle = document.getElementById('previewTitle');
    const previewDescription = document.getElementById('previewDescription');
    const previewIngredients = document.getElementById('previewIngredients');
    const previewSteps = document.getElementById('previewSteps');
    
    // Элементы уведомления
    const notification = document.getElementById('notification');
    const notificationMessage = document.getElementById('notificationMessage');
    
    // Элементы подписки
    const subscribeEmail = document.getElementById('subscribeEmail');
    const subscribeBtn = document.getElementById('subscribeBtn');
    
    // Элементы входа
    const loginBtn = document.getElementById('loginBtn');
    
    // Поиск
    const searchInput = document.getElementById('searchInput');
    
    // Состояние приложения
    let draftRecipes = JSON.parse(localStorage.getItem('draftRecipes')) || [];
    let publishedRecipes = JSON.parse(localStorage.getItem('publishedRecipes')) || [];
    let currentDraftId = null;
    
    // Инициализация формы
    function initForm() {
        // Добавляем первый ингредиент
        addIngredientField();
        
        // Добавляем первый шаг
        addStepField();
        
        // Загружаем черновик, если есть
        loadDraft();
    }
    
    // Добавление поля ингредиента
    function addIngredientField(ingredient = { name: '', amount: '', unit: 'г' }) {
        const ingredientId = Date.now();
        const ingredientItem = document.createElement('div');
        ingredientItem.className = 'ingredient-item';
        ingredientItem.dataset.id = ingredientId;
        
        ingredientItem.innerHTML = `
            <input type="text" placeholder="Название ингредиента" 
                   value="${ingredient.name}" class="ingredient-name">
            <input type="text" placeholder="Количество" 
                   value="${ingredient.amount}" class="ingredient-amount">
            <select class="ingredient-unit">
                <option value="г" ${ingredient.unit === 'г' ? 'selected' : ''}>г</option>
                <option value="кг" ${ingredient.unit === 'кг' ? 'selected' : ''}>кг</option>
                <option value="мл" ${ingredient.unit === 'мл' ? 'selected' : ''}>мл</option>
                <option value="л" ${ingredient.unit === 'л' ? 'selected' : ''}>л</option>
                <option value="шт" ${ingredient.unit === 'шт' ? 'selected' : ''}>шт</option>
                <option value="ч.л." ${ingredient.unit === 'ч.л.' ? 'selected' : ''}>ч.л.</option>
                <option value="ст.л." ${ingredient.unit === 'ст.л.' ? 'selected' : ''}>ст.л.</option>
                <option value="щепотка" ${ingredient.unit === 'щепотка' ? 'selected' : ''}>щепотка</option>
                <option value="по вкусу" ${ingredient.unit === 'по вкусу' ? 'selected' : ''}>по вкусу</option>
            </select>
            <button type="button" class="remove-ingredient">×</button>
        `;
        
        ingredientsList.appendChild(ingredientItem);
        
        // Добавляем обработчик удаления
        const removeBtn = ingredientItem.querySelector('.remove-ingredient');
        removeBtn.addEventListener('click', function() {
            if (ingredientsList.children.length > 1) {
                ingredientItem.remove();
                updateDraft();
            } else {
                showNotification('Должен быть хотя бы один ингредиент', 'error');
            }
        });
        
        // Добавляем обработчики изменений
        const inputs = ingredientItem.querySelectorAll('input, select');
        inputs.forEach(input => {
            input.addEventListener('input', function() {
                updateDraft();
            });
        });
    }
    
    // Добавление поля шага
    function addStepField(step = { description: '' }) {
        const stepId = Date.now();
        const stepItem = document.createElement('div');
        stepItem.className = 'step-item';
        stepItem.dataset.id = stepId;
        
        stepItem.innerHTML = `
            <div class="step-number">${stepsList.children.length + 1}</div>
            <div class="step-content">
                <textarea placeholder="Опишите шаг приготовления">${step.description}</textarea>
                <div class="step-actions">
                    <button type="button" class="move-up" title="Переместить вверх">↑</button>
                    <button type="button" class="move-down" title="Переместить вниз">↓</button>
                    <button type="button" class="remove-step" title="Удалить шаг">×</button>
                </div>
            </div>
        `;
        
        stepsList.appendChild(stepItem);
        
        // Добавляем обработчики кнопок
        const moveUpBtn = stepItem.querySelector('.move-up');
        const moveDownBtn = stepItem.querySelector('.move-down');
        const removeBtn = stepItem.querySelector('.remove-step');
        const textarea = stepItem.querySelector('textarea');
        
        moveUpBtn.addEventListener('click', function() {
            moveStep(stepItem, 'up');
        });
        
        moveDownBtn.addEventListener('click', function() {
            moveStep(stepItem, 'down');
        });
        
        removeBtn.addEventListener('click', function() {
            if (stepsList.children.length > 1) {
                stepItem.remove();
                updateStepNumbers();
                updateDraft();
            } else {
                showNotification('Должен быть хотя бы один шаг', 'error');
            }
        });
        
        // Обработчик изменения текста
        textarea.addEventListener('input', function() {
            updateDraft();
        });
    }
    
    // Перемещение шага
    function moveStep(stepItem, direction) {
        const index = Array.from(stepsList.children).indexOf(stepItem);
        
        if (direction === 'up' && index > 0) {
            stepsList.insertBefore(stepItem, stepsList.children[index - 1]);
        } else if (direction === 'down' && index < stepsList.children.length - 1) {
            stepsList.insertBefore(stepItem, stepsList.children[index + 1].nextSibling);
        }
        
        updateStepNumbers();
        updateDraft();
    }
    
    // Обновление номеров шагов
    function updateStepNumbers() {
        const steps = stepsList.querySelectorAll('.step-item');
        steps.forEach((step, index) => {
            step.querySelector('.step-number').textContent = index + 1;
        });
    }
    
    // Обновление черновика
    function updateDraft() {
        const recipeData = getFormData();
        
        if (!recipeData.title && !recipeData.description && 
            recipeData.ingredients.length === 0 && 
            recipeData.steps.length === 0) {
            return;
        }
        
        if (!currentDraftId) {
            currentDraftId = Date.now();
        }
        
        recipeData.id = currentDraftId;
        recipeData.updatedAt = new Date().toISOString();
        
        // Ищем существующий черновик
        const existingDraftIndex = draftRecipes.findIndex(r => r.id === currentDraftId);
        
        if (existingDraftIndex !== -1) {
            draftRecipes[existingDraftIndex] = recipeData;
        } else {
            draftRecipes.push(recipeData);
        }
        
        localStorage.setItem('draftRecipes', JSON.stringify(draftRecipes));
    }
    
    // Загрузка черновика
    function loadDraft() {
        if (draftRecipes.length === 0) return;
        
        // Сортируем черновики по дате обновления (новые первыми)
        draftRecipes.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
        
        // Загружаем последний черновик
        const lastDraft = draftRecipes[0];
        currentDraftId = lastDraft.id;
        
        // Заполняем форму
        document.getElementById('recipeTitle').value = lastDraft.title || '';
        document.getElementById('recipeDescription').value = lastDraft.description || '';
        
        // Устанавливаем сложность
        if (lastDraft.difficulty) {
            document.querySelector(`input[name="difficulty"][value="${lastDraft.difficulty}"]`).checked = true;
        }
        
        // Очищаем списки ингредиентов и шагов
        ingredientsList.innerHTML = '';
        stepsList.innerHTML = '';
        
        // Добавляем ингредиенты
        if (lastDraft.ingredients && lastDraft.ingredients.length > 0) {
            lastDraft.ingredients.forEach(ing => addIngredientField(ing));
        } else {
            addIngredientField();
        }
        
        // Добавляем шаги
        if (lastDraft.steps && lastDraft.steps.length > 0) {
            lastDraft.steps.forEach(step => addStepField(step));
        } else {
            addStepField();
        }
        
        showNotification('Черновик загружен', 'success');
    }
    
    // Получение данных формы
    function getFormData() {
        const title = document.getElementById('recipeTitle').value.trim();
        const description = document.getElementById('recipeDescription').value.trim();
        const difficulty = document.querySelector('input[name="difficulty"]:checked').value;
        
        // Собираем ингредиенты
        const ingredients = [];
        const ingredientItems = ingredientsList.querySelectorAll('.ingredient-item');
        
        ingredientItems.forEach(item => {
            const name = item.querySelector('.ingredient-name').value.trim();
            const amount = item.querySelector('.ingredient-amount').value.trim();
            const unit = item.querySelector('.ingredient-unit').value;
            
            if (name || amount) {
                ingredients.push({
                    name,
                    amount,
                    unit
                });
            }
        });
        
        // Собираем шаги
        const steps = [];
        const stepItems = stepsList.querySelectorAll('.step-item');
        
        stepItems.forEach(item => {
            const description = item.querySelector('textarea').value.trim();
            
            if (description) {
                steps.push({
                    description
                });
            }
        });
        
        return {
            title,
            description,
            difficulty,
            ingredients,
            steps
        };
    }
    
    // Валидация формы
    function validateForm() {
        let isValid = true;
        const formData = getFormData();
        
        // Проверка названия
        if (!formData.title) {
            titleField.classList.add('error');
            isValid = false;
        } else {
            titleField.classList.remove('error');
        }
        
        // Проверка описания
        if (!formData.description) {
            descriptionField.classList.add('error');
            isValid = false;
        } else {
            descriptionField.classList.remove('error');
        }
        
        // Проверка ингредиентов
        if (formData.ingredients.length === 0) {
            showNotification('Добавьте хотя бы один ингредиент', 'error');
            isValid = false;
        }
        
        // Проверка шагов
        if (formData.steps.length === 0) {
            showNotification('Добавьте хотя бы один шаг', 'error');
            isValid = false;
        }
        
        return isValid;
    }
    
    // Показ уведомления
    function showNotification(message, type = 'success') {
        notificationMessage.textContent = message;
        notification.className = `notification ${type}`;
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }
    
    // Публикация рецепта
    function publishRecipe() {
        if (!validateForm()) {
            showNotification('Пожалуйста, заполните все обязательные поля', 'error');
            return false;
        }
        
        const recipeData = getFormData();
        recipeData.id = Date.now();
        recipeData.publishedAt = new Date().toISOString();
        recipeData.views = 0;
        recipeData.likes = 0;
        
        // Добавляем в опубликованные
        publishedRecipes.push(recipeData);
        localStorage.setItem('publishedRecipes', JSON.stringify(publishedRecipes));
        
        // Удаляем черновик
        if (currentDraftId) {
            draftRecipes = draftRecipes.filter(r => r.id !== currentDraftId);
            localStorage.setItem('draftRecipes', JSON.stringify(draftRecipes));
            currentDraftId = null;
        }
        
        // Очищаем форму
        recipeForm.reset();
        ingredientsList.innerHTML = '';
        stepsList.innerHTML = '';
        addIngredientField();
        addStepField();
        
        showNotification('Рецепт успешно опубликован!', 'success');
        return true;
    }
    
    // Показ предпросмотра
    function showPreview() {
        if (!validateForm()) {
            showNotification('Пожалуйста, заполните все обязательные поля', 'error');
            return;
        }
        
        const formData = getFormData();
        
        // Заполняем модальное окно
        previewTitle.textContent = formData.title;
        previewDescription.textContent = formData.description;
        
        // Заполняем ингредиенты
        previewIngredients.innerHTML = '';
        formData.ingredients.forEach(ing => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${ing.name}</span>
                <span>${ing.amount ? `${ing.amount} ${ing.unit}` : 'по вкусу'}</span>
            `;
            previewIngredients.appendChild(li);
        });
        
        // Заполняем шаги
        previewSteps.innerHTML = '';
        formData.steps.forEach(step => {
            const li = document.createElement('li');
            li.textContent = step.description;
            previewSteps.appendChild(li);
        });
        
        // Показываем модальное окно
        previewModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    // Закрытие модального окна
    function closePreview() {
        previewModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    // Подписка на рассылку
    function subscribe() {
        const email = subscribeEmail.value.trim();
        
        if (!email) {
            showNotification('Пожалуйста, введите email', 'error');
            return;
        }
        
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showNotification('Пожалуйста, введите корректный email', 'error');
            return;
        }
        
        // Сохраняем подписку
        const subscriptions = JSON.parse(localStorage.getItem('subscriptions')) || [];
        if (!subscriptions.includes(email)) {
            subscriptions.push(email);
            localStorage.setItem('subscriptions', JSON.stringify(subscriptions));
        }
        
        subscribeEmail.value = '';
        showNotification('Спасибо за подписку!', 'success');
    }
    
    // Имитация входа
    function login() {
        showNotification('Функция входа в разработке', 'info');
    }
    
    // Поиск рецептов
    function searchRecipes() {
        const query = searchInput.value.trim();
        if (query) {
            showNotification(`Поиск: "${query}"`, 'info');
        }
    }
    
    // Обработчики событий
    addIngredientBtn.addEventListener('click', function() {
        addIngredientField();
        updateDraft();
    });
    
    addStepBtn.addEventListener('click', function() {
        addStepField();
        updateDraft();
    });
    
    previewBtn.addEventListener('click', showPreview);
    
    recipeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        if (publishRecipe()) {
            // Можно добавить редирект или другие действия после публикации
        }
    });
    
    closeModal.addEventListener('click', closePreview);
    
    // Закрытие модального окна при клике вне его
    window.addEventListener('click', function(e) {
        if (e.target === previewModal) {
            closePreview();
        }
    });
    
    // Закрытие модального окна по ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && previewModal.style.display === 'block') {
            closePreview();
        }
    });
    
    subscribeBtn.addEventListener('click', subscribe);
    
    subscribeEmail.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            subscribe();
        }
    });
    
    loginBtn.addEventListener('click', login);
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchRecipes();
        }
    });
    
    // Автосохранение при изменении основных полей
    document.getElementById('recipeTitle').addEventListener('input', function() {
        updateDraft();
    });
    
    document.getElementById('recipeDescription').addEventListener('input', function() {
        updateDraft();
    });
    
    document.querySelectorAll('input[name="difficulty"]').forEach(radio => {
        radio.addEventListener('change', function() {
            updateDraft();
        });
    });
    
    // Инициализация формы
    initForm();
    
    // Периодическое автосохранение
    setInterval(updateDraft, 30000); // Каждые 30 секунд
});