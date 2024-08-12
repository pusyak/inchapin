const sendForm = (form) => {
  document.querySelector(form).addEventListener('submit', (event) => {
    event.preventDefault()
    const data = new FormData(document.querySelector(form))

    console.log(data)
  })
}

export default sendForm