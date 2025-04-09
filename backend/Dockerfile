# backend/Dockerfile
FROM php:8.2-fpm

# Installer dépendances système
RUN apt-get update && apt-get install -y \
    git curl libpng-dev libonig-dev libxml2-dev zip unzip sqlite3 libsqlite3-dev \
    && docker-php-ext-install pdo pdo_mysql mbstring exif pcntl bcmath gd

# Installer Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Copier les fichiers
WORKDIR /var/www
COPY . .

# Installer les dépendances PHP
RUN composer install

# Donner les permissions
RUN chown -R www-data:www-data /var/www && chmod -R 755 /var/www

# Exposer le port du backend
EXPOSE 8000

CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
