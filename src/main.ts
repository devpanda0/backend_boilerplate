import Api from "./api/Api";

async function start() {
	await Api.getInstance().start()
}

void start()
