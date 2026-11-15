/* =================================
   WHATSAPP AND CURRENCY SETTINGS
================================= */

var WHATSAPP = '971521800153';
var CURRENCY = 'AED';


/* =================================
   DELIVERY SETTINGS
   (Delivery all over UAE - flat fee)
================================= */

var DELIVERY_FEE = 20;


/* =================================
   CATEGORY ORDER (filter buttons)
================================= */

var CATEGORIES = [
  'Tools & Accessories',
  'Henna Cones and Combos',
  'Essential Oils and Nail Liquid',
  'Henna Essentials',
  'Reusable Books and Templates',
  'Kits',
  'Jagua Cones'
];


/* =================================
   PRODUCT DETAILS - 22 PRODUCTS
   cat  = main category
   also = extra categories where the product also shows
   variants = size/quantity + price
================================= */

var PRODUCTS = [

  // TOOLS & ACCESSORIES

  {
    id: 'spatula',
    cat: 'Tools & Accessories',
    name: 'Henna Spatula',
    desc: 'A must have henna essential for smooth, effortless mixing with minimal wastage.',
    variants: [
      { label: '1 piece', price: 12 }
    ],
    img: 'images/products/spatula.png'
  },

  {
    id: 'acrylic-hand',
    cat: 'Tools & Accessories',
    name: 'Acrylic Hand',
    desc: 'A perfect practice companion for henna artists to create, improve and showcase designs with ease. Reusable and ideal for endless practice!',
    variants: [
      { label: '1 piece', price: 30 }
    ],
    img: 'images/products/acrylic-hand.png'
  },

  {
    id: 'fake-hand',
    cat: 'Tools & Accessories',
    also: ['Reusable Books and Templates'],
    name: 'Realistic Hand Template',
    desc: 'Reusable Realistic Hand Template - Practice your henna designs on a realistic hand template with ample space for creativity.',
    variants: [
      { label: 'Reusable template', price: 15 }
    ],
    img: 'images/products/fake-hand.png'
  },

  {
    id: 'cutter',
    cat: 'Tools & Accessories',
    name: 'Cellophane Sheet Cutter',
    desc: 'Cut cellophane sheets effortlessly and achieve clean, precise cuts for perfectly sized henna cones every time.',
    variants: [
      { label: '1 piece', price: 25 }
    ],
    img: 'images/products/cutter.png'
  },

  {
    id: 'cellophane',
    cat: 'Tools & Accessories',
    also: ['Henna Essentials'],
    name: 'Cellophane Sheets',
    desc: 'High-quality, easy-to-roll sheets designed for smooth cone making.',
    variants: [
      { label: 'Per piece', price: 1 }
    ],
    img: 'images/products/cellophane.png'
  },

  {
    id: 'mefix',
    cat: 'Tools & Accessories',
    name: 'Mefix / Henna Tape',
    desc: 'Keeps dried henna securely in place, preventing flakes and ensuring a mess-free experience.',
    variants: [
      { label: '1 roll', price: 35 }
    ],
    img: 'images/products/mefix.png'
  },


  // HENNA CONES AND COMBOS

  {
    id: 'organic-cone',
    cat: 'Henna Cones and Combos',
    name: 'Premium Organic Henna Cones',
    desc: 'Made with 100% natural ingredients for a rich, deep stain and smooth, effortless application.',
    variants: [
      { label: '30g', price: 10 }
    ],
    img: 'images/products/organic-cone.png'
  },

  {
    id: 'practice-cone',
    cat: 'Henna Cones and Combos',
    name: 'Practice Henna Cones',
    desc: 'Perfect for beginners to practise and improve their henna application skills with ease and confidence.',
    variants: [
      { label: '25g', price: 5 }
    ],
    img: 'images/products/practice-cone.png'
  },

  {
    id: 'nail-cone',
    cat: 'Henna Cones and Combos',
    name: 'Premium Nail Cones',
    desc: 'Achieve a rich, dark maroon stain with smooth application and long-lasting results.',
    variants: [
      { label: '10-12g', price: 8 }
    ],
    img: 'images/products/nail-cone.png'
  },

  {
    id: 'trio-kit',
    cat: 'Henna Cones and Combos',
    name: 'The Trio Trial Kit',
    desc: '1 Premium Henna Cone, 1 Nail Cone and 1 Jagua Gel Cone.',
    variants: [
      { label: '3 cones', price: 42 }
    ],
    img: 'images/products/trio-kit.png'
  },

  {
    id: 'signature-mini',
    cat: 'Henna Cones and Combos',
    name: 'Signature Combo - Mini',
    desc: '3 Premium Henna Cones and 1 Nail Cone.',
    variants: [
      { label: '4 cones', price: 35 }
    ],
    img: 'images/products/signature-mini.png'
  },

  {
    id: 'signature-plus',
    cat: 'Henna Cones and Combos',
    name: 'Signature Combo - Plus',
    desc: '5 Premium Henna Cones and 2 Nail Cones.',
    variants: [
      { label: '7 cones', price: 62 }
    ],
    img: 'images/products/signature-plus.png'
  },


  // ESSENTIAL OILS AND NAIL LIQUID

  {
    id: 'nail-liquid',
    cat: 'Essential Oils and Nail Liquid',
    name: 'Nail Liquid',
    desc: 'Create your own nail cones with our high-quality nail liquid for a rich, dark maroon stain.',
    variants: [
      { label: '30 ml', price: 30 },
      { label: '100 ml', price: 60 },
      { label: '500 ml', price: 180 },
      { label: '1 litre', price: 250 }
    ],
    img: 'images/products/nail-liquid.png'
  },

  {
    id: 'eucalyptus',
    cat: 'Essential Oils and Nail Liquid',
    also: ['Henna Essentials'],
    name: 'Eucalyptus Essential Oil',
    desc: 'A premium essential oil ideal for henna paste preparation, helping achieve a rich, deep stain.',
    variants: [
      { label: '30 ml', price: 30 },
      { label: '100 ml', price: 50 },
      { label: '500 ml', price: 150 },
      { label: '1 litre', price: 220 }
    ],
    img: 'images/products/eucalyptus-oil.png'
  },

  {
    id: 'tea-tree',
    cat: 'Essential Oils and Nail Liquid',
    also: ['Henna Essentials'],
    name: 'Tea Tree Essential Oil',
    desc: 'Ideal for henna paste preparation, helping release and develop a rich, dark stain when used correctly.',
    variants: [
      { label: '30 ml', price: 30 },
      { label: '100 ml', price: 60 },
      { label: '500 ml', price: 180 },
      { label: '1 litre', price: 250 }
    ],
    img: 'images/products/tea-tree-oil.png'
  },


  // HENNA ESSENTIALS

  {
    id: 'henna-powder',
    cat: 'Henna Essentials',
    name: 'Premium Henna Powder',
    desc: 'Finely sifted, high-quality henna powder that delivers a smooth, silky paste and rich, dark stains.',
    variants: [
      { label: '100g', price: 20 },
      { label: '500g', price: 40 },
      { label: '1kg', price: 60 }
    ],
    img: 'images/products/henna-powder.png'
  },


  // REUSABLE BOOKS AND TEMPLATES

  {
    id: 'practice-book',
    cat: 'Reusable Books and Templates',
    name: 'Hiba Henna Practice Book (Part 1)',
    desc: 'Explore beautiful henna templates in a reusable workbook, designed to help you practise, improve and create with confidence.',
    variants: [
      { label: 'Reusable workbook', price: 80 }
    ],
    img: 'images/products/practice-book.png'
  },

  {
    id: 'gulf-design',
    cat: 'Reusable Books and Templates',
    name: 'Hiba Henna Gulf Designs Reusable Book (Part 2)',
    desc: 'Explore 35+ exclusively Gulf-inspired henna designs in our reusable practice book, complete with a FREE realistic reusable hand template!',
    variants: [
      { label: 'Reusable workbook', price: 85 }
    ],
    img: 'images/products/gulf-design.png'
  },


  // KITS

  {
    id: 'beginner-kit',
    cat: 'Kits',
    name: 'Beginner Henna Kit',
    desc: 'Make your own DIY henna cones and begin your henna journey with all the essentials you need to get started.',
    variants: [
      { label: '1 kit', price: 40 }
    ],
    img: 'images/products/beginner-kit.png'
  },

  {
    id: 'jagua-kit',
    cat: 'Kits',
    name: 'Jagua Kit',
    desc: 'Make your own Jagua gel at home with our DIY kit and create beautiful, tattoo-like designs with a deep blue-black stain.',
    variants: [
      { label: '1 kit', price: 100 }
    ],
    img: 'images/products/jagua-kit.png'
  },


  // JAGUA CONES

  {
    id: 'jagua-cone',
    cat: 'Jagua Cones',
    name: 'Premium Jagua Gel Cone',
    desc: 'Create beautiful, tattoo-like designs with a deep blue-black stain using our ready-to-use Jagua gel cone.',
    variants: [
      { label: '15g', price: 25 }
    ],
    img: 'images/products/jagua-cone.png'
  },

  {
    id: 'jagua-paste',
    cat: 'Jagua Cones',
    name: 'Bulk Jagua Gel Paste',
    desc: 'Make your own Jagua cones with our ready-to-use gel paste for beautiful, deep blue-black, tattoo-like stains.',
    variants: [
      { label: '100g', price: 150 }
    ],
    img: 'images/products/jagua-paste.png'
  }

];


