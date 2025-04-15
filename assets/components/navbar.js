class NavBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <style>
                /* Navigation Bar */

                .navbar {
                    background: #222831;
                    height: 80px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 1.2rem;
                    position: sticky;
                    top: 0;
                    z-index: 999;
                }
                
                .navbar__container {
                    display: flex;
                    justify-content: space-between;
                    height: 80px;
                    z-index: 1;
                    width: 100%;
                    max-width: 1300px;
                    margin: 0 auto;
                    padding: 0 50px;
                }
                
                #navbar__logo {
                    background-color: #FFB200;
                    background-image: linear-gradient(177deg, #FF9300 0%, #FFB200 20%, #FFFBD4 100%);
                    background-size: 100%;
                    -webkit-background-clip: text;
                    -moz-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    -moz-text-fill-color: transparent;
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    text-decoration: none;
                    font-size: 2rem;
                }
                
                .fa-gem {
                    margin-right: 0.5rem;   
                }
                
                .navbar__menu {
                    display: flex;
                    align-items: center;
                    text-align: center;
                    list-style: none;
                }
                
                .navbar__item {
                    height: 80px;
                }
                
                .navbar__links {
                    color: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-decoration: none;
                    padding: 0 1rem;
                    height: 100%;
                }
                
                .navbar__links:hover {
                    color: #FFB200;
                    transition: all 0.3s ease;
                }
                
                @media screen and (max-width: 960px) {
                    .navbar__container {
                        display: flex;
                        justify-content: space-between;
                        height: 80px;
                        z-index: 1;
                        width: 100%;
                        max-width: 1300px;
                        padding: 0;
                    }
                
                    .navbar__menu {
                        display: grid;
                        grid-template-columns: auto;
                        margin: 0;
                        width: 100%;
                        position: absolute;
                        top: -1000px;
                        opacity: 0;
                        transition: all 0.5s ease;
                        height: 50vh;
                        z-index: -1;
                        background: #131313;
                    }
                
                    .navbar__menu.active {
                        top: 100%;
                        opacity: 1;
                        transition: all 0.5s ease;
                        z-index: 99;
                        height: 50vh;
                        font-size: 1.6rem;
                    }
                
                    #navbar__logo {
                        padding-left: 25px;
                    }
                
                    .navbar__toggle .bar {
                        width: 25px;
                        height: 3px;
                        margin: 5px auto;
                        transition: all 0.3s ease-in-out;
                        background: #fff;
                    }
                
                    .navbar__item {
                        width: 100%;
                    }
                
                    .navbar__links {
                        text-align: center;
                        padding: 2rem;
                        width: 100%;
                        display: table;
                    }
                
                    #mobile-menu {
                        position: absolute;
                        top: 20%;
                        right: 5%;
                        transform: translate(5%, 20%);
                    }
                
                    .navbar__toggle .bar {
                        display: block;
                        cursor: pointer;
                    }
                
                    #mobile-menu.is-active .bar:nth-child(2) {
                        opacity: 0;
                    }
                
                    #mobile-menu.is-active .bar:nth-child(1) {
                        transform: translateY(8px) rotate(45deg);
                    }
                
                    #mobile-menu.is-active .bar:nth-child(3) {
                        transform: translateY(-8px) rotate(-45deg);
                    }
                }
            </style>
            <nav class="navbar">
                <div class="navbar__container">
                    <a href="/" id="navbar__logo"><i class="fa-solid fa-m"></i><i class="fa-solid fa-g"></i></a>
                    <div class="navbar__toggle" id="mobile-menu">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </div>
                    <ul class="navbar__menu">
                        <li class="navbar__item">
                            <a href="/index.html" class="navbar__links">Home</a>
                        </li>
                        <li class="navbar__item">
                            <a href="/about.html" class="navbar__links">About</a>
                        </li>
                        <li class="navbar__item">
                            <a href="/" class="navbar__links">Experience</a>
                        </li>
                        <li class="navbar__item">
                            <a href="/" class="navbar__links">Projects</a>
                        </li>
                    </ul>
                </div>
            </nav>
        `;
    }
}

customElements.define('navbar-component', NavBar);