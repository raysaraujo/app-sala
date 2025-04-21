function addPost() {
    var postText = document.getElementById('postText').value;
    if (postText.trim() !== "") {
        var postSection = document.querySelector('.posts');
        var newPost = document.createElement('div');
        newPost.classList.add('post');
        newPost.innerHTML = `<p>${postText}</p>`;
        postSection.appendChild(newPost);
        document.getElementById('postText').value = "";  // Limpa a caixa de texto após o post
    } else {
        alert("Por favor, escreva algo para postar.");
    }
}
