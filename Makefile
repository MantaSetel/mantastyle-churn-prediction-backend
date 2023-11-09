.PHONY: start

start:
	docker compose up --build

shell:
	docker compose run --rm --use-aliases web /bin/sh

s:
	make start