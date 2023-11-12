.PHONY: start

start:
	docker compose up --build

shell:
	docker compose run --rm --use-aliases web /bin/sh

s:
	make start

insert-csv-to-db:
	node src/insert_csv_data_to_database.js

delete-csv-from-db:
	node src/delete_csv_data_from_database.js