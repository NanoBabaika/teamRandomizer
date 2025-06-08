const textNames =  document.getElementById('names');
const submitBtn = document.getElementById('submit'); 
const clearBtn = document.getElementById('clear');
const display1 = document.getElementById('dsipay1');
const display2 = document.getElementById('dsipay2');
 
 
submitBtn.addEventListener('click', randomize);


function randomize(e) {
    e.preventDefault();
    display1.innerHTML = '';
    display2.innerHTML = '';

    const inputData = textNames.value; 


    if(inputData == '') {
        alert('Заполните имена участников!');
        return
    }

     
    const dataArray = inputData.split(", ");     
     
    const randomizeData = dataArray.sort(() => Math.random() - 0.5)
 
    const firstTeamArr = randomizeData.slice(0, Math.floor(randomizeData.length / 2));
     
    const secondTeamArr = randomizeData.slice(Math.floor(randomizeData.length / 2));
    
    // да я знаю что можно было обойти массивы циклом, но захотелось использовать этот способ
    const team1StrData =  firstTeamArr.join(", ");
    const team2StrData =  secondTeamArr.join(", ");

    display1.insertAdjacentHTML('beforeend', team1StrData);
    display2.insertAdjacentHTML('beforeend', team2StrData);
}


clearBtn.addEventListener('click', clearInput);


function clearInput(e) {
    e.preventDefault();
    textNames.value = '';
}