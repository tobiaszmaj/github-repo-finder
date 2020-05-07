class Ui {

    constructor() {
        this.displayRepo = document.getElementById('displayRepo');
    }

    showRepo(repo) {

        let output = '';

        repo.forEach(function (repo) {
            output += `
            <div class="container">
                <ul class="collection">
                    <li class="collection__item">
                        <img src="${repo.owner.avatar_url}" alt="">
                        <a href="${repo.html_url}" target="_blank"><span class="title">${repo.name}</span></a>
                        <p>${repo.description}</p>
                        <a href="#!" class="secondary-content"><i class="fa fa-star"></i>${repo.stargazers_count}</a>
                        <div class="row">
                            <div>
                                <span class="language">${repo.language}</span>
                            </div>
                            <div>
                                <span class="update">Updated: ${repo.updated_at}</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
`
        })

        document.getElementById('displayRepo').innerHTML = output;
    }

    clearProfile() {
        this.displayRepo.innerHTML = '';
    }
}