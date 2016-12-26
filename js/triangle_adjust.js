function triangleAdjust() {
    var elem_full_down_arrow = document.getElementById("home");
   /* var display = document.getElementById("display");*/
    var styling_down_arrow = document.querySelectorAll(".triangle-down");
    
    var up_triangle = document.getElementsByClassName("img-container");
    var styling_up_arrow = document.querySelectorAll(".news-triangle");
    
    for(i=0;i<up_triangle.length;i++){
        up_triangle_width = up_triangle[i].clientWidth;
        styling_up_arrow[i].style.borderWidth = '20px 0 0 '+up_triangle_width+'px';

    }
    

full_down_arrow_container_width = Math.floor(elem_full_down_arrow.clientWidth);

styling_down_arrow[0].style.borderWidth = '50px '+full_down_arrow_container_width + 'px 0 0'; 
}