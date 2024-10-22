//your code here!
// Selecting the list element
const infiList = document.getElementById('infi-list');

// Function to create and append list items
function addListItems(count) {
  for (let i = 0; i < count; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = `Item ${infiList.children.length + 1}`;
    infiList.appendChild(listItem);
  }
}

// Add 10 items to the list by default when the page loads
addListItems(10);

// Event listener to detect scroll at the bottom of the list
infiList.addEventListener('scroll', () => {
  if (infiList.scrollTop + infiList.clientHeight >= infiList.scrollHeight) {
    // Add 2 more items when the user scrolls to the bottom
    addListItems(2);
  }
});

