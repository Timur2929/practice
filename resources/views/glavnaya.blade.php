<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blinow LEGEND</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    @vite(['resources/css/glavnaya.css', 'resources/js/glavnaya.js'])
</head>
<body>
    <!-- Header -->
    <header>
        <div class="container">
            <nav class="navbar">
                <a href="{{ url('/') }}" class="logo">Blinow</a>
                <div class="nav-links">
                    <a href="#">Создать рецепт</a> 
                    <a href="#">Коллекции</a>
                </div>
            </nav>
        </div>
    </header>

    <!-- Main Content -->
    <main class="container">
        <!-- Hero Section -->
        <section class="hero">
            <h1>Найдите идеальный рецепт</h1>
            <div class="search-bar">
                <input type="text" placeholder="Поиск рецептов...">
                <i class="fas fa-search"></i>
            </div>
            
            <!-- Filters -->
            <div class="filters">
                <div class="filter-group">
                    <label for="category">Все категории</label>
                    <select id="category">
                        <option value="all">Все категории</option>
                        <option value="soups">Супы</option>
                        <option value="main">Основные блюда</option>
                        <option value="desserts">Десерты</option>
                        <option value="salads">Салаты</option>
                    </select>
                </div>
                <div class="filter-group">
                    <label for="difficulty">Сложность</label>
                    <select id="difficulty">
                        <option value="all">Любая</option>
                        <option value="easy">Легкая</option>
                        <option value="medium">Средняя</option>
                        <option value="hard">Сложная</option>
                    </select>
                </div>
                <div class="filter-group">
                    <label for="time">Время приготовления</label>
                    <select id="time">
                        <option value="all">Любое</option>
                        <option value="30">До 30 мин</option>
                        <option value="60">До 1 часа</option>
                        <option value="90">До 1.5 часов</option>
                        <option value="999">Более 2 часов</option>
                    </select>
                </div>
            </div>
        </section>

        <!-- Recipes Section -->
        <section>
            <h2 class="section-title">Популярные рецепты</h2>
            <div class="recipes-grid">
                <!-- Recipe Card 1 -->
                <div class="recipe-card">
                    <!-- <img src="https://via.placeholder.com/400x300" alt="Домашний борщ" class="recipe-img"> -->
                    <div class="recipe-info">
                        <div class="recipe-meta">
                            <span class="difficulty medium">medium</span>
                            <span class="time">90 мин</span>
                        </div>
                        <h3 class="recipe-title">Домашний борщ</h3>
                        <p class="recipe-author">Марля С.</p>
                        <div class="recipe-stats">
                            <span class="views">1200 просмотров</span>
                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <span class="rating-count">4.8 (245)</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Recipe Card 2 -->
                <div class="recipe-card">
                    <!-- <img src="https://via.placeholder.com/400x300" alt="Блины классические" class="recipe-img"> -->
                    <div class="recipe-info">
                        <div class="recipe-meta">
                            <span class="difficulty easy">easy</span>
                            <span class="time">30 мин</span>
                        </div>
                        <h3 class="recipe-title">Блины классические</h3>
                        <p class="recipe-author">Анна П.</p>
                        <div class="recipe-stats">
                            <span class="views">890 просмотров</span>
                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <span class="rating-count">4.9 (189)</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Recipe Card 3 -->
                <div class="recipe-card">
                    <!-- <img src="https://via.placeholder.com/400x300" alt="Паста карбонара" class="recipe-img"> -->
                    <div class="recipe-info">
                        <div class="recipe-meta">
                            <span class="difficulty medium">medium</span>
                            <span class="time">45 мин</span>
                        </div>
                        <h3 class="recipe-title">Паста карбонара</h3>
                        <p class="recipe-author">Иван К.</p>
                        <div class="recipe-stats">
                            <span class="views">750 просмотров</span>
                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <span class="rating-count">4.7 (167)</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Recipe Card 4 -->
                <div class="recipe-card">
                    <!-- <img src="https://via.placeholder.com/400x300" alt="Тирамису" class="recipe-img"> -->
                    <div class="recipe-info">
                        <div class="recipe-meta">
                            <span class="difficulty hard">hard</span>
                            <span class="time">60 мин</span>
                        </div>
                        <h3 class="recipe-title">Тирамису</h3>
                        <p class="recipe-author">Елена М.</p>
                        <div class="recipe-stats">
                            <span class="views">1500 просмотров</span>
                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <span class="rating-count">4.9 (298)</span>
                            </div>
                        </div>
                    </div>
                </div>

                 <!-- Recipe Card 5 -->
                 <div class="recipe-card">
                    <!-- <img src="https://via.placeholder.com/400x300" alt="Курочка под ананасами" class="recipe-img"> -->
                    <div class="recipe-info">
                        <div class="recipe-meta">
                            <span class="difficulty medium">medium</span>
                            <span class="time">120 мин</span>
                        </div>
                        <h3 class="recipe-title">Курочка под ананасами</h3>
                        <p class="recipe-author">Семен Л.</p>
                        <div class="recipe-stats">
                            <span class="views">1800 просмотров</span>
                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <span class="rating-count">4.9 (993)</span>
                            </div>
                        </div>
                    </div>
                </div>

                 <!-- Recipe Card 6 -->
                 <div class="recipe-card">
                    <!-- <img src="https://via.placeholder.com/400x300" alt="Наполеон" class="recipe-img"> -->
                    <div class="recipe-info">
                        <div class="recipe-meta">
                            <span class="difficulty easy">easy</span>
                            <span class="time">250 мин</span>
                        </div>
                        <h3 class="recipe-title">Наполеон</h3>
                        <p class="recipe-author">Игорь П.</p>
                        <div class="recipe-stats">
                            <span class="views">4500 просмотров</span>
                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <span class="rating-count">4.9 (1535)</span>
                            </div>
                        </div>
                    </div>
                </div>

                 <!-- Recipe Card 7 -->
                 <div class="recipe-card">
                    <!-- <img src="https://via.placeholder.com/400x300" alt="Славные фетучини" class="recipe-img"> -->
                    <div class="recipe-info">
                        <div class="recipe-meta">
                            <span class="difficulty easy">easy</span>
                            <span class="time">40 мин</span>
                        </div>
                        <h3 class="recipe-title">Славные фетучини</h3>
                        <p class="recipe-author">Петр М.</p>
                        <div class="recipe-stats">
                            <span class="views">2300 просмотров</span>
                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <span class="rating-count">4.7 (1233)</span>
                            </div>
                        </div>
                    </div>
                </div>

                 <!-- Recipe Card 8 -->
                 <div class="recipe-card">
                    <!-- <img src="https://via.placeholder.com/400x300" alt="Жюльен" class="recipe-img"> -->
                    <div class="recipe-info">
                        <div class="recipe-meta">
                            <span class="difficulty hard">hard</span>
                            <span class="time">25 мин</span>
                        </div>
                        <h3 class="recipe-title">Жюльен</h3>
                        <p class="recipe-author">Денис Б.</p>
                        <div class="recipe-stats">
                            <span class="views">6030 просмотров</span>
                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <span class="rating-count">4.8 (3393)</span>
                            </div>
                        </div>
                    </div>
                </div>

                 <!-- Recipe Card 9 -->
                 <div class="recipe-card">
                    <!-- <img src="https://via.placeholder.com/400x300" alt="Минестроне" class="recipe-img"> -->
                    <div class="recipe-info">
                        <div class="recipe-meta">
                            <span class="difficulty hard">hard</span>
                            <span class="time">140 мин</span>
                        </div>
                        <h3 class="recipe-title">Минестроне</h3>
                        <p class="recipe-author">Владмир М.</p>
                        <div class="recipe-stats">
                            <span class="views">8200 просмотров</span>
                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <span class="rating-count">4.8 (5193)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-column">
                    <h3>О проекте</h3>
                    <ul>
                        <li><a href="#">О нас</a></li>
                        <li><a href="#">Контакты</a></li>
                        <li><a href="#">Правила</a></li>
                        <li><a href="#">Конфиденциальность</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Рецепты</h3>
                    <ul>
                        <li><a href="#">Популярные</a></li>
                        <li><a href="#">Новые</a></li>
                        <li><a href="#">Категории</a></li>
                        <li><a href="#">Коллекции</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Сообщество</h3>
                    <ul>
                        <li><a href="#">Авторы</a></li>
                        <li><a href="#">Блог</a></li>
                        <li><a href="#">Форум</a></li>
                        <li><a href="#">Помощь</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Подписаться</h3>
                    <p>Получайте лучшие рецепты каждую неделю</p>
                    <div class="subscribe">
                        <input type="email" placeholder="Email">
                        <button>OK</button>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 CookShare. Все права защищены.</p>
            </div>
        </div>
    </footer>
</body>
</html>

