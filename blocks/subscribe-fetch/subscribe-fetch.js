export default function decorate(block) {
    const link = block.children[0].querySelector('a');
    const classList = block.classList;
    const form = document.createElement('form');
    form.action = link.getAttribute('href');
    form.method = classList.contains('post') ? 'post' : 'get';
    //form.target = '_blank';
    form.style = 'display: flex; align-items: center;';
    const input = document.createElement('input');
    input.type = 'submit';
    input.value = link.innerText.trim();
    input.style = 'background-color: #f1f1f1; border: none; padding: 10px;';
    form.append(input);
    block.textContent = '';
    block.append(form);

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert(document.cookie);
        fetch(this.action, {
                method: this.method,
                //credentials: 'include',
                //mode: "no-cors",
                Headers: {
                    'Content-Type': 'application/json',
                    'Cookie': document.cookie
                }
            }
        )
        //.then(response => response.json()) // Adjust based on expected response type
        .then(data => {
            alert(document.cookie);
            console.log("Form submitted successfully:", data);
        })
        .catch(error => {
            alert(document.cookie);
            console.error("Error submitting form:", error);
        });
    });
};