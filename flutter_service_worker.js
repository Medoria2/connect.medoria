'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "064c3a5cc5c242c7fac97f36966443bb",
"version.json": "c6d996ec5ebb3af4f8ed3e7c001f8e35",
"favicon.ico": "1e897cdbe42a696e62c90a882a004600",
"index.html": "79bebe120ab09ec03015fb6e752c04ae",
"/": "79bebe120ab09ec03015fb6e752c04ae",
"privacy/index.html": "d61fefa0a57992ee26fde69da6f7ef73",
"firebase-messaging-sw.js": "5a301f2a4da1d0f53f187314fd46005f",
"main.dart.js": "8844a54ba1799d8dd4c0a1a4947cad9c",
".well-known/pki-validation/ea87a52ab4c7280d.txt": "5cf69ec0586ac41cbb9b12995b7e315e",
"404.html": "74e21bcd2ad7343b2d0060259df5acf3",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"remove_account/index.html": "dd2437e2f7fd53297864af8741b3ece8",
"icons/Icon-192.png": "5dfce1c81d9190814fbac88dda889cd1",
"icons/Icon-maskable-192.png": "a5cfff9fa54b94349909e5442d13c263",
"icons/Icon-maskable-512.png": "42f423745476fefe21a3fa2283497722",
"icons/Icon-512.png": "246b55df35f89b03f9e99ae360f188cd",
"loading.css": "e2a0312959e4f10885dce12de03856b7",
"manifest.json": "ad64b40dc5e12fcc36d4ed4803b65900",
"legal/user-agreement.pdf": "434a3bcf7507fc9e4670978f9d1ac1f0",
"assets/NOTICES": "c4cd02cc19c10cefd609e0ceba28d6e9",
"assets/img/footer/payment/visa.png": "eee92e8dd68fc32a3e4d729214a99c9f",
"assets/img/footer/payment/sbp.png": "35f3981592506450a0d9c726332e00ea",
"assets/img/footer/payment/mastercard.png": "491fd28b493211513debfd180b2a2563",
"assets/img/footer/payment/mir.png": "66cfe6cf10d1aa658ec4d965c40b0e3d",
"assets/img/footer/google_play.png": "7e77a04a06b7e5c096beacd818799c0c",
"assets/img/footer/app_store.png": "9dd9df4923aeea2c00d2c98c17eb0256",
"assets/img/conference/icons/paperclip.svg": "6efa2b15688fc469840e9021d2753144",
"assets/img/conference/icons/send.svg": "b4f8bdbb10a9b55690798829595afd28",
"assets/img/vk.png": "1ec71d48224bf9c3a4cc94f1e2e14912",
"assets/img/duty_line_ring.svg": "05e26e15b72f893bd905bf06dce05bbb",
"assets/img/components/info_icon.svg": "e2f255ff2a031741992d2b1cbd25e6df",
"assets/img/components/search_icon.svg": "2bf32968b8527841a75fed150768d0ab",
"assets/img/components/trash_icon.svg": "af4f5c9e0530ca343ec247c103cf0ed6",
"assets/img/components/pen_icon.svg": "9d0e5bd1155f59068557d58e3e28c9d9",
"assets/img/components/export.svg": "7e91fd8c675cb202ff94923bbb74f089",
"assets/img/components/checkbox_unchecked.svg": "075daf4604f9e73c0db189f5635ba2d1",
"assets/img/components/teacher.svg": "1d7ff583d13f55c1174f44e3763e0ff6",
"assets/img/components/sms-tracking.svg": "5e377d3378a7e71e77988e9bd1c50d58",
"assets/img/components/educationicon.svg": "ea8468c9b1448649ab7f8abc153fde78",
"assets/img/components/checkbox_checked.svg": "be9d873e9306eb12d21582d7e4a554e1",
"assets/img/profile/avatar.jpg": "9ca3831ee0c70345fc8fa4bfdd6e7735",
"assets/img/logo.png": "ab79d0cf3f6f24ab28c3f058f5f1d555",
"assets/img/main_page/banner.png": "ca66cbcd905799af0060037cc1256c4f",
"assets/img/main_page/banner_pravo.jpg": "fad2545dc8e20e97e4aebf68c574735a",
"assets/img/main_page/ads_mobile.svg": "aaff1f637f82b5f282c09c4ac476f08c",
"assets/img/main_page/app_store.svg": "91394bddbc00660948afeca3e64fda57",
"assets/img/main_page/google_play.svg": "59988aed20e6a9e0e76514a4a2d318dd",
"assets/img/main_page/icons/psychotherapist.svg": "22d624ace6e1e9723e02ee16b65b76b9",
"assets/img/main_page/icons/Infectious.svg": "090bd5617783584bae853f4b8080552c",
"assets/img/main_page/icons/endocrinologist.svg": "776d56d8bb34fe975c1e056e44243b1b",
"assets/img/main_page/icons/neurologist.svg": "d5c7aff1efa164691a50ad6248728233",
"assets/img/main_page/icons/dermatologist.svg": "9e317024c233a2208dd88cc6da62556f",
"assets/img/main_page/icons/pulmonologist.svg": "b1cdc68078ec38b17a4f377f5ad319e9",
"assets/img/main_page/icons/cosmetologist.svg": "e13860fe32ce2dcb2f152361b48a56e0",
"assets/img/main_page/icons/cardiologist.svg": "db4386a39b6179fcbb161cb149bbf61d",
"assets/img/main_page/icons/gynecologist.svg": "e201b6bbcc9ecb1bb54e895d4e3a1552",
"assets/img/main_page/icons/urologist.svg": "9179afb6e8855ea3f94761eb6949b928",
"assets/img/main_page/icons/therapist.svg": "9587fb8958daa01b69a52dcb540e7d17",
"assets/img/main_page/icons/ophthalmologist.svg": "8a72080ddf781d929470eb3849e4d4fa",
"assets/img/main_page/icons/allergies.svg": "27e40d114108d15cb0e2bbd9b05f5595",
"assets/img/main_page/icons/otolaryngologist.svg": "8b9c272dfbd43143cd013912fef091bb",
"assets/img/main_page/icons/gastroenterologist.svg": "64c644aeed7544f372c06622d9edc59d",
"assets/img/main_page/icons_pravo/finansu.svg": "8c62507ec0782c1d1fb6501c70c56c3d",
"assets/img/main_page/icons_pravo/urist_v_sfere_it.svg": "f7b285a944e1a9f5e06b59ba5c50720c",
"assets/img/main_page/icons_pravo/strahovum_sporam.svg": "3ee5206589ddc93ed7714282f0a650b5",
"assets/img/main_page/icons_pravo/nedvigimost.svg": "58d5364fdb41b3cad9159cdb97e6b5d5",
"assets/img/main_page/icons_pravo/nalogovue_sporu.svg": "bd9ab98bea127977f4844237423b7948",
"assets/img/account/edit-2.svg": "23b9e844e9d4df022ac8b8770247515b",
"assets/img/account/home.svg": "c158e3aeb2f16f388b0468e468dba334",
"assets/img/account/document-text-fill.svg": "d38469501652e726a38968d5df768fb5",
"assets/img/account/ticket.svg": "46c68c2e40e0f59015ac49828938bd89",
"assets/img/account/percentage-square.svg": "a680aa4b7e98a6427aca026538e2860e",
"assets/img/account/support.svg": "e4ceba2db7de9207cd9ee1a5fdadfe3e",
"assets/img/account/card.svg": "35c104aa74e3f6c976b18916cce42431",
"assets/img/account/document-text.svg": "b6b2583fae56ecc5d3f8e435ce222de5",
"assets/img/account/profile_fill.svg": "83bddba7de5c75333d856a55d0d20b8e",
"assets/img/account/device-message.svg": "aa3aedfccf9441763f20ff9582ca0164",
"assets/img/account/profile.svg": "4ac4181233ba4cfea38482bc5168b92d",
"assets/img/account/document-download-fill.svg": "3c77846075a462a989d2587883a61807",
"assets/img/account/users.svg": "6f5941f78899536e71922cdb94f04c63",
"assets/img/google.png": "8a393c5430ca78fcd92b1c0a72ee0a23",
"assets/img/mail_icon.svg": "7d9f4f824acf134241b8feb692c47907",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "6526f0fd017801951dcec4a83321670a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "0b211a817a6b443091ac63e22d67b285",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/wakelock_plus/assets/no_sleep.js": "74499cf34f37daae14b51e3a23cd9f7a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "15ee8afd5851582f6a66853df2f78e08",
"assets/fonts/MaterialIcons-Regular.otf": "46af7b7e8fa3a3ca10ae9c6425b6170c",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
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
