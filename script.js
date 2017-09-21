// async "pollyfill" for Node 6 (LTS)
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const puppeteer = require('puppeteer');

_asyncToGenerator(function* () {
  // Create an instance of the chrome browser
  const browser = yield puppeteer.launch();

  // Create a new page
  const page = yield browser.newPage();

  // Set some dimensions to the screen
  page.setViewport({
      width: 1200,
      height: 900
  });

  var screenshotsToMake = {
    "1": "http://www.embl.org",
    "2": "http://www.ebi.ac.uk",
    "3": "http://www.ebi.ac.uk/research",
    "4": "http://www.ebi.ac.uk/training",
    "5": "http://www.ebi.ac.uk/services",
    "6": "http://www.ebi.ac.uk/about/events",
    "7": "http://www.ebi.ac.uk/about/news",
    "8": "http://www.embl.de",
    "9": "https://www.embl.de/research/index.php",
    "10": "https://www.embl.de/training/index.php",
    "11": "https://www.embl.de/training/events/index.php",
    "12": "https://www.embl.de/services/index.html",
    "13": "https://www.embl.de/aboutus/public-events/index.html",
    "14": "https://news.embl.de/"
  }

  for (var url in screenshotsToMake) {
    yield page.goto(screenshotsToMake[url]);
    yield page.screenshot({
        path: url+'.png'
    });

  }

  // Close Browser
  browser.close();
})();
