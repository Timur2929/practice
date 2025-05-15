<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Вiinow - Создание рецепта</title>
    @vite(['resources/css/create.css', 'resources/js/create.js'])
</head>
<body>
    <header>
       <a href="{{ url('/') }}"> <div class="logo">Вlinow</div></a>
        <nav>
            <ul>
                <li><a href="{{ url('/create') }}">Создать рецепт</a></li>
                <li><a href="">Коллекции</a></li>
            </ul>
        </nav>
        <div class="search">
            <button class="login-btn" id="loginBtn">Войти</button>
        </div>
    </header>
    
    <main>
        <h2>Создание рецепта</h2>
        
        <form id="recipeForm" class="recipe-form">
            <div class="form-section">
                <h3>Основная информация</h3>
                <div class="form-item" id="titleField">
                    <label for="recipeTitle">Название рецепта</label>
                    <input type="text" id="recipeTitle" placeholder="Введите название">
                    <div class="error-message">Пожалуйста, введите название рецепта</div>
                </div>
                <div class="form-item" id="descriptionField">
                    <label for="recipeDescription">Описание</label>
                    <textarea id="recipeDescription" placeholder="Опишите ваш рецепт"></textarea>
                    <div class="error-message">Пожалуйста, добавьте описание рецепта</div>
                </div>
                <div class="form-item">
                    <label>Сложность</label>
                    <div class="difficulty-options">
                        <div class="difficulty-option">
                            <input type="radio" id="difficulty-easy" name="difficulty" value="easy" checked>
                            <label for="difficulty-easy">Легко</label>
                        </div>
                        <div class="difficulty-option">
                            <input type="radio" id="difficulty-medium" name="difficulty" value="medium">
                            <label for="difficulty-medium">Средне</label>
                        </div>
                        <div class="difficulty-option">
                            <input type="radio" id="difficulty-hard" name="difficulty" value="hard">
                            <label for="difficulty-hard">Сложно</label>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="form-section">
                <h3>Ингредиенты</h3>
                <div class="ingredients-list" id="ingredientsList">
                    <!-- Ингредиенты будут добавляться динамически -->
                </div>
                <button type="button" class="add-ingredient" id="addIngredientBtn">
                    <span>+</span> Добавить ингредиент
                </button>
            </div>
            
            <div class="form-section">
                <h3>Шаги приготовления</h3>
                <div class="steps-list" id="stepsList">
                    <!-- Шаги будут добавляться динамически -->
                </div>
                <div class="buttons">
                    <button type="button" class="btn btn-add" id="addStepBtn">
                        <span>+</span> Добавить шаг
                    </button>
                    <button type="button" class="btn btn-preview" id="previewBtn">
                        Предпросмотр
                    </button>
                    <button type="submit" class="btn btn-publish" id="publishBtn">
                        Опубликовать
                    </button>
                </div>
            </div>
        </form>
    </main>
    
    <!-- Модальное окно предпросмотра -->
    <div class="modal" id="previewModal">
        <div class="modal-content">
            <span class="close-modal" id="closeModal">&times;</span>
            <h2 class="preview-title" id="previewTitle"></h2>
            <p class="preview-description" id="previewDescription"></p>
            
            <div class="preview-section">
                <h3 class="preview-section-title">Ингредиенты</h3>
                <ul class="preview-ingredients" id="previewIngredients"></ul>
            </div>
            
            <div class="preview-section">
                <h3 class="preview-section-title">Шаги приготовления</h3>
                <ol class="preview-steps" id="previewSteps"></ol>
            </div>
        </div>
    </div>
    
    <!-- Уведомление -->
    <div class="notification" id="notification">
        <span id="notificationMessage"></span>
    </div>
    
    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h4>О проекте</h4>
                <ul>
                    <li><a href="">О нас</a></li>
                    <li><a href="">Контакты</a></li>
                    <li><a href="">Правила</a></li>
                </ul>
            </div>
            
            <div class="footer-section">
                <h4>Рецепты</h4>
                <ul>
                    <li><a href="">Популярные</a></li>
                    <li><a href="">Новые</a></li>
                    <li><a href="">Категории</a></li>
                </ul>
            </div>
            
            <div class="footer-section">
                <h4>Сообщество</h4>
                <ul>
                    <li><a href="">Авторы</a></li>
                    <li><a href="">Блог</a></li>
                    <li><a href="">Форум</a></li>
                </ul>
            </div>
            
            <div class="footer-section subscribe">
                <h4>Подписаться</h4>
                <p>Получайте лучшие рецепты каждую неделю</p>
                <input type="email" placeholder="Email" id="subscribeEmail">
                <button id="subscribeBtn">Подписаться</button>
            </div>
        </div>
        
        <div class="copyright">
            © 2024 CookShare. Все права защищены.
        </div>
    </footer>
</body>
</html>
