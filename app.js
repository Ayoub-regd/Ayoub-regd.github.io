const DATA = {
  name: "Ayoub REGGAD",
  initials: "AR",
  role: "Étudiant IPSSI — Systèmes, Réseaux & Cloud",
  headline: "Je conçois et sécurise des environnements Linux/AWS (hardening, audit, déploiement).",
  bio: "Recherche un stage dès mai 2026 (4 mois minimum), puis une alternance en octobre 2026. J'apporte des pratiques de durcissement, d'automatisation et de documentation.",
  location: "Nice, France",
  availability: "Stage mai 2026 (4 mois min) puis alternance oct. 2026",
  email: "a.reggad@ecole-ipssi.net",
  cvUrl: "",

  chips: ["Linux", "AWS", "Hardening", "Sécurité", "Réseaux", "Automation"],

  links: [
    { label: "GitHub", url: "https://github.com/Ayoub-regd/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/ayoub-reggad-309078350/" }
  ],

  skills: [
    "Linux (Debian/Ubuntu)",
    "AWS (S3, IAM, EC2)",
    "Hardening & audit",
    "Nmap / Lynis",
    "Réseaux TCP/IP",
    "Virtualisation (Proxmox/VMware)",
    "Git/GitHub",
    "Scripting Bash"
  ],

  experience: [
    {
      type: "Formation",
      title: "IPSSI — Bachelor Administrateur Systèmes/Réseaux/Sécurité",
      period: "2024–2027 (en cours)",
      details: [
        "Administration Linux",
        "Réseaux TCP/IP",
        "Sécurité & hardening",
        "Cloud AWS Academy"
      ]
    },
    {
      type: "Projet encadré",
      title: "Lab virtualisation (Proxmox/VMware)",
      period: "2025",
      details: [
        "Clusters et snapshots",
        "Segmentation réseau",
        "Services auto-hébergés"
      ]
    }
  ],

  certifications: [
    {
      title: "AWS Academy Cloud Foundations",
      status: "en cours",
      details: "Labs S3 Website, IAM, EC2."
    },
    {
      title: "TryHackMe / labs cybersécurité",
      status: "en cours",
      details: "Pratique offensive/défensive et reporting."
    }
  ],

  projects: [
    {
      title: "Projet Cybersécurité — Hardening Linux",
      summary: "Passerelle + serveur web durcis pour réduire la surface d'attaque.",
      objective: "Sécuriser une passerelle et un serveur web exposés.",
      actions: [
        "Audit Lynis & LinPEAS",
        "Durcissement SSH (clé, no root, fail2ban)",
        "Firewall + désactivation des services inutiles",
        "Patching et gestion des privilèges"
      ],
      results: [
        "Rapport PDF + checklist de remédiation",
        "Captures d'audit et notes techniques",
        "Scripts d'audit réutilisables"
      ],
      tech: ["Linux", "Hardening", "Audit", "Réseaux"],
      details: "projects/hardening-linux.html",
      code: "",
      codeStatus: "Code sur demande"
    },
    {
      title: "Inclunum — Chatbot IA & Accessibilité",
      summary: "Plateforme web d'inclusion numérique avec chatbot IA et focus accessibilité.",
      objective: "Rendre l'accès aux services numériques plus simple et inclusif.",
      actions: [
        "Intégration API Hugging Face",
        "Interface accessible (contrastes, navigation clavier)",
        "Déploiement et documentation d'usage"
      ],
      results: [
        "Prototype fonctionnel",
        "Documentation utilisateur + technique",
        "Tests d'accessibilité réalisés"
      ],
      tech: ["Web", "API", "IA", "AWS"],
      details: "projects/inclunum.html",
      code: "https://github.com/Ayoub-regd/"
    },
    {
      title: "Portfolio — Archive de déploiement AWS S3",
      summary: "Archive technique d'un ancien déploiement statique sur S3 dans un contexte d'apprentissage AWS.",
      objective: "Documenter un déploiement historique sur S3, distinct de l'hébergement public actuel.",
      actions: [
        "Configuration S3 Static Website",
        "Policy d'accès public + nettoyage sécurité",
        "Automatisation du déploiement via script"
      ],
      results: [
        "Configuration reproductible (JSON/policy)",
        "Script de déploiement archivé localement",
        "Cas d'étude AWS conservé comme preuve de pratique"
      ],
      tech: ["AWS", "S3", "Static Website"],
      details: "projects/aws-s3-portfolio.html",
      code: "",
      codeStatus: "Code sur demande"
    },
    {
      title: "Lab virtualisation — Proxmox/VMware",
      summary: "Environnement de test virtualisé pour simuler une infra complète.",
      objective: "Tester des services en toute sécurité (réseau, snapshots).",
      actions: [
        "Création de VMs et templates",
        "Segmentation réseau et VLAN",
        "Snapshots et restauration rapide"
      ],
      results: [
        "Infra de test prête à l'emploi",
        "Procédures documentées",
        "Services auto-hébergés isolés"
      ],
      tech: ["Proxmox", "VMware", "Infrastructure"],
      details: "projects/proxmox-lab.html",
      code: "",
      codeStatus: "Code sur demande"
    }
  ]
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

function renderLinks(){
  const links = byId("links");
  if (!links) return;
  links.innerHTML = "";
  DATA.links.filter(l => isValidUrl(l.url)).forEach(l => {
    const a = document.createElement("a");
    a.className = "link-pill";
    a.href = l.url;
    a.target = "_blank";
    a.rel = "noopener";
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
    const span = document.createElement("span");
    span.className = "chip";
    span.textContent = c;
    chips.appendChild(span);
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
    status.textContent = `Statut: ${cert.status}`;

    const details = document.createElement("p");
    details.className = "muted";
    details.textContent = cert.details;

    card.appendChild(title);
    card.appendChild(status);
    card.appendChild(details);
    container.appendChild(card);
  });
}

function renderProjects(){
  const projects = byId("projects");
  if (!projects) return;
  projects.innerHTML = "";
  DATA.projects.forEach(p => {
    const card = document.createElement("div");
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
      const span = document.createElement("span");
      span.className = "badge";
      span.textContent = t;
      badges.appendChild(span);
    });

    const actions = document.createElement("div");
    actions.className = "actions";

    if (isValidUrl(p.details)){
      const details = document.createElement("a");
      details.className = "link-pill";
      details.href = p.details;
      details.target = "_blank";
      details.rel = "noopener";
      details.textContent = "Détails";
      actions.appendChild(details);
    }

    if (isValidUrl(p.code)){
      const code = document.createElement("a");
      code.className = "link-pill";
      code.href = p.code;
      code.target = "_blank";
      code.rel = "noopener";
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
  // Header / Hero / About
  setText("nameHeader", DATA.name);
  setText("roleHeader", DATA.role);

  setText("headlineHero", DATA.headline);
  setText("bioHero", DATA.bio);

  setText("nameAbout", DATA.name);
  setText("roleAbout", DATA.role);
  setText("headlineAbout", DATA.headline);

  // Avatar
  setText("avatar", DATA.initials);

  // Infos
  setText("locationInfo", DATA.location);
  setText("availabilityInfo", DATA.availability);
  setMail("mailLinkInfo", DATA.email);
  setMail("mailLinkFooter", DATA.email);
  setMailHref("mailBtn", DATA.email);

  // CV
  const cvBtn = byId("btnCV");
  const cvNotice = byId("cvNotice");
  if (cvBtn){
    if (isValidUrl(DATA.cvUrl)){
      cvBtn.href = DATA.cvUrl;
      cvBtn.target = "_blank";
      cvBtn.rel = "noopener";
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

  // Footer
  setText("year", new Date().getFullYear());
  setText("footerName", DATA.name);

  // Sections
  renderChips();
  renderLinks();
  renderSkills();
  renderExperience();
  renderCertifications();
  renderProjects();

  // Copy email
  const copyBtn = byId("copyEmailBtn");
  const copyStatus = byId("copyEmailStatus");
  if (copyBtn){
    copyBtn.addEventListener("click", async () => {
      try{
        await copyToClipboard(DATA.email);
        if (copyStatus) copyStatus.textContent = "Email copié";
      } catch (e){
        if (copyStatus) copyStatus.textContent = "Copie impossible";
      }
      if (copyStatus){
        setTimeout(() => { copyStatus.textContent = ""; }, 2000);
      }
    });
  }
}

window.addEventListener("DOMContentLoaded", init);
