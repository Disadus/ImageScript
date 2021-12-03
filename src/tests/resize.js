const fs = require('fs').promises;
const {Image} = require('../../ImageScript');
(async () => {
        const binary = await fs.readFile('./src/tests/targets/image.png');
        const image = await Image.decode(binary);
        image.resize(image.width / 4, Image.RESIZE_AUTO);

        const encoded = await image.encode(1, {creationTime: 0, software: ''});

        if (process.env.OVERWRITE_TEST)
                await fs.writeFile('./src/tests/targets/resize.png', encoded);

        const target = await fs.readFile('./src/tests/targets/resize.png');
        if (!Buffer.from(target).equals(Buffer.from(encoded))) process.exit(1);
})();
