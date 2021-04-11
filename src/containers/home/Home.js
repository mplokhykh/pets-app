import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {getCatBreeds} from "../../redux/cat-breeds/actions";
import {getDogBreeds} from "../../redux/dog-breeds/actions";
import './Home.scss'

function Home({ dogBreedsList, catBreedsList, getCatBreeds, getDogBreeds }) {

    useEffect(() => {
        if (!dogBreedsList.length && !catBreedsList.length) {
            getCatBreeds && getCatBreeds();
            getDogBreeds && getDogBreeds();
        }
    }, []);


    return <div className='home'>
        <div className='wrapper-text'>
            <p>You can see different images with pets on this page, to like them and select other images with pets
                <Link to='/dogs' className = 'link'>Dog</Link> vs
                <Link to='/cats' className = 'link'>Cat</Link>
            </p>
        </div>
        <div className='wrapper-text'>
            <p>You can also see different breeds
                <Link to='/breeds/dog' className = 'link'>Dog</Link> vs
                <Link to='/breeds/cat' className = 'link'>Cat</Link>
            </p>

        </div>
    </div>
}

const mapStateToProps = (store) => {
    const { getDogBreeds, getCatBreeds } = store;
    return {
        dogBreedsList: getDogBreeds.dogBreedsList,
        catBreedsList: getCatBreeds.catBreedsList
    };
};

const mapDispatchToProps = {
    getCatBreeds,
    getDogBreeds
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
