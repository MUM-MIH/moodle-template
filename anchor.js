window.onload = function() {document.querySelectorAll('.single-section h2, h3').forEach($heading => {

    //create id from heading text
  var id = $heading.getAttribute("id") || $heading.innerText.toLowerCase().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').replace(/ +/g, '-');

  //add id to heading
  $heading.setAttribute('id', id);

  //append parent class to heading
  $heading.classList.add('anchor-heading');

  //create anchor
  $anchor = document.createElement('a');
  $anchor.className = 'anchor-link';
  $anchor.href = '#' + id;
  $anchor.innerText = '#';

  //append anchor after heading text
  $heading.appendChild($anchor);
});}
