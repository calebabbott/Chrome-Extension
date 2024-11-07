# Quick Note Chrome Extension

Quick Note is a simple Chrome extension that allows users to save and manage URLs and custom notes quickly. With just a click, you can save the URL of the current tab or add a custom note. The extension stores all entries in the browser's `localStorage`, so they remain available across sessions.

## Features

- **Save Current Tab**: Save the URL of the active browser tab with a single click.
- **Add Custom Notes**: Add any URL or text as a custom note.
- **Persistent Storage**: All notes and URLs are stored in `localStorage` for persistence.
- **Delete Functionality**: Remove individual notes with ease.

## Installation

1. Clone this repository or download it as a ZIP file.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** in the top-right corner.
4. Click on **Load unpacked** and select the project folder.

## Usage

1. **Add a Custom Note**: Type into the input field and click **ADD**.
2. **Save Active Tab**: Click **Save Tab** to automatically save the URL of the current tab.
3. **Access Saved Notes**: All saved notes and URLs appear in a list. Each item includes a clickable link and a delete button.
4. **Delete Notes**: Click the "X" button next to a note to remove it.

## Code Structure

- **`index.html`**: Main HTML structure and UI elements.
- **`index.js`**: JavaScript logic for adding, deleting, and displaying notes.
- **`index.css`**: Basic styling for the extension's popup interface.
- **`manifest.json`**: Extension configuration and permissions.

## Manifest Permissions

This extension uses the following permissions:
- **tabs**: Allows access to the active tab's URL.

## Code Snippet

```javascript
tabBtn.addEventListener("click", function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    });
});
