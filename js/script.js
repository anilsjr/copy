var copyButton = document.getElementById('copy-Button');
var dataInput = document.getElementById('data');

async function copyToClipboard() {
    try {
        await navigator.clipboard.writeText(dataInput.value);
        console.log('Text copied to clipboard');
        copyButton.innerHTML = `
           <i class="fa-solid fa-check"></i> Copied!
        `;
        setTimeout(() => {
            copyButton.innerHTML = `
                <i class="fa-solid fa-copy"></i> copy
            `;
        }, 1500);
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}

copyButton.addEventListener('click', copyToClipboard);



