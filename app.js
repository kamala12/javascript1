/**
 * Created by MSI on 18-Jan-17.
 */
let app = new Vue({

    el: '#app',

    data: {
        form: {
            txtName: null,
            txtAge: null,
            txtAddress: null
        },
        persons: []
    },
    methods: {
        addPerson: function() {

            this.persons.push(JSON.parse(JSON.stringify(this.form)));

            $('#flash').slideDown().delay(2400).slideUp();

            this.form.txtName = '';
            this.form.txtAge = '';
            this.form.txtAddress = '';
        }
    }
})