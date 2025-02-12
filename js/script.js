// Get the copy button and data input elements by their IDs
var copyButton = document.getElementById('copy-Button');
var dataInput = document.getElementById('data');

// Function to copy text to clipboard
async function copyToClipboard() {
    try {
        // Write the value of the data input to the clipboard
        await navigator.clipboard.writeText(dataInput.value);
        console.log('Text copied to clipboard');
        
        // Change the button text to indicate success
        copyButton.innerHTML = `
           <i class="fa-solid fa-check"></i> Copied!
        `;
        
        // Revert the button text back to original after 1.5 seconds
        setTimeout(() => {
            copyButton.innerHTML = `
                <i class="fa-solid fa-copy"></i> copy
            `;
        }, 1500);
    } catch (err) {
        // Log an error message if the copy operation fails
        console.error('Failed to copy: ', err);
    }
}

// Add an event listener to the copy button to trigger the copy function on click
copyButton.addEventListener('click', copyToClipboard);



