import { log } from "@acdh-oeaw/lib";

import { schema } from "@/lib/typesense/schema";

const collection = schema.name;

export async function create() {
	return false

}

create()
	.then((isSuccessful) => {
		if (isSuccessful) {
			log.success(`Successfully updated typesense collection "${collection}".`);
		} else {
			log.info(`Skipped updating typesense collection "${collection}".`);
		}
	})
	.catch((error: unknown) => {
		log.error(`Failed to update typesense collection "${collection}".\n`, String(error));
		process.exitCode = 1;
	});
