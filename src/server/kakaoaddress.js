function closeDaumPostcode(element_layer) {
    // element_layer.parentElement.style.display = 'none';
    element_layer.parentElement.style.height = '0%';
    element_layer.innerHTML = "";
}
function sample2_execDaumPostcode(element_layer) {

    new daum.Postcode({
        oncomplete: function (data) {
            var addr = ''; // 주소 변수
            var extraAddr = ''; // 참고항목 변수
            if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                addr = data.roadAddress;
            } else { // 사용자가 지번 주소를 선택했을 경우(J)
                addr = data.jibunAddress;
            }
            if (data.userSelectedType === 'R') {

                if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
                    extraAddr += data.bname;
                }
                if (data.buildingName !== '' && data.apartment === 'Y') {
                    extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
                if (extraAddr !== '') {
                    extraAddr = ' (' + extraAddr + ')';
                }

                document.getElementById(element_layer.parentElement.className).innerHTML = addr + extraAddr + `<img class="arrow" src="./src/assets/svg/arrow.svg">`;

            } else {
                document.getElementById(element_layer).value = '';
            }

            element_layer.parentElement.style.height = '0%';
        },
        width: '100%',
        height: '100%',
        maxSuggestItems: 5
    }).embed(element_layer);
    element_layer.parentElement.style.height = '100%';
    const x = document.createElement('div');
    x.innerHTML = `<img src="//t1.daumcdn.net/postcode/resource/images/close.png" id="btnCloseLayer"    onclick="closeDaumPostcode(${element_layer.id})" >`;
    element_layer.appendChild(x).classList.add('remove');
    initLayerPosition(element_layer);
}

function initLayerPosition(element_layer) {

    element_layer.style.width = '100%';
    element_layer.style.height = '100%';


}