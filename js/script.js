const { createApp } = Vue;

createApp({
    data() {
        return {
            // * HEADER immagini (e logo FOOTER)
            images : {
                news : "./img/meal-time-150x150.webp", 
                logo : "./img/anime-logo-300x89.webp", 
                banner : "./img/header-banner.webp", 
                logoFooter: "./img/anime-whitelogo-300x89.png" 
            },

            // * HEADER icone
            icons : {
                chevronLeft : "fa-solid fa-chevron-left", 
                chevronRight : "fa-solid fa-chevron-right", 
                facebook : "fa-brands fa-facebook-f", 
                twitter : "fa-brands fa-twitter", 
                instagram : "fa-brands fa-instagram", 
                youtube : "fa-brands fa-youtube", 
                burgerMenu : "fa-solid fa-bars", 
                search : "fa-solid fa-magnifying-glass", 
            },

            // * HEADER menù
            headerMenu : [
                {   
                    icon : "fa-solid fa-house-chimney", 
                    section : "HOME", 
                },
                {
                    icon : "fa-solid fa-suitcase", 
                    section : "LIFESTYLE", 
                    chevron : "fa-solid fa-chevron-down"
                },
                {
                    icon : "fa-solid fa-book-open-reader", 
                    section : "STORIES", 
                    chevron: "fa-solid fa-chevron-down"

                },
                {
                    icon : "fa-solid fa-book", 
                    section : "PAGES", 
                    chevron: "fa-solid fa-chevron-down"
                },
                {
                    icon : "fa-solid fa-user-large", 
                    section : "ABOUT US", 
                },
            ],

            // * MAIN - all "demo" & "December"
            demoDec: {
                demo : "fa-solid fa-user-large",
                december : "fa-solid fa-calendar-days",

            },

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

            webPageDesigner : "© Anime Teck, Theme by HasnainDEV",

            newEmailAddress : [],
        }
    },

    methods : {

        // * FOOTER input
        // raccolgo le email inserite
        addNewSubscriber() {
            // alert("added " + this.newSubscribers); //ok! :)

            if (this.newEmailAddress.includes("@") && this.newEmailAddress.includes(".")) {
                console.log("L'indirizzo e-mail inserito è: " + this.newEmailAddress);
            } else {
                console.log("Ciò che hai inserito non è un indirizzo email!")
            }

            this.newEmailAddress = "";
        },

    }
}).mount("#my-app");