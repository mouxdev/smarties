import * as fs from "fs";

export function ensureDirExists(path: string) {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path, { recursive: true });
    }
}

// convert node stream to web stream
export function nodeStreamToReadableStream(nodeStream: fs.ReadStream) {
    return new ReadableStream({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        start(controller: any) {
            nodeStream.on("data", (chunk: unknown) => {
                controller.enqueue(chunk);
            });
            nodeStream.on("end", () => {
                controller.close();
            });
        },
    });
}