const DATA = {
  name: "Ayoub REGGAD",
  initials: "AR",
  role: "Étudiant IPSSI — Développement & Infrastructure",
  headline: "Je développe des applications web et je construis des environnements techniques fiables, du code jusqu'à l'infrastructure.",
  bio: "Je recherche un stage dès mai 2026, puis une alternance à partir d'octobre 2026. Je suis ouvert à des missions concrètes en développement, infrastructure, cloud ou sécurité, avec une préférence pour les sujets utiles, documentés et techniquement propres.",
  location: "Nice, Alpes-Maritimes",
  availability: "Stage dès mai 2026 (4 mois min), alternance dès octobre 2026",
  email: "a.reggad@ecole-ipssi.net",
  cvUrl: "assets/REGGAD-Ayoub-cv.pdf",

  qualities: ["Adaptabilité", "Rigueur", "Esprit d'équipe", "Curiosité", "Sens des responsabilités"],

  chips: [
    "Développement web",
    "Infrastructure",
    "Cloud AWS",
    "Sécurité",
    "Virtualisation",
    "Automatisation"
  ],

  links: [
    { label: "GitHub", url: "https://github.com/Ayoub-regd/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/ayoub-reggad-309078350/" }
  ],

  skills: [
    "Développement web : HTML, CSS, JavaScript, Node.js, Express, PHP",
    "Bases de données : MySQL, MongoDB, notions PostgreSQL",
    "Cloud : AWS S3, IAM, EC2, CloudFront, Route 53",
    "Systèmes : Linux Debian/Ubuntu, Windows Server",
    "Virtualisation : VMware, Proxmox, Hyper-V",
    "Automatisation : Bash, PowerShell, scripts de labo",
    "Réseau / sécurité : Nmap, Wireshark, hardening, audit",
    "Outils : Git, GitHub, Docker, documentation technique"
  ],

  experience: [
    {
      type: "Formation",
      title: "IPSSI — Bachelor Administrateur Systèmes, Réseaux et Sécurité",
      period: "Depuis octobre 2024",
      details: [
        "Administration Linux et Windows Server",
        "Réseaux, cloud AWS et virtualisation",
        "Projets pratiques en sécurité, scripting et infrastructure"
      ]
    },
    {
      type: "Stage",
      title: "Webmaster & SEO — Evenement Animation Artistique",
      period: "Mai 2025 à juillet 2025",
      details: [
        "Optimisation WordPress et structure des contenus",
        "Crawls réguliers et reporting des correctifs",
        "Travail à distance avec suivi opérationnel"
      ]
    },
    {
      type: "Projet web",
      title: "Inclunum.fr — plateforme éducative fullstack",
      period: "Projet étudiant",
      details: [
        "Node.js, Express, MongoDB, accessibilité",
        "Authentification sécurisée et logique serveur",
        "Déploiement cloud et documentation utilisateur"
      ]
    },
    {
      type: "Lab infrastructure",
      title: "Infrastructure de test et sécurité",
      period: "Projet IPSSI / labo personnel",
      details: [
        "Virtualisation VMware / Proxmox",
        "Segmentation, snapshots, scripts d'administration",
        "Durcissement Linux et pratiques de supervision"
      ]
    }
  ],

  certifications: [
    {
      title: "AWS Academy Cloud Foundations",
      status: "En cours",
      details: "Labs IAM, S3, EC2 et premiers déploiements cloud documentés."
    },
    {
      title: "Labs cybersécurité / hardening",
      status: "En cours",
      details: "Audits Linux, réduction de surface d'attaque, pare-feu et documentation de remédiation."
    }
  ],

  references: [
    {
      id: "web",
      title: "Développement web",
      definition: "Concevoir une interface, une logique serveur et des données cohérentes pour livrer un service utilisable et maintenable.",
      usage: [
        "Inclunum : Node.js, Express, MongoDB, accessibilité",
        "Stage WordPress / SEO : structure, contenus, optimisation"
      ],
      links: [
        { label: "Voir Inclunum", url: "projects/inclunum.html" }
      ]
    },
    {
      id: "infrastructure",
      title: "Infrastructure",
      definition: "Assembler des systèmes, des services et des règles d'exploitation pour qu'un environnement reste stable, testable et documenté.",
      usage: [
        "Lab VMware / Proxmox",
        "Infrastructure de test avec segmentation, snapshots et services isolés"
      ],
      links: [
        { label: "Voir le lab Proxmox", url: "projects/proxmox-lab.html" }
      ]
    },
    {
      id: "aws",
      title: "AWS",
      definition: "Plateforme cloud utilisée ici pour des labs de stockage, identité, calcul et déploiement statique.",
      usage: [
        "Labs S3, IAM et EC2",
        "Archive d'un ancien déploiement statique du portfolio",
        "Déploiement cloud mentionné sur Inclunum"
      ],
      links: [
        { label: "Voir l'archive AWS", url: "projects/aws-s3-portfolio.html" }
      ]
    },
    {
      id: "security",
      title: "Sécurité et hardening",
      definition: "Réduire la surface d'attaque d'un système par configuration, contrôle des accès, pare-feu, mises à jour et audit.",
      usage: [
        "Projet Hardening Linux",
        "Contrôles SSH, fail2ban, firewall, remédiations"
      ],
      links: [
        { label: "Voir Hardening Linux", url: "projects/hardening-linux.html" }
      ]
    },
    {
      id: "virtualisation",
      title: "Virtualisation",
      definition: "Créer des environnements de test isolés pour déployer, casser, restaurer et documenter des services sans risquer la machine hôte.",
      usage: [
        "VMware, Proxmox, snapshots et VLAN",
        "Rejeu rapide de scénarios de test"
      ],
      links: [
        { label: "Voir le lab virtualisation", url: "projects/proxmox-lab.html" }
      ]
    },
    {
      id: "automation",
      title: "Automatisation",
      definition: "Standardiser des tâches répétitives avec des scripts pour gagner du temps et réduire les erreurs manuelles.",
      usage: [
        "Scripts Bash / PowerShell en labo",
        "Déploiement historique sur AWS S3 et documentation technique"
      ],
      links: [
        { label: "Voir l'archive AWS", url: "projects/aws-s3-portfolio.html" }
      ]
    }
  ],

  projects: [
    {
      title: "Projet Cybersécurité — Hardening Linux",
      summary: "Passerelle et serveur web durcis pour réduire la surface d'attaque et documenter les remédiations.",
      objective: "Sécuriser des systèmes exposés avec une approche vérifiable.",
      actions: [
        "Audit Lynis et LinPEAS",
        "Durcissement SSH (clé, no root, fail2ban)",
        "Pare-feu, désactivation des services inutiles, mises à jour"
      ],
      results: [
        "Checklist de remédiation et notes techniques",
        "Base de preuves à consolider avec captures et logs",
        "Méthode réutilisable sur VM de labo"
      ],
      tech: ["Linux", "Hardening", "Audit", "Sécurité"],
      details: "projects/hardening-linux.html",
      code: "",
      codeStatus: "Support de labo non publié"
    },
    {
      title: "Inclunum — Plateforme web et accessibilité",
      summary: "Projet web fullstack conçu pour rendre l'accès aux services numériques plus simple et plus accessible.",
      objective: "Construire une application utile, compréhensible et techniquement propre côté front comme côté back.",
      actions: [
        "Node.js, Express, MongoDB et logique serveur",
        "Travail sur accessibilité, contrastes et navigation",
        "Déploiement cloud et documentation d'usage"
      ],
      results: [
        "Prototype fonctionnel",
        "Documentation utilisateur et technique",
        "Base solide pour démontrer un profil plus large que l'infrastructure"
      ],
      tech: ["Développement web", "API", "AWS", "Accessibilité"],
      details: "projects/inclunum.html",
      code: "",
      codeStatus: "Dépôt non public"
    },
    {
      title: "Portfolio — Archive de déploiement AWS S3",
      summary: "Archive technique d'un ancien déploiement statique sur S3, conservée comme preuve de pratique cloud.",
      objective: "Montrer une mise en place réelle sur AWS sans laisser croire que le site public repose encore dessus.",
      actions: [
        "Configuration S3 Static Website",
        "Gestion de policy publique et nettoyage sécurité",
        "Script de déploiement et fichiers de configuration archivés"
      ],
      results: [
        "Cas d'étude clair et réutilisable",
        "Historique de déploiement documenté",
        "Archive distincte du site public actuel"
      ],
      tech: ["AWS", "S3", "Cloud", "Automatisation"],
      details: "projects/aws-s3-portfolio.html",
      code: "",
      codeStatus: "Fichiers d'archive non publiés"
    },
    {
      title: "Lab virtualisation — Proxmox / VMware",
      summary: "Environnement de test pour simuler une infrastructure complète, isoler les services et rejouer des scénarios.",
      objective: "Valider des montages d'infrastructure sans dépendre d'un environnement de production.",
      actions: [
        "Création de VMs, templates et snapshots",
        "Segmentation réseau et organisation du lab",
        "Documentation des procédures de restauration"
      ],
      results: [
        "Environnement de test réutilisable",
        "Support pour labs systèmes, réseau et sécurité",
        "Base concrète pour les projets techniques du portfolio"
      ],
      tech: ["Proxmox", "VMware", "Infrastructure", "Virtualisation"],
      details: "projects/proxmox-lab.html",
      code: "",
      codeStatus: "Support de labo non publié"
    }
  ]
};

