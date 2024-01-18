import React from "react";

export default function ProjectList({projectItem, ...props}) {
    return (
        <li className="list-none px-2 pb-3">{projectItem.title}</li>
    )

}
