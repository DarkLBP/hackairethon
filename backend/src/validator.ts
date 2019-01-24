import {Request} from 'express';

export class Validator {
    public static validate(request: Request, rules: object): boolean {
        for (const [property, rule] of Object.entries(rules)) {
            // @ts-ignore
            if (!this[rule]) {
                throw Error(`Rule ${rule} does not exist`);
            }
            const propertyChunks = property.split('.');
            let element = request.body;
            if (propertyChunks.length === 1) {
                element = element[propertyChunks[0]];
            } else {
                for (const chunk of propertyChunks) {
                    if (!element.hasOwnProperty(chunk)) {
                        element = null;
                        break;
                    }
                    element = element[chunk];
                }
            }
            // @ts-ignore
            if (!this[rule](element)) {
                return false;
            }
        }
        return true;
    }
    private static emailRegex = new RegExp('^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|' +
        '(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$');

    private static email(email: string): boolean {
        return this.emailRegex.test(email);
    }

    private static filled(data: any): boolean {
        return !!data;
    }
}
