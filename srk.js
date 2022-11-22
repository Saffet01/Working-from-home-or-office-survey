const correctAnswers = ['Y','Y','Y','Y'];
const form = document.querySelector('.question-form');
const result = document.querySelector('.result');
const span = document.querySelector('span');

form.addEventListener('submit', e=>{
    e.preventDefault(); // stop refreshing every time until loop is done.
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userAnswers.forEach((answer, index)=>{
        if(answer === correctAnswers[index]){
            score += 25;
        }
    })
    //console.log(score);
    result.classList.remove('d-none');

    let x = 0;
    const bastir = setInterval(()=>{
        result.querySelector('span').textContent = `%${x}`;
        if(x === score){
            clearInterval(bastir);
        }
        else{
            x++;
        }

    }, 10);
})
