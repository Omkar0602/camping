'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "f2284b1978beaa735c4fe866601f8093",
".git/config": "f56d400b373088ddddca6e5c4978ea9c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "bda1a76ef0fb21fe479206030fe0f8a9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "066ffd3c79d316c326371b9d3448810e",
".git/logs/refs/heads/master": "066ffd3c79d316c326371b9d3448810e",
".git/logs/refs/remotes/origin/master": "162fc9f93e209a73b581f7320b35cdcc",
".git/objects/01/fc445735549e7a9f5961552dd9a5badaef02ea": "56ba7e86c3656db2ee10965259d4b0e2",
".git/objects/03/0a7d22136efa23ac371bf106700fac00a3a2dd": "8ddb3c458acaba146a38cf7f3506ef03",
".git/objects/06/9a564d5f6e8f895242c834f0bfa88faf822867": "7f06293b7edf729c1ed4d43b550e3cb0",
".git/objects/09/3939f3157edd72421e8c9345035df075a6c3ac": "5ff4f9954dd225cb353e3ac7e655ee1c",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0e/0c7823f2158b1668c9c707a5a0911211fe7ce6": "4d3063aa8f23d30ed3c2619f529f69c4",
".git/objects/0f/fe00b92b2e2d21c1f33024760f685cbb7ffdb8": "6655e717f185770489b36816ed0d52de",
".git/objects/1c/8f5e910bfb1a4a2871eeedc6eae01ca25e7ce1": "7d52f9ae3b3fac811829018aea2c668f",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/2c127c1beb8cd5e1903feb2b59c498a487f1f8": "a341088fbcce0bd4d47fc44a4129b0a7",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2a/33d77e0053ae2865b6307ca9c1062af5a53e7d": "1d33aaf1d1fe2ce58813a7041bd2d56b",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "4593012a42df8795cd0ae089a5b7aaaf",
".git/objects/2b/a3b094b8f2805ff501ef57b9f89574d7d1887b": "9b38d3cb06c742f0df56f5ddc7b8104b",
".git/objects/2b/b7b1ea5931597af97a08a1e45845c7dda664be": "3bb4fd99e28e04889d6a952caa1fc09c",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2f/b4ddd373238e8ad6fe4c2296ee8ab3d404466e": "6ba8e39ee8b6f429b69d8c3f75514e03",
".git/objects/30/3446876243a2d8bc0a776f5fd37f3a9a6d9368": "48f73922c19bba6e27341dc5d1ed9c4e",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "b485406370fdb56248ec4e5fc074fb65",
".git/objects/37/9581c5cc44f2ef69a05aee23e3d4b76829d543": "a336b4173a7440e2de887b8fd395a77a",
".git/objects/39/ba931fb7338cb9b609a9bf0e4e6540d2e7d245": "22e77f021e23ad9bb90bf6eedce2762a",
".git/objects/3c/292618faf4d81d64118d1b5c8de8b6e7d8d9cf": "ecdbc518a2c631c37d5aa4b80d446404",
".git/objects/47/bd6152e01082cc2c2f224d50b955005032b816": "1e6ff20311c299288231e6f4c457ba1f",
".git/objects/48/41a58d7ce75d9a694b0b385b3e7cce97da1f1f": "6b2a04292750d433eca2cec84c2acffe",
".git/objects/4c/296daa773c9e202a306039c028f94e0f876a7b": "ab195196fcd3852fa9b61843b5f77f80",
".git/objects/4c/ce06de9091c9367c0693898665092d8ea5cdea": "bec893e099eb503487efb07bce69f6d3",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/51/71f276e56e912a380b7de8f90e44a410a4bef5": "90b38298264357674268c03ee707a72b",
".git/objects/55/6332a9057ccdcb8954f261098cd97a055f0baa": "680e706efb8d3650fec8d1927889b357",
".git/objects/5f/72e9127ffaae2a500cd9d950067f46c21b277c": "9334d3373cb9fc449377becf4cba5477",
".git/objects/67/bd84202ad5b2e307d3b6fac1731c2a5d963e0b": "aa161ace139f434c81be219b6f6205e5",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "b6aeab417f5d5ef28ea070a09b61c7e0",
".git/objects/69/c817bd41753980cf019c07839281ed0a999700": "2dffac9c97852eb551856fba0534dfad",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "8a6cc32e7f23f25e611213b06bb38448",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "8081799c6f0d89b405c8cca2b18cd6da",
".git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "b0b4eb8e40c5eaa3b07c9dcc175a4ab8",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/a97a772558495c73a93eb206eb18395333f230": "828a156adfc290ea5b7c94027dc8eb69",
".git/objects/7e/ce3282a4f7824b249d9e568819d98bd2fa3da6": "8c71b613b9912dfd1fdf473a52e99214",
".git/objects/7e/e019637ffd36d6c8b4e6f448d4b7b51b7bc236": "a5316e127b4ada78ea397e9e6e470415",
".git/objects/81/60de622bd17662696fc8eb5c9c47762ffeded7": "d6eb82abd720792bf10dcab84fddcaa5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/e961c2b3da3beda54230f53bd66805e87cacf2": "b67161cd5defbf58cb007a1149b1cf3a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/5deb235892aa4873aa8262c34e6f9145c6032d": "ade26a3978b237d1bc9e1e70e5bc9ba5",
".git/objects/94/8f0a5d26e899539e7821aa5a500932f76ba582": "e9093d046b81c96e5fd46a48a0b68b11",
".git/objects/a0/c4017cc83ad21aa35d003b5d4555aed55bf7b6": "53bef632872385fcc773374381feacb7",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/09313d5fb20765dff1d8f41dbd72c558097611": "ce77a88cc2b115d907f98afb245fa5f6",
".git/objects/ac/ec1a5e28b284e9b1a69211fb140500502edb91": "4caff1b13d78fd6412fed6c67e25f4d6",
".git/objects/ad/71602c075b8c33ca9ad9cc9db7cba37a23485e": "1126cb873768838529cda588d97eca4b",
".git/objects/b3/614ad82a0367e843b204c13a2d6e1a3907c866": "7a12f181ef0ae357f139c644b4004c32",
".git/objects/b6/48d7102e1a8c069d23a4720723ac82d6005c72": "b9bafdda45c831a4ebcbf6ecfdb18367",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/cc79961de347c1ef046b0b2d11c8d847a77273": "fb970a7d0f7e2f00dabb73e5a002fcad",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/5fef6e91028e0a05c5b0519a0ab96ec81319cc": "316a1865980b6ba2a8346d7cd6a73848",
".git/objects/c8/df92b853992397794e13e57140bbab28367e15": "4e587a7e4ba7acfc9ac1796c5c862e78",
".git/objects/c9/0b6e2304066791744b95300a13d033b1a04c84": "bb21ddef8c168c4a1931088d9e4b52a9",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/ce/e7c92287b13dd2a6443f327744b8e0ffd66d0c": "e4d6f35b8bc70e7765198cc6d12612a3",
".git/objects/cf/e2d9f8fd1f1602ac2944104150deb151250322": "138cd42be5f7f5389f94211921b22a97",
".git/objects/d1/e1b0aec3d2d97d9bfa6289dc9960349b3e8d73": "ab32b29a34cb0fd397d2453d36e24de1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e4/ae46c6286b2d6c6676b0c3192fc92876778498": "c1fb9fd9132eb732a1d95b1d7a283648",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/eaf7eb1511bd9532cebfae70e47524663de109": "50b1229f40423533da8629dc65d38889",
".git/objects/f6/413654c1e39e22e1df8f8650a2ea68e9cf0462": "3d5de674e6d8adc02de10ce08054d557",
".git/objects/fc/963dfe2292c4e241afb5950e063414d544c093": "8cd8693ced3c797431323a7707d38029",
".git/objects/fe/00a94fa1526322bae194d801f59a8fc2671185": "5574899b49470e1d794f86be54c9aee7",
".git/refs/heads/master": "ebd386b8ec7d0a60fbd15d18fe3a7104",
".git/refs/remotes/origin/master": "ebd386b8ec7d0a60fbd15d18fe3a7104",
"assets/AssetManifest.json": "cf8b747ced68b06953f0bcfcbd876202",
"assets/assets/bgimg.jpg": "ee06ecf17b725f6fcdf6d7132647522c",
"assets/assets/bgimg.webp": "1b288c774088434f6507ddfa33a118fc",
"assets/assets/bgvideo.mp4": "a5f045bb5e4f87c9e9182bb8de6428a7",
"assets/assets/Name_List%2520For_S.E.(2019%2520PAT.)(INFORMATIOM%2520TECHNOLOGY)_Exam.pdf": "abac813a8c164ad330debe7a1f2b1c98",
"assets/assets/price1.webp": "3a57e8f9568a2aa139a6f5f57b5ff7dd",
"assets/assets/Savitribai%2520Phule%2520Pune%2520University,%2520Online%2520Result.pdf": "50aa06455cb3b2c8eba77d4488af0e77",
"assets/FontManifest.json": "25d9110247dae7115a89bb288f1b5ed3",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "cae4fff3455bbaca5fb8791df6b391cf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_icons_null_safety/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons_null_safety/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons_null_safety/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons_null_safety/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons_null_safety/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons_null_safety/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons_null_safety/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons_null_safety/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons_null_safety/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons_null_safety/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons_null_safety/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons_null_safety/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/flutter_icons_null_safety/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons_null_safety/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons_null_safety/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons_null_safety/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3571532f90ac83d84c3707bb9fa0a3cc",
"/": "3571532f90ac83d84c3707bb9fa0a3cc",
"main.dart.js": "1f871a177e6eb3ae3f6b56899cc386e3",
"manifest.json": "57b67e442806244661e07e5ded8b79de",
"version.json": "6581bd5694f63c88868544acb6adeda3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
