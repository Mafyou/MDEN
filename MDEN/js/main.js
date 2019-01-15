var app = angular.module('angularApp', []);

app.controller('PhotosController', ['$scope',
    function ContentCtrl($scope) {
        $scope.Images = [];
        for (let i = 1; i < 15; i++) {
            if (i < 10) $scope.Images.push("Image0" + i + ".JPG");
            else $scope.Images.push("Image" + i + ".JPG");
        }
    }
])
    .directive('myPhoto', function () {
    return {
        template: `
            <div class='carousel-item {{firstSlide}}' ng-repeat="image in Images">
                <a class="image-link" href="../img/selected/raw/{{image}}">
                    <img class='d-block w-100' src="../img/selected/resized/{{image}}" />
                </a>
            </div>
            `
    };
    });

$(document).ready(function () {
    $('.carousel-inner > div > div:first-child').addClass('active');
    $('.image-link').magnificPopup({ type: 'image' });
    $('.carousel').carousel();
});