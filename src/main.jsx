import React from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowRight, Hammer, Ruler, ShieldCheck, Sparkles, Mail, Phone, MapPin, Menu, X } from 'lucide-react'
import logo from './assets/logo-lilocreation.png'
import './styles.css'

const projects = [
  {
    label: 'Table de caractère',
    title: 'Plateaux bois massif & piètements acier',
    image: 'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&w=1200&q=85'
  },
  {
    label: 'Agencement intérieur',
    title: 'Bibliothèques, étagères, meubles TV',
    image: 'https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=1200&q=85'
  },
  {
    label: 'Style atelier',
    title: 'Mobilier brut, élégant, durable',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85'
  }
]

const services = [
  {
    icon: <Ruler size={22} />,
    title: 'Sur mesure',
    text: 'Dimensions, usage, contraintes et style sont étudiés pour créer une pièce vraiment adaptée.'
  },
  {
    icon: <Hammer size={22} />,
    title: 'Fabrication artisanale',
    text: 'Travail du bois et de l’acier avec une attention forte portée aux finitions et à la durabilité.'
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Pièces durables',
    text: 'Des matériaux robustes, des lignes intemporelles et un mobilier pensé pour traverser les années.'
  }
]

const steps = [
  'Échange sur votre besoin, vos inspirations et vos dimensions.',
  'Proposition d’une direction esthétique et choix des matériaux.',
  'Fabrication de la pièce dans un esprit bois, acier et authenticité.',
  'Livraison, installation ou remise de votre création finale.'
]

function App() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="app">
      <header className="header">
        <a className="brand" href="#top" aria-label="Accueil L'ILOCréation">
          <span className="brandLogo"><img src={logo} alt="Logo L'ILOCréation" /></span>
          <span>
            <strong>L'ILOCréation</strong>
            <small>Mobilier bois & acier</small>
          </span>
        </a>

        <nav className="desktopNav">
          <a href="#creations">Créations</a>
          <a href="#savoir-faire">Savoir-faire</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="headerCta" href="#contact">Demander un devis</a>

        <button className="menuButton" onClick={() => setOpen(!open)} aria-label="Ouvrir le menu">
          {open ? <X /> : <Menu />}
        </button>
      </header>

      {open && (
        <div className="mobileNav">
          <a onClick={() => setOpen(false)} href="#creations">Créations</a>
          <a onClick={() => setOpen(false)} href="#savoir-faire">Savoir-faire</a>
          <a onClick={() => setOpen(false)} href="#process">Process</a>
          <a onClick={() => setOpen(false)} href="#contact">Contact</a>
        </div>
      )}

      <main id="top">
        <section className="hero">
          <div className="heroText">
            <div className="badge"><Sparkles size={16} /> Création artisanale — Bois massif & acier</div>
            <h1>Du mobilier unique, brut et élégant, conçu pour votre intérieur.</h1>
            <p>
              L'ILOCréation conçoit des meubles sur mesure qui associent la chaleur du bois,
              la précision du métal et une esthétique contemporaine inspirée de l’atelier.
            </p>
            <div className="heroActions">
              <a href="#contact" className="primaryBtn">Parler de mon projet <ArrowRight size={18} /></a>
              <a href="#creations" className="secondaryBtn">Découvrir le style</a>
            </div>
            <div className="heroMetrics">
              <span><strong>01</strong> Projet unique</span>
              <span><strong>02</strong> Bois + acier</span>
              <span><strong>03</strong> Sur mesure</span>
            </div>
          </div>

          <div className="heroShowcase">
            <div className="grainOverlay" />
            <img className="heroImage" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85" alt="Intérieur design avec mobilier bois" />
            <div className="signatureCard">
              <img src={logo} alt="Logo L'ILOCréation" />
              <div>
                <strong>Créations sur mesure</strong>
                <span>Tables · rangements · agencements</span>
              </div>
            </div>
            <div className="materialCard">
              <span>Matériaux</span>
              <strong>Bois noble, acier travaillé, lignes sobres.</strong>
            </div>
          </div>
        </section>

        <section id="creations" className="section creationsSection">
          <div className="sectionIntro">
            <span className="kicker">Réalisations</span>
            <h2>Un design chaleureux, avec une vraie présence visuelle.</h2>
            <p>
              Le site doit transmettre immédiatement le côté artisanal, premium et solide :
              matières naturelles, contrastes forts, grands visuels et beaucoup d’espace.
            </p>
          </div>

          <div className="projectsGrid">
            {projects.map((project, index) => (
              <article className="projectCard" key={project.title}>
                <img src={project.image} alt={project.title} />
                <div className="projectContent">
                  <span>{project.label}</span>
                  <h3>{project.title}</h3>
                  <small>0{index + 1}</small>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="savoir-faire" className="expertise">
          <div className="expertiseVisual">
            <img src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=85" alt="Atelier bois" />
            <div className="expertiseLabel">Atelier · bois · acier</div>
          </div>
          <div className="expertiseContent">
            <span className="kicker">Savoir-faire</span>
            <h2>Une pièce pensée comme un élément fort de votre décoration.</h2>
            <p>
              L’approche visuelle repose sur des tons profonds, du beige bois, des textures,
              des arrondis premium et des blocs sobres. Le rendu donne plus de valeur à l’entreprise
              qu’un simple site vitrine classique.
            </p>

            <div className="servicesList">
              {services.map(service => (
                <article className="serviceItem" key={service.title}>
                  <div className="serviceIcon">{service.icon}</div>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="process section">
          <div className="sectionIntro processIntro">
            <span className="kicker">Méthode</span>
            <h2>Un parcours simple, rassurant et professionnel.</h2>
          </div>

          <div className="stepsGrid">
            {steps.map((step, index) => (
              <article className="stepCard" key={step}>
                <span>0{index + 1}</span>
                <p>{step}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contactSection">
          <div className="contactPanel">
            <div>
              <span className="kicker">Contact</span>
              <h2>Vous avez une idée de meuble ?</h2>
              <p>
                Décrivez votre projet : type de meuble, dimensions, photos d’inspiration,
                style souhaité et contraintes de la pièce.
              </p>
              <div className="contactInfos">
                <a href="mailto:contact@l-ilocreation.fr"><Mail size={18} /> contact@l-ilocreation.fr</a>
                <a href="tel:+33600000000"><Phone size={18} /> 06 00 00 00 00</a>
                <span><MapPin size={18} /> Seine-Maritime & alentours</span>
              </div>
            </div>

            <form className="form" onSubmit={(e) => e.preventDefault()}>
              <div className="formRow">
                <label>Nom<input placeholder="Votre nom" /></label>
                <label>Email<input type="email" placeholder="votre@email.fr" /></label>
              </div>
              <label>Projet<select defaultValue=""><option value="" disabled>Choisir un type de projet</option><option>Table sur mesure</option><option>Meuble TV</option><option>Étagère</option><option>Agencement</option><option>Autre</option></select></label>
              <label>Message<textarea placeholder="Expliquez votre besoin, vos dimensions, votre style..." /></label>
              <button>Envoyer ma demande <ArrowRight size={18} /></button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
