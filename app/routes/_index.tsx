import { json, type LoaderFunction, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
    return [
        { title: "smarties" }
    ];
};

export const loader: LoaderFunction = async () => {
    return json({ value: process.env.value });
};

export default function Index() {
    const { value } = useLoaderData<typeof loader>();
    return (
        <p>
            hi
            {value}
        </p>
    );
}