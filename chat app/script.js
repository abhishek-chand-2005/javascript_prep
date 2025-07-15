let chatContainer = document.querySelector('.chat-container');
let chatLog = document.querySelector('.chat-log');
let send = document.querySelector('.send-btn');
let inputArea = document.querySelector('input')

// addEvent
chatContainer.addEventListener('click', (e)=>{
    console.dir(e.target.classList.contains('send-btn'));

     // create
        let chatBubble = document.createElement('div');
        let bubbleText = document.createElement('span');
        let delBtn = document.createElement('button');

        // add class
        chatBubble.className ='chat-bubble';
        bubbleText.className = 'bubble-text';
        delBtn.className = 'delete-btn'

        //text content
        bubbleText.textContent = `💬 ${inputArea.value}`;
        delBtn.textContent = 'Delete';


    if(e.target.classList.contains('send-btn')){
        // appendChild
        chatLog.appendChild(chatBubble);
        chatBubble.appendChild(bubbleText);
        chatBubble.appendChild(delBtn);

        inputArea.value = "";
    }

     if(e.target.classList.contains('delete-btn')){
       e.target.parentElement.remove();
     }
})