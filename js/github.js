class Github {

    constructor() {
        this.client_id = '9b19cd2337d5a24e434d';
        this.client_secret = 'acea0820bda1a5ba5c8fbb27bd164306dc3b9c55';
        this.repo_count = 4;
    }

    async getRepo(userText) {
        const repoResponse = await fetch(`https://api.github.com/search/repositories?q=${userText}&client_id=${this.client_id}&client_secret=${this.client_secret}&per_page=${this.repo_count}`);

        const repo = await repoResponse.json();

        return {

            repo: repo.items
        }
    }
}