/* =================================
   GENERAL FUNCTIONS
================================= */

var cart = {};

try {
  cart = JSON.parse(localStorage.getItem('hh_cart') || '{}') || {};
} catch(e) {
  cart = {};
}

function $(id) {
  return document.getElementById(id);
}

function save() {
  try {
    localStorage.setItem('hh_cart', JSON.stringify(cart));
  } catch(e) {}
}

function money(amount) {
  return CURRENCY + ' ' + amount;
}

function find(id) {

  for (var i = 0; i < PRODUCTS.length; i++) {

    if (PRODUCTS[i].id === id) {
      return PRODUCTS[i];
    }

  }

  return null;
}


/* =================================
   VARIANT HELPERS
   Cart key format:  productId|variantIndex
   Example: henna-powder|2  (= 1kg)
================================= */

var selectedVariant = {};

function getSelected(id) {

  return selectedVariant[id] || 0;

}

function parseKey(key) {

  var parts = key.split('|');

  var p = find(parts[0]);

  if (!p) return null;

  var vi = Number(parts[1] || 0);

  var v = p.variants[vi];

  if (!v) return null;

  return { p: p, v: v, vi: vi };

}


/* =================================
   DELIVERY NOTICE (shown to public
   above the category filters)
================================= */

function showDeliveryNotice() {

  var chips = $('chips');

  if (!chips || !chips.parentNode) return;

  var note = document.createElement('div');

  note.className = 'delivery-note';

  note.setAttribute(
    'style',
    'text-align:center;margin:0 auto 18px;padding:14px 22px;' +
    'max-width:560px;border-radius:14px;' +
    'background:#6b3f26;color:#f3e3c3;' +
    'font-size:15px;line-height:1.7;letter-spacing:.3px;' +
    'box-shadow:0 4px 14px rgba(107,63,38,.25);'
  );

  note.innerHTML =
    '<strong style="color:#f6ecda;font-size:16px;">' +
    'Delivery available all over UAE</strong><br>' +
    'Flat delivery fee: ' + money(DELIVERY_FEE);

  chips.parentNode.insertBefore(note, chips);

}


