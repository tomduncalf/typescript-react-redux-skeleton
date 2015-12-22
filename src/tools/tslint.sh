RESULT=`find app -name "*.ts*" | xargs tslint -c tslint.json | grep -v "unused variable: 'React'" | sed 's/^/ERROR: /'`
if [ "$RESULT" ]; then
  echo "$RESULT"
  exit 1
else
  exit 0
fi
