/* =================================
   WHATSAPP AND CURRENCY SETTINGS
   (replace 91XXXXXXXXXX with your
   India WhatsApp number, with 91
   in front and no + or spaces)
================================= */

var WHATSAPP = '971521800153';
var CURRENCY = '₹';


/* =================================
   DELIVERY SETTINGS (India)
   Fee = 0 means no delivery line.
   Note = '' means no notice box.
   Fill these later if you want them.
================================= */

var DELIVERY_FEE = 150;
var DELIVERY_NOTE = 'PAN India Delivery - ₹150';


/* =================================
   CATEGORY ORDER (filter buttons)
================================= */

var CATEGORIES = [
  'Tools & Accessories',
  'Nails Cones',
  'Essential Oils and Nail Liquid',
  'Henna Essentials',
  'Reusable Books and Templates',
  'Kits',
  'Jagua Cones'
];


/* =================================
   PRODUCT DETAILS - 22 PRODUCTS
   - Products with a price come FIRST.
   - soon: true  = "Coming Soon"
     (no price, no Add button)
   - To launch a product later: remove
     soon: true, and put the real price
     in variants, then move it up.
================================= */

var PRODUCTS = [

  /* ---------- PRODUCTS WITH PRICE ---------- */

  {
    id: 'henna-powder',
    cat: 'Henna Essentials',
    name: 'Premium Henna Powder',
    desc: 'Finely sifted, high-quality henna powder that delivers a smooth, silky paste and rich, dark stains.',
    variants: [
      { label: '100 g', price: 100 },
      { label: '500 g', price: 270 },
      { label: '1 Kg', price: 450 }
    ],
    img: 'images/products/henna-powder.png'
  },

  {
    id: 'eucalyptus',
    cat: 'Essential Oils and Nail Liquid',
    also: ['Henna Essentials'],
    name: 'Eucalyptus Essential Oil',
    desc: 'A premium essential oil ideal for henna paste preparation, helping achieve a rich, deep stain.',
    variants: [
      { label: '30 ml', price: 150 },
      { label: '100 ml', price: 340 },
      { label: '500 ml', price: 1350 },
      { label: '1 litre', price: 2400 }
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
      { label: '30 ml', price: 180 },
      { label: '100 ml', price: 430 },
      { label: '500 ml', price: 1650 },
      { label: '1 litre', price: 3100 }
    ],
    img: 'images/products/tea-tree-oil.png'
  },

  {
    id: 'nail-liquid',
    cat: 'Essential Oils and Nail Liquid',
    name: 'Nail Liquid',
    desc: 'Create your own nail cones with our high-quality nail liquid for a rich, dark maroon stain.',
    variants: [
      { label: '1 litre', price: 1500 }
    ],
    img: 'images/products/nail-liquid.png'
  },

  {
    id: 'practice-book',
    cat: 'Reusable Books and Templates',
    name: 'Hiba Henna Practice Book (Part 1)',
    desc: 'Explore beautiful henna templates in a reusable workbook, designed to help you practise, improve and create with confidence.',
    variants: [
      { label: 'Reusable workbook', price: 1000, was:1499 }
    ],
    img: 'images/products/practice-book.png'
  },

  {
    id: 'gulf-design',
    cat: 'Reusable Books and Templates',
    name: 'Hiba Henna Gulf Designs Reusable Book (Part 2)',
    desc: 'Explore 35+ exclusively Gulf-inspired henna designs in our reusable practice book, complete with a FREE realistic reusable hand template!',
    variants: [
      { label: 'Reusable workbook', price: 1200, was:1800 }
    ],
    img: 'images/products/gulf-design.png'
  },

  {
    id: 'fake-hand',
    cat: 'Tools & Accessories',
    also: ['Reusable Books and Templates'],
    name: 'Realistic Hand Template',
    desc: 'Reusable Realistic Hand Template - Practice your henna designs on a realistic hand template with ample space for creativity.',
    variants: [
      { label: 'Reusable template', price: 45 }
    ],
    img: 'images/products/fake-hand.png'
  },

    {
    id: 'nail-cone',
    cat: 'Nails Cones',
    name: 'Premium Nail Cones',
    desc: 'Achieve a rich, dark maroon stain with smooth application and long-lasting results.',
    variants: [
      { label: 'Set of 3', price: 90 },
      { label: 'Set of 5', price: 140 },
      { label: 'Set of 10', price: 250 }
    ],
    img: 'images/products/nail-cone.png'
  },

    {
    id: 'beginner-kit',
    cat: 'Kits',
    name: 'Beginner Henna Kit',
    desc: 'Henna powder - 100g, Eucalyptus oil - 30ml, Stocking - 1, Piping bag , Piping clip, cellophane sheets, pins , small bowl , small spatula , measuring cup smallMake your own DIY henna cones and begin your henna journey with all the essentials you need to get started.',
    variants: [{ label: '', price: 400 }],
    img: 'images/products/beginner-kit.png'
  },


  /* ---------- COMING SOON ---------- */


  {
    id: 'jagua-cone',
    cat: 'Jagua Cones',
    name: 'Premium Jagua Gel Cone',
    desc: 'Create beautiful, tattoo-like designs with a deep blue-black stain using our ready-to-use Jagua gel cone.',
    soon: true,
    variants: [{ label: '', price: 0 }],
    img: 'images/products/jagua-cone.png'
  },

  {
    id: 'jagua-kit',
    cat: 'Kits',
    name: 'Jagua Kit',
    desc: 'Make your own Jagua gel at home with our DIY kit and create beautiful, tattoo-like designs with a deep blue-black stain.',
    soon: true,
    variants: [{ label: '', price: 0 }],
    img: 'images/products/jagua-kit.png'
  },

  {
    id: 'mefix',
    cat: 'Tools & Accessories',
    name: 'Mefix / Henna Tape',
    desc: 'Keeps dried henna securely in place, preventing flakes and ensuring a mess-free experience.',
    soon: true,
    variants: [{ label: '', price: 0 }],
    img: 'images/products/mefix.png'
  },

  {
    id: 'acrylic-hand',
    cat: 'Tools & Accessories',
    name: 'Acrylic Hand',
    desc: 'A perfect practice companion for henna artists to create, improve and showcase designs with ease. Reusable and ideal for endless practice!',
    soon: true,
    variants: [{ label: '', price: 0 }],
    img: 'images/products/acrylic-hand.png'
  },

  {
    id: 'spatula',
    cat: 'Tools & Accessories',
    name: 'Henna Spatula',
    desc: 'A must have henna essential for smooth, effortless mixing with minimal wastage.',
    soon: true,
    variants: [{ label: '', price: 0 }],
    img: 'images/products/spatula.png'
  },

  {
    id: 'cutter',
    cat: 'Tools & Accessories',
    name: 'Cellophane Sheet Cutter',
    desc: 'Cut cellophane sheets effortlessly and achieve clean, precise cuts for perfectly sized henna cones every time.',
    soon: true,
    variants: [{ label: '', price: 0 }],
    img: 'images/products/cutter.png'
  },

  {
    id: 'cellophane',
    cat: 'Tools & Accessories',
    also: ['Henna Essentials'],
    name: 'Cellophane Sheets',
    desc: 'High-quality, easy-to-roll sheets designed for smooth cone making.',
    soon: true,
    variants: [{ label: '', price: 0 }],
    img: 'images/products/cellophane.png'
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
  return CURRENCY + Number(amount).toLocaleString('en-IN');
}

function find(id) {

  for (var i = 0; i < PRODUCTS.length; i++) {

    if (PRODUCTS[i].id === id) {
      return PRODUCTS[i];
    }

  }

  return null;
}

function isSoon(p) {
  return !!(p && p.soon);
}

function labelSmall(v) {
  return v && v.label ? ' <small>(' + v.label + ')</small>' : '';
}

function labelPlain(v) {
  return v && v.label ? ' (' + v.label + ')' : '';
}


/* =================================
   PRICE DISPLAY
   If a variant has "was" (old price),
   the old price is shown lined above
   the offer price.
================================= */

function priceHTML(v) {

  if (v && v.was) {

    return '<small style="display:block;font-size:.55em;line-height:1.2;' +
      'font-weight:500;text-decoration:line-through;' +
      'text-decoration-thickness:1.5px;color:#d8c19c;opacity:.9;">' +
      money(v.was) +
      '</small>' +
      money(v.price);

  }

  return money(v.price);

}


/* =================================
   VARIANT HELPERS
   Cart key format:  productId|variantIndex
================================= */

var selectedVariant = {};

function getSelected(id) {

  return selectedVariant[id] || 0;

}

function parseKey(key) {

  var parts = key.split('|');

  var p = find(parts[0]);

  if (!p || p.soon) return null;

  var vi = Number(parts[1] || 0);

  var v = p.variants[vi];

  if (!v) return null;

  return { p: p, v: v, vi: vi };

}


/* =================================
   DELIVERY NOTICE (only if
   DELIVERY_NOTE is filled above)
================================= */

function showDeliveryNotice() {

  if (!DELIVERY_NOTE) return;

  var chips = $('chips');

  if (!chips || !chips.parentNode) return;

  var note = document.createElement('div');

  note.className = 'delivery-note';

  note.setAttribute(
    'style',
    'text-align:center;margin:0 auto 18px;padding:14px 22px;' +
    'max-width:560px;border-radius:14px;' +
    'background:#f3e3c3;color:#2b1911;' +
    'font-size:15px;line-height:1.7;letter-spacing:.3px;'
  );

  note.innerHTML = DELIVERY_NOTE;

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

    var soon = isSoon(p);

    var sel = getSelected(p.id);

    var current = p.variants[sel] || p.variants[0];

    /* Dropdown if more than 1 option, small label if 1 option */

    var variantUI = '';

    if (!soon) {

      if (p.variants.length > 1) {

        variantUI = '<select class="vsel" data-var="' + p.id + '" ' +
          'style="width:100%;margin:6px 0;padding:8px;border:1px solid #5c3d2a;border-radius:8px;font-size:14px;background:#2b1911;color:#f3e3c3;">' +

          p.variants.map(function(v, i) {

            return '<option value="' + i + '"' +
              (i === sel ? ' selected' : '') + '>' +
              v.label + ' - ' + money(v.price) +
              '</option>';

          }).join('') +

          '</select>';

      } else if (current.label) {

        variantUI = '<small class="vlabel" style="display:block;margin:4px 0;opacity:.8;">' +
          current.label + '</small>';

      }

    }

    var bottom = soon

      ? '<div class="prow">' +
        '<span class="price" style="font-size:22px;font-style:italic;opacity:.95;">Coming Soon</span>' +
        '</div>'

      : '<div class="prow">' +
        '<span class="price">' + priceHTML(current) + '</span>' +
        '<button class="btn sm" data-add="' + p.id + '">Add</button>' +
        '</div>';

    return '<div class="prod" data-open="' + p.id + '" style="cursor:pointer;">' +

      '<div class="pic">' + pic + '</div>' +

      '<div class="pbody">' +

      '<h3>' + p.name + '</h3>' +

      '<p>' + p.desc + '</p>' +

      variantUI +

      bottom +

      '</div></div>';

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
    'background:#2b1911;overflow-y:auto;display:none;' +
    '-webkit-overflow-scrolling:touch;}' +

    '#detail.on{display:block;}' +

    '.d-top{position:sticky;top:0;z-index:2;background:#231209;' +
    'border-bottom:1px solid #5c3d2a;padding:10px 16px;}' +

    '.d-back{background:none;border:0;font-family:inherit;font-size:16px;' +
    'color:#f3e3c3;cursor:pointer;padding:8px 4px;letter-spacing:.5px;}' +

    '.d-wrap{max-width:1000px;margin:0 auto;padding:20px 16px 50px;' +
    'display:grid;grid-template-columns:1fr;gap:22px;}' +

    '@media(min-width:800px){.d-wrap{grid-template-columns:1fr 1fr;' +
    'gap:40px;padding-top:32px;}}' +

    '.d-imgbox{position:relative;overflow:hidden;border-radius:18px;' +
    'background:#3b2418;border:1px solid #5c3d2a;aspect-ratio:1/1;' +
    'cursor:zoom-in;touch-action:pan-y;user-select:none;' +
    '-webkit-user-select:none;-webkit-touch-callout:none;}' +

    '.d-imgbox img{width:100%;height:100%;object-fit:contain;display:block;' +
    'transition:transform .18s ease-out;will-change:transform;' +
    'pointer-events:none;-webkit-user-drag:none;}' +

    '.d-hint{text-align:center;font-size:13px;opacity:.7;margin-top:8px;' +
    'color:#d8c19c;}' +

    '.d-cat{font-size:12px;letter-spacing:2px;text-transform:uppercase;' +
    'color:#cdb48f;}' +

    '.d-name{font-family:"Cormorant Garamond",serif;font-size:32px;' +
    'line-height:1.15;margin:6px 0 12px;color:#f6ecda;font-weight:600;}' +

    '.d-desc{font-size:16px;line-height:1.7;color:#e6d3b0;margin-bottom:18px;}' +

    '.d-lbl{font-size:13px;letter-spacing:1px;color:#cdb48f;margin-bottom:6px;}' +

    '.d-sel{width:100%;padding:12px;border:1px solid #5c3d2a;' +
    'border-radius:10px;font-size:15px;background:#3b2418;color:#f3e3c3;' +
    'margin-bottom:14px;font-family:inherit;}' +

    '.d-size{font-size:15px;color:#e6d3b0;margin-bottom:14px;opacity:.9;}' +

    '.d-price{font-family:"Cormorant Garamond",serif;font-size:36px;' +
    'color:#f6ecda;margin:6px 0 16px;font-weight:600;line-height:1.1;}' +

    '.d-add{width:100%;padding:16px;border:0;border-radius:999px;' +
    'background:#f3e3c3;color:#2b1911;font-size:15px;letter-spacing:2px;' +
    'text-transform:uppercase;cursor:pointer;font-family:inherit;}' +

    '.d-add:active{transform:scale(.98);}' +

    '.d-add[disabled]{opacity:.55;cursor:default;transform:none;}' +

    '.d-del{margin-top:14px;font-size:14px;color:#d8c19c;opacity:.85;' +
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

    if (isSoon(find(detailId))) return;

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

  if (isSoon(p)) {

    $('dPrice').innerHTML =
      '<span style="font-style:italic;font-size:.8em;">Coming Soon</span>';

    return;

  }

  var cur = p.variants[getSelected(p.id)] || p.variants[0];

  $('dPrice').innerHTML = priceHTML(cur);

}


function showDetailContent(id) {

  var p = find(id);

  if (!p) return;

  detailId = id;

  var soon = isSoon(p);

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

  if (soon) {

    wrap.innerHTML = '';

  } else if (p.variants.length > 1) {

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

  } else if (p.variants[0].label) {

    wrap.innerHTML =
      '<div class="d-size">' + p.variants[0].label + '</div>';

  } else {

    wrap.innerHTML = '';

  }

  /* Add to Cart button: disabled for Coming Soon */

  $('dAdd').disabled = soon;

  $('dAdd').textContent = soon ? 'Coming Soon' : 'Add to Cart';

  $('dDel').textContent = (!soon && DELIVERY_NOTE)
    ? DELIVERY_NOTE.replace(/<[^>]*>/g, ' ')
    : '';

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

          '<div>' + p.name + labelSmall(v) + '</div>' +

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


  /* Delivery fee (only when set above and cart has items) */

  if (ids.length && DELIVERY_FEE > 0) {

    itemsHtml += '<div class="it">' +

      '<div>' +

      '<div>Delivery</div>' +

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

  $('drawer').classList.toggle('on', on);

  $('veil').classList.toggle('on', on);

  /* Hide the floating WhatsApp icon while the cart is open */

  var waFloat = document.querySelector('.whatsapp-float');

  if (waFloat) {

    waFloat.style.display = on ? 'none' : '';

  }

}

$('open').onclick = function() {

  openCart(true);

};

$('close').onclick = $('veil').onclick = function() {

  openCart(false);

};


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

    if (!isSoon(find(addId))) {

      var addKey = addId + '|' + getSelected(addId);

      cart[addKey] = (cart[addKey] || 0) + 1;

      renderCart();

      openCart(true);

    }

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
      labelPlain(info.v) +
      ' × ' + cart[key] +
      ' = ' + money(info.v.price * cart[key])
    );

  });


  if (lines.length === 0) {

    $('err').textContent = 'Your cart is empty.';

    return;

  }


  /* Add delivery fee (only if set above) */

  if (DELIVERY_FEE > 0) {

    total += DELIVERY_FEE;

    lines.push('• Delivery = ' + money(DELIVERY_FEE));

  }


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