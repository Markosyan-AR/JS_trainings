/**
 * Created by amarkosyan on 02.12.2014.
 */
function WebMailVM(){
    var self = this;
    self.folders = ['Inbox', 'Outbox', 'Spam', 'Deleted'];
    self.selectedFolder = ko.observable();
    self.selectedFolderData = ko.observable();

    self.goToFolder = function(folder) {
        self.selectedFolder(folder);
        console.log(folder);
        /*self.selectedFolder = folder;
        self.selectedFolder.valueHasMutated();*/
        //$.get('/mail', { folder: folder }, self.selectedFolderData);
        //$.getJSON('./data', {folder: folder + '.txt'}, self.selectedFolderData);
        folderName = 'data/'+folder+'.txt';
        $.getJSON(folderName,
            function(data){
                alert('get json - done works');
                self.selectedFolderData(data);
                console.log(data.mails[0]);

            })
            .success(function() {
                alert( "success" );
            })
            .fail(function(data) {
                alert( "error" );
                console.log(data);
            })
            .always(function() {
                alert( "complete" );
            });

        /*$.ajax({
            type: 'GET',
            dataType: 'json',
            url: folderName,
            success: function(data){
                console.log(data);
                alert(1);
            }
        });*/
    }


    /*self.getMailData = function (folder){
        $.getJSON()
    }*/
    self.getMailData = function(folder){
        folderName = 'data/'+folder+'.txt';
        var mailDataObj;
        $.getJSON(folderName)
            //.success(function(data){console.log(data);mailDataObj = data});
        //return mailDataObj;
            .done(function(data){
                self.selectedFolderData(data);
                console.log(data.mails[0]);

            });

        //mailDataObj = JSON.parse();
        //console.log(mailDataObj);
    }

    self.goToFolder('Inbox');

}

vm = new WebMailVM();
ko.applyBindings(vm);