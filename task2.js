// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js
const getUserButton = document.getElementById("getUserButton");
getUserButton.addEventListener("click", ()=> {
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(users => {
  const userName = document.getElementById('userNameInput').value;
    const user = users.find(u => u.name === userName);
    if (user) {
      document.getElementById('userCity').textContent = user.address.city;
    } else{
        document.getElementById('userCity').textContent = "User not found";
    }
  })
});

