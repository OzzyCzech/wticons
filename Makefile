# Usage: make release VERSION=2.2.0
# Bumps both packages, commits, tags vX.Y.Z and pushes; GitHub Actions then publishes to npm.
release:
	test -n "$(VERSION)" || (echo "VERSION is required, e.g. make release VERSION=2.2.0" && exit 1)
	npm version $(VERSION) --workspaces --no-git-tag-version --no-workspaces-update --no-package-lock
	git commit -am "Release $(VERSION)"
	git tag v$(VERSION)
	git push origin main --tags

.PHONY: $(MAKECMDGOALS)
