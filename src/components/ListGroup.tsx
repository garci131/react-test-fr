import {Fragment} from "react";
import { MouseEvent } from "react";
import { useState } from "react";

// like a class I think / object
interface ListGroupProps {
    items: string[];
    heading: string;
    // function that takes param item: string => void
    onSelectItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectItem }: ListGroupProps) {

    // Hook
    const [selectedIndex, setSelectedIndex] = useState(-1);
    // const [name, setName] = useState('')

    // this style of function known as eventHandler
    // const handleClick = (event: MouseEvent) => console.log(event)

    return (
        // these empty angle brackets around the code helps JSX return one thing
        // vs being given 2+ things to return
        <>
        <h1>{heading}</h1>
        {items.length === 0 && <p>No Item found</p>}
        <ul className="list-group">
            {items.map((item, index)=> (
                <li
                    className={ selectedIndex === index ? 'list group item active': 'list-group-item'}
                    key={item}
                    onClick = {() => {
                        setSelectedIndex(index);
                        onSelectItem(item);
                    }}
                >
                {item}</li>
            ))}
        </ul>
        </>
    );
}

export default ListGroup;
