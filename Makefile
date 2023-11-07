.PHONY: start

start:
	docker compose up --build

shell:
	docker exec -it mantastyle-telco-customer-churn-backend /bin/sh

s:
	make start