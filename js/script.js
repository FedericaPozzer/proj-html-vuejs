const { createApp } = Vue;

createApp({
    data() {
        return {
            // * HEADER immagini
            images : {
                news : "./img/meal-time-150x150.webp", //OK
                logo : "./img/anime-logo-300x89.webp", //OK
                banner : "./img/header-banner.webp", //OK
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
                    // chevron : false,
                },
                {
                    icon : "fa-solid fa-suitcase", //OK
                    section : "LIFESTYLE", //OK
                    // chevron : false,
                },
                {
                    icon : "fa-solid fa-book-open-reader", //OK
                    section : "STORIES", //OK
                    // chevron : false,
                },
                {
                    icon : "fa-solid fa-book", //OK
                    section : "PAGES", //OK
                    // chevron : false,
                },
                {
                    icon : "fa-solid fa-user-large", //OK
                    section : "ABOUT US", //OK
                    // chevron : false,
                },
            ]
        }
    },
}).mount("#my-app");
