Vue.createApp({
    data() {
        return {
            inputValue: '',
            out: ''
        }
    },
    methods: {
        outValue() {
            this.out = this.inputValue;
            this.inputValue = ''
        }
    }
}).mount('#app');