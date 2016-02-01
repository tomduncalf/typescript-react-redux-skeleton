# composes is an extension CSS modules adds, so ignore that
RESULT=`scss-lint -c .scss-lint.yml | grep -v "Unknown property composes" | grep -v 'DuplicateProperty: Property \`composes\` already defined'`
if [ "$RESULT" ]; then
  echo "$RESULT"
  exit 1
else
  exit 0
fi
