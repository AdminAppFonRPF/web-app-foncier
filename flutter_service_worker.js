'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "b32c4aac93468c961270a158230d1feb",
"manifest.json": "7e4c7f4f25d60a153f3288de2ff5ae2e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/assets/images/material-symbols--help.png": "63b128c838cfbae5ac789d8bbb6ecd58",
"assets/assets/images/statut-foncier.png": "b8fe4480b397b2ed5f7caf01ffb02127",
"assets/assets/images/images-removebg-preview.png": "6eaf40afdcc5edfaae8a34959f323144",
"assets/assets/images/real_logo.png": "91aa2e14bbbc109b172691508b2b06bf",
"assets/assets/images/cam.png": "9a1994f1693fc29320f09a20dada5abd",
"assets/assets/images/mi--filter-2.png": "82f92db18dc0be36d87f43d92b7d7de7",
"assets/assets/images/french_flag.png": "1b73d9f7f3ad1ebfc7a138a347f6ec98",
"assets/assets/images/mi--filter.png": "637f3fc5d257e868f74cee259e12c129",
"assets/assets/images/fluent--home-24-filled.png": "84d3d095ed7cbafe1ebc7eacb5624857",
"assets/assets/images/cropped-cropped-IMG-20240122-WA00021-1-1-removebg-preview.png": "5fd99412c5e402f6e7473f94f67e4455",
"assets/assets/images/tdesign--catalog.png": "c56dbd582e4829b0a2d1948b2355d166",
"assets/assets/images/material-symbols--download.png": "e096d4ccbf7a0cddc8d7eb74f9ba1979",
"assets/assets/images/logo.png": "8db2f082487e6339f893ca6f859165b5",
"assets/assets/images/ic--round-border-all.png": "ff17148517894ab0139c066796670b0f",
"assets/assets/images/english_flag.png": "1de4c6d05bee4b22adfdcfe9b4f999f7",
"assets/assets/images/icon-park-outline--local.png": "8ccb8319944dd939f1b88e1ebe43053a",
"assets/assets/images/basil--location-solid.png": "b660b86de81dfeb5886d639677aec464",
"assets/assets/images/icon-park-outline--color-filter.png": "3c8a4f3c57c241bf32183ea65d30c303",
"assets/assets/images/fa-solid--download.png": "ec3ce7ca78d58d2b77fbd7b8cd2ba4ee",
"assets/assets/images/lucide--locate-fixed.png": "5f60b2d99f5adf0dc7906ec1d24cb7dc",
"assets/assets/images/material-symbols--help-outline.png": "458fccb371bae37ff0796c28c09d91da",
"assets/assets/images/ic--round-crop.png": "df8f84b63ff2ce11ec342bb8887b3f11",
"assets/assets/images/option-rpf.png": "506602473a1aca3aa9262856f9193eb0",
"assets/assets/images/material-symbols--info-outline.png": "a144e0223c221a03a0296fdcbc2bf3f4",
"assets/assets/images/ri--file-list-fill.png": "131b8aba9b7fc18cccf7ecd0137513ac",
"assets/assets/images/ic--round-crop-2.png": "49a3cd14542fbe8e901bdcd33d37923b",
"assets/assets/images/logo_mnt.png": "f44fa46efc1e4a9fe22c2f5f33f0c3b6",
"assets/assets/images/lets-icons--map-fill.png": "3e504cfb09ef90909afc641d2c2d859d",
"assets/assets/images/material-symbols--info.png": "95b7f3a26d98fd02a8b8e3703e047acc",
"assets/assets/images/mi--location.png": "0afba7b6acaf5ecc5f220dbd30cde50d",
"assets/fonts/MaterialIcons-Regular.otf": "11681646fc5d55d345ade74a500dce68",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/AssetManifest.bin.json": "9fc57581f2675d0b414e290283650abc",
"assets/NOTICES": "ca8ca6766bccb02ce95b88666614c2e1",
"assets/AssetManifest.bin": "ef0445deb17f5a9a8aa6a2c13ef86ed5",
"assets/AssetManifest.json": "5746a046da7048667662eba397a504c9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"index.html": "5209890501c3e6d77d49561fc51f9a20",
"/": "5209890501c3e6d77d49561fc51f9a20",
"favicon.png": "b49ebd7c3ebfc50f0fe77c275e7e8958",
"version.json": "7d7990574dd41de73930600fbe75ae77",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"main.dart.js": "77e2717730e940927d83ad91834ecc6e",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"icons/Icon-192.png": "a91e799ccedc450e36d0745536dcac23",
"icons/Icon-maskable-192.png": "a91e799ccedc450e36d0745536dcac23",
"icons/Icon-512.png": "80ca641c5450bb2c081c54af0f3e0238",
"icons/Icon-maskable-512.png": "80ca641c5450bb2c081c54af0f3e0238"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
