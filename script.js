// Variable global para almacenar los usuarios
let users = [];

// Función para obtener usuarios de la API y mostrar sus nombres en el DOM
async function getUsersAndDisplay() {
    try {
        // Realiza la petición Axios a la API JSONPlaceholder
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');

        // Almacena los usuarios en la variable global
        users = response.data;

        // Obtiene el elemento del DOM donde se mostrarán los nombres
        const userList = document.getElementById('userList');

        // Limpia cualquier contenido previo
        userList.innerHTML = '';

        // Itera a través de los usuarios y muestra sus nombres en el DOM
        users.forEach(user => {
            const userName = document.createElement('p');
            userName.textContent = user.name;
            userList.appendChild(userName);
        });
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
    }
}

// Asocia la función a ejecutar al hacer clic en el botón
const fetchUsersButton = document.getElementById('fetchUsersButton');
fetchUsersButton.addEventListener('click', getUsersAndDisplay);