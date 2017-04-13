(function() {
  'use strict'

  angular.module('app')
    .component('expenses', {
      controller: controller,
      templateUrl:'../template.html'
    })

   controller.$inject = ['$http']
  function controller($http) {
    // any necessary variables
       const vm = this;

       vm.expenses = {};
    // functions

    vm.$onInit = function(){
      $http.get('/api/expenses')
      .then((data) => {
        console.log(data.data);
        vm.expenses = data.data;
        console.log(vm.expenses)

     })
     .catch((err) => {
       console.log(err);
     });
    }
    vm.addExpense = function () {
      var newExpense = {};
      newExpense.category = vm.addExpense.category;
      newExpense.amount = vm.addExpense.amount;
      console.log(newExpense);
      $http.post('/api/expenses', newExpense)
       .then((data) => {
         console.log(data);
         $http.get('/api/expenses')
         .then((data) => {
           console.log(data.data);
           vm.expenses = data.data;
        })
        .catch((err) => {
          console.log(err);
        });
      })
      .catch((err) => {
        console.log(err);
      });
    }

    vm.deleteById = function(id) {
      console.log("linked!", id);
      $http.delete('/api/expenses/' + id)
      .then((data) => {
        console.log(data);
        $http.get('/api/expenses')
        .then((data) => {
          console.log(data.data);
          vm.expenses = data.data;
        })
     })
     .catch((err) => {
       console.log(err);
     });
    }


    /* review this! an attempt to retrieve the info for the edit fields by grabbing it from the array on the template! */
    // vm.editById = function(id){
    //
    //   console.log(id)
    //   console.log(vm.expenses.id);
    // }
    vm.editfield = function(id, cat, amt){
       console.log(id, cat, amt);
        vm.id =id;
        vm.catEdit = cat;
        vm.amtEdit = amt;
    }

    vm.editExpense = function() {
      console.log(vm.id,vm.catEdit,vm.amtEdit);

      var expEdit = {};
      var id = vm.id;
      expEdit.category = vm.catEdit;
      expEdit.amount = vm.amtEdit;

      $http.patch('/api/expenses/'+ id, expEdit)
      .then((data) => {
        console.log(data);
        $http.get('/api/expenses')
        .then((data) => {
          console.log(data.data);
          vm.expenses = data.data;
        })
      })
      .catch((err) => {
        console.log(err);
      });
    }

  }

}());
