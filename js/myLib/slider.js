let lstImages = document.getElementsByClassName('slider')[0].getElementsByTagName('img');
let title = document.getElementById('titleSlider');
let lstButton = document.getElementsByClassName('slider')[0].getElementsByTagName('button');
let call = true;


let initSlider = () => {
    lstImages[indexCurrent].style.opacity = 1;
    title.innerText = lstImages[indexCurrent].getAttribute('title');
    if (showButton == false) {
        let lenghtButton = lstButton.length;
        for (i = 0; i < lenghtButton; i++) {
            lstButton.item(0).remove();
        }
    }
    // loop ? setInterval(getNextImage, duration) : "";
    if(loop){
        setInterval(getNextImage, duration);
    }
};

let setImage = (indexOld) => {
    for (i = 0; i < lstImages.length; i++) {
        if (i != indexOld) {
            lstImages[i].style.opacity = 0;
        }
    }
    let opacity = 0;
    let opacityImageOld = 1;
    let setOpacity = setInterval(() => {
        lstImages[indexCurrent].style.opacity = opacity;
        lstImages[indexOld].style.opacity = opacityImageOld;
        title.innerText = lstImages[indexCurrent].getAttribute('title');
        if (opacity >= 1 && opacityImageOld <= 0) {
            call = true;
            clearInterval(setOpacity);
            return;
        }
        opacity += 0.02;
        opacityImageOld -= 0.02;
    }, duration / 100);
}   
let getNextImage = () => {
    if (call == false) {
        return;
    }
    if (indexCurrent == lstImages.length - 1) {
        indexCurrent = 0;
        setImage(lstImages.length - 1);
    }
    else {
        indexCurrent++;
        setImage(indexCurrent - 1);
    }
    call = false;
}
let getPrevImage = () => {
    if (call == false) {
        return;
    }
    if (indexCurrent == 0) {
        indexCurrent = lstImages.length - 1;
        setImage(0);
    }
    else {

        indexCurrent--;
        setImage(indexCurrent + 1);
    }
    call = false;
}


