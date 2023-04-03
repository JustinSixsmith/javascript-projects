console.log("ya ya wes we get it.. IT WORKS!");

const tabs = document.querySelector(".tabs");
const tabButtons = document.querySelectorAll("[role='tab']");
const tabPanels = Array.from(document.querySelectorAll("[role='tabpanel']"));

function handleTabClick(event) {
    // Hide all panels
    tabPanels.forEach((panel) => {
        panel.hidden = true;
    });

    // Mark all tabs as unselected
    tabButtons.forEach((button) => {
        button.setAttribute("aria-selected", false);
    });

    // Mark the clicked tab as selected
    event.currentTarget.setAttribute("aria-selected", true);

    // Find the clicked tab's panel and show it
    const { id } = event.currentTarget;

    /* METHOD 1
    const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
    tabPanel.hidden = false;
    */

    // METHOD 2 - Find in the array of tabPanels
    const tabPanel = tabPanels.find(
        (panel) => panel.getAttribute("aria-labelledby") === id
    );
    tabPanel.hidden = false;
}

tabButtons.forEach((button) => {
    button.addEventListener("click", handleTabClick);
});
