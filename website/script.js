

const residents = document.getElementById("residents")
const tori = document.getElementById("tori")
const cost = document.getElementById("cost")
const exploreBtn = document.getElementById("exploreBtn")

exploreBtn.addEventListener("click", () =>{
    document.getElementById("mission").scrollIntoView()
})
function countResidents() {
    let current = 0
    const target = 35000
    const increment = target / 100

    const timer = setInterval(() => {

        current = current + increment
        residents.textContent = current
        if (current >= 35000) {
            clearInterval(timer);
        }

    }, 20);
}

function countTori() {
    let current = 0

    const timer = setInterval(() => {
        current = current + 1
        tori.textContent = current
        if (current >= 7) {
            clearInterval(timer);
        }

    }, 150);

}

function countCost() {
    let current = 0
    const target = 971.7
    const increment = target / 100

    const timer = setInterval(() => {
        current = current + increment
        cost.textContent = current.toFixed(1)

        if (current >= target) {
            current = target
            cost.textContent = current.toFixed(1)
            clearInterval(timer)
        }
    }, 20);
}

countResidents()
countTori()
countCost()
