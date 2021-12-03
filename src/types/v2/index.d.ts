export function load(buffer: any): Promise<framebuffer | Animation>;
export class Image extends framebuffer {
    static decode(format: any, buffer: any, options?: {}): Promise<Image>;
    constructor(width: any, height: any, buffer: any);
}
export class Frame {
    static from(framebuffer: any): Frame;
    constructor(width: any, height: any, buffer: any);
    timestamp: number;
    dispose: string;
    image: Image;
    get width(): number;
    get height(): number;
    clone(): Frame;
}
import { Color } from "./framebuffer.js";
export class Animation {
    static decode(format: any, buffer: any, options?: {}): Promise<Animation>;
    constructor(width: any, height: any);
    width: number;
    height: number;
    frames: any[];
    repeat: number;
    clear(): void;
    add(frame: any): void;
    resize(type: any, width: any, height: any): void;
    encode(format: any, options?: {}): Promise<any>;
}
import { default as framebuffer } from "./framebuffer.js";
export { Color };
