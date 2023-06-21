const sec = document.querySelector('.s'),
    min = document.querySelector('.m'),
    hour = document.querySelector('.h'),
    hourNum = document.querySelector('.hours'),
    minNum = document.querySelector('.minutes')

let time = new Date(),
    secArr = time.getSeconds() * 6,
    minArr = time.getMinutes() * 6,
    hourArr = time.getHours() * 30

function clock() {
    secArr += 0.2
    sec.style.transform = `rotate(${secArr}deg)`
    min.style.transform = `rotate(${minArr}deg)`
    hour.style.transform = `rotate(${hourArr}deg)`
    setTimeout(() => {
        clock()
    }, 1000 / 30);

    hourNum.innerHTML = time.getHours() < 10 ? "0" + time.getHours() : time.getHours()
    minNum.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
}
clock()

const tabsContentItem = document.querySelectorAll('.tabsContentItem')
const tabsItem = document.querySelectorAll('.tabsItem')

for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener('click', function () {
        for (let j = 0; j < tabsItem.length; j++) {
            tabsItem[j].classList.remove('active')
            tabsContentItem[j].classList.remove('active')
        }
        tabsItem[i].classList.add('active')
        tabsContentItem[i].classList.add('active')
    })
}

const btn = document.querySelector('.stopwatch__btn'),
    watchSek = document.querySelector('.stopwatch__seconds'),
    watchMin = document.querySelector('.stopwatch__minutes'),
    watchHour = document.querySelector('.stopwatch__hours'),
    span = document.querySelector('.tabsLink__span ')

btn.addEventListener('click', function () {
    if (btn.innerHTML == 'start') {
        btn.innerHTML = 'stop'
        span.classList.add('active')
    } else if (btn.innerHTML == 'stop') {
        btn.innerHTML = 'clear'
        span.classList.add('active_clear')
    } else if (btn.innerHTML == 'clear') {
        btn.innerHTML = 'start'
        span.classList.remove('active_clear')
        span.classList.remove('active')
    }
})

function watch() {
    if (btn.innerHTML == 'stop') {
        watchSek.innerHTML++
        if (watchSek.innerHTML > 59) {
            watchSek.innerHTML = 0
            watchMin.innerHTML++
            if (watchMin.innerHTML > 59) {
                watchMin.innerHTML = 0
                watchHour.innerHTML++
            }
        }
    } else if (btn.innerHTML == 'start') {
        watchSek.innerHTML = 0
        watchMin.innerHTML = 0
        watchHour.innerHTML = 0
    }
    setTimeout(() => {
        watch()
    }, 1000);
}
watch()
