'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "de82e3c2f238144ecbd8e16f68b54970",
"manifest.json": "7e4c7f4f25d60a153f3288de2ff5ae2e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/assets/animations/logo.riv": "d4e25081968425beabc511b763309cf4",
"assets/assets/animations/loader.riv": "d450a2426146aad2aa21e70798e7d441",
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
"assets/fonts/MaterialIcons-Regular.otf": "f872b9cbca5eae07116640e5e7413476",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/AssetManifest.bin.json": "ffee299ce753a3940f593b862df9ed27",
"assets/NOTICES": "ca8ca6766bccb02ce95b88666614c2e1",
"assets/AssetManifest.bin": "c7d7b38d79c714680c97737074eb2af8",
"assets/AssetManifest.json": "0bbb48ce7420dddcf63b46649b63eb0a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"index.html": "5209890501c3e6d77d49561fc51f9a20",
"/": "5209890501c3e6d77d49561fc51f9a20",
"favicon.png": "b49ebd7c3ebfc50f0fe77c275e7e8958",
"version.json": "7d7990574dd41de73930600fbe75ae77",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"main.dart.js": "b0ece2abf053338f2e35b6a31a237b92",
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
".git/objects/b0/6e25dbe57fc86a5d2d18f5559fdc0c308f405f": "e1eb8194c86614db9b806b044f3d938a",
".git/objects/dd/e59b99df2d4ee9ec7be09a2f064a19f93b7474": "5251b9f7cf32d15157b05a951504a036",
".git/objects/dd/adae802dd2fcc1f5ff61c3ca0f9b404416fd74": "02429d43d56b3cce5ad8e8aad0a3340a",
".git/objects/da/16ea2735e3f386f505330371542d3d05e4bbbd": "836e7ea8d0a55eaa7eff1f77b54321cb",
".git/objects/81/06704ab985ddf8a2aa9e98c424151e36d3674d": "06002d88c90129d33942dae1a47441dc",
".git/objects/3a/c090f49db80090aa58750ade89637b62806acb": "23064e2adf85772ce9f8e8d60ef52f80",
".git/objects/3a/bd59e00ab3044491b7a814823a2954a737d83e": "31ff79418fdebd84af14e5dacc64dc87",
".git/objects/10/52136c06de93299167ca2ef52cc7b53842d2ea": "53a8ae46b66994cf073459694088a7fa",
".git/objects/95/a3ab61e6ca3da50d2773fa68cad8542f2c9db9": "03be8ea5e706b7a62ae64d86a04a168f",
".git/objects/84/e11fd31c0109e22bef4536f6d99dad890b93ac": "4a0d9ade98d3605d3bd45f67c07acb32",
".git/objects/d4/699bd9533da46b29c48cb13d6808f090d101f5": "28b8deb023b1657f3690bc0fcfa171af",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a6/e97a4edfc7914de317fb878d242d94c509637f": "14da04d7ca372ea1f589a9ff7f6257b1",
".git/objects/d7/aee346ba12dd13bdcdfaa1a1a57eeaa1ec069a": "2bf97938f705506d05f143468d9dce43",
".git/objects/f0/1b30b5386f68f1d0720d16349dc2616e48564e": "c38f9662df6a8213d5b36f0a806dca30",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/fe/d0e7884e784b0eee96d46989a8e83bc56afc62": "7c74d6046f785d9497e237e9776cc703",
".git/objects/55/79de745bfc5dea848505149c6a23d349fc7bfa": "6974b5c1a0e80023da550df402c2291c",
".git/objects/bd/cfdcc30ba0fda53f5ebf5c1e8c9f8f412bef27": "9bf77a6382968f7ebdd9b1865507aadb",
".git/objects/c7/0634104c605c3cf3ef07d6be7536f842ba4f43": "536c4ace53eded1e203918509c7d0b92",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/a5/29fbba116d01290d563e190f408d6b1962f559": "4d18f6b707de85449b337f438ec68926",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a5/cdea331457915e5a40f025aaebf64753e48050": "1485dd0801c1f140d97343180a12e4b4",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/0ef1365ba235676ff3cdac906e306f0a4837bf": "3cf1e58e6989901a4752e25965e6d68a",
".git/objects/6b/66206d71344b53246d789589f7fd5356194301": "6ddcf2b93e6ed9bf2601d4301c028238",
".git/objects/09/cc27f01bbcf5cf3fcf01938010aee0dff023b1": "508faea5d476c5178217ced3f1053688",
".git/objects/23/93cf5c7e45fb6a14eaa1770301a06207e76d85": "e56e8313a39eb0e968eac54d481bcb53",
".git/objects/2b/9292e13bfcb40f66ddaac051e586564def1dd1": "782417a17a293b9fcf6a124c2d0780f7",
".git/objects/36/fe25f34cf20b648089fa4b286e50dca5d8f2e8": "846eb69272c2b39b7ce99ae8e155d72c",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/ff/f9fb1f7c1e40ffb6d42e81a5b4e9970fc4e6f4": "bcf47b858ee1a92474aa577e30fbd3fc",
".git/objects/51/8cff0321999566e20862f86c4bd67f079d6758": "9406ddadeab4981bf149331660e0a485",
".git/objects/06/1049592a382138bbb559155ff9a995c9146f74": "b5a44bc8e5b8a2742009257c7a7718ef",
".git/objects/1a/bda1acb23127e9da2dccbff1917ed40ff0610a": "47ebd54d7c6a7912ab70653eab562cd7",
".git/objects/56/cd32479db9cede671cef4970e9f29b604feeb4": "c83bfd942b7d6514ba1418041abdcdfa",
".git/objects/ca/96933677f71dc94bc44f5d6bbbf9b42d8e02dc": "ed25e90c9d455ea2261184d099189bdd",
".git/objects/8b/8c24bfb28d3c009906aea097753aec5352938f": "1dea54d30d560b6a0f534aad368934df",
".git/objects/92/2a443c3553ec7d988c7cab53009ff6203d0021": "229c9dbb725c21c0b366848d1745eaf1",
".git/objects/92/ab4f70e8fdadd504f2476c62a0bf5c0425f9a8": "3fabd2bb6805eb36c2579ea3673dce85",
".git/objects/28/02722efbfe51839798f6bbeadd7376e5835217": "e7cbb5ef41a75779abe28dee3a855583",
".git/objects/4c/392e852ea370e43ad1f82b63eb186019487796": "6ef745c73b6dff6fa488fb3b4a1fbdbe",
".git/objects/4c/0fb9a3ef7de9df06ad719f16f4aabfec9b39fa": "00eb3d3d5bf6db227945284ff4067f0b",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/4b/711bc9043a9084456ae732f5fb0986359ccad9": "a9120544bbbdd92ed3b88067ecd1f073",
".git/objects/9c/39b6b5b8c21ec5f72cd32ad6792c5ff2fa8c83": "8274209402ae2b38d073e86fc9f43dc6",
".git/objects/9c/94a8b475776211eab71179d010870f5cf9df5e": "02d9524f11b66e44fab44c8822312416",
".git/objects/9c/0d0de69da6c56cdfcf23bc7b69d363e0474e8c": "555a4dc9ee26a3d052ab7eaa2c3af844",
".git/objects/0b/c4d3de7e494bd74e33b10e6db8ec48aff24a01": "2672233cc69e7668f9e689344592fcb0",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/0b/a9dc496fc2f42f99551a24d3be2d4690491d58": "d539e24ca98deb0f90c7c0cc62552647",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/18/3182d371c1e0ecd4b0d47b68e0ac0835e7d24d": "61ae6c14e7b52992431f7c97cce35be1",
".git/objects/47/96469ce157cd6e8ee7ff8e63cccd6063843803": "7953c9e9edaabb3c66945b58e382e36c",
".git/objects/8d/bfb7f3618fb000fcf3d31820703d01c681626c": "86537515c72a71860721749fd9235ebd",
".git/objects/c1/2e083e780150411b5ffea2b2e93ee4e5a32e34": "ade7b66253e606acbb330f5256c521b9",
".git/objects/08/e80d38d3a93eedc85dfb25a446b8871ee8b1ce": "9333ca137b59d06183b44d809f7197ec",
".git/objects/48/32049a8a730ae49d666bda97ce12091c87ab45": "dfa079ffd4e5e7fbf27c575531024233",
".git/objects/48/0600532cc424cc3a8d3207bf48fabb16ed8dd2": "cb4d84676e1b18a6c42373dde7d2c6f4",
".git/objects/dc/7053bba6e1e4a41fe665b6bb11c4ede8926bd8": "600ff76876610cf5dbefd5c3e1190a2f",
".git/objects/dc/e22cea774418b4fbb00a8a59e347b82eada6bc": "a38fec20ad6bda55f272733046f0abd7",
".git/objects/dc/a3f0258bdc303e025c06d22f56acc8d19929a9": "f390f5fb9c3b226f785badaae135c930",
".git/objects/bf/f4910d9a2c9102eb0f6c64edcc0b2cf3af3ae0": "b0e1bfacc15e899a7efb66caeb1e0b09",
".git/objects/bf/4d2adcf076b8b6fa5d300748272681fb851066": "f2f3b1bc3d8ea098908fcdfdf1b5e0d0",
".git/objects/ec/d2a9ae0618f2c8e4e88d061b3f0d8f8f1c1220": "e0cf76e4a3ee79364ec61381ad9f26e4",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/ad/656b0fe82471c5d70e327a6e462dade56833bf": "59b8bf01d43001c4d7970946debaba08",
".git/objects/96/0f06e0324122723f926e3e8fa9abe10a5a5588": "4afff46067500d214cfec1a89de97a36",
".git/objects/a7/a90d4465046bc0b9c5c94e1ff4245f16a78cfe": "0b916dd140cf84ea5a0de8f9ac379ec1",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/9d/21c6d8443ee4bfb33aa3267a1826cf9c961420": "47c91d60e086029c63a89b7626e3aac5",
".git/objects/73/c3611e416ed4e03867f17b058b5d42611626ed": "f4ba3a1200d3250463dae3b81acc67de",
".git/objects/7f/f361f4b5cff21b50a114ec3c29e6a281d8814d": "72c5e3bc977f98c5dfaba477a22c1064",
".git/objects/7f/8f1dbac76a0fa40c3faa20ecdd3c3f6211521d": "28a03050fdc93c949958d450b31c3356",
".git/objects/7f/f4bc2d74192757040181ef2d554ebbafd70d9a": "dbf48b76602db66bfbfb282c75968ef5",
".git/objects/b4/9885ece38e692ebd46c2651a1e64870fb9d702": "c5464c1a7ba8f9e63be9c559e0e89502",
".git/objects/75/66ec72082f7c44f5d627ecb512fc7e845c55b7": "0beee50e5a6eccc777d50c222aa70012",
".git/objects/70/be738362413674efdb486fac6f8cf30740da29": "30b221d00480179994f71a5e2bcd7608",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/db/56de805817260754fabf77d5d7d294e96d754c": "6ef1a8ea8d3862be89d68232e2efc76c",
".git/objects/db/99000fe7b44e08ea765a366c8272bd65b6b8d0": "4b9d8e6fe25fd22a9f7bb1eccddda562",
".git/objects/d6/670b729332691d9f82ef51bccecb0fa32cbd82": "61aafd40634db52d739ddd9c41d98372",
".git/objects/50/0d2914328d973dcd5609277e6537158ee6b57b": "47d9ae17abb0d167d57c31e47ceaad97",
".git/objects/0e/fbc71eef8676a86df77dc3c032b64b1341c5f6": "0ca44d9269b386e8b243a3e68a704bee",
".git/objects/cb/c335b63f5bc4ebb5c550c29e65b15c6d4560d8": "7f90b8024283df484bf819ca89640d91",
".git/objects/cb/36378e1318b4f9d484e175e9a68f5bf3d8db83": "a039d39b24b53fa1331d097d0866507f",
".git/objects/15/531036fd7a23d11133f78afa239a3554e9cd3c": "f6f82ee86bc0ea6682c026656c521f37",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/bc/50622fb2f574e81890f456fc8240012521ba4a": "71d45c4f6b90ec845b28888eb540db8e",
".git/objects/b6/83edb407686e98dcee258561799e9233441cd4": "dfca8ebcd02db0b9099d7b807483b659",
".git/objects/b6/474e3056d6edb15da5ed35a79836880276c567": "771fd89672944879858c783b983ca3fb",
".git/objects/9a/d82849c792579991520296fb54b19d303e11b4": "9aaa30a4d7f6c918fcb83e8862c40acc",
".git/objects/f9/5796e92366294f32f379947b9d8b8df3fbf8ee": "93b229885a84e8be8b15abfcd9ccf0a1",
".git/objects/cc/79a77008ad86c35fcc8a56ed9846efb69b21b1": "28990b063f9446f5927f8a41288ef10b",
".git/objects/af/6ee775de9a9774d6b9adb901312163eb342b31": "1863f8d7e1ce3185fa06b0f931033d23",
".git/objects/2e/b64173e81e4a1c2e124457fb6e2ceedec990a7": "6977627d2bb0082e98456cd7cc60448d",
".git/objects/2e/68e87b15d852266e8eb600d89605e4b5791eb2": "97abb08047eef9eef44e85f12b9f3188",
".git/objects/04/a8990208578067c98dd71e02226edfcbf983ad": "ef7091a8d9ed09ae89a9ebd8e7d8c287",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ee/0f7d11ca34685d8f71a0c89bb629e376d94709": "eed42f1f149a2efcb1bc3aa47c64fc9c",
".git/objects/b7/da216c89009ceb5fa7f1b4ccb9e5ea584fa5b6": "87b0c4cbc0d8b799df3a50cce3dd305e",
".git/objects/00/1c9f264a38b729c81453d868a35e96df6d27fe": "1bf818ba4b07b29a9857f521e59ef178",
".git/objects/80/10a36f766b8dfed8114f63baa1c1e666e54968": "b318caeec1dc40f3a73ecd378ee02444",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/a2/140477d5bb6be226bb0c93bcef885cd2b19225": "52a6f38cf91f63353bcc9f86c962d6be",
".git/objects/e0/b2a3caa838ff9379e45e033b3ae32b3f5cd21f": "b84f3880a92111b95c79163d7d80bda3",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/e5/2b7b9d99d2858868be4d3836e77f598d2e85d6": "2c5481827cd5adebf6beb3fed9512224",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/4f/40be0877900e1abbb9e65b9008377796819e9e": "56e63a01d7c228a83107073e4db90f56",
".git/objects/85/92b32fa6cca882dec39f843f986c917603db9e": "3d4f7732d62698ac85186f4fd63cdfaf",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/57/a5f511a964e8522b9b81cbe328c459011d1157": "027091b0ae5a2935fe118a3b06c8f368",
".git/objects/d0/01e7b7e0deb1039763dd532575afee49149196": "811782b36212f9ecc66ce7bf83e35a3f",
".git/objects/25/748ebb0a0407438a6f656ad18ea142149ff54f": "c53beef5f411ed7b0fd846a84c5eb6bd",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/8f/9c9062d49d2ee61fe88ef7ef9da1eedc52e6a1": "150116b4022baa285e151080dd727d3f",
".git/objects/26/ebca54f615510e52f202bd35938ef578566880": "a3cefeaa74b3b4e3e668cb730c90ad4e",
".git/objects/26/89096ba18769622288b722be5e2bf554a70e4d": "671ff97cd0f2d3efcdb395bdcd7707bb",
".git/objects/26/c6f2f4c754eac7d8272f0bb86cf01bf24ae308": "7fc646288946b9ec5c3fef913f26b0b8",
".git/objects/11/f21df658c7fccde21e605a4c8bb1f8299db0d2": "2e5d514781210e4e88a4603a8716fa9a",
".git/objects/c3/42348c90337ec477f612cdf30b750762fc6232": "981862da6ac32cbd27c74b83935ed9de",
".git/objects/6a/dcfc55e6bd70f57555f4a81c1f38ef3ecc01ec": "a89472131ab078120c19932544de4493",
".git/objects/29/dda29c5989ff76a63aba94d9f7cdd4a84762ae": "5e72edba50a9b50e75322fb4d57e3c66",
".git/objects/29/205b2478fb442e5ca711d9a18c317f45af3fa2": "0daf15358131cd4c7478e5de0cdd4e9c",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/efd3fd587989c50f1300f7372694fd9ae2b6be": "303c5300a2a0210462978921e7ccaffa",
".git/objects/b5/383b686ddf22743988959edc780e45bf16e2dd": "384dc2f86625d491e3914a2f84fe8454",
".git/objects/b5/df741937b9bc4ece15fdceeeb354f3b1efdeb7": "1c96d71c07f69ef11f2c1c73bc5f5de3",
".git/objects/65/b0c5ae337b6c9c00fdd10c87765151435726fe": "a8635a7ad9b79ebcb9e7b9a91a708b95",
".git/objects/ce/9064fc4a65ac261457cfb9ddf51d50619dd6b6": "641f1bc3a975a9cd115fa63e6c9a4b60",
".git/objects/8a/06764ba619b2d4c2ab7e3c794c0857268446e8": "c62ffcc8257acad0d5f6c44850ca6ca5",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/3c/59c8989e108d4be020d294617da3563ea8df7f": "13ffe203880289213baecdfd63e59926",
".git/objects/3c/e0ab254ee2dd4b669b26007b22f221ba2f6335": "c05d940b70bc1ad10cb2f61db98611a2",
".git/objects/37/35b774ad8feae25bf260944b4e0c94b45355cb": "dae3e16601a386a8d859fd122edd68ce",
".git/objects/e4/c456f400eaf69b7e45a6bcf1770f5ffb4c90d4": "ae9e31f3bc7e4949c24fdcd1d7e41d65",
".git/objects/e4/6b35e0d1630ed13ab07dc3b464adf15e793260": "606b6ae40a4f195afb9d9b3d72cf1f51",
".git/objects/e4/7d6a46d43e9ac263e68b6f4a56add6aaeefadb": "675eec72dd1917bd2d96e387d2e34315",
".git/objects/64/a803dc078efef64b952431a3426b9001e618ba": "038cfb1623c6b6b1ab1e5963a5a93e56",
".git/objects/64/d50a0ed176a22cef6c1cc61b3b1afe975e7cff": "7cabd3c27731c865a308cfb0405fa3d1",
".git/objects/13/5efd55eaacdee507bfb75b2e53fb80299fe61a": "e22ede5a55ce607fef03cbf8f5e7b3a4",
".git/objects/13/a3124cdcc04078ad65e597ddf81ddbcca849bd": "5193fe6f914d7594f2310491fcbd6c1c",
".git/objects/7a/c510c79f7f3b7d3790f9e4168221884e2064d7": "e320a1bef29b1fa049393958f39aba6b",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/16/4a593e841c7731ad8940f92387438ad9df6423": "2263fb73686c312eb885639c5a5d33cf",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/1d/a799e5372a9091ec351a81a4988937d3326852": "9918ad8e25c5a9f593cce10f345d256b",
".git/objects/8e/5673cdf71955cbcd82d3e976f02a858cee9940": "2acada37ef04fbc075db140bb6d44db8",
".git/objects/7b/6a0730a2062dd60522f235f76823fd2b34d988": "2d2e519d72afa37157f57774f6fce513",
".git/objects/93/f1b6478494660cd26fd9f3fe14e493cbdb0476": "2b1acb53a875584cecb853f24d3e4ccd",
".git/objects/93/943289d767a6272b13b0999be1306a67464399": "d1e584ac5f8afb92cd240ba0265ec455",
".git/objects/eb/209ff717a72a633a6c3b00baf030f7ca647af6": "2ef22782ef54277f0c1dafb2805e9654",
".git/objects/b9/ef5042df8b2e642afddd596f5cf148adf4d734": "fb925a36938dbe5b152b232717b1cd89",
".git/objects/b9/c1c6ba59c3b5adddcda16fc6b612e3b581becd": "19f1c2276635563e468d8015d50e2cc0",
".git/objects/c2/b504a62ada92f5ae1a5d3f9419c273a78dbddb": "249be62f5feb51c801fb571e6feb5894",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a8/218fd0d43559139ead2308cc5a90ab034de8f9": "620e4d8c3d6c588ea60b1c536a08a3e4",
".git/objects/0d/ab8cead0e7197fe58cd9cb5f0b1a6521f19d0f": "cc80b9553e4c33d89257e4572f6dbf58",
".git/objects/83/1b09b1083e07a76d626a2ff0a4ca1854c103cb": "8957d0a32a8bf8997e68440b5f57c9b2",
".git/objects/83/457bfbadc272cd3f3e5f33ecfcbad6bc57ce4e": "5e7b892daf07977521701e0468b1e1b2",
".git/objects/83/f30f68d1369e074d0c212363d85ed07113f0ec": "9b11e11bec6b967436c30ededfd4bf88",
".git/objects/61/36bc0a84cc7ce802e838950f3a820d4e957140": "d61d48a91bbb20b7995c8d3027246b77",
".git/objects/b3/52a16247ff98eb052a3fb35c988f0e89f40fcd": "7a034187f16cbb13e5607f22732bac4d",
".git/objects/12/740e0e355a081b909ab9d0438937ee52461ef3": "4d4b0a50e831f9420b87cba09e3e7b23",
".git/objects/43/ffbecf5cb82107ab5c4f530042240dd372d8bb": "43f9e1b6c619dc47ce5f737ac31d92d0",
".git/objects/43/85949637cbc07a08e84a62f2a870d516e031d6": "eca8074426957a22a8bf7b727100d646",
".git/objects/43/8a4f78410f6bde5aba13d96c06d4bb8d203f67": "bbc92d08f8cebb51f75914eec80712d2",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/index": "f7ba070292486b3bcf30322873bb4037",
".git/logs/HEAD": "a040ae807a03d58b507cd2a882d8ecbd",
".git/logs/refs/remotes/origin/main": "1118326a064fc0171be996accc09d3d6",
".git/logs/refs/heads/main": "c9200fee39b61f8111eed973ba138d1a",
".git/config": "e9fd30c94d6c4a1a66ebff7167b726aa",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/COMMIT_EDITMSG": "86d8861a2219105a71f13280abc7faa7",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/refs/remotes/origin/main": "4ac341ee1e48e0907ec2f7d7f7bea73d",
".git/refs/heads/main": "4ac341ee1e48e0907ec2f7d7f7bea73d",
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
