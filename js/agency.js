/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

(
    function() {
        var app = angular.module('JJC', []);

        app.controller('MainCtrl', [
            '$scope',
            function($scope){

                $scope.gallery = {

                    jewlery: [
                        {
                            title: 'Bracelet',
                            imageList: [
                                'img/Jewlery/Bracelet/bracelet1.jpeg',
                                'img/Jewlery/Bracelet/flower.jpeg',
                                'img/Jewlery/Bracelet/turtle_green.jpeg',
                                'img/Jewlery/Bracelet/turtle_pink.jpeg'
                            ]
                        },

                        {
                            title: 'Earings',
                            imageList: [
                                'img/Jewlery/Earings/culture.jpeg',
                                'img/Jewlery/Earings/glittering.JPG',
                                'img/Jewlery/Earings/little bug.jpeg',
                                'img/Jewlery/Earings/little bug2.jpeg',
                                'img/Jewlery/Earings/little dolphine.jpeg',
                                'img/Jewlery/Earings/pinky turtle.jpg',
                                'img/Jewlery/Earings/WeChat_1456110479.jpeg',
                                'img/Jewlery/Earings/WeChat_1456110483.jpeg',
                                'img/Jewlery/Earings/WeChat_1456110485.jpeg',
                                'img/Jewlery/Earings/WeChat_1456110487.jpeg',
                                'img/Jewlery/Earings/WeChat_1456110490.jpeg'
                            ]
                        },

                        {
                            title: 'Necklace',
                            imageList: [
                                'img/Jewlery/Necklace/cute girl.jpeg',
                                'img/Jewlery/Necklace/cutie.JPG',
                                'img/Jewlery/Necklace/little bunny.JPG',
                                'img/Jewlery/Necklace/little sheep5.jpg',
                                'img/Jewlery/Necklace/my mr.jpeg',
                                'img/Jewlery/Necklace/pinkie turtle.JPG',
                                'img/Jewlery/Necklace/WeChat_1454095975.jpeg',
                                'img/Jewlery/Necklace/WeChat_1454096031.jpeg',
                                'img/Jewlery/Necklace/WeChat_1454096094.jpeg',
                                'img/Jewlery/Necklace/WeChat_1454096523.jpeg'
                            ]
                        },

                        {
                            title: 'Rings',
                            imageList: [
                                'img/Jewlery/Rings/wired ring_love.jpg',
                                'img/Jewlery/Rings/il_570xN.917208801_olc4.jpg',
                                'img/Jewlery/Rings/IMG_2940.JPG',
                                'img/Jewlery/Rings/IMG_2941.JPG',
                                'img/Jewlery/Rings/IMG_2942.JPG',
                                'img/Jewlery/Rings/ring2.jpg',
                                'img/Jewlery/Rings/ring3.jpg',
                                'img/Jewlery/Rings/WeChat_1454095398.jpeg',
                                'img/Jewlery/Rings/WeChat_1454096043.jpeg',
                                'img/Jewlery/Rings/WeChat_1454096096.jpeg',
                                'img/Jewlery/Rings/WeChat_1454130982.jpeg',
                                'img/Jewlery/Rings/WeChat_1454130990.jpeg',
                                'img/Jewlery/Rings/WeChat_1454131144.jpeg'
                            ]
                        }
                    ],

                    homedecor: [
                        {
                            title: 'Animals',
                            imageList: [
                                'img/HomeDecor/Animals/bunny.jpeg',
                                'img/HomeDecor/Animals/cat.jpeg',
                                'img/HomeDecor/Animals/snail.jpeg'
                            ]
                        },

                        {
                            title: 'Characters',
                            imageList: [
                                'img/HomeDecor/Character/Animation/cartoon1.JPG',
                                'img/HomeDecor/Character/Animation/cartoon2.jpeg',
                                'img/HomeDecor/Character/Animation/cartoon3.jpeg',
                                'img/HomeDecor/Character/Animation/cartoon4.jpeg',
                                'img/HomeDecor/Character/Animation/cartoon5.jpeg',
                                'img/HomeDecor/Character/Animation/cartoon6.jpeg',
                                'img/HomeDecor/Character/Animation/cartoon7.jpeg',
                                'img/HomeDecor/Character/Animation/cartoon8.jpeg',
                                'img/HomeDecor/Character/Animation/cartoon9.jpeg',
                                'img/HomeDecor/Character/Animation/egg.jpg',
                                'img/HomeDecor/Character/Figurines/bathing.JPG',
                                'img/HomeDecor/Character/Figurines/beauty.jpg',
                                'img/HomeDecor/Character/Figurines/beauty2.jpeg',
                                'img/HomeDecor/Character/Figurines/beauty3.jpeg',
                                'img/HomeDecor/Character/Figurines/beauty4.jpeg',
                                'img/HomeDecor/Character/Figurines/beauty5.jpeg',
                                'img/HomeDecor/Character/Figurines/bride.JPG',
                                'img/HomeDecor/Character/Figurines/shoes.jpeg',
                                'img/HomeDecor/Character/30.jpg',
                                'img/HomeDecor/Character/marriage.jpg',
                                'img/HomeDecor/Character/WeChat_1455855534.jpeg',
                                'img/HomeDecor/Character/WeChat_1455923177.jpeg',
                                'img/HomeDecor/Character/WeChat_1455995081.jpeg'
                            ]
                        },

                        {
                            title: 'Candles',
                            imageList: [
                                'img/HomeDecor/Candle/hollewn1.jpeg',
                                'img/HomeDecor/Candle/hollewn2.jpeg'
                            ]
                        },

                        {
                            title: 'Food',
                            imageList: [
                                'img/HomeDecor/Food/marcaron.jpeg',
                                'img/HomeDecor/Food/marcaron2.jpeg',
                                'img/HomeDecor/Food/sushi.jpg',
                                'img/HomeDecor/Food/sushi2.jpeg'
                            ]
                        },

                        {
                            title: 'Plants',
                            imageList: [
                                'img/HomeDecor/Plants/collection.jpeg',
                                'img/HomeDecor/Plants/WeChat_1454130192.jpeg',
                                'img/HomeDecor/Plants/1.pic.jpg',
                                'img/HomeDecor/Plants/8.pic.jpg'
                            ]
                        }
                    ],

                    shrinker: [
                        'img/Shrinker/shinker.jpeg',
                        'img/Shrinker/shrinkers.jpeg',
                    ],

                    driftbottle: [
                        'img/Driftbottle/bottle.jpeg'
                    ],

                    accessory: [
                        {
                            title: 'Phone Chain',
                            imageList: [
                                'img/Accessory/chain/books.jpg',
                                'img/Accessory/chain/cartoon.jpeg',
                                'img/Accessory/chain/cartoon1.jpeg',
                                'img/Accessory/chain/cartoon2.jpeg',
                                'img/Accessory/chain/sheep.jpg',
                                'img/Accessory/chain/WeChat_1454130192.jpeg',
                                'img/Accessory/chain/WeChat_1454130944.jpeg',
                                'img/Accessory/chain/WeChat_1454131146.jpeg',
                            ]
                        },

                        {
                            title: 'Fortune Cat',
                            imageList: [
                                'img/Accessory/cat/WeChat_1454095824.jpeg',
                                'img/Accessory/cat/WeChat_1454095826.jpeg'
                            ]
                        }
                    ],

                    papercut: [
                        'img/Papercut/paper1.jpeg',
                        'img/Papercut/paper2.jpeg',
                        'img/Papercut/paper3.jpeg',
                        'img/Papercut/paper4.jpeg'
                    ]
            }

                $scope.course = [
                    'img/Courses/15.pic.jpg',
                    'img/Courses/16.pic.jpg',
                    'img/Courses/17.pic.jpg'
                ]
        }]);
    }
)()