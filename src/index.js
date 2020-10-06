new Vue({
    el: "#app",
    data: {
      persons: [{ id:'1',Firstname: "Joe",Lastname: "aaa",Email: "joe@mail.com" },
                { id:'2',Firstname: "Jane",Lastname: "aaa",Email: "jane@mail.com" },
                { id:'3',Firstname: "Mary",Lastname: "aaa",Email: "mary@mail.com" }],
        // Firstname:"",
        // Lastname:"",
        // Email:""
        selectedPerson:''
    },
    methods:{
        deleteUser : function(id){
          var results = confirm("want to delete this item?");
          if(results){
            this.persons.splice(id,1);
          }
        },

        sendInfo : function(person){
           this.selectedPerson = person;
        },

        editUser : function(person){
          
          this.persons.map(obj => this.persons.find(element => element.id==person.id) || obj);
          this.selectedPerson='';
          $('#modalEdit').modal('hide');
        },

        addUser : function(person){

          person.id=this.persons[this.persons.length-1].id +1 ;
          this.persons.push(person);
          this.selectedPerson='';
          $('#modalAdd').modal('hide');
        }

    }
  });

  // new Vue({
  //     el :'#modalEdit',

  //     methods:{

  //     }

  // });