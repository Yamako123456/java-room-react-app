import React, { useState } from "react"
import TutorialItem from './TutorialItem';
import ReactPlayer from 'react-player'

import Instruction from './Instruction';
import TitleSection from "./TitleSection";
import FooterSection from "./FooterSection";
import VideoSection from "./VideoSection";



function HomePage() {

    //const tutorials = [
    const [tutorials, setTutorials] = useState([
        { id: '2', name: 'predicate', url: 'https://d3h1vu2agxyise.cloudfront.net/Predicate28.mp4', thumbnail: '/img/parchment2.jpg', title: 'Predicate', comment: '' },
        { id: '3', name: 'try-catch-finally', url: 'https://d3h1vu2agxyise.cloudfront.net/TryCatchFinally37_1.mp4', thumbnail: '/img/buonconvento.jpg', title: 'try-catch', comment: '' },
        { id: '4', name: 'polymorphism', url: 'https://d3h1vu2agxyise.cloudfront.net/Polymorphism36.mp4', thumbnail: '/img/parchment4.jpg', title: 'Polymorphism', comment: '' },
        { id: '5', name: 'override', url: 'https://d3h1vu2agxyise.cloudfront.net/Override21.mp4', thumbnail: '/img/ruins-in-the-forest-2021-08-26-17-52-15-utc.jpg', title: 'Inheritance', comment: '' },
        { id: '6', name: 'lambda', url: 'https://d3h1vu2agxyise.cloudfront.net/Lambda27.mp4', thumbnail: '/img/majestic-medieval-tower-of-the-ribeaupierre-castle-2021-09-04-11-59-49-utc.jpg', title: 'Lambda', comment: '' },
        { id: '7', name: 'unary-operator', url: 'https://d3h1vu2agxyise.cloudfront.net/UnaryOperators.mp4', thumbnail: '/img/eilean-donan-castle-scotland-2023-09-19-04-16-57-utc.jpg', title: 'Unary-Operator', comment: '' },
        { id: '10', name: 'super', url: 'https://d3h1vu2agxyise.cloudfront.net/Super22.mp4', thumbnail: '/img/loarre-castle-in-spain-2021-09-02-04-03-29-utc.jpg', title: 'Super', comment: '' },
        { id: '11', name: 'instanceof', url: 'https://d3h1vu2agxyise.cloudfront.net/instanceof31.mp4', thumbnail: '/img/parchment1.jpg', title: 'instanceof', comment: '' },
        { id: '12', name: 'wrapper-primitive', url: 'https://d3h1vu2agxyise.cloudfront.net/WrapperPrimitive.mp4', thumbnail: '/img/parchment3.jpg', title: 'Wrapper', comment: '' },
        { id: '14', name: 'loop', url: 'https://d3h1vu2agxyise.cloudfront.net/Loops35.mp4', thumbnail: '/img/old-european-street.jpg', title: 'Loop', comment: '' },
        { id: '15', name: 'ArrayToString', url: 'https://d3h1vu2agxyise.cloudfront.net/ArrayToString.mp4', thumbnail: '/img/witch-accessories-2021-08-26-15-34-56-utc.jpg', title: 'Array-To-String', comment: '' },
        { id: '16', name: 'switch', url: 'https://d3h1vu2agxyise.cloudfront.net/Switch.mp4', thumbnail: '/img/witchcraft.jpg', title: 'Switch', comment: '' },
    ])


    return (
        <div class="container">

            <TitleSection />

            <Instruction />

            <VideoSection tutorials={tutorials} />

            <FooterSection tutorials={tutorials} setTutorials={setTutorials} />

        </div>
    );
}

export default HomePage;
