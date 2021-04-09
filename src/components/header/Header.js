import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Logo from "../../images/logo.png";
import FavoriteIcon from "@material-ui/icons/Favorite";
import {titleHeader} from "../../utilities/constatns";
import "./Header.scss";

function Header({ likedPets }) {

    return (
        <div className="header">
            <Link to="/" ><img src={Logo} alt="Logo" className="header-logo"/></Link>

            <div className="header-links-wrappers">
                {titleHeader.map((item) => (
                    <Link
                        key={item.title}
                        to={item.path}
                        className="header-links-wrappers-link">
                        {item.title}
                    </Link>
                ))}
            </div>
            <div className="header-liked">
                <div>
                    <FavoriteIcon fontSize="large"/>
                </div>
                <div className="header-liked-count">{likedPets.length}</div>
            </div>
        </div>
    );
}

const mapStateToProps = (store) => {
    const { petsList } = store;
    return {
        likedPets: petsList.likedPets,
    };
};

export default connect(mapStateToProps)(Header);
