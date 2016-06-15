var app=angular.module('toBaba',[]);
app.controller('g3',function ($scope) {
    // body...
    $scope.Data=s3person;
});

app.controller('g2',function ($scope) {
    // body...
    $scope.Data=s2person;
});

app.controller('gm',function ($scope) {
    // body...
    $scope.Data=mp;
});

app.controller('pic',function($scope){
    $scope.Data=pic;
});

app.filter('to_trusted', ['$sce', function ($sce) {
return function (text) {
    return $sce.trustAsHtml(text);
};}]);