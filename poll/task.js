const pollName = document.getElementById('poll__title')
const pollAnswers = document.getElementById('poll__answers')

const xhr = new XMLHttpRequest()

xhr.addEventListener('readystatechange', (e) => {
    e.preventDefault()
    if (xhr.readyState === xhr.DONE) {
        const response = xhr.response
        pollName.innerHTML = response.data.title
        for (const key in response.data.answers) {
            const answer = response.data.answers[key];
            pollAnswers.insertAdjacentHTML('beforeend', `
            <button class="poll__answer">
            ${answer}
            </button>
            `)
        }
        const answers = document.querySelectorAll('.poll__answer')
        answers.forEach((a) => {
            a.addEventListener('click', (e) => {
                alert('Спасибо, ваш голос засчитан!')
            })
        })
    }
})


xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll')
xhr.responseType = 'json'
xhr.send()