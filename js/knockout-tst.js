/**
 * Created by amarkosyan on 30.10.2014.
 */
function AppViewModel() {
    this.firstName = ko.observable("Art");
    this.lastName = ko.observable("Mar");
}

ko.applyBindings(new AppViewModel());