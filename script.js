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
   PRODUCT DETAILS - 23 PRODUCTS
   Each product has "variants" (size/quantity + price)
================================= */

var PRODUCTS = [

  // TOOLS & ACCESSORIES

  {
    id: 'spatula',
    cat: 'Tools & Accessories',
    name: 'Henna Spatula',
    desc: 'Colourful spatulas for henna preparation.',
    variants: [
      { label: '1 piece', price: 12 }
    ],
    img: 'images/products/spatula.png'
  },

  {
    id: 'acrylic-hand',
    cat: 'Tools & Accessories',
    name: 'Acrylic Hand',
    desc: 'Practice hand for henna designs.',
    variants: [
      { label: '1 piece', price: 30 }
    ],
    img: 'images/products/acrylic-hand.png'
  },

  {
    id: 'fake-hand',
    cat: 'Tools & Accessories',
    name: 'Realistic Fake Hand',
    desc: 'Realistic practice hand for henna artists.',
    variants: [
      { label: 'Hand template', price: 20 }
    ],
    img: 'images/products/fake-hand.png'
  },

  {
    id: 'cutter',
    cat: 'Tools & Accessories',
    name: 'Cutter',
    desc: 'Useful tool for henna accessories.',
    variants: [
      { label: 'Cellophane sheet trimmer', price: 25 }
    ],
    img: 'images/products/cutter.png'
  },

  {
    id: 'cellophane',
    cat: 'Tools & Accessories',
    name: 'Cellophane Sheet',
    desc: 'Sheets for henna application.',
    variants: [
      { label: 'Per piece', price: 1 }
    ],
    img: 'images/products/cellophane.png'
  },

  {
    id: 'mefix',
    cat: 'Tools & Accessories',
    name: 'Mefix Tape',
    desc: 'Adhesive tape for henna use.',
    variants: [
      { label: '1 roll', price: 35 }
    ],
    img: 'images/products/mefix.png'
  },


  // HENNA CONES

  {
    id: 'organic-cone',
    cat: 'Henna Cones',
    name: 'Organic Henna Cone',
    desc: 'Natural organic henna cone.',
    variants: [
      { label: '30g', price: 10 }
    ],
    img: 'images/products/organic-cone.png'
  },

  {
    id: 'practice-cone',
    cat: 'Henna Cones',
    name: 'Practice Henna Cone',
    desc: 'Henna cone for design practice.',
    variants: [
      { label: '25g', price: 5 }
    ],
    img: 'images/products/practice-cone.png'
  },

  {
    id: 'nail-cone',
    cat: 'Henna Cones',
    name: 'Nail Cone',
    desc: 'Henna cone for nail application.',
    variants: [
      { label: '10-12g', price: 8 }
    ],
    img: 'images/products/nail-cone.png'
  },


  // LIQUIDS & OILS

  {
    id: 'nail-liquid',
    cat: 'Liquids & Oils',
    name: 'Nail Liquid',
    desc: 'Hiba Henna nail liquid.',
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
    cat: 'Liquids & Oils',
    name: 'Eucalyptus Oil',
    desc: 'Eucalyptus oil for henna use.',
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
    cat: 'Liquids & Oils',
    name: 'Tea Tree Oil',
    desc: 'Tea tree oil for henna use.',
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
    name: 'Henna Powder',
    desc: 'Premium natural henna powder.',
    variants: [
      { label: '100g', price: 20 },
      { label: '500g', price: 40 },
      { label: '1kg', price: 60 }
    ],
    img: 'images/products/henna-powder.png'
  },

  {
    id: 'premium-paste',
    cat: 'Henna Essentials',
    name: 'Premium Henna Paste',
    desc: 'Premium ready-to-use henna paste.',
    variants: [
      { label: '500g', price: 110 }
    ],
    img: 'images/products/henna-cone.png'
  },


  // KITS & LEARNING

  {
    id: 'practice-book',
    cat: 'Kits & Learning',
    name: 'Henna Practice Book',
    desc: 'Practice book for learning henna designs.',
    variants: [
      { label: 'Reusable workbook', price: 100 }
    ],
    img: 'images/products/practice-book.png'
  },

  {
    id: 'beginner-kit',
    cat: 'Kits & Learning',
    name: 'Beginner Henna Kit',
    desc: 'Complete kit for henna beginners.',
    variants: [
      { label: '1 kit', price: 40 }
    ],
    img: 'images/products/beginner-kit.png'
  },

  {
    id: 'jagua-kit',
    cat: 'Kits & Learning',
    name: 'Jagua Kit',
    desc: 'Jagua products and accessories kit.',
    variants: [
      { label: '1 kit', price: 100 }
    ],
    img: 'images/products/jagua-kit.png'
  },

  {
    id: 'gulf-design',
    cat: 'Kits & Learning',
    name: 'Gulf Designs',
    desc: 'Gulf henna design workbook.',
    variants: [
      { label: 'Reusable workbook', price: 100 }
    ],
    img: 'images/products/gulf-design.png'
  },

  {
    id: 'trio-kit',
    cat: 'Kits & Learning',
    name: 'The Trio Trial Kit',
    desc: '1 Premium Henna Cone, 1 Nail Cone and 1 Jagua Gel Cone.',
    variants: [
      { label: '3 cones', price: 42 }
    ],
    img: 'images/products/trio-kit.png'
  },

  {
    id: 'signature-mini',
    cat: 'Kits & Learning',
    name: 'Signature Combo - Mini',
    desc: '3 Premium Henna Cones and 1 Nail Cone.',
    variants: [
      { label: '4 cones', price: 35 }
    ],
    img: 'images/products/signature-mini.png'
  },

  {
    id: 'signature-plus',
    cat: 'Kits & Learning',
    name: 'Signature Combo - Plus',
    desc: '5 Premium Henna Cones and 2 Nail Cones.',
    variants: [
      { label: '7 cones', price: 62 }
    ],
    img: 'images/products/signature-plus.png'
  },


  // JAGUA CONES

  {
    id: 'jagua-cone',
    cat: 'Jagua Cones',
    name: 'Jagua Cone',
    desc: 'Jagua cone for body art.',
    variants: [
      { label: '15g', price: 25 }
    ],
    img: 'images/products/jagua-cone.png'
  },

  {
    id: 'jagua-paste',
    cat: 'Jagua Cones',
    name: 'Jagua Gel Paste',
    desc: 'Jagua gel paste for body art.',
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

var cats = ['All'];

PRODUCTS.forEach(function(p) {

  if (cats.indexOf(p.cat) < 0) {

    cats.push(p.cat);

  }

});

var active = 'All';


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
================================= */

function renderGrid() {

  $('grid').innerHTML = PRODUCTS.filter(function(p) {

    return active === 'All' || p.cat === active;

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

    return '<div class="prod">' +

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

  $('drawer').classList.toggle('on', on);

  $('veil').classList.toggle('on', on);

}

$('open').onclick = function() {

  openCart(true);

};

$('close').onclick = $('veil').onclick = function() {

  openCart(false);

};


/* =================================
   VARIANT DROPDOWN CHANGE
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