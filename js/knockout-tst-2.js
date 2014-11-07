/**
 * Created by amarkosyan on 05.11.2014.
 */
// Class to represent a row in the seat reservations grid
function SeatReservation(name, initialMeal) {
    var self = this;
    self.name = ko.observable(name);
    self.meal = ko.observable(initialMeal);
}

// Overall viewmodel for this screen, along with initial state
 function ReservationsViewModel() {
    var self = this;

    // Non-editable catalog data - would come from the server
    self.availableMeals = [
        { mealName: "Standard (sandwich)", price: 0 },
        { mealName: "Premium (lobster)", price: 34.95 },
        { mealName: "Ultimate (whole zebra)", price: 290 }
    ];

    // Editable data
    self.seats = ko.observableArray([
        //new SeatReservation("Steve", self.availableMeals[1]),
        //new SeatReservation("Bert", self.availableMeals[2])
        new SeatReservation("Bert", self.availableMeals[1])
    ]);

     self.addPassenger = function(name, mealIndex){
         console.log('addPassenger function running! name = ' + name);
         self.seats.push(new SeatReservation(name, self.availableMeals[mealIndex]))
     }
}

/*function AddPassenger(name, ){
        Reservation().seats().push(new SeatReservation(name, self.availableMeals[1]))
}*/
VM = new ReservationsViewModel()
//VM.seats().push(new SeatReservation("Artur", { mealName: "clean dish", price: 2999 }))
VM.addPassenger("Artur1", 2)
ko.applyBindings(VM);