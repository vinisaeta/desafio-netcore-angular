export class BACESException extends Error {

    public error: string;

    constructor(error: string, message?: string) {
        super(message);

        this.error = error;

        if (!this.message) {
            this.message = this.error;
        }
    }
}
