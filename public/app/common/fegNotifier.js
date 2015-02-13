angular.module('app').value('fegToastr', toastr);

angular.module('app').factory('fegNotifier', function(fegToastr){
    return {
        notify: function(msg) {
            fegToastr.success(msg);
            console.log(msg);
        }
    }
})