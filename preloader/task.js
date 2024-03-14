const currency = document.getElementById('items')
const loader = document.querySelector('.loader')

const xhr = new XMLHttpRequest()

xhr.addEventListener('readystatechange', (e) => {
    e.preventDefault()
    if (xhr.readyState === xhr.DONE) {
        loader.classList.remove('loader_active')
        const response = xhr.response
        const valute = response.response['Valute']

        for (let key in valute) {
            const el = valute[key]
            currency.insertAdjacentHTML('beforeend', `
            <div class="item">
            <div class="item__code">
                ${el.CharCode}
            </div>
            <div class="item__value">
                ${el.Value}
            </div>
            <div class="item__currency">
                руб.
            </div>
            </div>
            `)
        }
    }
})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses')
xhr.responseType = 'json'
xhr.send()