let cmtBox = document.querySelector('.comment-box');
let cmtView = document.querySelector('.comment-input');
let post = document.querySelector('.post-btn');





post.addEventListener('click',() => {
    if (cmtView.value.trim() === "") return;

    // create elements
    let commentDiv = document.createElement('div');
    let p = document.createElement('p');
    let btn = document.createElement('button');

    // funct
    commentDiv.className = 'commentDiv';
    p.textContent = cmtView.value;
    btn.textContent = "DELETE";
    btn.style.marginLeft = "10px";

    // appen
    cmtBox.appendChild(commentDiv);
    commentDiv.appendChild(p);
    commentDiv.appendChild(btn);

    // del
       btn.addEventListener("click", () => {
        commentDiv.remove();
    });

    cmtView.value = "";

})


