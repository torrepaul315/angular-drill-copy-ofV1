(function() {
  'use strict'

  angular.module('app')
    .service('houseService', function () {
      this.houses = [
        {id: 0, name: 'Spacious two bedroom', address: '10 Main St'},
      ]

      this.addHouse = function (house) {
        console.log(house);
        house.id = this.houses.length
        this.houses.push(house)
        console.log(this.houses);

      }

      this.findById = function (id) {
        return this.houses.find(house => house.id == id)
      }
    })

}());