/* =================================
   PRODUCT CATEGORY FILTERS
================================= */

var cats = ['All'].concat(CATEGORIES);

var active = 'All';


function inCategory(p, category) {

  if (category === 'All') return true;

  if (p.cat === category) return true;

  return !!(p.also && p.also.indexOf(category) >= 0);

}


function renderChips() {

  $('chips').innerHTML = cats.map(function(c) {

    return '<button class="chip' +
      (c === active ? ' on' : '') +
      '" data-c="' + c + '">' +
      c +
      '</button>';

  }).join('');

}


/* =================================
   DISPLAY PRODUCTS
   (click on a card opens the
   product detail page)
================================= */

function renderGrid() {

  $('grid').innerHTML = PRODUCTS.filter(function(p) {

    return inCategory(p, active);

  }).map(function(p) {

    var pic = p.img

      ? '<img src="' + p.img + '" alt="' + p.name + '" loading="lazy" onerror="this.style.display=\'none\'">'

      : '<svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M12 3c3 3 3 7 0 10-3-3-3-7 0-10zM12 13v8M7 17c3-1 4-2 5-4M17 17c-3-1-4-2-5-4"/></svg>';

    var sel = getSelected(p.id);

    var current = p.variants[sel] || p.variants[0];

    /* Dropdown if more than 1 option, otherwise just a size label */

    var variantUI = '';

    if (p.variants.length > 1) {

      variantUI = '<select class="vsel" data-var="' + p.id + '" ' +
        'style="width:100%;margin:6px 0;padding:8px;border:1px solid #ccc;border-radius:8px;font-size:14px;background:#fff;">' +

        p.variants.map(function(v, i) {

          return '<option value="' + i + '"' +
            (i === sel ? ' selected' : '') + '>' +
            v.label + ' - ' + money(v.price) +
            '</option>';

        }).join('') +

        '</select>';

    } else {

      variantUI = '<small class="vlabel" style="display:block;margin:4px 0;opacity:.7;">' +
        current.label + '</small>';

    }

    return '<div class="prod" data-open="' + p.id + '" style="cursor:pointer;">' +

      '<div class="pic">' + pic + '</div>' +

      '<div class="pbody">' +

      '<h3>' + p.name + '</h3>' +

      '<p>' + p.desc + '</p>' +

      variantUI +

      '<div class="prow">' +

      '<span class="price">' + money(current.price) + '</span>' +

      '<button class="btn sm" data-add="' + p.id + '">' +
      'Add</button>' +

      '</div></div></div>';

  }).join('');

}


