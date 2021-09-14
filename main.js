const images = [
  'player/pic-1.jpg' ,
  'player/pic-2.jpg' ,
  'player/pic-3.jpg' ,
  'player/pic-4.jpg' ,
  'player/pic-5.jpg' ,
  'player/pic-6.jpg' ,
];
let imgIndex = 0;
let setImg = document.getElementById('slider');
setInterval(() => {
    if (imgIndex >= images.length)
    {
        imgIndex = 0;
    }
    const imgUrl = images[ imgIndex ];
    setImg.setAttribute('src', imgUrl);
    imgIndex++;
}, 2000)
