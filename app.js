const answers = [
    'Mmmm.. Probably not.',
    'It is certain.',
    'It is decidedly so.',
    'Without a doubt.',
    'Yes – definitely.',
    'You may rely on it.',
    'Signs point to yes.',
    'Outlook good.',
    'As I see it, yes.',
    'You may rely on it.',
    'Reply hazy, try again.',
    'Ask again later.',
    'Better not tell you now.',
    'Cannot predict now.',
    'Concentrate and ask again.',
    'Don\'t count on it.',
    'My reply is no.',
    'My sources say no.',
    'Outlook not so good.',
    'Very doubtful.',
    'No. Just No.'

]

//Generate a random answer ------------------

//Random index number
const randomNum = () => {
    const num = Math.floor(Math.random() * 20)
    return num
}

const renderAnswer = () => {
    const num = randomNum()
    const div = document.getElementById('answer');
    const answer = document.createElement('p');
    answer.textContent = `My magical answer: ${answers[num]}.`

    div.appendChild(answer)
}


//Display the users question once submitted

document.getElementById('form').addEventListener('submit', (e) => {
    const textInput = document.querySelector('#userQuestion')
    const answerArea = document.getElementById('answer')
    const magicAnswer = document.createElement('h4')
    

    e.preventDefault()
    answerArea.appendChild(magicAnswer)
    textInput.value = ''
    renderAnswer()
    setTimeout(() => {
        answerArea.textContent = ''
    }, 4000)
    
})

