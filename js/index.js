document.addEventListener('DOMContentLoaded', (event) => {
const url = 'https://api.github.com/search/users?q=octocat';
    function searchName() {
        const submit = document.querySelector('#submit');
        submit.addEventListener('click', (e) => {
            e.preventDefault();
            const search = document.querySelector('#search').value;
            fetch(`https://api.github.com/search/users?q=${search}`)
                .then(response => response.json())
                .then(data => {
                    let user = data.items.find(user => user.login === search);
                    if (user) {
                        const displayName = document.createElement('ul');
                        displayName.innerText = user.login;
                        document.body.appendChild(displayName);
                    } else {
                        console.log('User not found');
                    }
                })
                .catch(error => console.error('Error:', error));
        });
    }
    


searchName();
})