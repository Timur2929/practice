<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blinow - Классические блины</title>
    <script src="https://cdn.tailwindcss.com"></script>
    @vite(['resources/css/infoblini.css', 'resources/js/infoblini.js'])
</head>
<body class="bg-brand-gray text-gray-800 min-h-screen">
    <div class="container mx-auto px-4 py-6 max-w-6xl">
        <!-- Mobile Navigation -->
        <nav class="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
            <div class="flex justify-between w-full md:w-auto">
                <a href="{{ url('/') }}" class="text-3xl font-bold text-brand-blue">Blinow</a>
                <button id="mobile-menu-toggle" class="md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            <div id="mobile-menu" class="hidden md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 w-full md:w-auto items-center">
                <a href="{{ url('/') }}" class="text-gray-600 hover:text-brand-blue">Главная</a>
                <a href="{{ url('/create') }}" class="text-gray-600 hover:text-brand-blue">Создать рецепт</a>
                <a href="#" class="text-gray-600 hover:text-brand-blue">Коллекции</a>
            </div>
        </nav>

        <!-- Recipe Hero Image -->
        <div class="bg-gray-200 h-96 md:h-[600px] flex items-center justify-center text-gray-500 text-2xl md:text-4xl mb-8 rounded-lg overflow-hidden">
            <span>Классические блины (1200 × 600)</span>
        </div>

        <!-- Recipe Content -->
        <div class="recipe-grid">
            <!-- Ingredients Column -->
            <div>
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h1 class="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Блины классические</h1>
                    
                  <div class="flex items-center mb-4">
    <div class="recipe-rating flex mr-4">
        <span class="star text-2xl">★</span>
        <span class="star text-2xl">★</span>
        <span class="star text-2xl">★</span>
        <span class="star text-2xl">★</span>
        <span class="star text-2xl">★</span>
    </div>
    <span class="rating-text text-gray-600">3.0</span>
    <button id="favorite-btn" class="ml-4 text-red-500 hover:text-red-700 transition">
        ♥ В избранное
    </button>
</div>

                    <h2 class="font-semibold text-xl mb-3">Ингредиенты</h2>
                    <div class="space-y-2">
                        <div class="flex justify-between border-b pb-2">
                            <span>Мука пшеничная</span>
                            <span class="font-semibold">300 г</span>
                        </div>
                        <div class="flex justify-between border-b pb-2">
                            <span>Молоко</span>
                            <span class="font-semibold">500 мл</span>
                        </div>
                        <div class="flex justify-between border-b pb-2">
                            <span>Яйца</span>
                            <span class="font-semibold">3 шт</span>
                        </div>
                        <div class="flex justify-between pb-2">
                            <span>Масло сливочное</span>
                            <span class="font-semibold">50 г</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Instructions Column -->
            <div>
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h2 class="text-xl font-semibold mb-4">Инструкция приготовления</h2>
                    <div class="space-y-4 reset-counter">
                        <div class="recipe-step">
                            Смешать муку, соль и сахар в большой миске, создавая однородную сухую смесь
                        </div>
                        <div class="recipe-step">
                            Добавить яйца и тщательно перемешать венчиком до полной однородности
                        </div>
                        <div class="recipe-step">
                            Постепенно влить теплое молоко, постоянно помешивая, чтобы избежать комков
                        </div>
                        <div class="recipe-step">
                            Добавить растопленное сливочное масло и еще раз хорошо перемешать
                        </div>
                        <div class="recipe-step">
                            Жарить блины на разогретой антипригарной сковороде с минимальным количеством масла
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Comments Section -->
        <div class="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-xl font-semibold mb-4">Комментарии</h2>
            
            <div class="mb-6">
                <div id="comment-rating" class="star-rating flex mb-4">
                    <span class="star text-2xl" data-rating="1">★</span>
                    <span class="star text-2xl" data-rating="2">★</span>
                    <span class="star text-2xl" data-rating="3">★</span>
                    <span class="star text-2xl" data-rating="4">★</span>
                    <span class="star text-2xl" data-rating="5">★</span>
                </div>
                <textarea 
                    id="comment-text"
                    class="w-full border rounded p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-brand-blue" 
                    rows="4" 
                    placeholder="Напишите ваш комментарий..."
                ></textarea>
                <button id="submit-comment" class="bg-brand-blue text-white px-6 py-2 rounded hover:bg-blue-600 transition">
                    Отправить
                </button>
            </div>

            <div id="comments-container" class="space-y-4">
                <div class="border-b pb-4">
                    <div class="flex justify-between items-center mb-2">
                        <h3 class="font-semibold">Мария К.</h3>
                        <span class="text-gray-500 text-sm">2 дня назад</span>
                    </div>
                    <div class="star-rating flex mb-2">
                        <span class="star text-xl active">★</span>
                        <span class="star text-xl active">★</span>
                        <span class="star text-xl active">★</span>
                        <span class="star text-xl active">★</span>
                        <span class="star text-xl active">★</span>
                    </div>
                    <p>Отличный рецепт! Получилось очень вкусно, спасибо за подробные инструкции.</p>
                    <button class="like-btn text-gray-500 hover:text-red-500 transition mt-2 flex items-center" data-likes="12">
                        ♥ 12
                    </button>
                </div>
                <div class="border-b pb-4">
                    <div class="flex justify-between items-center mb-2">
                        <h3 class="font-semibold">Петр С.</h3>
                        <span class="text-gray-500 text-sm">5 дней назад</span>
                    </div>
                    <div class="star-rating flex mb-2">
                        <span class="star text-xl active">★</span>
                        <span class="star text-xl active">★</span>
                        <span class="star text-xl active">★</span>
                        <span class="star text-xl active">★</span>
                        <span class="star text-xl">★</span>
                    </div>
                    <p>Все супер, только б добавить чуть больше специй по вкусу.</p>
                    <button class="like-btn text-gray-500 hover:text-red-500 transition mt-2 flex items-center" data-likes="8">
                        ♥ 8
                    </button>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <footer class="mt-8 pt-8 border-t">
            <div class="grid md:grid-cols-4 gap-6">
                <div>
                    <h4   class="font-semibold mb-3">О проекте</h4>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-600 hover:text-brand-blue">О нас</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-brand-blue">Контакты</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-brand-blue">Правила</a></li>
                    </ul>
                </div>
                <div>
                    <h4  class="font-semibold mb-3">Рецепты</h4>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-600 hover:text-brand-blue">Популярные</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-brand-blue">Новые</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-brand-blue">Категории</a></li>
                    </ul>
                </div>
                <div>
                    <h4  class="font-semibold mb-3">Сообщество</h4>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-600 hover:text-brand-blue">Авторы</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-brand-blue">Блог</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-brand-blue">Форум</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-semibold mb-3">Подписаться</h4>
                    <p class="text-gray-600 mb-3">Получайте лучшие рецепты каждую неделю</p>
                    <div class="flex">
                        <input type="email" id="subscribe-email" 
                               class="border rounded-l px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-brand-blue" 
                               placeholder="Ваш email">
                        <button id="subscribe-btn" class="bg-brand-blue text-white px-4 py-2 rounded-r hover:bg-blue-600 transition">
                            OK
                        </button>
                    </div>
                    <p id="email-error" class="text-red-500 text-sm mt-1 hidden">Пожалуйста, введите корректный email</p>
                </div>
            </div>
        </footer>
    </div>

    <div id="notification" class="notification"></div>
</body>
</html>



