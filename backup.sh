#!/bin/bash
# Script de backup automático
DATE=$(date +%Y-%m-%d)
BACKUP_DIR="/backup"
SITE_DIR="/var/www/html"

# Criar backup do site
tar -czf $BACKUP_DIR/site-$DATE.tar.gz $SITE_DIR

# Manter apenas os últimos 7 backups
find $BACKUP_DIR -name "site-*.tar.gz" -mtime +7 -delete 