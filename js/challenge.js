const counter = document.querySelector('#counter');

function getCountArray() {
    

}

function timer() {
    return setInterval(() => {
        const count = parseInt(counter.innerText);
        counter.innerText = count + 1;
    }, 1500);
}

document.querySelector('#minus').addEventListener('click', () => {
    const minusCount = parseInt(counter.innerText);
    counter.innerText = minusCount - 1;
});

document.querySelector('#plus').addEventListener('click', () => {
    const addCount = parseInt(counter.innerText);
    counter.innerText = addCount + 1;
});

document.querySelector('#heart').addEventListener('click', () => {
    const likes = document.querySelector('.likes')
    const li = document.createElement('li');
    const count = parseInt(counter.innerText);
    li.id = count;
    li.innerHTML = `${count} has been liked <span> 1 </span> times`;
    console.log(li);
    likes.appendChild(li);


})



timer();