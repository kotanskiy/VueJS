Vue.filter('capatilize', function (value) {
    if (!value) return '';
    value = value.toString();
    return value.replace(/\b\w/g, function (l) {
        return l.toUpperCase();
    })
});

Vue.component ('app6-car', {
    data: function () {
        return {
            cars: [
                {model: 'BMW'},
                {model: 'Audi'},
                {model: 'Merc'},
                {model: 'Toyota'},
                {model: 'Lalka'},
                {model: 'Развалюха'},
            ]
        }

    },
    template: '<div><div class="car" v-for="car in cars"><p>{{ car.model }}</p></div></div>',
});

new Vue({
    el: '#app6',
    components: {
        'app6-local-car':{
            data: function () {
                return {
                    cars: [
                        {model: 'BMW'},
                        {model: 'Audi'},
                        {model: 'Merc'},
                        {model: 'Toyota'},
                        {model: 'Lalka'},
                        {model: 'Развалюха'},
                    ]
                }
            },
            template: '<div><div class="car" v-for="car in cars"><p>{{ car.model }}</p></div></div>',
        }
    }
});

new Vue({
    el: '#app5',
    data: {
        show: false,
        message: 'Hello, World, Hello!!!',
    },
    computed: {
        showMess() {
            return this.message.toUpperCase()
        }
    },
    filters: {
        lowercase (value) {
            return value.toLowerCase()
        }
    }
});



new Vue({
    el: '#app4',
    data: {
        show: true,
        cars: [
            {model: "BMW", speed: 250.8},
            {model: "Audi", speed: 240.21},
            {model: "Merc", speed: 350.4},
            {model: "Ford", speed: 160.5},
        ]
    }
});

new Vue({
    el: '#app3',
    data: {
        value: 1,
    },
    methods: {
        increment (value) {
            this.value = value;
            if (value == 25){
                alert("Число 25")
            }
        }
    },
    computed: {
        doubleValue () {
            return this.value * 2
        }
    }
});

new Vue({
    el: '#app',
    data: {
        title: 'Hello, World!',
        styleCSS: ''
    },
    methods: {
        changeText (){
            this.title = 'Какой-то новый текст'
        }
    }

});