// Init GitHub & UI

const gitRepo = new Github();
const ui = new Ui();

// Search Repo

const searchRepo = document.querySelector('.searchGithub');

// Add Event Listener

searchRepo.addEventListener('keyup', e => {
    const userText = e.target.value;

    if (userText !== '') {

        gitRepo.getRepo(userText).then(data => {
            ui.showRepo(data.repo);
        })

    } else {

        ui.clearProfile();
    }
})