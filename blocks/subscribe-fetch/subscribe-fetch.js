export default function decorate(block) {
    const link = block.children[0].querySelector('a');
    const classList = block.classList;
    const btn = document.createElement('input');
    btn.type = 'submit';
    btn.value = link.innerText.trim();
    block.textContent = '';
    block.append(btn);

    btn.addEventListener("click", function(event) {
        event.preventDefault();
        fetch(link, {
                method: classList.contains('post') ? 'post' : 'get',
                Headers: {
                    'Content-Type': 'application/json',
                    'ngrok-skip-browser-warning': true,
                }
            }
        )
        .then(response => {
            return response.json();
        })
        .then(res => {
            console.log(res.en.columns.toString());
        })
        .catch(error => {
            console.error("Error submitting form:", error);
        });
    });
};