const REFERENCE_ALIASES = {
  "developpement web": "web",
  "web": "web",
  "api": "web",
  "accessibilite": "web",
  "infrastructure": "infrastructure",
  "cloud aws": "aws",
  "aws": "aws",
  "cloud": "aws",
  "linux": "security",
  "hardening": "security",
  "audit": "security",
  "securite": "security",
  "reseaux": "infrastructure",
  "virtualisation": "virtualisation",
  "proxmox": "virtualisation",
  "vmware": "virtualisation",
  "automatisation": "automation"
};

function byId(id){ return document.getElementById(id); }

function setText(id, value){
  const el = byId(id);
  if (el) el.textContent = value ?? "";
}

function isValidUrl(url){
  return typeof url === "string" && url.trim().length > 0 && url.trim() !== "#";
}

function setMail(id, email){
  const el = byId(id);
  if (!el) return;
  el.textContent = email;
  if (el.tagName === "A") el.href = `mailto:${email}`;
}

function setMailHref(id, email){
  const el = byId(id);
  if (!el) return;
  if (el.tagName === "A") el.href = `mailto:${email}`;
}

function createList(items, className){
  const list = document.createElement("ul");
  if (className) list.className = className;
  (items || []).forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
  return list;
}

function copyFallback(text){
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

async function copyToClipboard(text){
  if (navigator.clipboard && navigator.clipboard.writeText){
    await navigator.clipboard.writeText(text);
    return;
  }
  copyFallback(text);
}

function slugify(value){
  return (value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function getReferenceHref(label){
  const key = slugify(label);
  const match = REFERENCE_ALIASES[key];
  return match ? `#ref-${match}` : "";
}

function createToken(label, className){
  const href = getReferenceHref(label);
  if (href){
    const a = document.createElement("a");
    a.className = className;
    a.href = href;
    a.textContent = label;
    return a;
  }
  const span = document.createElement("span");
  span.className = className;
  span.textContent = label;
  return span;
}

function renderQualities(){
  ["qualitiesAside"].forEach(id => {
    const container = byId(id);
    if (!container) return;
    container.innerHTML = "";
    DATA.qualities.forEach(item => {
      const span = document.createElement("span");
      span.className = "quality-chip";
      span.textContent = item;
      container.appendChild(span);
    });
  });
}

function renderLinks(){
  const links = byId("links");
  if (!links) return;
  links.innerHTML = "";
  DATA.links.filter(l => isValidUrl(l.url)).forEach(l => {
    const a = document.createElement("a");
    a.className = "link-pill";
    a.href = l.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.referrerPolicy = "no-referrer";
    a.textContent = l.label;
    links.appendChild(a);
  });
}

function renderSkills(){
  const skills = byId("skills");
  if (!skills) return;
  skills.innerHTML = "";
  DATA.skills.forEach(s => {
    const span = document.createElement("span");
    span.className = "skill";
    span.textContent = s;
    skills.appendChild(span);
  });
}

function renderChips(){
  const chips = byId("chips");
  if (!chips) return;
  chips.innerHTML = "";
  DATA.chips.forEach(c => {
    chips.appendChild(createToken(c, "chip"));
  });
}

function renderExperience(){
  const container = byId("experienceList");
  if (!container) return;
  container.innerHTML = "";
  DATA.experience.forEach(item => {
    const card = document.createElement("div");
    card.className = "timeline-item";

    const type = document.createElement("div");
    type.className = "timeline-type";
    type.textContent = item.type;

    const title = document.createElement("h3");
    title.className = "timeline-title";
    title.textContent = item.title;

    const meta = document.createElement("div");
    meta.className = "timeline-meta";
    meta.textContent = item.period;

    card.appendChild(type);
    card.appendChild(title);
    card.appendChild(meta);

    if (item.details && item.details.length){
      card.appendChild(createList(item.details));
    }

    container.appendChild(card);
  });
}

function renderCertifications(){
  const container = byId("certificationsList");
  if (!container) return;
  container.innerHTML = "";
  DATA.certifications.forEach(cert => {
    const card = document.createElement("div");
    card.className = "card";

    const title = document.createElement("h3");
    title.textContent = cert.title;

    const status = document.createElement("p");
    status.className = "muted small";
    status.textContent = `Statut : ${cert.status}`;

    const details = document.createElement("p");
    details.className = "muted";
    details.textContent = cert.details;

    card.appendChild(title);
    card.appendChild(status);
    card.appendChild(details);
    container.appendChild(card);
  });
}

function renderReferences(){
  const container = byId("referencesList");
  if (!container) return;
  container.innerHTML = "";

  DATA.references.forEach(ref => {
    const card = document.createElement("article");
    card.className = "reference-card";
    card.id = `ref-${ref.id}`;

    const title = document.createElement("h3");
    title.textContent = ref.title;

    const definition = document.createElement("p");
    definition.textContent = ref.definition;

    const usageLabel = document.createElement("div");
    usageLabel.className = "step-label";
    usageLabel.textContent = "Déjà utilisé dans";

    card.appendChild(title);
    card.appendChild(definition);
    card.appendChild(usageLabel);
    card.appendChild(createList(ref.usage || [], "reference-list"));

    if (ref.links && ref.links.length){
      const links = document.createElement("div");
      links.className = "reference-links actions";
      ref.links.forEach(link => {
        if (!isValidUrl(link.url)) return;
        const a = document.createElement("a");
        a.className = "link-pill";
        a.href = link.url;
        if (/^https?:\/\//.test(link.url)){
          a.target = "_blank";
          a.rel = "noopener noreferrer";
          a.referrerPolicy = "no-referrer";
        }
        a.textContent = link.label;
        links.appendChild(a);
      });
      if (links.children.length){
        card.appendChild(links);
      }
    }

    container.appendChild(card);
  });
}

function renderProjects(){
  const projects = byId("projects");
  if (!projects) return;
  projects.innerHTML = "";

  DATA.projects.forEach(p => {
    const card = document.createElement("article");
    card.className = "card project";

    const head = document.createElement("div");
    head.className = "project-head";
    const title = document.createElement("h3");
    title.textContent = p.title;
    const summary = document.createElement("p");
    summary.textContent = p.summary;
    head.appendChild(title);
    head.appendChild(summary);

    const steps = document.createElement("div");
    steps.className = "project-steps";

    const stepObjective = document.createElement("div");
    stepObjective.className = "step";
    const objectiveLabel = document.createElement("div");
    objectiveLabel.className = "step-label";
    objectiveLabel.textContent = "Objectif";
    const objectiveText = document.createElement("p");
    objectiveText.textContent = p.objective;
    stepObjective.appendChild(objectiveLabel);
    stepObjective.appendChild(objectiveText);

    const stepActions = document.createElement("div");
    stepActions.className = "step";
    const actionsLabel = document.createElement("div");
    actionsLabel.className = "step-label";
    actionsLabel.textContent = "Actions";
    stepActions.appendChild(actionsLabel);
    stepActions.appendChild(createList(p.actions || [], "step-list"));

    const stepResults = document.createElement("div");
    stepResults.className = "step";
    const resultsLabel = document.createElement("div");
    resultsLabel.className = "step-label";
    resultsLabel.textContent = "Preuves";
    stepResults.appendChild(resultsLabel);
    stepResults.appendChild(createList(p.results || [], "step-list"));

    steps.appendChild(stepObjective);
    steps.appendChild(stepActions);
    steps.appendChild(stepResults);

    const badges = document.createElement("div");
    badges.className = "badges";
    (p.tech || []).forEach(t => {
      badges.appendChild(createToken(t, "badge"));
    });

    const actions = document.createElement("div");
    actions.className = "actions";

    if (isValidUrl(p.details)){
      const details = document.createElement("a");
      details.className = "link-pill";
      details.href = p.details;
      details.textContent = "Détails";
      actions.appendChild(details);
    }

    if (isValidUrl(p.code)){
      const code = document.createElement("a");
      code.className = "link-pill";
      code.href = p.code;
      code.target = "_blank";
      code.rel = "noopener noreferrer";
      code.referrerPolicy = "no-referrer";
      code.textContent = "Code";
      actions.appendChild(code);
    } else if (p.codeStatus){
      const status = document.createElement("span");
      status.className = "status-pill";
      status.textContent = p.codeStatus;
      actions.appendChild(status);
    }

    card.appendChild(head);
    card.appendChild(steps);
    card.appendChild(badges);
    if (actions.children.length){
      card.appendChild(actions);
    }

    projects.appendChild(card);
  });
}

function init(){
  setText("nameHeader", DATA.name);
  setText("roleHeader", DATA.role);
  setText("headlineHero", DATA.headline);
  setText("bioHero", DATA.bio);
  setText("nameAbout", DATA.name);
  setText("roleAbout", DATA.role);
  setText("headlineAbout", DATA.headline);
  setText("avatar", DATA.initials);

  setText("locationInfo", DATA.location);
  setText("availabilityInfo", DATA.availability);
  setMail("mailLinkInfo", DATA.email);
  setMail("mailLinkFooter", DATA.email);
  setMailHref("mailBtn", DATA.email);

  const cvBtn = byId("btnCV");
  const cvNotice = byId("cvNotice");
  if (cvBtn){
    if (isValidUrl(DATA.cvUrl)){
      cvBtn.href = DATA.cvUrl;
      cvBtn.target = "_blank";
      cvBtn.rel = "noopener noreferrer";
      cvBtn.referrerPolicy = "no-referrer";
      cvBtn.textContent = "Télécharger le CV";
      cvBtn.classList.remove("btn-disabled");
      cvBtn.removeAttribute("aria-disabled");
      cvBtn.removeAttribute("tabindex");
      if (cvNotice) cvNotice.hidden = true;
    } else {
      cvBtn.removeAttribute("href");
      cvBtn.removeAttribute("target");
      cvBtn.removeAttribute("rel");
      cvBtn.textContent = "CV en mise à jour";
      cvBtn.classList.add("btn-disabled");
      cvBtn.setAttribute("aria-disabled", "true");
      cvBtn.setAttribute("tabindex", "-1");
      if (cvNotice) cvNotice.hidden = false;
    }
  }

  setText("year", new Date().getFullYear());
  setText("footerName", DATA.name);

  renderQualities();
  renderChips();
  renderLinks();
  renderSkills();
  renderExperience();
  renderCertifications();
  renderReferences();
  renderProjects();

  const copyBtn = byId("copyEmailBtn");
  const copyStatus = byId("copyEmailStatus");
  if (copyBtn){
    copyBtn.addEventListener("click", async () => {
      try{
        await copyToClipboard(DATA.email);
        if (copyStatus) copyStatus.textContent = "Email copié";
      } catch {
        if (copyStatus) copyStatus.textContent = "Copie impossible";
      }
      if (copyStatus){
        setTimeout(() => { copyStatus.textContent = ""; }, 2000);
      }
    });
  }

  const navToggle = byId("navToggle");
  const nav = byId("siteNav");
  const header = document.querySelector(".header");
  if (navToggle && nav && header){
    const closeNav = () => {
      header.classList.remove("is-nav-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Ouvrir le menu");
      const label = navToggle.querySelector(".nav-toggle-label");
      const icon = navToggle.querySelector(".nav-toggle-icon");
      if (label) label.textContent = "Menu";
      if (icon) icon.textContent = "☰";
    };

    const openNav = () => {
      header.classList.add("is-nav-open");
      navToggle.setAttribute("aria-expanded", "true");
      navToggle.setAttribute("aria-label", "Fermer le menu");
      const label = navToggle.querySelector(".nav-toggle-label");
      const icon = navToggle.querySelector(".nav-toggle-icon");
      if (label) label.textContent = "Fermer";
      if (icon) icon.textContent = "×";
    };

    navToggle.addEventListener("click", () => {
      const isOpen = header.classList.contains("is-nav-open");
      if (isOpen){
        closeNav();
      } else {
        openNav();
      }
    });

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 1080){
          closeNav();
        }
      });
    });

    window.addEventListener("keydown", event => {
      if (event.key === "Escape"){
        closeNav();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1080){
        closeNav();
      }
    });

    closeNav();
  }
}

window.addEventListener("DOMContentLoaded", init);
