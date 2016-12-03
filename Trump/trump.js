(() => {
  const wall = new Audio('sound/wall.mp3')
  const sitdown = new Audio('sound/sitDown.mp3')
  const comebaby = new Audio('sound/comebaby.mp3')
  const latinos = new Audio('sound/latinos.mp3')
  const thatseasy = new Audio('sound/thatseasy.mp3')

  const slap1 = new Audio('sound/slap1.mp3')
  const slap2 = new Audio('sound/slap2.mp3')
  const slaps = [
    slap1, slap2
  ]

  const sounds = [
    wall, sitdown, comebaby, latinos, thatseasy
  ]

  let randomindex

  window.addEventListener('keydown', event => {

    if (event.defaultPrevented) {
      return
    }

    randomindex = Math.floor(Math.random() * 5)
    randomslap = Math.floor(Math.random() * 2)

    switch (event.keyCode) {
      case(39):
      slap('StripSteak.png', 'right')
      animate('trump_right.png')
      break

      case(37):
      slap('StripSteak_flipped.png', 'left')
      animate('trump_left.png')
      break

      default:
      return
    }
    event.preventDefault()
  }, true)

  const animate = image => {
    setTimeout(() => {
      slaps[randomslap].play()
      document.getElementById('trump').setAttribute('src', image)
      sounds[randomindex].play()
      setTimeout(() => {
        document.getElementById('trump').setAttribute('src', 'trump.png')
      }, 600)
    }, 200)
  }

  const slap = (meatImage, direction) => {
    document.getElementById('meat').setAttribute('src',meatImage)
    let start = null
    let meatElement = document.getElementById('meat')
    meatElement.style.display = 'block'
    meatElement.style.position = 'absolute'
    let multiplier
    direction === 'left' ? multiplier = -1 : multiplier = 1
    if (direction === 'left') {
      meatElement.style.marginLeft = window.innerWidth - 200 + 'px'
    } else {
      meatElement.style.marginLeft = 0
      meatElement.style.left = window.innerWidth * .3 + 'px'
    }
    let step = timestamp => {
      if (!start) start = timestamp
      let t = (timestamp - start) / 1000
      if (direction === 'left') {
        meatElement.style.left = multiplier * (4000 * t) + 'px'
      } else {
        meatElement.style.left = multiplier * (4000 * t) + 'px'
      }
      meatElement.style.top = 50 * Math.cos(5 * t) + 'px'
      window.requestAnimationFrame(step)
    }
    window.requestAnimationFrame(step)
    setTimeout(() => {
      step = () => {}
    }, 1200)

    meatElement.style.left = window.innerWidth / 2 + 'px'
  }
})()
