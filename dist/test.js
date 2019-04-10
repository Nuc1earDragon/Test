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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaT0wO1xyXG4gICAgICAgIGZ1bmN0aW9uIG9wZW5NZW51KCkge1xyXG4gICAgICAgICAgICB2YXIgaW1ncz1uZXcgQXJyYXkoJy4vaW1nL2NoZXZyb24tZG93bi01MTIucG5nJywnLi9pbWcvY2hldnJvbi1kb3duLTUxMl8yLnBuZycpO1xyXG4gICAgICAgICAgICB2YXIgdmlzaWJpbGl0eT1uZXcgQXJyYXkoJ25vbmUnLCdmbGV4Jyk7XHJcbiAgICAgICAgICAgIHZhciBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbl8xXCIpO1xyXG4gICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgIGklPWltZ3MubGVuZ3RoO1xyXG4gICAgICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXZfMVwiKTtcclxuICAgICAgICAgICAgYnV0dG9uLnNyYyA9IGltZ3NbaV07XHJcbiAgICAgICAgICAgIGRpdi5zdHlsZS5kaXNwbGF5PXZpc2liaWxpdHlbaV07XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gaGlnaGxpZ2h0TWVudSh0ZXh0LGltYWdlKSB7XHJcbiAgICAgICAgICAgIHZhciB0ZXh0PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRleHQpO1xyXG4gICAgICAgICAgICB2YXIgaW1hZ2U9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW1hZ2UpO1xyXG4gICAgICAgICAgICB0ZXh0LnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gICAgICAgICAgICBpbWFnZS5zcmM9IGltYWdlLnNyYy5yZXBsYWNlKCcucG5nJywgJycpKyBcIl8yLnBuZ1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBkb3dubGlnaHRNZW51KHRleHQsaW1hZ2UpIHtcclxuICAgICAgICAgICAgdmFyIHRleHQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGV4dCk7XHJcbiAgICAgICAgICAgIHZhciBpbWFnZT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbWFnZSk7XHJcbiAgICAgICAgICAgIHRleHQuc3R5bGUuY29sb3IgPSBcIiM2ZTZlNmVcIjtcclxuICAgICAgICAgICAgaW1hZ2Uuc3JjPSBpbWFnZS5zcmMucmVwbGFjZSgnXzIucG5nJywgJycpKyBcIi5wbmdcIjtcclxuICAgICAgICB9XHJcbiJdfQ==
