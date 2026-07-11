        
  
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
    if (input.value !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        deleteButton.setAttribute('aria-label', 'Delete chapter');
        list.append(li);
        deleteButton.addEventListener('click', function() {
        li.remove();
        });
        input.value = '';
        input.focus();
    } else {
        input.focus();
    }
});

