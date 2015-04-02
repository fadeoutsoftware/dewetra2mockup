/**
 * Created by p.campanella on 01/02/14.
 */

var TemplateController = (function() {
    function TemplateController($scope, $location, oConstantsService, $log, $route) {
        this.m_oScope = $scope;
        this.m_oLocation  = $location;
        this.m_oConstantsService = oConstantsService;
        this.m_oScope.m_oController = this;
        this.m_oRoute = $route;
        this.m_oLog = $log;

        $scope.$on('$locationChangeStart', function(event) {
            resizeMap();
        });


        /**
         * base layers
         */
        var osmBasic = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution:
                '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
            maxZoom: 18
        });
        var osmMapquest = L.tileLayer('http://otile{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png', {
            subdomains: "12",
            attribution:
                '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors. Tiles courtesy of <a href="http://www.mapquest.com/" target="_blank">MapQuest</a> <img src="https://developer.mapquest.com/content/osm/mq_logo.png">',
            maxZoom: 18
        });
        var osmHumanitarian = L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution:
                '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors. Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>',
            maxZoom: 18
        });
        var ocmCycle = L.tileLayer('http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', {
            attribution:
                '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors. Tiles courtesy of <a href="http://www.thunderforest.com/" target="_blank">Andy Allan</a>',
            maxZoom: 18
        });
        var ocmTransport = L.tileLayer('http://{s}.tile2.opencyclemap.org/transport/{z}/{x}/{y}.png', {
            attribution:
                '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors. Tiles courtesy of <a href="http://www.thunderforest.com/" target="_blank">Andy Allan</a>',
            maxZoom: 18
        });

        /*
        var googleHybrid = new L.Google('HYBRID');
        var googleMap = new L.Google('ROADMAP');
        var googleTerrain = new L.Google('TERRAIN');
        var googleSatelite = new L.Google('SATELLITE');
        */

        /**
         * the map
         */
        var dewetraMap = L.map('map', {
            zoomControl: false,
            layers: [osmBasic]
        });

        dewetraMap.setView([45,8.5], 8);

        /**
         * scale control
         */
        L.control.scale({
            position: "bottomright",
            imperial: false
        }).addTo(dewetraMap);

        /**
         * layers control
         */
        var layersControl = L.control.layers(
            {
                "Standard": osmBasic,
                "Cycle Map": ocmCycle,
                "Transport Map": ocmTransport,
                "MapQuest Open": osmMapquest,
                "Humanitarian": osmHumanitarian,
                /*"Google Hybrid": googleHybrid,
                "Google Map": googleMap,
                "Google Satellite": googleSatelite,
                "Google Terrain": googleTerrain,*/
            },
            {

            }
        );
        layersControl.addTo(dewetraMap);
    }

    TemplateController.prototype.login = function() {

    }


    TemplateController.$inject = [
        '$scope',
        '$location',
        'ConstantsService',
        '$log',
        '$route'
    ];

    return TemplateController;
}) ();