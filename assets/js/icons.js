/**
 * Why-card icon library. Each key maps to a 24x24 Lucide-style SVG with
 * stroke-width 1.8 and round line caps/joins — visually consistent with
 * the hardcoded SVG fallbacks already in index.html. The `data-icon`
 * attribute on `.why-card` drives which SVG we inject into `.why-icon`.
 *
 * Keep this list in sync with `ICON_KEYS` in `templates/admin/content.html`
 * so the dashboard dropdown and the live site share the same vocabulary.
 *
 * Adding a new icon: drop the SVG inner markup below and add the key to
 * ICON_KEYS in content.html. No other code changes needed.
 */
(function () {
  'use strict';

  var common = 'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"';

  var lib = {
    coach:      '<svg ' + common + '><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    science:    '<svg ' + common + '><path d="M9 2v6l-5 8a4 4 0 0 0 4 6h8a4 4 0 0 0 4-6l-5-8V2"/><line x1="9" y1="2" x2="15" y2="2"/></svg>',
    progress:   '<svg ' + common + '><polyline points="3 17 9 11 13 15 21 7"/><polyline points="14 7 21 7 21 14"/></svg>',
    community:  '<svg ' + common + '><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
    heart:      '<svg ' + common + '><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
    dumbbell:   '<svg ' + common + '><path d="M6 4v16M18 4v16"/><path d="M2 8v8M22 8v8"/><line x1="6" y1="12" x2="18" y2="12"/></svg>',
    timer:      '<svg ' + common + '><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2"/><path d="M9 2h6"/></svg>',
    target:     '<svg ' + common + '><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
    check:      '<svg ' + common + '><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
    video:      '<svg ' + common + '><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>',
    trophy:     '<svg ' + common + '><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>',
    calendar:   '<svg ' + common + '><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
    star:       '<svg ' + common + '><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    shield:     '<svg ' + common + '><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    flame:      '<svg ' + common + '><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
    brain:      '<svg ' + common + '><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>',
    crown:      '<svg ' + common + '><path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/></svg>',
    bolt:       '<svg ' + common + '><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    globe:      '<svg ' + common + '><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    book:       '<svg ' + common + '><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  };

  // Expose for the dashboard iframe preview (if loaded) or manual debugging.
  window.__1PC_ICON_LIB = lib;

  function paintOne(card) {
    var key = card.getAttribute('data-icon');
    if (!key) return;
    var slot = card.querySelector('.why-icon');
    if (!slot) return;
    var svg = lib[key];
    if (svg) {
      slot.innerHTML = svg;
      return;
    }
    // Unknown key — try the custom-icon directory. User-uploaded SVGs
    // live at /assets/icons/<key>.svg (dashboard "Upload icon" flow
    // writes them there). Fetched on-demand to avoid a manifest round
    // trip. Failures leave the hardcoded fallback SVG in place.
    fetch('/assets/icons/' + encodeURIComponent(key) + '.svg', { cache: 'force-cache' })
      .then(function (r) { return r.ok ? r.text() : null; })
      .then(function (text) {
        if (!text) return;
        // Basic sanity: must look like SVG, no <script>.
        var t = text.toLowerCase();
        if (t.indexOf('<svg') < 0 || t.indexOf('<script') >= 0) return;
        // Cache in-memory so subsequent paints (lang toggle re-render
        // etc.) don't re-fetch.
        lib[key] = text;
        slot.innerHTML = text;
      })
      .catch(function () { /* swallow — fallback stays */ });
  }

  function paint() {
    var cards = document.querySelectorAll('.why-card[data-icon]');
    for (var i = 0; i < cards.length; i++) paintOne(cards[i]);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', paint);
  } else {
    paint();
  }
})();
