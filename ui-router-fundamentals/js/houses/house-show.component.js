(function() {
  'use strict'

  angular.module('app')
    .component('houseShow', {
      controller: function (houseService, $stateParams) {
        const vm = this

        vm.$onInit = function () {
          // : figure out how to pull the house id from the URL
            console.log($stateParams.id);
          const houseId = $stateParams.id;

          vm.house = houseService.findById(houseId)
        }

      },
      template: `
      <h1>something</h1>
        <h1>{{$ctrl.house.name}}</h1>

        <p>{{$ctrl.house.address}}</p>

          <a ui-sref='home'>back to the homepage</a>
      `
    })

}());
