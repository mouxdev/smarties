import { LoaderFunction } from "@remix-run/node";
import * as fs from "fs";
import * as path from "path";
import { nodeStreamToReadableStream } from "~/utility";

export const loader: LoaderFunction = async () => {
    if (!process.env.tempDir) {
        throw new Response(null, {
            status: 404,
            statusText: "Not Found",
        });
    }
    const screenshotPath = path.join(process.env.tempDir, "screenshots");
    const stream = fs.createReadStream(path.join(screenshotPath, "xkcd.png"));
    
    return new Response(nodeStreamToReadableStream(stream), {
        status: 200,
        headers: {
            "Content-Type": "image/png",
        },
    });
};