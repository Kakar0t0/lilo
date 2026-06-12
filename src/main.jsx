import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowRight,
  Check,
  ChevronRight,
  Hammer,
  Mail,
  MapPin,
  Menu,
  MoveUpRight,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react'
import logo from './assets/logo-lilocreation.png'
import heroBackground from './assets/images/back.jpg'
import billardImage from './assets/images/Billard.jpg'
import tableBasseImage from './assets/images/Table basse.JPG'
import meubleBasImage from './assets/images/mb2.jpg'
import savoirFaireImage from './assets/images/IMG_6072.jpeg'
import './styles.css'

const projects = [
  {
    label: 'Table signature',
    title: 'Chêne massif, piètement acier et lignes tendues',
    meta: 'Salle à manger · Bois huilé · Acier noir',
    image: billardImage,
  },
  {
    label: 'Agencement intérieur',
    title: 'Bibliothèque murale dessinée pour la pièce',
    meta: 'Rangement · Sur mesure · Finition mate',
    image: tableBasseImage,
  },
  {
    label: 'Mobilier atelier',
    title: 'Meuble TV bois et métal, sobre et durable',
    meta: 'Salon · Structure acier · Bois naturel',
    image: meubleBasImage,
  },
]

const services = [
  {
    icon: <Ruler size={22} />,
    title: 'Dessin sur mesure',
    text: 'Chaque projet part de vos dimensions, de vos usages et de l’ambiance déjà présente dans votre intérieur.',
  },
  {
    icon: <Hammer size={22} />,
    title: 'Fabrication atelier',
    text: 'Bois sélectionné, métal préparé, assemblages propres et finitions maîtrisées pour un rendu durable.',
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Pose et suivi',
    text: 'Un interlocuteur unique du premier échange jusqu’à la livraison ou l’installation de la création finale.',
  },
]

const steps = [
  {
    title: 'Écouter',
    text: 'Usage, dimensions, style, photos d’inspiration et contraintes de la pièce.',
  },
  {
    title: 'Dessiner',
    text: 'Choix des matières, proportions, finitions et direction esthétique.',
  },
  {
    title: 'Fabriquer',
    text: 'Travail du bois et de l’acier dans une logique robuste, précise et soignée.',
  },
  {
    title: 'Installer',
    text: 'Livraison, réglages, pose et derniers détails pour une pièce prête à vivre.',
  },
]

const navItems = [
  ['Créations', '#creations'],
  ['Savoir-faire', '#savoir-faire'],
  ['Process', '#process'],
  ['Contact', '#contact'],
]

function useReveal() {
  React.useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.16 },
    )

    elements.forEach((element) => observer.observe(element))
    if (window.requestAnimationFrame) {
      window.requestAnimationFrame(() => {
        elements.forEach((element) => {
          const rect = element.getBoundingClientRect()
          if (rect.top < window.innerHeight * 0.92) {
            element.classList.add('is-visible')
          }
        })
      })
    }

    return () => observer.disconnect()
  }, [])
}

