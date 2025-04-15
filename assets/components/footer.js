class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <style>
                /* Footer Section */

                .footer__container {
                    background-color: #222831;
                    padding: 5rem 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                
                hr {
                    color: #fff;
                    width: 80%;
                    display: block;
                    margin-top: 0.5em;
                    margin-bottom: 0.5em;
                    margin-left: auto;
                    margin-right: auto;
                    border-style: inset;
                    border-width: 1px;
                }
                
                .footer__links {
                    width: 100%;
                    max-width: 1000px;
                    display: flex;
                    justify-content: center;
                }
                
                .footer__link--wrapper {
                    display: flex;
                }
                
                .footer__link--items {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    margin: 16px;
                    text-align: left;
                    width: 160px;
                    box-sizing: border-box;
                }
                
                .footer__link--items h2 {
                    margin-bottom: 16px;
                }
                
                .footer__link--items > h2 {
                    color: #fff;
                }
                
                .footer__link--items a {
                    color: #fff;
                    text-decoration: none;
                    margin-bottom: 0.5rem;
                }
                
                .footer__link--items a:hover {
                    color: #e9e9e9;
                    transition: 0.3s ease-out;
                }
                
                .social__icon--link {
                    color: #fff;
                    font-size: 24px;
                }
                
                .social__media {
                    max-width: 1000px;
                    width: 100%;
                }
                
                .social__media--wrapper {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 90%;
                    max-width: 1000px;
                    margin: 40px auto 0 auto;
                }
                
                .social__icons {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 240px;
                }
                
                .website__rights {
                    color: #fff;
                    font-size: 12px;
                    margin-top: 2rem;
                }
                
                
                
                /* Footer Section: Mobile Responsiveness */
                
                @media screen and (max-width: 820px) {
                    .footer__links {
                        padding-top: 2rem;
                    }
                
                    .footer__link--wrapper {
                        flex-direction: column;
                    }
                
                    .social__media--wrapper {
                        flex-direction: column;
                    }
                }
                
                @media screen and (max-width: 480px) {
                    .footer__link--items {
                        margin: 0;
                        padding: 10px;
                        width: 100%;
                    }
                }
            </style>
            <div class="footer__container">
                <hr>
                <div class="social__media">
                    <div class="social__media--wrapper">
                        <div class="social__icons">
                            <a href="mailto: meganginham@gmail.com" class="social__icon--link" target="_blank">
                                <i class="fa-regular fa-envelope"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/megan-ginham/" class="social__icon--link" target="_blank">
                                <i class="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/mginham" class="social__icon--link" target="_blank">
                                <i class="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <p class="website__rights">© Copyright 2025 . Site designed and developed by Megan Ginham</p>
            </div>
        `;
    }
}

customElements.define('footer-component', Footer);