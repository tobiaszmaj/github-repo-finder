class Ui {

    constructor() {
        this.displayRepo = document.getElementById('displayRepo');
    }

    showRepo(repo) {

        let output = '';

        repo.forEach(function (repo) {
            output += `
            <div class="display-repo">
                <ul>
                    <li>
                        <div class="row1">
                            <img src="${repo.owner.avatar_url}" alt="">
                            <div class="description">
                                <a href="${repo.html_url}" target="_blank"><span class="title">${repo.name}</span></a>
                                <p>${repo.description}</p>
                            </div>
                            <p class="star"><i class="fa fa-star"></i>${repo.stargazers_count}</p>
                        </div>
                        <div class="row2">
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