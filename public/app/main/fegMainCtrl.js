angular.module('app').controller('fegMainCtrl', function($scope){
    $scope.articles = [
        {title: 'c# for Developers', author: 'Joe eames' , url: 'https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx', categorie:'javascript' ,featured: true, added: new Date('02/11/2014')},
        {title: 'nodejs for Developers', author: 'dan wahlin' , url: 'www.nodejs.org', categorie:'nodejs' ,featured: true, added: new Date('02/25/2014')},
        {title: 'angularjs for Developers', author: 'Joe Eames' , url: 'www.angularjs.org', categorie:'angularjs' ,featured: false, added: new Date('04/11/2014')},
        {title: 'overapi for Developers', author: 'john papa' , url: 'www.overapi.com', categorie:'mix' ,featured: true, added: new Date('05/12/2014')},
        {title: 'w3schools for Developers', author: 'van soni' , url: 'www.w3schools.com', categorie:'mix' ,featured: false, added: new Date('06/11/2014')},
        {title: 'stackoverflow for your q&a', author: 'john papa' , url: 'www.stackoverflow.com', categorie:'javascript' ,featured: true, added: new Date('07/21/2014')},
        {title: 'facebook for social media', author: 'dan wahlin' , url: 'www.facebook.com', categorie:'social' ,featured: false, added: new Date('08/20/2014')},
        {title: 'yahoo for social media', author: 'Joe Eames' , url: 'www.yahoo.com', categorie:'social' ,featured: false, added: new Date('09/11/2014')},
        {title: 'google for chome-Developers', author: 'john papa' , url: 'www.google.com', categorie:'javascript' ,featured: false, added: new Date('10/15/2014')}
    ];
});