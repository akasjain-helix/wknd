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
                //credentials: 'include',
                //mode: "no-cors",
                Headers: {
                    'Content-Type': 'application/json',
                    'Cookie': document.cookie
                }
            }
        )
        .then(response => {
            return response.json();
        })
        .then(res => {
            alert(res.en.columns.toString());
        })
        .catch(error => {
            console.error("Error submitting form:", error);
        });
    });
};