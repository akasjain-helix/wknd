export default function decorate(block) {
    const link = block.children[0].querySelector('a');
    const classList = block.classList;
    const form = document.createElement('form');
    form.action = link.getAttribute('href');
    let httpMethod = 'get';
    block.classList.values().filter((className) => className.startsWith('method')).forEach((className) => {
        [, httpMethod] = className.split('-');
    });

    form.method = httpMethod;
    //form.target = '_blank';
    form.style = 'display: flex; align-items: center;';
    const label = document.createElement('label');
    label.value = "Click me";
    label.style = 'display: none';

    const input = document.createElement('input');
    input.type = 'submit';
    input.value = link.innerText.trim();
    input.style = 'background-color: #f1f1f1; border: none; padding: 10px;';
    form.append(label);
    form.append(input);
    block.textContent = '';
    block.append(form);
};