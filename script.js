const projects = [
  {
    title: "Katman Atölye",
    description: "Katmanları ayır, fikri görünür kıl. Deneysel üretim alanı.",
    url: "https://erenyuceexe.github.io/katman-atolye/",
    category: "Deneysel üretim",
    status: "CANLI",
    year: "2024",
    available: true
  },
  {
    title: "Araçlar",
    description: "Günlük üretimi hızlandıran küçük yardımcılar ve pratik çözümler.",
    url: "https://erenyuceexe.github.io/araclar/",
    category: "Yardımcı araçlar",
    status: "CANLI",
    year: "2024",
    available: true
  },
  {
    title: "Mikro notlar",
    description: "Uzak bir sonraki fikir için biriken disiplin, gözlem ve küçük kavramların yeni bir arşivi.",
    category: "Yazı ve fikir",
    status: "YAKINDA",
    year: "2025",
    available: false,
    note: "Hazırlık sürüyor."
  },
  {
    title: "Etkinlik alanı",
    description: "İçerik, deneyim ve konuşma formatlarını deneyeceğim küçük bir üretim sahası.",
    category: "İçerik üretimi",
    status: "YAKINDA",
    year: "2025",
    available: false,
    note: "Açılış için son dokunuşlar devam ediyor."
  }
];

const projectList = document.querySelector("#project-list");

projects.forEach((project, index) => {
  const item = document.createElement(project.available ? "a" : "div");
  item.className = `project${project.available ? "" : " project--soon"}`;

  if (project.available) {
    item.href = project.url;
    item.target = "_blank";
    item.rel = "noopener noreferrer";
    item.setAttribute("aria-label", `${project.title} projesini aç`);
  } else {
    item.setAttribute("aria-disabled", "true");
    item.setAttribute("aria-label", `${project.title} yakında açılacak`);
  }

  item.innerHTML = `
    <div class="project-body">
      <div class="project-meta">
        <span class="project-index">${String(index + 1).padStart(2, "0")} / ${project.status}</span>
        <span class="project-tag">${project.category}</span>
      </div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <span class="project-note">${project.note || `Açık alan · ${project.year}`}</span>
    </div>
    <span class="project-arrow" aria-hidden="true">${project.available ? "↗" : "···"}</span>
  `;

  projectList.appendChild(item);
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
