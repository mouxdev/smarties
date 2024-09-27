import React from "react";

export default function MensattFrame() {
    const url = "https://mensatt.de/";
    return (
        <div>
            <iframe className="h-screen w-screen" src={url} title={"mensatt"}/>
        </div>
    );
}