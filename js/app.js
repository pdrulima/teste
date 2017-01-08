new Vue({
 
    el: '#app',
                                                     
    data: {
        usuarios: false,
        error: false,
    },

    ready: function() {
        this.$http({ url: 'data.json', method: 'GET' }).then(function(response) {
            this.$set('usuarios', response.data.usuarios)
        }, function(response) {
            this.$set('error', true)
        });
    }

});