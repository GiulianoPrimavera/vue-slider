
window.addEventListener("DOMContentLoaded", function () {

    Vue.config.devtools = true;

    const vueApp = new Vue({
        el: "#root",
        data: {
            message: "ciao mondo",
            imageAll: [
                {
                    url: 'img/01.jpg',
                    title: 'Svezia',
                    descriptio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
                },
                {
                    url: 'img/02.jpg',
                    title: 'Svizzera',
                    descriptio: 'Lorem ipsum'
                },
                {
                    url: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    descriptio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
                },
                {
                    url: 'img/04.jpg',
                    title: 'Germania',
                    descriptio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
                },
                {
                    url: 'img/05.jpg',
                    title: 'Paradise',
                    descriptio: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
                }
            ]
        },
        methods: {

        }
    })

})


