fetch("https://blogs.pratiks-desk.in/data/recent-posts.json")
  .then(response => response.json())
  .then(posts => {
    const container = document.getElementById("recent-posts");
    posts.forEach(post => {
      const card = `
        <div class="recent-post-item">
          <img src="${post.image}" alt="${post.title}">
          <div class="recent-post-info">
            <a class="post-tag" href="${post.tagLink}" target="_blank">${post.tag}</a>
            <h3><a href="${post.link}" target="_blank">${post.title}</a></h3>
            <p>${post.description}</p>
          </div>
        </div>
      `;
      container.innerHTML += card;
    });
  });
