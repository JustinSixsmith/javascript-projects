const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// Make an array to hold state
let items = [];

function handleSubmit(e) {
    e.preventDefault();

    // Get item from form
    const name = e.currentTarget.item.value;

    // If name is empty, don't submit
    if (!name) return;
    const item = {
        name,
        id: Date.now(),
        complete: false,
    };

    // Push item to state
    items.push(item);
    console.log(`There are now ${items.length} items in your state`);

    // Clear the form
    e.currentTarget.reset();

    // Fire off an event that will tell anyone else who cares that the items have been updated
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
    console.log(items);
    const html = items
        .map(
            (item) => `<li class="shopping-item">
      <input value="${item.id}" type="checkbox"
      ${item.complete && 'checked'}
      >
      <span class="itemName">${item.name}</span>
      <button aria-label="Remove ${item.name}" 
      value="${item.id}"
      >&times;</button>
  </li>`
        )
        .join('');
    list.innerHTML = html;
}

function mirrorToLocalStorage() {
    localStorage.setItem('items', JSON.stringify(items));
}

function restoreFromLocalStorage() {
    const lsItems = JSON.parse(localStorage.getItem('items'));
    if (lsItems.length) {
        items.push(...lsItems);
        list.dispatchEvent(new CustomEvent('itemsUpdated'));
    }
}

function deleteItem(id) {
    // Update items array without this one
    items = items.filter((item) => item.id !== id);
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsComplete(id) {
    console.log('Marking as complete', id);
    const itemRef = items.find((item) => item.id === id);
    itemRef.complete = !itemRef.complete;
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);
// Even Delegation: Listen for click on the list, but then delegate the click to the button if it was the item clicked
list.addEventListener('click', (e) => {
    const id = parseInt(e.target.value);
    if (e.target.matches('button')) {
        deleteItem(id);
    }
    if (e.target.matches('input[type="checkbox"]')) {
        markAsComplete(id);
    }
});

restoreFromLocalStorage();
