document.getElementById('instagram-link').addEventListener('click', function(e) {
    e.preventDefault();  // Prevent default link behavior
    
    var instagramFeed = document.getElementById('instagram-feed');
    
    // Toggle Instagram feed visibility
    if (instagramFeed.style.display === 'none' || instagramFeed.style.display === '') {
      instagramFeed.style.display = 'block';
      instagramFeed.innerHTML = `
        <h3>Follow us on Instagram!</h3>
        <iframe src="https://www.instagram.com/p/yourpostid/embed" frameborder="0"></iframe>
      `;
    } else {
      instagramFeed.style.display = 'none';
      instagramFeed.innerHTML = '';  // Clear the content
    }
  });