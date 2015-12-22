grep -e '.*TODO.*' --include \*.ts\* -R app | sed 's/^/WARNING: /'
