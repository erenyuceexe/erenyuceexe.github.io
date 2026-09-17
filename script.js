const projects = [
  {
    title: "Katman Atölye",
    description: "Katmanları ayır, fikri görünür kıl. Deneysel üretim alanı.",
    url: "https://erenyuceexe.github.io/katman-atolye/",
    status: "CANLI",
    available: true
  },
  {
    title: "Araçlar",
    description: "Günlük üretimi hızlandıran küçük yardımcılar ve pratik çözümler.",
    url: "https://erenyuceexe.github.io/araclar/",
    status: "CANLI",
    available: true
  },
  {
    title: "Yeni bir alan",
    description: "Sıradaki fikir burada yerini alacak. Hazırlık sürüyor.",
    status: "YAKINDA",
    available: false
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
  }
  item.innerHTML = `
    <div>
      <span class="project-index">${String(index + 1).padStart(2, "0")} / ${project.status}</span>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    </div>
    <span class="project-arrow" aria-hidden="true">${project.available ? "↗" : "···"}</span>
  `;
  projectList.appendChild(item);
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
