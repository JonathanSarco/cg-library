class HttpException extends Error {
    
    constructor(
        statusCode: number,
        message: string,
        error: string | null
    ) {
        super(message);
    };

    get statusCode() : number {
        return this.statusCode
    };

    get error(): string {
        return this.error;
    }
    
}

export default HttpException;