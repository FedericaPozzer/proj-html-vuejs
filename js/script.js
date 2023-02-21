const { createApp } = Vue;

createApp({
    data() {
        return {
            // * HEADER immagini (e logo FOOTER)
            images : {
                news : "./img/meal-time-150x150.webp", //OK
                logo : "./img/anime-logo-300x89.webp", //OK
                banner : "./img/header-banner.webp", //OK
                logoFooter: "./img/anime-whitelogo-300x89.png" //OK
            },

            // * HEADER icone
            icons : {
                chevronLeft : "fa-solid fa-chevron-left", //OK
                chevronRight : "fa-solid fa-chevron-right", //OK
                facebook : "fa-brands fa-facebook-f", //OK
                twitter : "fa-brands fa-twitter", //OK
                instagram : "fa-brands fa-instagram", //OK
                youtube : "fa-brands fa-youtube", //OK
                burgerMenu : "fa-solid fa-bars", //OK
                search : "fa-solid fa-magnifying-glass", //OK
            },

            // * HEADER menù
            headerMenu : [
                {   
                    icon : "fa-solid fa-house-chimney", //OK
                    section : "HOME", //OK
                },
                {
                    icon : "fa-solid fa-suitcase", //OK
                    section : "LIFESTYLE", //OK
                    chevron : "fa-solid fa-chevron-down"
                },
                {
                    icon : "fa-solid fa-book-open-reader", //OK
                    section : "STORIES", //OK
                    chevron: "fa-solid fa-chevron-down"

                },
                {
                    icon : "fa-solid fa-book", //OK
                    section : "PAGES", //OK
                    chevron: "fa-solid fa-chevron-down"
                },
                {
                    icon : "fa-solid fa-user-large", //OK
                    section : "ABOUT US", //OK
                },
            ],

            // * FOOTER links
            footerLinks : [
                {
                    title : "GET STARTED",
                    links : [ "Resources", "Tutorials", "Examples", "Docs"],                 
                },
                {
                    title : "ABOUT",
                    links : [ "Stories", "Community", "Blog", "Brand Assets"],
                },
                {
                    title : "FEATURES",
                    links : [ "Overview", "Design", "Code", "Collaborate" ],
                },
                {
                    title: "QUICK LINKS",
                    links : [ "Stories", "Community", "Blog", "Brand Assets" ],
                },
            ],
        }
    },
    
    methods : {

        // raccolgo le email inserite
        addNewSubscriber() {
            alert("added " + this.newSubscribers); //ok! :)
        }

    }
}).mount("#my-app");