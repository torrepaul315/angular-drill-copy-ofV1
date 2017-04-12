(function() {
  'use strict'

  angular.module('app', [])
    .component('cart', {
    controller:
    function () {
      const vm = this

      vm.$onInit = function () {
        vm.items = [
          {name: 'lamp',quantity: '25'},
          {name: 'fainting couch', quantity: '1'}
        ]
      }

      vm.upDateList = function () {
        var newItem = {}
        console.log(
          vm.item.name,
          vm.item.quantity
        )
        newItem.name = vm.item.name,
        newItem.quantity = vm.item.quantity

        vm.items.push(newItem)

        delete vm.item
      }
      vm.deleteThing = function (e, thingNumber) {
        e.preventDefault()
        vm.items.splice(vm.items.indexOf(thingNumber),1)
      }
    },


    template:`
      <form ng-submit="$ctrl.upDateList()">
        <p>
          <label for="name">Name</label>
          <input id="name"  type="text" ng-model="$ctrl.item.name">
        </p>
        <p>
          <label for="quantity">Quantity</label>
          <input id="quantity"type="text" ng-model="$ctrl.item.quantity">
        </p>
        <p>
          <button type="submit"
          >Add Item</button>
        </p>
      </form>

      <div class="item" ng-repeat="item in $ctrl.items">
      <h3>thing name: {{ item.name}},
      thing quantity: {{item.quantity}}</h3>
        <a href="#"ng-click="$ctrl.deleteThing($event,item)">Delete</a>
      </div>
       `
    })

}());
