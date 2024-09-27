import { CronJob } from "cron";
import fetchXKCD from "./jobs/fetchXKCD";

export default function registerCronJobs() {
    console.log("Registering cronjobs");
    
    new CronJob(
        "0 * * * *", // cronTime
        () => {
            fetchXKCD();
        }, // onTick
        null, // onComplete
        true, // start
        "Europe/Berlin" // timeZone
    );
}