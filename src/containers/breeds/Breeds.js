import React from "react";
import {Link, useRouteMatch} from "react-router-dom";
import {ReactComponent as CatIcon} from "../../assets/cat-solid.svg";
import {ReactComponent as DogIcon} from "../../assets/dog-solid.svg";

import "./Breeds.scss";


export function Breeds() {
    let { url } = useRouteMatch();

    return (
        <div className="box">
            <div className="heading">View breeds in detail</div>
            <div className="breed">
                <Link to={`${url}/dog`} className="breed-link">
                    <DogIcon className="icon"/>
                    Dog
                </Link>
                <Link to={`${url}/cat`} className="breed-link">
                    <CatIcon className="icon"/>
                    Cat
                </Link>
            </div>
        </div>
    );
}




