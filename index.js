!function(root, name) {
  var res = root[name];
  var precision = 1 / 10;
  var out = document.getElementById('output');

  function isClose(a, b) {
    var diff = a - b;

    if (diff !== diff) {
      throw new Error('Cannot compare');
    }

    return precision >= Math.abs(diff);
  }

  function log(string) {
    out.innerHTML += string + "\n";
  }

  log('Device and Viewport Size' + "\n");

  log('screen size ' + screen.width + 'x' + screen.height);
  log('client size ' + document.documentElement.clientWidth + 'x' + document.documentElement.clientHeight);

  log('');

  log('Device Resolution' + "\n");

  var units = ['dpi', 'dpcm', 'dppx'];

  units.forEach(function(unit) {
    log(unit + ' ' + res[unit]());
  });

  log('dppx to dpi ' + isClose(96 * res.dppx(), res.dpi()));
  log('dpcm to dpi ' + isClose(2.54 * res.dpcm(), res.dpi()));
}(this, 'res');
