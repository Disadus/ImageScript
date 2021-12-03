declare const _exports: {
    then<TResult1 = Image, TResult2 = never>(onfulfilled?: (value: Image) => TResult1 | PromiseLike<TResult1>, onrejected?: (reason: any) => TResult2 | PromiseLike<TResult2>): Promise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: (reason: any) => TResult | PromiseLike<TResult>): Promise<Image | TResult>;
};
export = _exports;
import { Image } from "../../ImageScript";
