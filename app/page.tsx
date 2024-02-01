'use client';
import {selectForm, editForm, setDefaultConfiguration} from "@typeform/button/src";
import React from "react";
import {Title, Badge, Button, Icon} from "@tremor/react";
import {
    QueueListIcon,
} from "@heroicons/react/24/solid";

export default function Home() {
    setDefaultConfiguration({
        type: 'iframe', // 'iframe' | 'popup'
        appName: 'playground-typeform',
    });

    const handleSelect = () => {
        selectForm({
            // @ts-ignore
            callback: ({action, formId}) => console.log(`you just selected form id: ${formId}`),
        })
    }

    const handleEdit = () => {
        editForm({
            formId: "CW8fF9fF",
            // @ts-ignore
            callback: ({action, formId}) => console.log(`you just edited form id: ${formId}`),
        })
    }

    return (
        <main className="flex flex-col items-center justify-between p-24">
            <div className="z-10 max-w-2xl w-full justify-center font-mono text-sm lg:flex">
                <Title className={"mb-2"}>
                    <Icon color="indigo" className={"pl-0 py-0"} size="lg" icon={QueueListIcon}/>
                    Typeform Playground
                </Title>
            </div>
            <div className="z-10 max-w-2xl w-full justify-center font-mono text-sm lg:flex">
                <Badge>
                    <a href="https://github.com/shospodarets/playground-typeform">Link to the Github code of this app</a>
                </Badge>
            </div>
            <div className="z-10 max-w-2xl w-full items-center justify-between font-mono text-sm lg:flex">

                <div className={"mt-5 mb-5"}>
                    <Button type={"button"} color="blue" className={"mr-4 mt-1"}
                            onClick={handleSelect}>
                        Select Typeform
                    </Button>
                </div>
                <div className={"mb-5"}>
                    <Button type={"button"} color="blue" className={"mr-4 mt-1"}
                            onClick={handleEdit}>
                        Edit Typeform form
                    </Button>
                </div>
            </div>
        </main>
    );
}
