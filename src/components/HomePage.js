import React, { useState } from "react"
import TutorialItem from './TutorialItem';
import ReactPlayer from 'react-player'

import Instruction from './Instruction';
import TitleSection from "./TitleSection";
import VideoSection from "./VideoSection";
import DemoSection from "./DemoSection"
import FooterSection from "./FooterSection";

function HomePage({ tutorials, setTutorials }) {



    return (
        <div class="container">

            <TitleSection />

            <Instruction />

            <VideoSection tutorials={tutorials} />

            {/* <DemoSection tutorials={tutorials} setTutorials={setTutorials} /> */}

            <FooterSection />
        </div>
    );
}

export default HomePage;
