-- Таблица клиентов
CREATE TABLE clients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(255),
    motorcycle_brand VARCHAR(100),
    motorcycle_model VARCHAR(100),
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_member BOOLEAN DEFAULT FALSE,
    member_since TIMESTAMP,
    notes TEXT
);

-- Таблица услуг
CREATE TABLE services (
    id SERIAL PRIMARY KEY,
    category VARCHAR(50) NOT NULL CHECK (category IN ('moto', 'nails', 'massage', 'coffee')),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    duration_minutes INT,
    price DECIMAL(10, 2) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE
);

-- Таблица сотрудников
CREATE TABLE staff (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(100) NOT NULL,
    specialty VARCHAR(255),
    phone VARCHAR(50),
    email VARCHAR(255),
    hire_date DATE NOT NULL,
    photo_url TEXT,
    is_active BOOLEAN DEFAULT TRUE
);

-- Таблица записей на услуги
CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,
    client_id INT NOT NULL REFERENCES clients(id),
    service_id INT NOT NULL REFERENCES services(id),
    staff_id INT REFERENCES staff(id),
    booking_date DATE NOT NULL,
    booking_time TIME NOT NULL,
    status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
    total_price DECIMAL(10, 2),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица членства
CREATE TABLE memberships (
    id SERIAL PRIMARY KEY,
    client_id INT NOT NULL REFERENCES clients(id),
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    status VARCHAR(50) DEFAULT 'active' CHECK (status IN ('active', 'expired', 'cancelled')),
    payment_amount DECIMAL(10, 2) NOT NULL,
    payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    auto_renewal BOOLEAN DEFAULT TRUE
);

-- Таблица отзывов
CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    client_id INT NOT NULL REFERENCES clients(id),
    service_id INT REFERENCES services(id),
    rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_published BOOLEAN DEFAULT FALSE
);

-- Индексы для производительности
CREATE INDEX idx_bookings_date ON bookings(booking_date);
CREATE INDEX idx_bookings_client ON bookings(client_id);
CREATE INDEX idx_bookings_status ON bookings(status);
CREATE INDEX idx_clients_phone ON clients(phone);
CREATE INDEX idx_memberships_client ON memberships(client_id);
CREATE INDEX idx_reviews_service ON reviews(service_id);

-- Вставка начальных данных для услуг
INSERT INTO services (category, name, description, duration_minutes, price) VALUES
('moto', 'Техническое обслуживание', 'Полное ТО мотоцикла', 120, 5000),
('moto', 'Диагностика', 'Компьютерная диагностика', 60, 2000),
('moto', 'Ремонт двигателя', 'Ремонт и настройка двигателя', 240, 15000),
('moto', 'Кастомизация', 'Индивидуальный тюнинг', 180, 25000),
('nails', 'Классический маникюр', 'Уход за руками и ногтями', 60, 1500),
('nails', 'Гель-лак', 'Покрытие гель-лаком', 90, 2500),
('nails', 'Nail-арт', 'Художественный дизайн', 120, 3500),
('massage', 'Релакс-массаж', 'Общий расслабляющий массаж', 60, 3000),
('massage', 'Спортивный массаж', 'Массаж после физических нагрузок', 60, 3500),
('massage', 'Точечный массаж', 'Акупунктурный массаж', 45, 2500),
('coffee', 'Эспрессо', 'Классический эспрессо', 5, 150),
('coffee', 'Капучино', 'Кофе с молочной пенкой', 10, 250),
('coffee', 'Латте', 'Нежный кофе с молоком', 10, 280),
('coffee', 'Авторский напиток', 'Уникальный рецепт от бариста', 15, 350);

-- Вставка сотрудников
INSERT INTO staff (name, role, specialty, hire_date, photo_url) VALUES
('Алиса', 'Главный механик', 'Harley Davidson', '2023-01-15', 'https://cdn.poehali.dev/projects/fb6a9a8c-58cb-4e0b-a213-2ac5f96215e8/files/6656f427-6d04-41f7-9d9c-bf5d2a75c7cd.jpg'),
('Мария', 'Мастер по кастомизации', 'Японские байки', '2023-03-20', 'https://cdn.poehali.dev/projects/fb6a9a8c-58cb-4e0b-a213-2ac5f96215e8/files/6e3f0398-23ca-4eea-8531-b40c4863bde0.jpg'),
('Виктория', 'Диагност', 'Электроника', '2023-06-10', 'https://cdn.poehali.dev/projects/fb6a9a8c-58cb-4e0b-a213-2ac5f96215e8/files/9c58c2d6-c2e3-4f4b-bf36-cabe1ef58936.jpg');