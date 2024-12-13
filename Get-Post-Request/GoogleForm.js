
const numbers_url = 'https://kodaktor.ru/j/numbers';
const form_url    = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeZyDJ_68Mj7io5vtjyNqul7ceNE1t5Z5KkkN7foqxbIcUsbg/formResponse';

async function GetData() {
  const data = new URLSearchParams();
  let sum = 0;

  const rawResponse = await fetch(numbers_url, {  //Получаем числа
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
  const content = await rawResponse.json();
  content.numbers.forEach(x=>sum+=x.value);
  console.log(sum);

  data.append('entry.364005965', JSON.stringify(sum + '(Karandashov)'));
  
  fetch(form_url, { //Заполняем форму
    method: 'POST',
    mode: 'no-cors',
    body: data
  })
  .then(response => {
    console.log(response);
  });
}

GetData();
