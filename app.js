// Apagar post
function deletePost(button) {
    var post = button.parentElement;
    post.remove();
}

// Adicionar comentário
function addComment(button) {
    var post = button.parentElement.parentElement;
    var commentText = post.querySelector('#commentInput').value;

    if (commentText.trim() !== "") {
        var commentSection = post.querySelector('.comment-section');
        var newComment = document.createElement('p');
        newComment.textContent = commentText;
        commentSection.appendChild(newComment);

        post.querySelector('#commentInput').value = "";  // Limpa o campo de comentário
    }
}

// Compartilhar Meme
function shareMeme() {
    var memeInput = document.getElementById('memeInput');
    var memeFile = memeInput.files[0];
    if (memeFile) {
        var memeURL = URL.createObjectURL(memeFile);
        var memeSection = document.querySelector('.posts');
        var newMemePost = document.createElement('div');
        newMemePost.classList.add('post');
        newMemePost.innerHTML = `<img src="${memeURL}" alt="Meme" style="width: 100%; max-width: 300px;"/>`;
        memeSection.appendChild(newMemePost);
    }
}

// Criar Grupo
function createGroup() {
    var groupName = document.getElementById('groupName').value;
    if (groupName.trim() !== "") {
        var groupList = document.querySelector('.group-list');
        var newGroup = document.createElement('div');
        newGroup.textContent = groupName;
        groupList.appendChild(newGroup);
    }
}

// Enviar mensagem privada
function sendPrivateMessage() {
    var privateMessage = document.getElementById('privateMessage').value;
    if (privateMessage.trim() !== "") {
        var privateMessagesSection = document.querySelector('.private-messages');
        var newMessage = document.createElement('div');
        newMessage.classList.add('private-message');
        newMessage.textContent = privateMessage;
        privateMessagesSection.appendChild(newMessage);

        document.getElementById('privateMessage').value = "";  // Limpa o campo de mensagem
    }
}
