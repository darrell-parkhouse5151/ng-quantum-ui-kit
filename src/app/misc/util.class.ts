/* tslint:disable*/
export class Util {
    public getClass(className: string) {
        return document.querySelector(className);
    }

    public getElemId(elemId: string) {
        return document.querySelector(elemId);
    }
}
