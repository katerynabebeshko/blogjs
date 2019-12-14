const managerApi = {
    apiKey: 'e6328ed80690c8cba1ed92f822ad7819',

    getPosts(limit = 10, page = 1) {
        const params = `limit=${limit}&&page=${page}&&api_key=${this.apiKey}`;
        fetch(`http://blog.api.axenov-it.com/v1/posts?${params}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
    },
}

managerApi.getPosts();

