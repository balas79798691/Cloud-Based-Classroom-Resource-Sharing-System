// Demo resources.
// Replace the local array with Firebase Firestore data
// when connecting this project to the cloud.

let resources = [
    {
        title: "Cloud Computing Unit 1 Notes",
        subject: "Cloud Computing",
        type: "Notes",
        unit: "Unit 1",
        link: "https://example.com/cloud-unit-1"
    },
    {
        title: "DBMS Previous Question Paper",
        subject: "DBMS",
        type: "Question Paper",
        unit: "Semester Examination",
        link: "https://example.com/dbms-question-paper"
    },
    {
        title: "Operating Systems Lab Manual",
        subject: "Operating Systems",
        type: "Lab Manual",
        unit: "All Units",
        link: "https://example.com/os-lab"
    }
];

const resourceForm = document.getElementById("resourceForm");
const resourcesContainer = document.getElementById("resources");
const searchInput = document.getElementById("search");
const subjectFilter = document.getElementById("subjectFilter");
const statusText = document.getElementById("status");

function displayResources() {
    const query = searchInput.value.toLowerCase().trim();
    const selectedSubject = subjectFilter.value;

    const filtered = resources.filter(resource => {
        const matchesSearch =
            resource.title.toLowerCase().includes(query) ||
            resource.subject.toLowerCase().includes(query) ||
            resource.type.toLowerCase().includes(query) ||
            resource.unit.toLowerCase().includes(query);

        const matchesSubject =
            selectedSubject === "" || resource.subject === selectedSubject;

        return matchesSearch && matchesSubject;
    });

    resourcesContainer.innerHTML = "";

    if (filtered.length === 0) {
        resourcesContainer.innerHTML = "<p>No resources found.</p>";
        return;
    }

    filtered.forEach(resource => {
        const card = document.createElement("article");
        card.className = "resource-card";

        card.innerHTML = `
            <span class="badge">${escapeHTML(resource.type)}</span>
            <h3>${escapeHTML(resource.title)}</h3>
            <p><strong>Subject:</strong> ${escapeHTML(resource.subject)}</p>
            <p><strong>Unit:</strong> ${escapeHTML(resource.unit)}</p>
            <a href="${safeURL(resource.link)}" target="_blank" rel="noopener noreferrer">
                Open Resource
            </a>
        `;

        resourcesContainer.appendChild(card);
    });
}

function escapeHTML(value) {
    const div = document.createElement("div");
    div.textContent = value;
    return div.innerHTML;
}

function safeURL(value) {
    try {
        const url = new URL(value);
        return ["http:", "https:"].includes(url.protocol) ? url.href : "#";
    } catch {
        return "#";
    }
}

resourceForm.addEventListener("submit", event => {
    event.preventDefault();

    const resource = {
        title: document.getElementById("title").value,
        subject: document.getElementById("subject").value,
        type: document.getElementById("resourceType").value,
        unit: document.getElementById("unit").value,
        link: document.getElementById("link").value
    };

    resources.unshift(resource);
    resourceForm.reset();
    statusText.textContent = "Resource added successfully.";
    displayResources();
});

searchInput.addEventListener("input", displayResources);
subjectFilter.addEventListener("change", displayResources);

displayResources();
