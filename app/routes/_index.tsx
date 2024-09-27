import { json, type LoaderFunction, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Carousel from "~/components/Carousel";
import DepartureMonitor from "~/components/Pages/DepartureMonitor";
import MensattFrame from "~/components/Pages/MensattFrame";
import XKCDImg from "~/components/Pages/XKCDImg";

export const meta: MetaFunction = () => {
    return [
        { title: "smarties" }
    ];
};

export const loader: LoaderFunction = async () => {
    return json({ vgnStationId: process.env.vgnStationId, vgnTitle: process.env.vgnTitle });
};

export default function Index() {
    const { vgnStationId, vgnTitle } = useLoaderData<typeof loader>();
    return (
        <Carousel>
            <XKCDImg />
            <MensattFrame />
            <DepartureMonitor stationId={vgnStationId} title={vgnTitle} />
        </Carousel>
    );
}