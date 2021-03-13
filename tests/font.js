/*
 Fonts sourced from:
 https://www.1001fonts.com/carbon-font.html
 https://www.1001fonts.com/ethnocentric-font.html
 */

import {Image} from '../ImageScript.js';
import {equals} from "https://deno.land/std@0.80.0/bytes/mod.ts";

const panic = message => {
    console.error(message);
    Deno.exit(1);
};

(async () => {
    {
        const font = await Image.renderText(await Deno.readFile('./tests/fonts/carbon phyber.ttf'), 128, 'ThE qUiCk');
        const encoded = await font.encode();

        const desired = await Deno.readFile('./tests/targets/font-1.png');
        if (!equals(desired, encoded)) panic('font 1 doesn\'t match');
    }

    {
        const font = await Image.renderText(await Deno.readFile('./tests/fonts/ethnocentric rg.ttf'), 128, 'BrOwN fOx');
        const encoded = await font.encode();

        const desired = await Deno.readFile('./tests/targets/font-2.png');
        if (!equals(desired, encoded)) panic('font 2 doesn\'t match');
    }
})();