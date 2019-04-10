var i=0;
        function openMenu() {
            var imgs=new Array('./img/chevron-down-512.png','./img/chevron-down-512_2.png');
            var visibility=new Array('none','flex');
            var button = document.getElementById("button_1");
            i++;
            i%=imgs.length;
            var div = document.getElementById("div_1");
            button.src = imgs[i];
            div.style.display=visibility[i];
             }
        function highlightMenu(text,image) {
            var text=document.getElementById(text);
            var image=document.getElementById(image);
            text.style.color = "white";
            image.src= image.src.replace('.png', '')+ "_2.png";
        }
        function downlightMenu(text,image) {
            var text=document.getElementById(text);
            var image=document.getElementById(image);
            text.style.color = "#6e6e6e";
            image.src= image.src.replace('_2.png', '')+ ".png";
        }
