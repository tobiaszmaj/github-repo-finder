// Init GitHub

const gitRepo = new Github();

// Search Repo

const searchRepo = document.querySelector('.searchGithub');

// Add Event Listener

searchRepo.addEventListener('keyup', e => {
    const userText = e.target.value;

    if (userText !== '') {

        gitRepo.getRepo(userText);

    } else {

    }
})