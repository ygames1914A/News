const API_KEY = `88bf36fa19025cef6c0c80cb59985cf3`

async function fetchNews(category = 'general') {
    let url = `https://news-backend-production-fd5e.up.railway.app/?category=${category}&apikey=${API_KEY}`

    try {
        const response = await fetch(url)
        let data = await response.json()
        console.log(data.articles);
        render(data.articles)
        
    } catch (error) {
        console.log(error);
    }
}


function render(articles) {
    const grid = document.getElementById('news-grid')

    articles.forEach(articles => {
        let card = document.createElement("div")
        card.className = 'news-card'
        card.innerHTML = `
                    <div class="img-container">
                        <img src="${articles.image}" alt="Photo of the article">
                    </div>

                    <div class="news-content">
                        <h3>${articles.title}</h3>
                        <p>${articles.content}</p>
                    </div>
        `

        grid.appendChild(card)

    });

}


fetchNews()
