/**
 * Created by Administrator on 2016/10/20.
 */
(function($){
    $.fn.extend({
        "startSlider":function(obj){
            var _self = $(this);
            var _default = {
                mainSlider :".mainSlider",
                speedTime:3000
            };
            var o = $.extend(true,_default,obj);

            // 设置样式
            $(this).css({
                position:"relative",
                width:550,
                height:313,
                margin:"0 auto"
            });
            $(this).find("li").css({
                listStyle:"none"});
            $(this).find(o.mainSlider+" li").css({
                position:"absolute",
                left:0,
                top:0,
                width:"100%",
                display: "none"
            });
            $(this).find(o.mainSlider).css({
                width:"100%"
            });

            $(this).find(o.mainSlider +" li:first-child").css({display:"block"});
            $(this).find(".control").css({position:"absolute",top:"50%",marginTop:-30,width:"100%"});
            $(this).find(".control .prev,.control .next").css({ width: 40, height: 60, cursor: "pointer"});

            $(this).find(".control .prev").css({
                background: "url(../img/png/9.png)",
                float:"left"
            });
            $(this).find(".control .next").css({
                background: "url(../img/png/8.png)",
                float:"right"
            });
            $(this).find(".list").css({
                padding:0,
                bottom:30,
                left:"50%",
                /*当元素宽度不确定时，可以使用translate来设置左右居中*/
                transform:"translate(-50%,0)",
                position:"absolute"
            });
            $(this).find(".list li").css({
                float: "left",
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#ffFFFF",
                marginRight:10,
                cursor:"pointer"
            });
            $(this).find(".list li.active").css({
                background:"purple"
            });
            var i =0;
            var size = $(this).find(o.mainSlider +" li").length;
            var timer = setInterval(function(){

                i++;
                if(i >= size){
                    i = 0;
                }
                // 执行动画
                run();
            },o.speedTime);

            function run(){
                _self.find(o.mainSlider +" li").eq(i).stop().fadeIn(800);
                _self.find(o.mainSlider +" li").eq(i).siblings().stop().fadeOut(800);

                _self.find(".list li").eq(i).css("background","purple");
                _self.find(".list li").eq(i).siblings().css("background","#ffffff");
            }

            // 箭头的点击事件（下一张）
            $(this).find(".next").click(function(){
                i++;
                if(i >= size){
                    i = 0;
                }
                run();
            });
// 箭头点击事件（上一张）
            $(this).find(".prev").click(function(){
                i--;
                if(i<0){
                    i = size -1;
                }
                run();
            });

            // 当鼠标悬浮在轮播图上面的时候，清除定时器
            $(this).hover(
                function(){
                    clearInterval(timer);
                },
                function(){
                    timer = setInterval(function(){

                        i++;
                        if(i >= size){
                            i = 0;
                        }
                        // 执行动画
                        run()
                    },o.speedTime);
                }
            )

            // 给原点加点击事件
            $(this).find(".list li").click(function(){
                i = $(this).index();
                run()
            })
        }
    })
})(jQuery);