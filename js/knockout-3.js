/**
 * Created by amarkosyan on 02.12.2014.
 */
function WebMailVM(){
    var self = this;
    self.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
    self.selectedFolder = ko.observable();
    self.selectedFolderData = ko.observable();
    self.selectedMailData = ko.observable();

    self.goToFolder = function(folder) {
        self.selectedFolder(folder);
        //console.log(folder);
        self.selectedMailData(null);
        folderName = 'data/'+folder+'.txt';
        $.getJSON(folderName)
            .always(function(data) {
                self.selectedFolderData(eval( "("+data.responseText+")"));
                //console.log(self.selectedFolderData());
            });
    }

    self.goToMail = function(mail) {
        console.log(mail);
        self.selectedFolder(mail.folder);
        var data = self.selectedFolderData;
        console.log(data);

        self.selectedFolderData(null); // Stop showing a folder
        self.selectedMailData(mail);
        /*$.getJSON(folderName)
            .always(function(data) {
                self.selectedFolderData(eval( "("+data.responseText+")"));
            });*/
    };

    self.goToFolder('Inbox');

}

vm = new WebMailVM();
ko.applyBindings(vm);