(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });


    // Progress Bar
    $('.pg-bar').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, { offset: '80%' });


    // Calender
    $('#calender').datetimepicker({
        inline: true,
        format: 'L'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav: false
    });


    // Worldwide Sales Chart
    // var ctx1 = $("#worldwide-sales").get(0).getContext("2d");
    // const mixedChart = new Chart(ctx1, {
    //     data: {
    //         datasets: [{
    //             type: 'bar',
    //             label: 'Luong nuoc tuoi/ngay',
    //             data: [0.10, 0.20, 0.30, 0.2, 0.15, 0.1, 0.4],
    //             backgroundColor: "rgba(255,230,123,0.5)",
    //             yAxisID: 'y1',  // Assign to left y-axis
    //             fill: true
    //         }, {
    //             type: 'line',
    //             label: 'Do am dat',
    //             data: [9, 30, 29, 20, 33, 15, 27, 33, 18],
    //             backgroundColor: "blue",
    //             yAxisID: 'y2'   // Assign to right y-axis
    //         }],
    //         labels: ['0', '5', '10', '15', '20', '25', '30'],
    //         xAxisID: 'x'
    //     },
    //     options: {
    //         responsive: true,
    //         scales: {
    //             x: {
    //                 title: {
    //                     position: 'bottom',
    //                     display: true,
    //                     text: "Time/Day",
    //                     font: {
    //                         size: 18
    //                     }
    //                 }
    //             },
    //             y1: {  // Left y-axis
    //                 type: 'linear',
    //                 position: 'left',
    //                 ticks: {
    //                     beginAtZero: true
    //                 },
    //                 title: {
    //                     display: true,
    //                     text: "Luong nuoc tuoi",
    //                     font: {
    //                         size: 14
    //                     }
    //                 }
    //             },
    //             y2: {  // Right y-axis
    //                 type: 'linear',
    //                 position: 'right',
    //                 ticks: {
    //                     beginAtZero: true
    //                 },
    //                 grid: {
    //                     drawOnChartArea: false  // Prevent grid lines from overlapping
    //                 },
    //                 title: {
    //                     display: true,
    //                     text: "Do am dat(%)",
    //                     font: {
    //                         size: 14
    //                     },
    //                 }
    //             }
    //         }
    //     }
    // });



    // Salse & Revenue Chart
    var ctx2 = $("#salse-revenue").get(0).getContext("2d");
    var myChart2 = new Chart(ctx2, {
        type: "line",
        data: {
            labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
            datasets: [{
                label: "Salse",
                data: [15, 30, 55, 45, 70, 65, 85],
                backgroundColor: "rgba(0, 156, 255, .5)",
                fill: true
            },
            {
                label: "Revenue",
                data: [99, 135, 170, 130, 190, 180, 270],
                backgroundColor: "rgba(0, 156, 255, .3)",
                fill: true
            }
            ]
        },
        options: {
            responsive: true
        }
    });

})(jQuery);
