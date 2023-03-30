function wait(ms = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
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
      popup.firstChild.appendChild(skipButton);
      // TODO: Listen for the click event
    }

    // Check if they want a submit button

    // Listen for the submit event on the imputs

    // When someone does submit it, resolve the data that was in the input box

    // Insert the document into the DOM
    document.body.appendChild(popup);
    // Put a very small timeout before adding the open class
    await wait(50);
    popup.classList.add('open');
  });
}
