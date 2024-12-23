import '../style.css'
import '../nav.css'
import { initNavigation } from '../nav.js'

document.querySelector('#app').innerHTML = `
    <header>
        <nav class="nav_bug">
            <a href="/" class="logo">
                <img class="image_logo" src="/images/logo_n.png" alt="La Navette" height="40">
            </a>

            <div class="menu_burger">
                <input id="burger" type="checkbox" />
                <label for="burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <nav> 
                    <ul>
                        <li class="lititre">Le projet</li>  
                        <li><a href="#" class="lisoustitre">L'équipe</a></li>
                        <li><a href="#" class="lisoustitre">Missions</a></li>
                        <li><a href="#" class="lisoustitre">Lieu</a></li>
                        <li class="lititre">En cours</h1>
                        <li><a href="#" class="lisoustitre">Intentions</a></li>
                        <li><a href="#" class="lisoustitre">Communication zéro</a></li>
                    </ul>  
                </nav>
            </div>
            
            <div id="primary_nav_wrap">
                <ul>
                    <li><a href="#" class="liste">Le projet</a>
                        <ul>
                            <li><a href="#" class="liste">L'équipe</a></li>
                            <li><a href="#" class="liste">Missions</a></li>
                            <li><a href="#" class="liste">Lieu</a></li>
                        </ul>
                    </li>
                    <li><a href="#" class="liste">En cours</a>
                        <ul>
                            <li><a href="#" class="liste">Intentions</a></li>
                            <li><a href="#" class="liste">Communication zéro</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </header>

    <main>
        <section class="hero hero-small">
            <div class="hero-content">
                <h1 class="hero-title">En cours</h1>
            </div>
        </section>

        <section id="intentions" class="intentions">
            <h2>Intentions</h2>
            <div class="content-grid">
                <div class="text-content">
                    <p class="lead-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo vel metus 
                        consectetur tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et 
                        ultrices posuere cubilia curae.
                    </p>
                    <p>
                        Nullam auctor, nunc id aliquam tincidunt, nisl nunc tincidunt nunc, vitae 
                        aliquam nunc nunc vitae nunc. Sed vitae justo vel metus consectetur tincidunt.
                    </p>
                </div>
                <div class="image-content">
                    <img src="/images/intentions.jpg" alt="Intentions" class="section-image">
                </div>
            </div>
        </section>

        <section id="communication" class="communication">
            <h2>Communication zéro</h2>
            <h3 class="subtitle">Scénarios</h3>

            <div class="scenario-grid">
                <div class="scenario-item">
                    <div class="scenario-image">
                        <img src="/images/voir-boire.jpg" alt="Voir/Boire/Manger/Chiner">
                    </div>
                    <div class="scenario-content">
                        <h4>Voir/Boire/Manger/Chiner</h4>
                        <p>Description des activités autour de la bière, des repas et du vintage...</p>
                        <div class="scenario-icons">
                            <img src="/images/beer-icon.png" alt="Bière">
                            <img src="/images/cutlery-icon.png" alt="Couverts">
                            <img src="/images/jacket-icon.png" alt="Veste jeans">
                        </div>
                    </div>
                </div>

                <div class="scenario-item">
                    <div class="scenario-image">
                        <img src="/images/cineclub.jpg" alt="Cinéclub">
                    </div>
                    <div class="scenario-content">
                        <h4>Cinéclub</h4>
                        <p>Description des projections et activités cinématographiques...</p>
                        <div class="scenario-icons">
                            <img src="/images/camera-icon.png" alt="Caméscope">
                            <img src="/images/chair-icon.png" alt="Transat">
                            <img src="/images/clap-icon.png" alt="Clap">
                        </div>
                    </div>
                </div>

                <div class="scenario-item">
                    <div class="scenario-image">
                        <img src="/images/podcasts.jpg" alt="Podcasts">
                    </div>
                    <div class="scenario-content">
                        <h4>Podcasts</h4>
                        <p>Description des podcasts et contenus audio...</p>
                        <div class="scenario-icons">
                            <img src="/images/mic-icon.png" alt="Micro">
                            <img src="/images/headphones-icon.png" alt="Casque">
                        </div>
                    </div>
                </div>

                <div class="scenario-item">
                    <div class="scenario-image">
                        <img src="/images/gazette.jpg" alt="La Gazette">
                    </div>
                    <div class="scenario-content">
                        <h4>La Gazette</h4>
                        <p>Description du journal et des publications...</p>
                        <div class="scenario-icons">
                            <img src="/images/newspaper-icon.png" alt="Journal">
                            <img src="/images/pencil-icon.png" alt="Crayon">
                        </div>
                    </div>
                </div>

                <div class="scenario-item">
                    <div class="scenario-image">
                        <img src="/images/cyprien.jpg" alt="Cyprien Grégoire">
                    </div>
                    <div class="scenario-content">
                        <h4>Résidence d'artistes & artisans - Cyprien Grégoire</h4>
                        <p>Description du travail de Cyprien...</p>
                    </div>
                </div>

                <div class="scenario-item">
                    <div class="scenario-image">
                        <img src="/images/flak.jpg" alt="Flak">
                    </div>
                    <div class="scenario-content">
                        <h4>Résidence d'artistes & artisans - Flak</h4>
                        <p>Description du travail de Flak...</p>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h4>La Navette</h4>
                <p>Fait avec amour par la Nav'team <3</p>
            </div>
            <div class="footer-section">
                <h4>Contact</h4>
            </div>
            <div class="footer-section">
                <h4>Suivez-nous</h4>
                <div class="social-links">
                    <a href="#" class="social-icon">FB</a>
                    <a href="#" class="social-icon">IG</a>
                    <a href="#" class="social-icon">TW</a>
                </div>
            </div>
        </div>
    </footer>
`

document.addEventListener('DOMContentLoaded', initNavigation)