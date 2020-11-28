test: ./node_modules/.bin/jest
	NODE_ENV=test ./node_modules/.bin/jest

clean:
	rm -rf ./static/build/*

dev: ./node_modules/.bin/webpack clean
	NODE_ENV=development ./node_modules/.bin/webpack serve --config webpack.dev.js --progress --port 8000

build: ./node_modules/.bin/webpack clean
	NODE_ENV=production ./node_modules/.bin/webpack --config webpack.prod.js
