const form = document.forms['form'];

form.addEventListener('submit', function(e){
 e.preventDefault();
  const decNum = form.querySelector('#numdec').value;
  const binaryNum = dec2bin(decNum);
  form.querySelector('#numbin').value = binaryNum;

});

function dec2bin(dec) {

    return (dec >>> 0).toString(2);
}
