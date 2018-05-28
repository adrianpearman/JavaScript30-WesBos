const hourHand = document.querySelector('.hour-hand')
const minuteHand = document.querySelector('.min-hand')
const secondHand = document.querySelector('.second-hand')

function setDate(){
  const now = new Date()
  const hour = now.getHours()
  const hoursDegree = ((hour / 12) * 360) + 90
  hourHand.style.transform = `rotate(${hoursDegree}deg)`
  console.log(hour)

  const minute = now.getMinutes()
  const minutesDegree = ((minute / 60) * 360) + 90
  minuteHand.style.transform = `rotate(${minutesDegree}deg)`
  console.log(minute)

  const seconds = now.getSeconds()
  const secondsDegree = ((seconds / 60) * 360) + 90
  secondHand.style.transform = `rotate(${secondsDegree}deg)`
  console.log(seconds)
}

setInterval(setDate, 1000)