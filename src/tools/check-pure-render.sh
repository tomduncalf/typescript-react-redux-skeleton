RESULT=`grep -L -e 'pureRender\|noPureRender' --include \*.tsx -R app/components app/containers | grep -v '.spec.tsx' | sed 's/^/ERROR: Component without pureRender found: /'`
if [ "$RESULT" ]; then
  echo "$RESULT"
  exit 1
else
  exit 0
fi
