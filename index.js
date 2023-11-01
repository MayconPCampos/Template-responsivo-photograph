// efeitos ao carregar a página
startEffects = () => {
    document.querySelector("#header h1").classList.remove("is-loading");
    document.querySelector("#header p").classList.remove("is-loading");
    document.querySelector("#header img").classList.remove("is-loading");
    setTimeout(() => {
        let menuLinks = document.querySelectorAll("#menu a")
            for(link of menuLinks){
                link.classList.remove("is-loading-links")
        }
    }, 500)
}

startEffects();