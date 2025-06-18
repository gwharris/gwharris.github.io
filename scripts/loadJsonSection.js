// Thank you Chat GPT
function loadJsonSection(jsonFilePath, targetId) {
  fetch(jsonFilePath)
    .then(response => {
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return response.json();
    })
    .then(data => {
      const container = document.getElementById(targetId);
      container.innerHTML = '';

      const key = Object.keys(data)[0];
      const items = data[key];

      items.forEach(item => {
        if (key === 'projects') {
          const title = item.repo
            ? `<h3><b>${item.title} (<a href="${item.repo}" target="_blank" rel="noopener noreferrer">Website</a>)</b></h3>`
            : `<h3><b>${item.title}</b></h3>`;

          const paper = item.paper
            ? `<p><a href="${item.paper}" target="_blank" rel="noopener noreferrer"><i>Final paper located here.</i></a></p>`
            : '';

          const img = item.image
            ? `<img src="${item.image}" alt="${item.title} image" style="max-width: 50%; height: auto; display: block; margin: 1em auto;">`
            : '';

          const bulletList = item.details.map(point => `<li>${point}</li>`).join('');

          container.innerHTML += `${title}<ul>${bulletList}</ul>${paper}${img}<br>`;

        } else {
          const titleLine = item.organizationUrl
            ? `<h3>${item.title} at <a href="${item.organizationUrl}" target="_blank" rel="noopener noreferrer">${item.organization}</a> <span>${item.dates}</span></h3>`
            : `<h3>${item.title}${item.organization ? ` at ${item.organization}` : ''} <span>${item.dates || ''}</span></h3>`;

          const location = item.location ? `<p><i>${item.location}</i></p>` : '';
          const bulletList = item.details.map(point => `<li>${point}</li>`).join('');

          container.innerHTML += `${titleLine}${location}<ul>${bulletList}</ul><br>`;
        }
      });
    })
    .catch(error => {
      console.error(`Error loading ${jsonFilePath}:`, error);
      document.getElementById(targetId).innerText = 'Failed to load content.';
    });
}