#function showForm() {
  document.getElementById('newPostForm').style.display = 'block';
}

function addPost() {
  const title = document.getElementById('postTitle').value;
  const content = document.getElementById('postContent').value;

  if (title && content) {
    const postDiv = document.createElement('div');
    postDiv.className = 'post';
    postDiv.innerHTML = `<h2>${title}</h2><p>${content}</p>`;

    document.getElementById('blogPosts').prepend(postDiv);

    // Clear and hide form
    document.getElementById('postTitle').value = '';
    document.getElementById('postContent').value = '';
    document.getElementById('newPostForm').style.display = 'none';
  } else {
    alert("Please enter a title and content!");
  }
}