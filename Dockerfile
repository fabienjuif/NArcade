FROM nginx

COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY publish /usr/share/nginx/html

EXPOSE 80

RUN \
    find /usr/share/nginx/html -type f -exec chmod 644 {} + && \
    find /usr/share/nginx/html -type d -exec chmod 755 {} +
