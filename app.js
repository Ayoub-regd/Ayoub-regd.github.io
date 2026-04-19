function byId(id){
  return document.getElementById(id);
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

function initCopyEmail(){
  const copyBtn = byId("copyEmailBtn");
  const copyStatus = byId("copyEmailStatus");
  if (!copyBtn) return;

  copyBtn.addEventListener("click", async () => {
    try {
      await copyToClipboard("a.reggad@ecole-ipssi.net");
      if (copyStatus) copyStatus.textContent = "Email copié";
    } catch {
      if (copyStatus) copyStatus.textContent = "Copie impossible";
    }

    if (copyStatus){
      window.setTimeout(() => {
        copyStatus.textContent = "";
      }, 2000);
    }
  });
}

function initNavigation(){
  const navToggle = byId("navToggle");
  const nav = byId("siteNav");
  const header = document.querySelector(".header");
  if (!navToggle || !nav || !header) return;

  const mobileQuery = window.matchMedia("(max-width: 1080px)");

  const setNavState = (open) => {
    header.classList.toggle("is-nav-open", open);
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    navToggle.setAttribute("aria-label", open ? "Fermer la navigation" : "Ouvrir la navigation");
    const icon = navToggle.querySelector(".nav-toggle-icon");
    if (icon) icon.textContent = open ? "×" : "☰";

    if (mobileQuery.matches){
      nav.hidden = !open;
    } else {
      nav.hidden = false;
    }
  };

  const syncLayout = () => {
    if (mobileQuery.matches){
      setNavState(false);
    } else {
      header.classList.remove("is-nav-open");
      nav.hidden = false;
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Ouvrir la navigation");
      const icon = navToggle.querySelector(".nav-toggle-icon");
      if (icon) icon.textContent = "☰";
    }
  };

  navToggle.addEventListener("click", () => {
    const open = navToggle.getAttribute("aria-expanded") !== "true";
    setNavState(open);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (mobileQuery.matches){
        setNavState(false);
      }
    });
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && mobileQuery.matches){
      setNavState(false);
    }
  });

  if (typeof mobileQuery.addEventListener === "function"){
    mobileQuery.addEventListener("change", syncLayout);
  } else {
    mobileQuery.addListener(syncLayout);
  }

  syncLayout();
}

function initYear(){
  const year = byId("year");
  if (year){
    year.textContent = String(new Date().getFullYear());
  }
}

window.addEventListener("DOMContentLoaded", () => {
  initCopyEmail();
  initNavigation();
  initYear();
});
