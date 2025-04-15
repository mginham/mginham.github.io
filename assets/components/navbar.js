class NavBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
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