/* =================================
   PRODUCT DETAIL PAGE
   (Amazon / Meesho style)
   - big image
   - zoom: hover on computer,
     long press on mobile
   - description, size, price,
     Add to Cart
   - back button / phone back works
================================= */

var detailId = null;

var detailBuilt = false;

var zoomed = false;

var zoomTimer = null;

var ZOOM_SCALE = 2.5;


function buildDetail() {

  if (detailBuilt) return;

  var css = document.createElement('style');

  css.textContent =

    '#detail{position:fixed;top:0;left:0;right:0;bottom:0;z-index:9000;' +
    'background:#f6ecda;overflow-y:auto;display:none;' +
    '-webkit-overflow-scrolling:touch;}' +

    '#detail.on{display:block;}' +

    '.d-top{position:sticky;top:0;z-index:2;background:#f6ecda;' +
    'border-bottom:1px solid #e4d5b8;padding:10px 16px;}' +

    '.d-back{background:none;border:0;font-family:inherit;font-size:16px;' +
    'color:#5a3520;cursor:pointer;padding:8px 4px;letter-spacing:.5px;}' +

    '.d-wrap{max-width:1000px;margin:0 auto;padding:20px 16px 50px;' +
    'display:grid;grid-template-columns:1fr;gap:22px;}' +

    '@media(min-width:800px){.d-wrap{grid-template-columns:1fr 1fr;' +
    'gap:40px;padding-top:32px;}}' +

    '.d-imgbox{position:relative;overflow:hidden;border-radius:18px;' +
    'background:#faf3e6;border:1px solid #e4d5b8;aspect-ratio:1/1;' +
    'cursor:zoom-in;touch-action:pan-y;user-select:none;' +
    '-webkit-user-select:none;-webkit-touch-callout:none;}' +

    '.d-imgbox img{width:100%;height:100%;object-fit:contain;display:block;' +
    'transition:transform .18s ease-out;will-change:transform;' +
    'pointer-events:none;-webkit-user-drag:none;}' +

    '.d-hint{text-align:center;font-size:13px;opacity:.65;margin-top:8px;' +
    'color:#5a3520;}' +

    '.d-cat{font-size:12px;letter-spacing:2px;text-transform:uppercase;' +
    'color:#8a6a4a;}' +

    '.d-name{font-family:"Cormorant Garamond",serif;font-size:32px;' +
    'line-height:1.15;margin:6px 0 12px;color:#4a2a17;font-weight:600;}' +

    '.d-desc{font-size:16px;line-height:1.7;color:#5a3520;margin-bottom:18px;}' +

    '.d-lbl{font-size:13px;letter-spacing:1px;color:#8a6a4a;margin-bottom:6px;}' +

    '.d-sel{width:100%;padding:12px;border:1px solid #d9c6a3;' +
    'border-radius:10px;font-size:15px;background:#faf3e6;color:#5a3520;' +
    'margin-bottom:14px;font-family:inherit;}' +

    '.d-size{font-size:15px;color:#5a3520;margin-bottom:14px;opacity:.85;}' +

    '.d-price{font-family:"Cormorant Garamond",serif;font-size:36px;' +
    'color:#4a2a17;margin:6px 0 16px;font-weight:600;}' +

    '.d-add{width:100%;padding:16px;border:0;border-radius:999px;' +
    'background:#6b3f26;color:#f6ecda;font-size:15px;letter-spacing:2px;' +
    'text-transform:uppercase;cursor:pointer;font-family:inherit;}' +

    '.d-add:active{transform:scale(.98);}' +

    '.d-del{margin-top:14px;font-size:14px;color:#5a3520;opacity:.8;' +
    'text-align:center;}';

  document.head.appendChild(css);


  var box = document.createElement('div');

  box.id = 'detail';

  box.innerHTML =

    '<div class="d-top">' +
    '<button class="d-back" id="dBack">← Back to products</button>' +
    '</div>' +

    '<div class="d-wrap">' +

    '<div>' +
    '<div class="d-imgbox" id="dImgBox"><img id="dImg" alt="" draggable="false"></div>' +
    '<div class="d-hint" id="dHint"></div>' +
    '</div>' +

    '<div>' +
    '<div class="d-cat" id="dCat"></div>' +
    '<h2 class="d-name" id="dName"></h2>' +
    '<div class="d-desc" id="dDesc"></div>' +
    '<div id="dVarWrap"></div>' +
    '<div class="d-price" id="dPrice"></div>' +
    '<button class="d-add" id="dAdd">Add to Cart</button>' +
    '<div class="d-del" id="dDel"></div>' +
    '</div>' +

    '</div>';

  document.body.appendChild(box);


  /* Back button */

  $('dBack').onclick = function() {

    closeDetail();

  };


  /* Add to cart from detail page */

  $('dAdd').onclick = function() {

    if (!detailId) return;

    var key = detailId + '|' + getSelected(detailId);

    cart[key] = (cart[key] || 0) + 1;

    renderCart();

    closeDetail();

    openCart(true);

  };


  /* ---------- ZOOM ---------- */

  var imgBox = $('dImgBox');

  var img = $('dImg');


  function zoomAt(clientX, clientY) {

    var r = imgBox.getBoundingClientRect();

    var x = ((clientX - r.left) / r.width) * 100;

    var y = ((clientY - r.top) / r.height) * 100;

    x = Math.max(0, Math.min(100, x));

    y = Math.max(0, Math.min(100, y));

    img.style.transformOrigin = x + '% ' + y + '%';

    img.style.transform = 'scale(' + ZOOM_SCALE + ')';

  }

  function zoomOut() {

    zoomed = false;

    img.style.transform = 'scale(1)';

  }


  /* Computer: hover to zoom */

  imgBox.addEventListener('pointerenter', function(e) {

    if (e.pointerType === 'mouse') zoomAt(e.clientX, e.clientY);

  });

  imgBox.addEventListener('pointermove', function(e) {

    if (e.pointerType === 'mouse') zoomAt(e.clientX, e.clientY);

  });

  imgBox.addEventListener('pointerleave', function(e) {

    if (e.pointerType === 'mouse') zoomOut();

  });


  /* Mobile: long press to zoom, move finger to look around */

  var startX = 0;

  var startY = 0;

  imgBox.addEventListener('touchstart', function(e) {

    var t = e.touches[0];

    startX = t.clientX;

    startY = t.clientY;

    clearTimeout(zoomTimer);

    zoomTimer = setTimeout(function() {

      zoomed = true;

      zoomAt(startX, startY);

    }, 280);

  }, { passive: true });

  imgBox.addEventListener('touchmove', function(e) {

    var t = e.touches[0];

    if (!zoomed) {

      if (Math.abs(t.clientX - startX) > 10 ||
          Math.abs(t.clientY - startY) > 10) {

        clearTimeout(zoomTimer);

      }

      return;

    }

    e.preventDefault();

    zoomAt(t.clientX, t.clientY);

  }, { passive: false });

  function endTouch() {

    clearTimeout(zoomTimer);

    if (zoomed) zoomOut();

  }

  imgBox.addEventListener('touchend', endTouch);

  imgBox.addEventListener('touchcancel', endTouch);


  /* Stop the long-press menu on the image */

  imgBox.addEventListener('contextmenu', function(e) {

    e.preventDefault();

  });


  detailBuilt = true;

}


