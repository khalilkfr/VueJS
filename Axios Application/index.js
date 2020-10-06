new Vue({
    el: '#app',
    data () {
      return {
        info: null,
        data : null
      }
    },
    mounted () {
      axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (this.data = response.data))
    }
  })