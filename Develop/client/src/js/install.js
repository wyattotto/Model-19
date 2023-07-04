const butInstall = document.getElementById('buttonInstall');

let deferredPrompt; 

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {

  event.preventDefault();

  deferredPrompt = event;

  butInstall.style.display = "block";
});

butInstall.addEventListener('click', async () => {
  // Hide the install button
  butInstall.style.display = 'none';

  deferredPrompt.prompt();
 
  const { outcome } = await deferredPrompt.userChoice;
  console.log(`User response to the install prompt: ${outcome}`);
});

window.addEventListener('appinstalled', (event) => {
  console.log('👍', 'appinstalled', event);
  deferredPrompt = null;
});