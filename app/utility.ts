import * as fs from "fs";

export function ensureDirExists(path: string) {
    if (!fs.existsSync(path)){
        fs.mkdirSync(path, { recursive: true });    }
}