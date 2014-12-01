/**
 * Created by amarkosyan on 30.10.2014.
 */
//for knockout-1.html
function AppViewModel() {
    this.firstName = ko.observable("Art");
    this.lastName = ko.observable("Mar");
    this.fullName = ko.computed(function(){
            return this.firstName() + " " + this.lastName();
        }, this);
    this.capitalizeLastName = function(){
        var currentVal = this.lastName();
        this.lastName(currentVal.toUpperCase());
    }
}

ko.applyBindings(new AppViewModel());