function updateDetailPrice() {

  var p = find(detailId);

  if (!p) return;

  var cur = p.variants[getSelected(p.id)] || p.variants[0];

  $('dPrice').textContent = money(cur.price);

}


function showDetailContent(id) {

  var p = find(id);

  if (!p) return;

  detailId = id;

  var sel = getSelected(id);

  var img = $('dImg');

  img.style.display = '';

  img.style.transform = 'scale(1)';

  img.onerror = function() { img.style.display = 'none'; };

  img.src = p.img || '';

  img.alt = p.name;

  $('dCat').textContent = p.cat;

  $('dName').textContent = p.name;

  $('dDesc').textContent = p.desc;

  var noHover = window.matchMedia &&
    window.matchMedia('(hover: none)').matches;

  $('dHint').textContent = noHover
    ? 'Long press on the image to zoom'
    : 'Hover over the image to zoom';

  var wrap = $('dVarWrap');

  if (p.variants.length > 1) {

    wrap.innerHTML =
      '<div class="d-lbl">SELECT SIZE</div>' +
      '<select class="d-sel" id="dSel">' +
      p.variants.map(function(v, i) {
        return '<option value="' + i + '"' +
          (i === sel ? ' selected' : '') + '>' +
          v.label + ' - ' + money(v.price) +
          '</option>';
      }).join('') +
      '</select>';

    $('dSel').onchange = function() {

      selectedVariant[detailId] = Number(this.value);

      updateDetailPrice();

    };

  } else {

    wrap.innerHTML =
      '<div class="d-size">' + p.variants[0].label + '</div>';

  }

  $('dDel').textContent =
    'Delivery available all over UAE · Flat fee ' + money(DELIVERY_FEE);

  updateDetailPrice();

  $('detail').scrollTop = 0;

}


