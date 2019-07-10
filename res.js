!function(root, name, make) {
    root[name] = make();
}(this, 'res', function() {

    var one = { dpi: 96, dpcm: 96 / 2.54 }

    // devicePixelRatio: Webkit (Chrome/Android/Safari), Opera (Presto 2.8+), FF 18+
    function ie() {
        return Math.sqrt(screen.deviceXDPI * screen.deviceYDPI) / one.dpi;
    }

    function dppx() {
        return window.devicePixelRatio
            || (window.matchMedia && window.matchMedia('(min-resolution: 2dppx), (-webkit-min-device-pixel-ratio: 1.5), (-moz-min-device-pixel-ratio: 1.5), (min-device-pixel-ratio: 1.5)').matches ? 2 : 1)
            || ie()
            || 1;
    }

    function dpcm() {
        return dppx() * one.dpcm;
    }

    function dpi() {
        return dppx() * one.dpi;
    }

    function isHighDensity() {
        return ((window.matchMedia && (window.matchMedia('only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)').matches)) || (window.devicePixelRatio && window.devicePixelRatio > 1.3));
    }

    function isRetina() {
        return ((window.matchMedia && (window.matchMedia('only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx), only screen and (min-resolution: 75.6dpcm)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min--moz-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2)').matches)) || (window.devicePixelRatio && window.devicePixelRatio >= 2)) && /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
    }

    return { 'dppx': dppx, 'dpi': dpi, 'dpcm': dpcm, 'isHighDensity': isHighDensity, 'isRetina': isRetina };

});
