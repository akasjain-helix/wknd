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
        event.preventDefault(); // Prevent redirection

        // Fetch form data
        //const formData = new FormData(this);

        // Send form data using fetch API
        fetch(this.action, {
            method: this.method
        })
            .then(response => response.json()) // Adjust based on expected response type
            .then(data => {
                console.log("Form submitted successfully:", data);
            })
            .catch(error => {
                console.error("Error submitting form:", error);
            });
    });
};