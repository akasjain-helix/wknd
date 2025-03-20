export default function decorate(block) {
    const link = block.children[0].querySelector('a');
    const classList = block.classList;
    const form = document.createElement('form');
    form.action = link.getAttribute('href');
    // form.action = 'https://localhost:8443/libs/granite/security/post/authorizables'
    let httpMethod = 'post';

    block.classList.values().filter((className) => className.startsWith('method')).forEach((className) => {
        [, httpMethod] = className.split('-');
    });

    // const user = {

    // }

    form.method = httpMethod;
    form.target = 'hidden-iframe';
    form.style = 'display: flex; align-items: center;';
    // form.onsubmit = function(event) {
    //     event.preventDefault();
    // };
    
    const input = document.createElement('input');
    input.type = 'submit';
    input.value = link.innerText.trim();

    form.append(input);

    const createUserField = document.createElement('input');
    createUserField.type = 'hidden';
    createUserField.name = 'createUser';
    createUserField.value = 'true';
    form.appendChild(createUserField);
    
    const authorizableIdField = document.createElement('input');
    authorizableIdField.type = 'hidden';
    authorizableIdField.name = 'authorizableId';
    authorizableIdField.value = 'aaaaakkkk' + Math.random();
    form.appendChild(authorizableIdField);
    
    const passwordField = document.createElement('input');
    passwordField.type = 'hidden';
    passwordField.name = 'rep:password';
    passwordField.value = 'piyushh';
    form.appendChild(passwordField);

    block.textContent = '';

    // Create hidden iframe
    const iframe = document.createElement('iframe');
    iframe.name = 'hidden-iframe';
    iframe.style = 'display: none';
    iframe.sandbox = 'allow-same-origin allow-scripts allow-forms'; // Allows cookies in iframe

    block.append(iframe);
    block.append(form);
};
