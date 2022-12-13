export type HttpMethod = "GET" | "POST" | "DELETE" | "HEAD" | "PATCH" | "PUT" | "OPTIONS" | "TRACE" | "CONNECT";

export class FormFile {
    data: Uint8Array;
    fileName: string;
    contentType?: string;

    constructor(fileName: string, data: Uint8Array) {
        this.fileName = fileName;
        this.data = data;
    }
}

export interface HttpRequest {
    method: HttpMethod | null;
    url: string;
    headers: { [key: string]: string };
    query: { [key: string]: string };
    params: { [key: string]: string };
    body?: any;
    files?: { [key: string]: FormFile[] };
}

export interface HttpResponse {
    headers: { [key: string]: string };
    statusCode: number,
    body: any
}