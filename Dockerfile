FROM nginx:alpine

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy all site files
COPY index.html /usr/share/nginx/html/
COPY css /usr/share/nginx/html/css
COPY js /usr/share/nginx/html/js
COPY assets /usr/share/nginx/html/assets
COPY landing /usr/share/nginx/html/landing
COPY pitch /usr/share/nginx/html/pitch
COPY research /usr/share/nginx/html/research

EXPOSE 80
