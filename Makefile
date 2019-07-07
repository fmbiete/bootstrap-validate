docker:
	sudo chcon -Rt svirt_sandbox_file_t `pwd`
	echo "cd /usr/src/app && npm install && npm run-script test && npm run-script build"
	docker run -ti --rm --name bootstrap_validate -v `pwd`:/usr/src/app node bash
