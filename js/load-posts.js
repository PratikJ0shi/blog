fetch("/data/recent-posts.json")
  .then(response => response.json())
  .then(posts => {
    const container = document.getElementById("recent-posts");
    posts.forEach(post => {
      const card = `
        <div class="post-card">
          <img src="${post.image}" alt="${post.title}">
          <div class="post-info">
            <h3>${post.title}</h3>
            <span class="blog-tag">${post.tag}</span>
            <p>${post.description}</p>
            <a href="${post.link}" target="_blank">Read More →</a>
          </div>
        </div>
      `;
      container.innerHTML += card;
    });
  });
