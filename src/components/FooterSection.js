import { Link } from 'react-router-dom';

import AdminPage from './AdminPage';

function FooterSection() {
    // Don't ever forget curly brackets when you pass multiple props. 
    // If you forget, no matter how many parameters you have, it'll put everything in to the first parameter just like props


    const handleNavigateToAdmin = () => {
        window.location.href = '/admin';
    }

    return (
        <div className='card'>
            <footer class=" footer-container d-flex  pb-3">
                <div class="container-fluid ">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12 px-5 mb-5">
                            <h3 class="mb-4">Links</h3>
                            <ul class="footer-links pl-0">
                                <li><a href="https://oarfish-sphere-sxsk.squarespace.com/" target="_blank">Company</a></li>
                                <li>
                                    <button onClick={handleNavigateToAdmin}>Go to Admin</button>
                                </li>
                            </ul>
                        </div>

                        <div class="col-lg-3 col-md-6 col-sm-6 col-12 px-5 mb-5">
                            <ul class="social-links d-flex justify-content-end pl-0 mb-5">
                                <li class="mb-2"><a href="https://www.linkedin.com/in/miyoko-yamakawa/" target="_blank">
                                    <i class="fab fa-linkedin" aria-hidden="true"></i></a></li>
                                <li class="mb-2"><a href="https://github.com/Yamako123456" target="_blank">
                                    <i class="fab fa-github" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8 col-md-7 col-12 px-5 mb-3">
                            <hr></hr>
                            <p>Copyright 2023 Miyoko Yamakawa All rights reserved.</p>
                            <p><a href="https://templatemo.com/tm-556-catalog-z" target="_blank">
                                Reference: Tiles hover animation css code</a></p>
                        </div>
                    </div>
                </div>
                <hr/>
            </footer>

        </div>
    )
}

export default FooterSection;