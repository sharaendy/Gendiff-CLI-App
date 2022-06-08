install:
	npm ci

lint:
	npx eslint .

link:
	npm link

publish:
	npm publish --dry-run

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8