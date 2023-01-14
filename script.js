fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const votingSection = document.querySelector('.voting');
      data.forEach(item => {
        const votingBox = document.createElement('div');
        votingBox.classList.add('voting-box');

        const title = document.createElement('h2');
        title.textContent = item.title;
        votingBox.appendChild(title);

        const url = document.createElement('a');
        url.href = item.url;

        const button = document.createElement("button");
        button.textContent = "Vote";

        url.appendChild(button);

        votingBox.appendChild(url);
        votingSection.appendChild(votingBox);
      });
    })
    .catch(error => console.log(error));