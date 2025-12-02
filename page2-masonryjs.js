document.addEventListener('DOMContentLoaded', function() {
    // Инициализация Masonry
    const grid = document.getElementById('masonryGrid');
    let colCount = 3;
    
    const masonry = new Masonry(grid, {
        itemSelector: '.news-card',
        columnWidth: '.news-card',
        gutter: 30,
        percentPosition: true,
        fitWidth: true
    });
    
    // Обновление количества колонок
    function updateColumns() {
        // Рассчитываем ширину колонки в зависимости от количества колонок
        const containerWidth = document.querySelector('.container').offsetWidth;
        const columnWidth = Math.floor((containerWidth - 30 * (colCount - 1)) / colCount);
        
        // Обновляем отображение количества колонок
        document.getElementById('colCount').textContent = colCount;
        
        // Устанавливаем ширину карточек
        const cards = document.querySelectorAll('.news-card');
        cards.forEach(card => {
            card.style.width = columnWidth + 'px';
        });
        
        // Переинициализируем Masonry с новыми параметрами
        masonry.columnWidth = columnWidth;
        masonry.options.columnWidth = columnWidth;
        masonry.layout();
    }
    
    // Инициализация начальных карточек
    function initializeCards() {
        const newsData = [
            {
                category: 'technology',
                title: 'Искусственный интеллект совершил прорыв в медицинской диагностике',
                excerpt: 'Новая система на базе ИИ способна диагностировать рак на ранних стадиях с точностью 98%.',
                hasImage: true,
                date: '15 июня 2023',
                author: 'Алексей Петров'
            },
            {
                category: 'economy',
                title: 'Центробанк повысил ключевую ставку на 1%',
                excerpt: 'Решение направлено на сдерживание инфляционных процессов в экономике. Эксперты прогнозируют стабилизацию цен.',
                hasImage: false,
                date: '14 июня 2023',
                author: 'Мария Смирнова'
            },
            {
                category: 'sports',
                title: 'Национальная сборная вышла в финал чемпионата мира по футболу',
                excerpt: 'В напряженном полуфинальном матче сборная одержала победу со счетом 3:2. Решающий гол был забит на 89-й минуте.',
                hasImage: true,
                date: '13 июня 2023',
                author: 'Иван Козлов'
            },
            {
                category: 'culture',
                title: 'Открылся новый театральный сезон с премьерой спектакля',
                excerpt: 'Современная интерпретация классического романа Достоевского получила восторженные отзывы критиков.',
                hasImage: true,
                date: '12 июня 2023',
                author: 'Ольга Новикова'
            },
            {
                category: 'science',
                title: 'Ученые обнаружили новый вид глубоководных организмов',
                excerpt: 'Исследовательская группа в Марианской впадине обнаружила ранее неизвестный вид бактерий.',
                hasImage: false,
                date: '11 июня 2023',
                author: 'Сергей Волков'
            },
            {
                category: 'politics',
                title: 'Состоялся саммит глав государств по вопросам климатических изменений',
                excerpt: 'Лидеры 50 стран договорились о совместных мерах по сокращению выбросов углекислого газа.',
                hasImage: true,
                date: '10 июня 2023',
                author: 'Анна Кузнецова'
            }
        ];
        
        // Добавляем карточки в сетку
        newsData.forEach(item => {
            addCardToGrid(item);
        });
        
        // Обновляем сетку после добавления карточек
        setTimeout(() => {
            masonry.layout();
            updateColumns();
        }, 100);
    }
    
    // Функция добавления новой карточки
    function addCardToGrid(newsItem) {
        const card = document.createElement('article');
        card.className = 'news-card';
        
        // Случайная высота для демонстрации Masonry
        const heights = [300, 350, 400, 450, 500];
        const randomHeight = heights[Math.floor(Math.random() * heights.length)];
        card.style.minHeight = randomHeight + 'px';
        
        // Категории
        const categories = {
            technology: 'Технологии',
            economy: 'Экономика',
            sports: 'Спорт',
            culture: 'Культура',
            science: 'Наука',
            politics: 'Политика',
            health: 'Здоровье',
            entertainment: 'Развлечения',
            education: 'Образование'
        };
        
        // Изображения для разных категорий
        const imageUrls = {
            technology: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            sports: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            culture: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            politics: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            health: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            science: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            economy: 'https://images.unsplash.com/photo-1665686306573-1f6b5d6e3a98?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            default: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        };
        
        // Авторы
        const authors = ['Алексей Петров', 'Мария Смирнова', 'Иван Козлов', 'Ольга Новикова', 
                        'Сергей Волков', 'Анна Кузнецова', 'Дмитрий Соколов', 'Екатерина Морозова'];
        
        // Создаем HTML карточки
        card.innerHTML = `
            <div class="card-category ${newsItem.category}">${categories[newsItem.category] || 'Новости'}</div>
            ${newsItem.hasImage ? 
                `<div class="card-image">
                    <img src="${imageUrls[newsItem.category] || imageUrls.default}" alt="${newsItem.title}">
                </div>` 
                : ''}
            <div class="card-content">
                <h2 class="card-title">${newsItem.title}</h2>
                <p class="card-excerpt">${newsItem.excerpt}</p>
                <div class="card-meta">
                    <span class="card-date"><i class="far fa-calendar"></i> ${newsItem.date}</span>
                    <span class="card-author"><i class="far fa-user"></i> ${newsItem.author}</span>
                </div>
            </div>
        `;
        
        // Добавляем карточку в сетку
        grid.appendChild(card);
        
        // Обновляем сетку Masonry
        masonry.appended(card);
        masonry.layout();
    }
    
    // Генерация случайной новости
    function generateRandomNews() {
        const categories = ['technology', 'economy', 'sports', 'culture', 'science', 'politics', 'health', 'entertainment', 'education'];
        const titles = [
            'Новое исследование в области квантовых вычислений',
            'Мировые рынки отреагировали на новую экономическую политику',
            'Спортсмен установил новый мировой рекорд',
            'Выставка современного искусства открылась в центре города',
            'Археологи обнаружили древнее поселение',
            'Международная конференция по климату завершилась подписанием соглашения',
            'Ученые разработали новый метод лечения хронических заболеваний',
            'Кинофестиваль представил новые работы молодых режиссеров',
            'Образовательная платформа запустила бесплатные курсы',
            'Новая технология переработки пластика показывает впечатляющие результаты',
            'Финансовый квартал города готовится к масштабной реконструкции',
            'Чемпионат по киберспорту собрал рекордное количество участников',
            'Фестиваль уличной еды стал самым посещаемым мероприятием года'
        ];
        
        const excerpts = [
            'Результаты исследования могут изменить подход к обработке данных в ближайшие годы.',
            'Эксперты отмечают позитивную динамику на основных торговых площадках.',
            'Достижение было установлено во время международных соревнований в Японии.',
            'Экспозиция включает работы более 100 художников из разных стран мира.',
            'Находка проливает свет на быт древних цивилизаций этого региона.',
            'Участники договорились о сокращении выбросов на 30% к 2030 году.',
            'Клинические испытания показали высокую эффективность нового препарата.',
            'В конкурсной программе представлены фильмы из 25 стран.',
            'Курсы охватывают программирование, дизайн, маркетинг и другие направления.',
            'Инновационный подход позволяет перерабатывать до 95% отходов пластика.',
            'Проект включает строительство новых офисных зданий и общественных пространств.',
            'Турнир по популярной игре собрал более 5000 участников со всего мира.',
            'На фестивале представлены блюда из более чем 50 стран мира.'
        ];
        
        const randomCategory = categories[Math.floor(Math.random() * categories.length)];
        const randomTitle = titles[Math.floor(Math.random() * titles.length)];
        const randomExcerpt = excerpts[Math.floor(Math.random() * excerpts.length)];
        const randomAuthor = authors[Math.floor(Math.random() * authors.length)];
        const hasImage = Math.random() > 0.3; // 70% карточек с изображением
        
        // Генерация случайной даты
        const today = new Date();
        const randomDaysAgo = Math.floor(Math.random() * 30);
        const newsDate = new Date(today);
        newsDate.setDate(today.getDate() - randomDaysAgo);
        const formattedDate = newsDate.toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
        
        return {
            category: randomCategory,
            title: randomTitle,
            excerpt: randomExcerpt,
            hasImage: hasImage,
            date: formattedDate,
            author: randomAuthor
        };
    }
    
    // Функция перемешивания карточек
    function shuffleCards() {
        // Получаем все карточки
        const cards = Array.from(grid.children);
        
        // Перемешиваем массив карточек
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            grid.appendChild(cards[j]);
        }
        
        // Обновляем сетку Masonry после перемешивания
        masonry.reloadItems();
        masonry.layout();
        
        // Показываем уведомление
        showNotification('Карточки перемешаны!');
    }
    
    // Показать уведомление
    function showNotification(message) {
        // Удаляем старое уведомление, если есть
        const oldNotification = document.querySelector('.notification');
        if (oldNotification) {
            oldNotification.remove();
        }
        
        // Создаем новое уведомление
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #2ecc71;
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 1000;
            font-weight: 500;
            animation: slideIn 0.3s ease;
        `;
        
        // Добавляем стили для анимации
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes fadeOut {
                from {
                    opacity: 1;
                }
                to {
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(notification);
        
        // Удаляем уведомление через 3 секунды
        setTimeout(() => {
            notification.style.animation = 'fadeOut 0.5s ease';
            setTimeout(() => notification.remove(), 500);
        }, 3000);
    }
    
    // Обработчики событий для кнопок
    document.getElementById('addCardBtn').addEventListener('click', function() {
        const randomNews = generateRandomNews();
        addCardToGrid(randomNews);
        showNotification('Новая карточка добавлена!');
    });
    
    document.getElementById('shuffleBtn').addEventListener('click', shuffleCards);
    
    document.getElementById('increaseCols').addEventListener('click', function() {
        if (colCount < 6) {
            colCount++;
            updateColumns();
            showNotification(`Количество колонок: ${colCount}`);
        }
    });
    
    document.getElementById('decreaseCols').addEventListener('click', function() {
        if (colCount > 1) {
            colCount--;
            updateColumns();
            showNotification(`Количество колонок: ${colCount}`);
        }
    });
    
    // Обработчик изменения размера окна
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            updateColumns();
        }, 250);
    });
    
    // Инициализация при загрузке страницы
    initializeCards();
    
    // Добавляем стили для уведомлений
    const notificationStyles = document.createElement('style');
    notificationStyles.textContent = `
        .notification {
            font-family: 'Roboto', sans-serif;
        }
    `;
    document.head.appendChild(notificationStyles);
    
    // Добавляем информацию о Masonry в консоль
    console.log('Masonry.js инициализирован. Используется версия 4.2.2');
    console.log('Управление:');
    console.log('- Добавить карточку: кнопка "Добавить карточку"');
    console.log('- Перемешать: кнопка "Перемешать"');
    console.log('- Изменить количество колонок: кнопки +/-');
});