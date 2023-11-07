class Github {
  constructor() {
    this.client_id = '33cb9a7998718ab1bc91';
    this.client_secret = '1234acb85dc9aa7fb86c83d29497db7681aa9333';
    this.repos_count = 5;
    this.repos_sort = 'create: asc';
  }
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}