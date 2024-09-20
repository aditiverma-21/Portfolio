function initMap() {
    var location = { lat: 21.251384, lng: 81.629641 }; // Raipur, Chhattisgarh, India
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 20,
        center: location,
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}
const profileImage = document.querySelector('.profile-img');
const imageContainer = document.querySelector('.image-container');

imageContainer.addEventListener('mousemove', (event) => {
    const xAxis = (window.innerWidth/2- event.pageX)/10;
    const yAxis = (window.innerHeight/2- event.pageY)/10;

    profileImage.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

imageContainer.addEventListener('mouseleave', () => {
    profileImage.style.transform = 'rotateY(0deg) rotateX(0deg)';
});
