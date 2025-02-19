#!/bin/bash

files=$(git diff --diff-filter=AMR --name-only ${VERCEL_GIT_PREVIOUS_SHA} ${VERCEL_GIT_COMMIT_SHA} -- content/**/*.mdx | xargs)

for file in $files; do
	pnpm tsx ./scripts/handle/create-handle.ts --resource $file
	git add $file
done

if [[ -n "$(git diff --staged)" ]]; then
	git config user.name "${GITHUB_USERNAME}"
	git config user.email "${GITHUB_EMAIL}"
	git commit -m "content: add handle [skip ci]"
	git push --set-upstream origin master:main
fi
