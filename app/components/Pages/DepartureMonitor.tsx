import React from "react";

type DepartureMonitorProps = {
    stationId: string,
    title: string
}

export default function DepartureMonitor(props: DepartureMonitorProps) {
    const url = `https://www.vgn.de/atafel?dm=${props.stationId}&layout=2&title=${props.title}`;
    console.log(props.stationId);
    return (
        <div>
            <iframe className="h-screen w-screen" src={url} title={"departures-" + props.stationId}/>
        </div>
    );
}