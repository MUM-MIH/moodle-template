<script type="text/javascript">// <![CDATA[
window.onload = function() {document.querySelectorAll('.single-section h2').forEach($heading => {

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
// ]]></script>
<script type="text/javascript">// <![CDATA[
document.querySelectorAll('a.anchor-link').forEach($anchor => {
    $anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start' //scroll to top of the target element
        });
    });
});
// ]]></script>