function openDetail(id, fromHistory) {

  if (!find(id)) return;

  buildDetail();

  showDetailContent(id);

  $('detail').classList.add('on');

  document.body.style.overflow = 'hidden';

  if (!fromHistory) {

    try {
      history.pushState({ pid: id }, '', '#product-' + id);
    } catch(e) {}

  }

}


function hideDetail() {

  if (!detailBuilt) return;

  $('detail').classList.remove('on');

  document.body.style.overflow = '';

  detailId = null;

  /* refresh cards so the selected size shows there too */

  renderGrid();

}


function closeDetail() {

  hideDetail();

  if (history.state && history.state.pid) {

    try { history.back(); } catch(e) {}

  }

}


/* Phone / browser back button */

window.addEventListener('popstate', function(e) {

  if (e.state && e.state.pid) {

    openDetail(e.state.pid, true);

  } else {

    hideDetail();

  }

});


/* Esc key closes the detail page */

document.addEventListener('keydown', function(e) {

  if (e.key === 'Escape' && detailId) closeDetail();

});


/* =================================
   SHOPPING CART
================================= */

function renderCart() {

  var ids = Object.keys(cart).filter(function(key) {

    return parseKey(key) && cart[key] > 0;

  });

  var total = 0;

  var n = 0;

  var itemsHtml = ids.length

    ? ids.map(function(key) {

        var info = parseKey(key);

        var p = info.p;

        var v = info.v;

        var q = cart[key];

        total += v.price * q;

        n += q;

        return '<div class="it">' +

          '<div>' +

          '<div>' + p.name + ' <small>(' + v.label + ')</small></div>' +

          '<small>' + money(v.price) + '</small>' +

          '<div class="qty">' +

          '<button data-dec="' + key + '">−</button>' +

          '<span>' + q + '</span>' +

          '<button data-inc="' + key + '">+</button>' +

          '</div></div>' +

          '<div>' + money(v.price * q) + '</div>' +

          '</div>';

      }).join('')

    : '<div class="empty">Your cart is empty.</div>';


  /* Flat delivery fee (only when cart has items) */

  if (ids.length) {

    itemsHtml += '<div class="it">' +

      '<div>' +

      '<div>Delivery <small>(all over UAE)</small></div>' +

      '<small>Flat fee</small>' +

      '</div>' +

      '<div>' + money(DELIVERY_FEE) + '</div>' +

      '</div>';

    total += DELIVERY_FEE;

  }


  $('items').innerHTML = itemsHtml;

  $('count').textContent = n;

  $('total').textContent = money(total);

  $('foot').style.display = ids.length ? 'grid' : 'none';

  save();

}


