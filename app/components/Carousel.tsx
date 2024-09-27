import React from "react";
import { PropsWithChildren } from "react";

export default function Carousel(props: PropsWithChildren) {
    const childrenArray = React.Children.toArray(props.children);
    return (
        <div className="h-screen v-screen">
            <div className="flex flex-row min-h-screen justify-center items-center">
                {childrenArray[0]}
            </div>
        </div>

    );
}