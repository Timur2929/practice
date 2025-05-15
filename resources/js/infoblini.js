 // 1. Мобильное меню
 document.getElementById('mobile-menu-toggle').addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});

// 2. Добавление в избранное
document.getElementById('favorite-btn').addEventListener('click', function() {
    const isFavorite = this.textContent.includes('В избранном');
    this.textContent = isFavorite ? '♥ В избранное' : '♥ В избранном';
    showNotification('Рецепт ' + (isFavorite ? 'удален из избранного' : 'добавлен в избранное'));
});

// 3. Рейтинг и комментарии
let currentRating = 0;
const stars = document.querySelectorAll('#comment-rating .star');
stars.forEach(star => {
    star.addEventListener('click', function() {
        const rating = parseInt(this.getAttribute('data-rating'));
        currentRating = rating;
        stars.forEach((s, index) => {
            s.classList.toggle('active', index < rating);
        });
    });
});

// Отправка комментария
document.getElementById('submit-comment').addEventListener('click', function() {
    const commentText = document.getElementById('comment-text').value.trim();
    if (currentRating === 0) {
        showNotification('Пожалуйста, поставьте оценку');
        return;
    }
    if (!commentText) {
        showNotification('Пожалуйста, напишите комментарий');
        return;
    }

    // Создаем новый комментарий
    const now = new Date();
    const timeAgo = 'только что';
    const newComment = document.createElement('div');
    newComment.className = 'border-b pb-4';
    newComment.innerHTML = `
        <div class="flex justify-between items-center mb-2">
            <h3 class="font-semibold">Вы</h3>
            <span class="text-gray-500 text-sm">${timeAgo}</span>
        </div>
        <div class="star-rating flex mb-2">
            ${'<span class="star text-xl active">★</span>'.repeat(currentRating)}
            ${'<span class="star text-xl">★</span>'.repeat(5 - currentRating)}
        </div>
        <p>${commentText}</p>
        <button class="like-btn text-gray-500 hover:text-red-500 transition mt-2 flex items-center" data-likes="0">
            ♥ 0
        </button>
    `;
    document.getElementById('comments-container').prepend(newComment);

    // Очищаем форму
    document.getElementById('comment-text').value = '';
    currentRating = 0;
    stars.forEach(star => star.classList.remove('active'));

    // Добавляем обработчик лайка для нового комментария
    newComment.querySelector('.like-btn').addEventListener('click', function() {
        const likes = parseInt(this.getAttribute('data-likes')) + 1;
        this.setAttribute('data-likes', likes);
        this.innerHTML = `♥ ${likes}`;
    });

    // Обновляем статистику рецепта
    updateRecipeStats();

    showNotification('Комментарий добавлен');
});

// 4. Лайки комментариев
document.querySelectorAll('.like-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const likes = parseInt(this.getAttribute('data-likes')) + 1;
        this.setAttribute('data-likes', likes);
        this.innerHTML = `♥ ${likes}`;
    });
});

// 5. Валидация email
document.getElementById('subscribe-btn').addEventListener('click', function() {
    const email = document.getElementById('subscribe-email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errorElement = document.getElementById('email-error');
    if (!emailRegex.test(email)) {
        errorElement.classList.remove('hidden');
        document.getElementById('subscribe-email').classList.add('border-red-500');
    } else {
        errorElement.classList.add('hidden');
        document.getElementById('subscribe-email').classList.remove('border-red-500');
        showNotification('Вы успешно подписались!');
        document.getElementById('subscribe-email').value = '';
    }
});

// Функция показа уведомлений
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// 6. Обновление рейтинга рецепта
let recipeRatings = Array.from(document.querySelectorAll('#comments-container .star-rating'))
    .map(rating => {
        const activeStars = rating.querySelectorAll('.star.active').length;
        return activeStars;
    });

function updateRecipeStats() {
    // Получаем все существующие оценки
    recipeRatings = Array.from(document.querySelectorAll('#comments-container .star-rating'))
        .map(rating => {
            const activeStars = rating.querySelectorAll('.star.active').length;
            return activeStars;
        });

    // Подсчитываем общее количество отзывов
    const totalReviews = recipeRatings.length;

    // Вычисляем средний балл
    const averageRating = totalReviews > 0 
        ? (recipeRatings.reduce((a, b) => a + b, 0) / totalReviews).toFixed(1)
        : 3.0;

    // Обновляем звезды рецепта
    const recipeStars = document.querySelectorAll('.recipe-rating .star');
    recipeStars.forEach((star, index) => {
        star.classList.toggle('active', index < Math.round(averageRating));
    });

    // Обновляем текст с рейтингом
    const ratingText = document.querySelector('.rating-text');
    ratingText.innerHTML = `
        (${averageRating} · ${totalReviews} ${getReviewsWord(totalReviews)})
    `;
}

// Функция для правильного склонения
function getReviewsWord(number) {
    const lastDigit = number % 10;
    const lastTwo = number % 100;
    if (lastTwo >= 11 && lastTwo <= 14) return 'отзывов';
    if (lastDigit === 1) return 'отзыв';
    if (lastDigit >= 2 && lastDigit <= 4) return 'отзыва';
    return 'отзывов';
}

// Инициализация при загрузке
updateRecipeStats();

tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Inter', 'system-ui', 'sans-serif'],
            },
            colors: {
                'brand-blue': '#4A90E2',
                'brand-gray': '#F5F5F5',
            }
        }
    }
}