/* =================================
   OPEN AND CLOSE CART
================================= */

function openCart(on) {

  var drawer = document.getElementById('drawer');

  var veil = document.getElementById('veil');

  if (drawer) drawer.classList.toggle('on', on);

  if (veil) veil.classList.toggle('on', on);

  /* Hide the floating WhatsApp icon while the cart is open */

  var waFloat = document.querySelector('.whatsapp-float');

  if (waFloat) {

    waFloat.style.display = on ? 'none' : '';

  }

}

/* Cart button (works even if the button is re-rendered) */

document.addEventListener('click', function(e) {

  if (e.target.closest('#open')) {

    openCart(true);

  }

  if (e.target.closest('#close') || e.target.closest('#veil')) {

    openCart(false);

  }

});


/* =================================
   VARIANT DROPDOWN CHANGE (cards)
================================= */

document.addEventListener('change', function(e) {

  var sel = e.target.closest ? e.target.closest('[data-var]') : null;

  if (!sel) return;

  selectedVariant[sel.dataset.var] = Number(sel.value);

  renderGrid();

});


/* =================================
   CART BUTTON ACTIONS
================================= */

document.addEventListener('click', function(e) {

  var t = e.target;

  var category = t.closest('[data-c]');

  var addButton = t.closest('[data-add]');

  var incButton = t.closest('[data-inc]');

  var decButton = t.closest('[data-dec]');

  var openCard = t.closest('[data-open]');


  /* Click on a product card (not on Add / dropdown) opens detail page */

  if (openCard && !t.closest('select, option, button, a')) {

    openDetail(openCard.dataset.open);

    return;

  }


  if (category) {

    active = category.dataset.c;

    renderChips();

    renderGrid();

  }


  if (addButton) {

    var addId = addButton.dataset.add;

    var addKey = addId + '|' + getSelected(addId);

    cart[addKey] = (cart[addKey] || 0) + 1;

    renderCart();

    openCart(true);

  }


  if (incButton) {

    cart[incButton.dataset.inc]++;

    renderCart();

  }


  if (decButton) {

    var decId = decButton.dataset.dec;

    cart[decId]--;

    if (cart[decId] <= 0) {

      delete cart[decId];

    }

    renderCart();

  }

});


/* =================================
   WHATSAPP ORDER
================================= */

$('order').onclick = function() {

  var name = $('cn').value.trim();

  var phone = $('cp').value.trim();

  var addr = $('ca').value.trim();


  if (!name || !phone || !addr) {

    $('err').textContent =
      'Please fill in name, phone and address.';

    return;

  }


  $('err').textContent = '';

  var total = 0;

  var lines = [];


  Object.keys(cart).forEach(function(key) {

    var info = parseKey(key);

    if (!info || cart[key] <= 0) return;

    total += info.v.price * cart[key];

    lines.push(
      '• ' + info.p.name +
      ' (' + info.v.label + ')' +
      ' × ' + cart[key] +
      ' = ' + money(info.v.price * cart[key])
    );

  });


  if (lines.length === 0) {

    $('err').textContent = 'Your cart is empty.';

    return;

  }


  /* Add flat delivery fee */

  total += DELIVERY_FEE;

  lines.push('• Delivery (all over UAE) = ' + money(DELIVERY_FEE));


  var msg = 'Hi Hiba Henna! I would like to order:\n' +

    lines.join('\n') +

    '\n\nTotal: ' + money(total) +

    '\n\nName: ' + name +

    '\nPhone: ' + phone +

    '\nAddress: ' + addr;


  window.open(

    'https://wa.me/' + WHATSAPP +

    '?text=' + encodeURIComponent(msg),

    '_blank'

  );

};


/* =================================
   INITIALIZE WEBSITE
================================= */

showDeliveryNotice();

renderChips();

renderGrid();

renderCart();


/* If page is opened with a product link (#product-xxx) */

if (location.hash.indexOf('#product-') === 0) {

  var firstId = location.hash.replace('#product-', '');

  if (find(firstId)) {

    try {
      history.replaceState({ pid: firstId }, '', location.hash);
    } catch(e) {}

    openDetail(firstId, true);

  }

}