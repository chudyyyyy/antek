let map;
let activeInfoWindow;

function initMap() {

    const mapOptions = {
        center: { lat: 52.409538, lng: 16.931992}, 
        zoom: 10
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    const locations = [
        {
            position: { lat: 52.407078, lng: 16.933873 },
            title: "MTP Poznań",
            info: "ul. Bukowska",
            icon: "https://png.pngtree.com/png-vector/20190925/ourmid/pngtree-store-glyph-icon-vector-png-image_1742908.jpg",
            open_day: "Poniedziałek-Piątek",
            open: "10:00-18:00",
        },
        {
            position: { lat: 52.423419, lng: 16.919827 },
            title: "MTP Poznań",
            info: "ul. Grunwaldzka",
            icon: "https://png.pngtree.com/png-vector/20190925/ourmid/pngtree-store-glyph-icon-vector-png-image_1742908.jpg",
            open_day: "Poniedziałek-Sobota",
            open: "10:00-18:00",
        },
        {
            position: { lat: 52.408197, lng: 16.958411 }, 
            title: "MTP Poznań",
            info: "ul. Maltańska",
            icon: "https://png.pngtree.com/png-vector/20190925/ourmid/pngtree-store-glyph-icon-vector-png-image_1742908.jpg",
            open_day: "Poniedziałek-Sobota",
            open: "10:00-18:00",
        }
    ];

    locations.forEach((location) => {

        const marker = new google.maps.Marker({
            position: location.position,
            map: map,
            title: location.title,
            icon: {
                url: location.icon,
                scaledSize: new google.maps.Size(35, 35)
            },
            animation: google.maps.Animation.DROP
        });

        const infowindow = new google.maps.InfoWindow({
            content: `<div class="infowindow-content">
                        <strong>${location.title}</strong><br>
                        <strong>Dni otwarcia:: </strong> ${location.open_day}
                        <br><strong>Godziny otwarcia: </strong>${location.open}<br>${location.info}
                      </div>`
        });

        marker.addListener('click', () => {
            if (activeInfoWindow) {
                activeInfoWindow.close();
            }
            infowindow.open(map, marker);
            activeInfoWindow = infowindow;
        });
    });
}