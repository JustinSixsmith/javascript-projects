function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function destroyPopup(popup) {
  popup.classList.remove('open');
  await wait(1000);
  popup.remove();
  popup = null;
}

function ask(options) {
  return new Promise(async (resolve) => {
    // Create a popup with all the fields in it
    const popup = document.createElement('form');
    popup.classList.add('popup');
    popup.insertAdjacentHTML(
      'afterbegin',
      `<fieldset>
        <label>${options.title}</label>
        <input type="text" name="input" />
        <button type="submit">Submit</button>
    </fieldset>
    `
    );

    console.log(popup);

    // Check if they want a cancel button
    if (options.cancel) {
      const skipButton = document.createElement('button');
      skipButton.type = 'button';
      skipButton.textContent = 'Cancel';
      popup.firstElementChild.appendChild(skipButton);
      // TODO: Listen for the click event
      skipButton.addEventListener(
        'click',
        function (e) {
          resolve(null);
          destroyPopup(popup);
        },
        { once: true }
      );
    }

    // Listen for the submit event on the imputs
    popup.addEventListener(
      'submit',
      async (e) => {
        e.preventDefault();
        console.log('submitted');
        resolve(e.target.input.value);
        // Remove is from the DOM entirely
        destroyPopup(popup);
      },
      { once: true }
    );

    // When someone does submit it, resolve the data that was in the input box

    // Insert the document into the DOM
    document.body.appendChild(popup);
    // Put a very small timeout before adding the open class
    await wait(50);
    popup.classList.add('open');
  });
}

// Select all buttons that ask a question
async function askQuestion(e) {
  const button = e.currentTarget;
  const cancel = button.hasAttribute('data-cancel');
  // OR
  //   const cancel = 'cancel' in button.dataset;
  const answer = await ask({
    title: button.dataset.question,
    cancel,
  });
  console.log(answer);
}

const buttons = document.querySelectorAll('[data-question]');
buttons.forEach((button) => {
  button.addEventListener('click', askQuestion);
});
