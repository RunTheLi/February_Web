// animations.js
export default function initAnimations() {
    $(document).on("mouseenter", ".container", function () {
        $(".card").stop().animate({ top: "-90px" }, "slow");
    });

    $(document).on("mouseleave", ".container", function () {
        $(".card").stop().animate({ top: "5px" }, "slow");
    });

    $(document).on("click", ".valentines", function () {
        $(".hearts .one").stop().animate({ top: "-150px", opacity: 0 }, 1000);
        $(".hearts .two").stop().animate({ top: "-150px", opacity: 0 }, 1500);
        $(".hearts .three").stop().animate({ top: "-150px", opacity: 0 }, 2000);
        $(".hearts .four").stop().animate({ top: "-150px", opacity: 0 }, 2500);
        $(".hearts .five").stop().animate({ top: "-150px", opacity: 0 }, 3000);
    });

    $(document).on("animationend", ".hearts div", function () {
        $(this).css({ opacity: 1, top: "50px" });
    });
}