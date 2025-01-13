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


    // biểu đồ Lượng Nước Tưới Thực Tế Được Thiết Lập Bởi Công Ty Wefar Farm
    var ctx1 = $("#actual_water_Volume_chart").get(0).getContext("2d");
    const myChart1 = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ nhật"],
            datasets: [{
                label: "Lượng nuóc tưới (lít)",
                data: [4000, 4000, 4000, 4000, 4000, 4000, 4000],
                backgroundColor: "rgba(0, 156, 255, .5)",
                fill: true
            }]
        },
        options: {
            responsive: true,
        }
    });



    // // Salse & Revenue Chart
    var ctx2 = $("#predict_water_Volume_chart").get(0).getContext("2d");
    var myChart2 = new Chart(ctx2, {
        type: "bar",
        data: {
            labels: ["7:00-8:00", "8:00-9:00", "9:00-10:00", "10:00-11:00", "11:00-12:00", "12:00-13:00", "13:00-14:00", "14:00-15:00", "15:00-16:00", "16:00-17:00"],
            datasets: [{
                label: "Lượng nước (lít)",
                data: [400, 0, 400, 0, 400, 800, 800, 400, 400, 400],
                backgroundColor: "rgba(0, 156, 255, .5)",
                fill: true
            }
            ]
        },
        options: {
            responsive: true
        }
    });

})(jQuery);
