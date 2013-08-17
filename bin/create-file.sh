#!/bin/sh

NAME=$1
BASE=/Users/hara/Develop/github/css3-examples
JADE=${NAME}.jade
STYLUS=${NAME}.styl

# jade
cd "${BASE}/template/jade/examples"
if [ ! -e $JADE ]; then
	echo "extends ../includes/base\n\nblock content\n\nblock append scripts\n" > $JADE
fi

# stylus
cd "${BASE}/template/stylus/css"
if [ ! -e $STYLUS ]; then
	echo "@import 'nib'\n\n" > $STYLUS
fi
