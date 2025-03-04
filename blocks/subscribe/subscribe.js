export default function decorate(block) {
    const link = block.children[0].querySelector('a');

    const form = document.createElement('form');
    form.action = link.getAttribute('href');
    form.method = 'post';
    //form.target = '_blank';
    form.style = 'display: flex; align-items: center;';
    const input = document.createElement('input');
    input.type = 'submit';
    input.value = link.innerText.trim();
    input.style = 'background-color: #f1f1f1; border: none; padding: 10px;';
    form.append(input);
    block.textContent = '';
    block.append(form);
};