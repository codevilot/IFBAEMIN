
const baswitch = document.createElement("div");
const body = document.querySelector('body').appendChild(baswitch);

baswitch.classList.add('baswitch');
baswitch.innerHTML = `
<span>
BEFORE
</span>
<input type="checkbox" id="switch">

<label for="switch" class="switch_label">
<span class="onf_btn"></span>
</label>
<span>
AFTER
</span>
`
const chb = baswitch.querySelector('#switch');

chb.addEventListener('change', function(){

    if(this.checked){
        document.querySelector('.before').classList.add('off');
        document.querySelector('.after').classList.remove('off');
    }else{
        document.querySelector('.after').classList.add('off');
        document.querySelector('.before').classList.remove('off');
    }
} )
