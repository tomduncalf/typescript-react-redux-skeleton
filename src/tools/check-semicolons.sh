RESULT=`grep -e '.*;$' --include \*.ts\* -R app | sed 's/^/ERROR: Semicolon found: /'`
if [ "$RESULT" ]; then
  echo "$RESULT"
  exit 1
else
  exit 0
fi
