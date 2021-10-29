
window.addEventListener("DOMContentLoaded", function () {

    Vue.config.devtools = true;

    const vueApp = new Vue({
        el: "#root",
        data: {
            imageAll: [
                {
                    url: 'img/01.jpg',
                    title: 'Svezia',
                    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
                },
                {
                    url: 'img/02.jpg',
                    title: 'Svizzera',
                    description: 'Lorem ipsum'
                },
                {
                    url: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
                },
                {
                    url: 'img/04.jpg',
                    title: 'Germania',
                    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
                },
                {
                    url: 'img/05.jpg',
                    title: 'Paradise',
                    description: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
                }
            ],
            currentIndex: 0
        },
        methods: {
            //funzione che eseguo al click della freccia superiore
            upWardArrow(){
                this.currentIndex--;
                if(this.currentIndex < 0){
                    this.currentIndex = this.imageAll.length - 1;
                }
            },
            //funzione che eseguo al click della freccia inferiore
            downWardArrow(){
                this.currentIndex++;
                if(this.currentIndex > this.imageAll.length - 1){
                    this.currentIndex = 0;
                }
            }
        }
    })

})


