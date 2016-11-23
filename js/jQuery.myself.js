/**
 * Created by Administrator on 2016/10/19.
 */
var i = 3;
    jQuery.fn.extend({
        toLeft:function() {
            $(".arrow_left").click(function () {
                $(".pic").eq(i).css("opacity", 0);
                $(".pic:lt(i)").css("opacity", 1);
                i--;
                if (i == -1) {
                    i = 3;
                    $(".pic").css("opacity", 1);
                }
            })
        },
            toRight:function(){
                $(".arrow_right").click(function () {
                    i++;
                    $(".pic").eq(i).css("opacity", 1);
                    if (i == 4) {
                        i = 0;
                        $(".pic").css("opacity", 0);
                        $(".pic").eq(i).css("opacity", 1);
                    }
                });
            }
    });




