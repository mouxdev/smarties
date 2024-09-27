import puppeteer from "puppeteer";
import * as path from "path";
import { ensureDirExists } from "~/utility";

export default async function fetchXKCD() {
    console.log("fetching xkcd");

    if (!process.env.tempDir) {
        console.log("Temp dir doesn't exist, aborting");
    }

    const screenshotPath = path.join(process.env.tempDir!, "screenshots");
    ensureDirExists(screenshotPath);
    
    const browser = await puppeteer.launch({ defaultViewport: { width: 5000, height: 4000, deviceScaleFactor: 0 } });
    const page = await browser.newPage();
    await page.goto("https://xkcd.com/");

    const comicDiv = await page.waitForSelector("#comic");

    await comicDiv?.screenshot({
        path: path.join(screenshotPath, "xkcd.png")
    });
    await page.close();
}