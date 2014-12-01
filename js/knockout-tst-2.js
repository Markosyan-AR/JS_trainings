/**
 * Created by amarkosyan on 05.11.2014.
 */
// Class to represent a row in the seat reservations grid
function SeatReservation(name, initialMeal) {
    var self = this;
    self.name = ko.observable(name);
    self.meal = ko.observable(initialMeal);
    self.formattedPrice = ko.computed(function(){
        var price = self.meal().price;
        return price ? "$"+price.toFixed(2):"None"
    })
}

/*var availableMeals = ko.observableArray([
 { mealName: "Standard (sandwich)", price: 0, id:0 },
 { mealName: "Premium (lobster)", price: 34.95, id:1 },
 { mealName: "Ultimate (whole zebra)", price: 290, id:2 }
 ]);*/

// Overall viewmodel for this screen, along with initial state
function ReservationsViewModel() {
    var self = this;

    // Non-editable catalog data - would come from the server
    self.availableMeals = ko.observableArray([
        { mealName: "Standard (sandwich)", price: 0, id:0 },
        { mealName: "Premium (lobster)", price: 34.95, id:1},
        { mealName: "Ultimate (whole zebra)", price: 290, id:2}
    ]);

    // Editable data
    self.seats = ko.observableArray([
        new SeatReservation("Steve", self.availableMeals()[1]),
        new SeatReservation("Bert", self.availableMeals()[2]),
        new SeatReservation("Bert", self.availableMeals()[0])
    ]);

    self.addMeal = function(){
        name = $('#mealName').val()
        price = parseFloat($('#mealPrice').val())
        console.log('addMeal function running! name= '+name);
        self.availableMeals.push({mealName: name, price: price})
    }

    self.addPassenger = function(){
        name = $('#userName').val();
        //mealIndex = $('#userMeal').val()-1;
        mealIndex = document.getElementById("userMeal").selectedIndex
        console.log('addPassenger function running! name = ' + name);
        self.seats.push(new SeatReservation(name, self.availableMeals()[mealIndex]))
    }

    self.removePassenger = function(seat) { self.seats.remove(seat) }

    self.totalPrice = ko.computed(function(){
        var total = 0;
        for (var i = 0; i<self.seats().length;i++){
            total += self.seats()[i].meal().price;
            //console.log(self.seats()[i].meal().price);
        }
        return total;
    })
}

/*function AddPassenger(name, ){
 Reservation().seats().push(new SeatReservation(name, self.availableMeals[1]))
 }*/
VM = new ReservationsViewModel();
console.log('ViewModel were created');
//VM.seats().push(new SeatReservation("Artur", { mealName: "clean dish", price: 2999 }))
//VM.addPassenger("Artur1", 2)

editTable = function(){
    $('.not-editable,.editable').toggleClass('hidden1');
    //console.log($('#edit-table').text());
    $('#edit-table').text()=='Edit Table'?$('#edit-table').text('Save'):$('#edit-table').text('Edit Table');
}
console.log('ko.applyBindings');
ko.applyBindings(VM);