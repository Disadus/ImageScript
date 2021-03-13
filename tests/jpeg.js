import {Image} from '../ImageScript.js';
import {equals} from "https://deno.land/std@0.80.0/bytes/mod.ts";

const panic = message => {
	console.error(message);
	Deno.exit(1);
};

(async () => {
	const binary = await Deno.readFile('./tests/targets/external.jpg');
	const image = await Image.decode(binary);

	if ([image.width, image.height].some(v => v !== 638))
		panic('dimensions don\'t match');
	if (!equals(image.bitmap.slice(0, 4), [70, 65, 61, 255]))
		panic('pixel doesn\'t match');

	await image.encodeJPEG(100);
})();