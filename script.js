
let users = [];


async function getUsersAndDisplay() {
    try {
        
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');

        
        users = response.data;

        
        const userList = document.getElementById('userList');

        
        userList.innerHTML = '';

       
        users.forEach(user => {
            const userName = document.createElement('p');
            userName.textContent = user.name;
            userList.appendChild(userName);
        });
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
    }
}

const fetchUsersButton = document.getElementById('fetchUsersButton');
fetchUsersButton.addEventListener('click', getUsersAndDisplay);