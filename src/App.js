import React, { useState } from "react"
import TutorialItem from './components/TutorialItem';
import ReactPlayer from 'react-player'
import Instruction from './components/Instruction';
import TitleSection from "./components/TitleSection";
import FooterSection from "./components/FooterSection";

function App() {

  const tutorials = [
    // too old video{
    //  id: 'vid-1', name: 'multiple - inheritance', url: 'https://d3h1vu2agxyise.cloudfront.net/MultiInheritance.mp4', thumbnail: 'img/parchment1.jpg', title: 'Multiple-Inheritance', comment: ''
    // },
    { id: 'vid-2', name: 'predicate', url: 'https://d3h1vu2agxyise.cloudfront.net/Predicate28.mp4', thumbnail: '/img/parchment2.jpg', title: 'Predicate', comment: '' },
    { id: 'vid-3', name: 'try-catch-finally', url: 'https://d3h1vu2agxyise.cloudfront.net/TryCatchFinally37_1.mp4', thumbnail: '/img/buonconvento.jpg', title: 'try-catch', comment: '' },
    { id: 'vid-4', name: 'polymorphism', url: 'https://d3h1vu2agxyise.cloudfront.net/Polymorphism36.mp4', thumbnail: '/img/parchment4.jpg', title: 'Polymorphism', comment: '' },
    { id: 'vid-5', name: 'override', url: 'https://d3h1vu2agxyise.cloudfront.net/Override21.mp4', thumbnail: '/img/ruins-in-the-forest-2021-08-26-17-52-15-utc.jpg', title: 'Inheritance', comment: '' },
    { id: 'vid-6', name: 'lambda', url: 'https://d3h1vu2agxyise.cloudfront.net/Lambda27.mp4', thumbnail: '/img/majestic-medieval-tower-of-the-ribeaupierre-castle-2021-09-04-11-59-49-utc.jpg', title: 'Lambda', comment: '' },
    { id: 'vid-7', name: 'unary-operator', url: 'https://d3h1vu2agxyise.cloudfront.net/UnaryOperators.mp4', thumbnail: '/img/eilean-donan-castle-scotland-2023-09-19-04-16-57-utc.jpg', title: 'Unary-Operator', comment: '' },
    // bad link{ id: 'vid-8', name: 'string-pool', url: 'https://d3h1vu2agxyise.cloudfront.net/StringPool.mp4', thumbnail: '/img/loarre-castle-in-spain-2021-09-02-04-03-29-utc.jpg', title: 'String-pool', comment: '' },
    // t{ id: 'vid-9', name: 'multiple-interface', url: 'https://d3h1vu2agxyise.cloudfront.net/MultipleInterface30.mp4', thumbnail: '/img/parchment4.jpg', title: 'Interface', comment: '' },
    { id: 'vid-10', name: 'super', url: 'https://d3h1vu2agxyise.cloudfront.net/Super22.mp4', thumbnail: '/img/loarre-castle-in-spain-2021-09-02-04-03-29-utc.jpg', title: 'Super', comment: '' },
    { id: 'vid-11', name: 'instanceof', url: 'https://d3h1vu2agxyise.cloudfront.net/instanceof31.mp4', thumbnail: '/img/parchment1.jpg', title: 'instanceof', comment: '' },
    { id: 'vid-12', name: 'wrapper-primitive', url: 'https://d3h1vu2agxyise.cloudfront.net/WrapperPrimitive.mp4', thumbnail: '/img/parchment3.jpg', title: 'Wrapper', comment: '' },
    // { id: 'vid-13', name: 'stringbuilder', url: 'StringBuilder_equals_1.mp4', thumbnail: '/img/buonconvento.jpg', title: 'StringBuilder', comment: '' },
    { id: 'vid-14', name: 'loop', url: 'https://d3h1vu2agxyise.cloudfront.net/Loops35.mp4', thumbnail: '/img/old-european-street.jpg', title: 'Loop', comment: '' },
    { id: 'vid-15', name: 'ArrayToString', url: 'https://d3h1vu2agxyise.cloudfront.net/ArrayToString.mp4', thumbnail: '/img/witch-accessories-2021-08-26-15-34-56-utc.jpg', title: 'Array-To-String', comment: '' },
    { id: 'vid-16', name: 'switch', url: 'https://d3h1vu2agxyise.cloudfront.net/Switch.mp4', thumbnail: '/img/witchcraft.jpg', title: 'Switch', comment: '' },
    // {id: '17', name: '', url: 'https://d3h1vu2agxyise.cloudfront.net/', thumbnail: '', title: '', comment: ''},
  ]
  const INITIAL_URL = 'https://d3h1vu2agxyise.cloudfront.net/Switch.mp4'
  const TEST_URL = 'https://d3h1vu2agxyise.cloudfront.net/UnaryOperators.mp4'
  const INITIAL_NAME = 'Array To String'


  const [name, setName] = useState(() => INITIAL_NAME)
  const [aUrl, setUrl] = useState(() => INITIAL_URL)

  function resetPlayer() {
    const name = ''
    const video = document.getElementById('player');
    const source = document.getElementById('video-source');
    video.pause()
    source.setAttribute('src', aUrl)
    video.load();
    video.play();
  }

  function handleClick(vidUrl) {

    setUrl(vidUrl)
    resetPlayer()
  }

  return (
    <div class="container">

      <TitleSection />

      <Instruction />

      <section class="row video-container" >
      </section>
      <section class="row video-container" >
        <video class="col-12" id="player" autoplay controls >
          <source id='video-source' src={aUrl} type="video/mp4" />
        </video>
      </section>
      <div class="row tm-mb-90 tm-gallery  ml-2 mr-2">
        {
          tutorials.map((a) => (<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
            <figure class="effect-ming tiles">
              <img src={process.env.PUBLIC_URL + a.thumbnail} alt={a.title + ' image'} />
              <figcaption class="d-flex align-items-center justify-content-center">
                <h2>{a.title}</h2>
                <a href="#player" onClick={() => handleClick(a.url)} />
              </figcaption>
            </figure>
          </div>))
        }
      </div>

      <div class="row tm-mb-90">
        <div class="col-12 d-flex justify-content-between align-items-center tm-paging-col">
        </div>
      </div>

      <FooterSection />


      {/* 
      */}
    </div>
  );
}

export default App;
