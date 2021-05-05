if (/section/.test(window.location.href)) {
        document.getElementById('hiddenoverview').style.display = 'none';
      }

      $(function() {
        if ( $( "#accordion" ).length ) {
                $("#accordion").accordion({
                        header: "h5",
                        collapsible: false,
                        heightStyle: "content",
                        active: 0,
                });
         }
       });