function App() {
  const [open, setOpen] = React.useState(false)
  useReveal()

  return (
    <div className="app">
      <header className="header">
        <a className="brand" href="#top" aria-label="Accueil L'ILOCréation">
          <span className="brandLogo">
            <img src={logo} alt="Logo L'ILOCréation" />
          </span>
          <span className="brandCopy">
            <strong>L'ILOCréation</strong>
            <small>Mobilier bois & acier</small>
          </span>
        </a>

        <nav className="desktopNav" aria-label="Navigation principale">
          {navItems.map(([label, href]) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
        </nav>

        <a className="headerCta" href="#contact">
          Devis
          <ChevronRight size={17} />
        </a>

        <button className="menuButton" onClick={() => setOpen(!open)} aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}>
          {open ? <X /> : <Menu />}
        </button>
      </header>

      {open && (
        <div className="mobileNav">
          {navItems.map(([label, href]) => (
            <a onClick={() => setOpen(false)} href={href} key={href}>
              {label}
            </a>
          ))}
        </div>
      )}

      <main id="top">
        <section className="hero">
          <img
            className="heroImage"
            src={heroBackground}
            alt="Intérieur contemporain avec table en bois"
          />
          <div className="heroScrim" />

          <div className="heroText" data-reveal>
            <h1>Création mobilier bois et acier.</h1>
            <p>
              L'ILOCréation conçoit des tables, rangements et agencements qui associent chaleur du bois,
              précision de l’acier.
            </p>
            <div className="heroActions">
              <a href="#contact" className="primaryBtn">
                Parler de mon projet
                <ArrowRight size={18} />
              </a>
              <a href="#creations" className="secondaryBtn">
                Voir les créations
                <MoveUpRight size={17} />
              </a>
            </div>
            <div className="heroStats" aria-label="Points forts">
              <span>
                <strong>100%</strong>
                sur mesure
              </span>
              <span>
                <strong>Bois</strong>
                sélectionné
              </span>
              <span>
                <strong>Acier</strong>
                façonné
              </span>
            </div>
          </div>

          <div className="heroAside" data-reveal style={{ '--delay': '120ms' }}>
            <div className="floatingMark">
              <img src={logo} alt="" />
              <span>Pièces uniques</span>
            </div>
            <div className="heroMaterial">
              <span>Signature matière</span>
              <strong>Bois massif, acier travaillé, lignes sobres.</strong>
            </div>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div>
            <span>Tables uniques</span>
            <span>Agencements</span>
            <span>Rangements</span>
            <span>Bois massif</span>
            <span>Acier</span>
            <span>Finitions soignées</span>
          </div>
          <div>
            <span>Tables uniques</span>
            <span>Agencements</span>
            <span>Rangements</span>
            <span>Bois massif</span>
            <span>Acier</span>
            <span>Finitions soignées</span>
          </div>
        </div>

        <section id="creations" className="section creationsSection">
          <div className="sectionIntro" data-reveal>
            <span className="kicker">Réalisations</span>
            <h2>Des pièces qui structurent l’espace sans l’alourdir.</h2>
            <p>
              Lignes nettes, matières visibles et détails justes : chaque création cherche l’équilibre entre
              caractère artisanal et élégance contemporaine.
            </p>
          </div>

          <div className="projectsGrid">
            {projects.map((project, index) => (
              <article className="projectCard" key={project.title} data-reveal style={{ '--delay': `${index * 90}ms` }}>
                <img src={project.image} alt={project.title} />
                <div className="projectContent">
                  <span>{project.label}</span>
                  <h3>{project.title}</h3>
                  <p>{project.meta}</p>
                  <small>0{index + 1}</small>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="savoir-faire" className="expertise">
          <div className="expertiseVisual" data-reveal>
            <img
              src={savoirFaireImage}
              alt="Atelier de fabrication bois"
            />
            <div className="expertiseBadge">
              <Check size={17} />
              Atelier · bois · acier
            </div>
          </div>
          <div className="expertiseContent" data-reveal>
            <span className="kicker">Savoir-faire</span>
            <h2>Un meuble pensé pour votre lieu, pas choisi dans un catalogue.</h2>
            <p>
              La fabrication s’appuie sur des proportions précises, des matériaux assumés et une finition
              adaptée à votre usage quotidien.
            </p>

            <div className="servicesList">
              {services.map((service, index) => (
                <article className="serviceItem" key={service.title} data-reveal style={{ '--delay': `${index * 80}ms` }}>
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
          <div className="sectionIntro processIntro" data-reveal>
            <span className="kicker">Méthode</span>
            <h2>Un parcours clair, du croquis à la pose.</h2>
          </div>

          <div className="stepsGrid">
            {steps.map((step, index) => (
              <article className="stepCard" key={step.title} data-reveal style={{ '--delay': `${index * 80}ms` }}>
                <span>0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contactSection">
          <div className="contactPanel" data-reveal>
            <div>
              <span className="kicker">Contact</span>
              <h2>Une idée de meuble ou d’agencement ?</h2>
              <p>
                Envoyez vos dimensions, photos d’inspiration et contraintes. Vous recevrez une première direction
                claire pour avancer.
              </p>
              <div className="contactInfos">
                <a href="mailto:contact@l-ilocreation.fr">
                  <Mail size={18} />
                  contact@l-ilocreation.fr
                </a>
                <a href="tel:+33600000000">
                  <Phone size={18} />
                  06 00 00 00 00
                </a>
                <span>
                  <MapPin size={18} />
                  Royan & alentours
                </span>
              </div>
            </div>

            <form className="form" onSubmit={(event) => event.preventDefault()}>
              <div className="formRow">
                <label>
                  Nom
                  <input placeholder="Votre nom" />
                </label>
                <label>
                  Email
                  <input type="email" placeholder="votre@email.fr" />
                </label>
              </div>
              <label>
                Projet
                <select defaultValue="">
                  <option value="" disabled>
                    Choisir un type de projet
                  </option>
                  <option>Table sur mesure</option>
                  <option>Meuble TV</option>
                  <option>Étagère</option>
                  <option>Agencement</option>
                  <option>Autre</option>
                </select>
              </label>
              <label>
                Message
                <textarea placeholder="Dimensions, style, photos d’inspiration, contraintes..." />
              </label>
              <button>
                Envoyer ma demande
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
