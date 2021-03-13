import {Frame, GIF} from '../ImageScript.js';
import {equals} from 'https://deno.land/std@0.80.0/bytes/mod.ts';

const panic = message => {
    console.error(message);
    Deno.exit(1);
};

(async () => {
    const frames = [];
    for (let i = 0; i < 30; i++) {
        const frame = new Frame(256, 256);
        frame.fill(x => Frame.hslToColor(x / frame.width + i / 30, 1, 0.5));
        frames.push(frame);
    }

    const gif = new GIF(frames);

    {
        const encoded = await gif.encode();
        const desired = await Deno.readFile('./tests/targets/gif.gif');
        if (!equals(desired, encoded))
            panic('encoding failed');
    }

    {
        const binary = await Deno.readFile('./tests/targets/gif.gif');
        const decoded = await GIF.decode(binary);
        if (decoded.width !== gif.width)
            panic('decode: incorrect width');
        if (decoded.height !== gif.height)
            panic('decode: incorrect width');
        if (decoded.length !== gif.length)
            panic('decode: incorrect frame count');

        for (let i = 0; i < gif.length; i++) {
            if (gif[i].bitmap.length !== decoded[i].bitmap.length)
                panic('decode: incorrect frame bitmap length');
        }
    }
})();
