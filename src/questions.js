import React from "react";
import iconArrowDown from "./images/icon-arrow-down.svg"

const Book = (props) => {
    const [show, setShow] = React.useState(false);
    
    return  (
    <div className="content">
        <ul>
            <li>
                <article className="button-q" onClick={() => setShow(!show)}>
                    <h2 className={`${show && "clicked"}`}>{props.name}</h2>
                    <img className={`${show && "icon"}`} src={iconArrowDown} alt=""/>
                </article>
                    {show && <p>{props.questions}</p>}
                
            </li>
        </ul>
    </div>
    )
};

export { Book };