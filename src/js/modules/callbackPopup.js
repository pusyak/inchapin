import sendForm from './sendForm';
import Inputmask from 'inputmask';

const activePopupClass = 'callback-popup--active'

const callbackPopup = () => {
  openPopup()
  callbackInput()
  maskedPhone()
  closePopupByButton('.callback-popup__close')
  closePopupByKey('Escape')
  sendForm('.callback-popup__form')
}

const maskedPhone = () => {
  const selector = document.getElementById('tel-input');

  const im = new Inputmask(
      '+7 (999) 999-99-99',
      {
        showMaskOnHover: false,
      }
  );

  im.mask(selector);
}

const callbackInput = () => {
  const callbackInputs = [...document.getElementsByClassName('callback-popup__input')];
  const activeClass = 'callback-popup__placeholder--active'

  callbackInputs.map((input) => {
    input.addEventListener("focusout", () => {

      if (input.value.length > 0) {
        return input.nextElementSibling.classList.add(activeClass)
      }

      input.nextElementSibling.classList.remove(activeClass)
    });
  })
}

const openPopup = () => {
  const callbackButtons = [...document.getElementsByClassName('callback-button')];
  const callbackPopup = getCallbackPopup();

  callbackButtons.map((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      callbackPopup.classList.add(activePopupClass);
    });
  })
}

const closePopupByButton = (selector) => {
  const closeButton = document.querySelector(selector);

  closeButton.addEventListener('click', (event) => {
    event.preventDefault();
    closePopup()
  });
}

const closePopupByKey = (key) => {
  window.addEventListener('keydown', (event) => {
      if (event.code === key) {
        closePopup()
      }
    }
  );
}

const closePopup = () => {
  const callbackPopup = getCallbackPopup();

  callbackPopup.classList.remove(activePopupClass);
}

const getCallbackPopup = () => {
  return document.querySelector('.callback-popup');
}


export default callbackPopup