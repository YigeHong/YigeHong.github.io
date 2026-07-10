/* ============================================================
   Rendering logic shared by the home and publications pages.
   Reads window.PUBLICATIONS (from data/publications.js) and
   renders the selected list, the chronological view, and the
   by-area view, with a title-first visual hierarchy and a
   per-paper "cite" button that copies BibTeX. No build step.
   ============================================================ */
(function () {
  "use strict";

  // Area display order for the "by area" view, each with the
  // image shown on its selector card.
  var AREA_ORDER = [
    "Restless bandits & Weakly-Coupled Markov Decision Processes",
    "Queueing theory",
    "Other topics"
  ];
  var AREA_IMAGE = {
    "Restless bandits & Weakly-Coupled Markov Decision Processes":
      "assets/img/areas/rbs-wcmdps.png",
    "Queueing theory": "assets/img/areas/queueing-theory.png"
  };
  // Short labels shown on the selector cards (the full area name
  // is still used as the grouping key and section identity).
  var AREA_LABEL = {
    "Restless bandits & Weakly-Coupled Markov Decision Processes": "RBs & WCMDPs",
    "Queueing theory": "Queueing theory",
    "Other topics": "Other topics"
  };

  function linksHtml(links) {
    if (!links || !links.length) return "";
    return links
      .map(function (l) {
        var kind = l.kind || "resource";
        return (
          '<a class="pub-link-btn link-' + kind + '" href="' + l.href + '">' +
          l.label +
          "</a>"
        );
      })
      .join("");
  }

  function citeHtml(pub) {
    if (!pub.bibtex) return "";
    return '<button class="cite-btn" data-id="' + pub.id + '">cite</button>';
  }

  function escAttr(s) {
    return String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
  }

  // For works without a thumbnail, show a typographic "cover"
  // tile with the venue + year instead of a broken-image-like
  // icon. Uses pub.venueShort when given, else derives a short
  // label from the venue string (parenthetical acronym + year).
  function coverText(pub) {
    if (pub.venueShort) return pub.venueShort;
    var v = pub.venue || "";
    var year = (v.match(/\d{4}/) || [""])[0];
    var paren = v.match(/\(([^)]+)\)/);
    var name = paren ? paren[1] : v.split(",")[0].trim();
    return (name + (year ? " " + year : "")).trim();
  }

  // Render a single work with title-first hierarchy. When a
  // shortTitle exists it becomes the headline, with the full
  // title shown on hover.
  function entryHtml(pub) {
    var display = pub.shortTitle || pub.title;
    // Full title shown in a custom hover tooltip (data-full) when a
    // shortened headline is used; title attr kept for accessibility.
    var fullAttr = pub.shortTitle
      ? ' data-full="' + escAttr(pub.title) + '"'
      : "";
    var head =
      '<div class="pub-head">' +
      '<span class="pub-title"' + fullAttr + ">" + display + "</span>" +
      "</div>";
    var authors = '<div class="pub-authors">' + pub.authors + "</div>";
    var venue = '<div class="pub-venue">' + pub.venue + "</div>";
    var actions =
      '<div class="pub-actions">' +
      linksHtml(pub.links) +
      citeHtml(pub) +
      "</div>";
    var award = pub.award
      ? '<div class="award">' + pub.award + "</div>"
      : "";
    var note = pub.note ? '<div class="pub-note">' + pub.note + "</div>" : "";
    var body =
      '<div class="pub-body">' +
      head + authors + venue + actions + award + note +
      "</div>";
    var thumb = pub.thumb
      ? '<img class="pub-thumb" src="' + pub.thumb + '" alt="" loading="lazy">'
      : '<div class="pub-thumb pub-thumb-cover"><span>' +
        coverText(pub) +
        "</span></div>";
    return '<li class="has-thumb">' + thumb + body + "</li>";
  }

  function listHtml(pubs) {
    return '<ul class="pub-list">' + pubs.map(entryHtml).join("") + "</ul>";
  }

  function byId(id) {
    for (var i = 0; i < window.PUBLICATIONS.length; i++) {
      if (window.PUBLICATIONS[i].id === id) return window.PUBLICATIONS[i];
    }
    return null;
  }

  // ---- Views -------------------------------------------------

  function chronological() {
    // Sort by first-appearance date descending ("YYYY-MM" sorts
    // lexically); array order breaks any exact ties.
    return window.PUBLICATIONS.slice().sort(function (a, b) {
      if (a.firstAppeared < b.firstAppeared) return 1;
      if (a.firstAppeared > b.firstAppeared) return -1;
      return 0;
    });
  }

  function yearOf(pub) {
    return pub.firstAppeared.slice(0, 4);
  }

  function renderChronological(container) {
    // Group under first-appearance year headers so the ordering
    // is self-evident even when the venue year differs.
    var pubs = chronological();
    var html = "";
    var current = null;
    var buffer = [];
    function flushGroup() {
      if (buffer.length) html += listHtml(buffer);
      buffer = [];
    }
    pubs.forEach(function (p) {
      var y = yearOf(p);
      if (y !== current) {
        flushGroup();
        html += '<h2 class="year-head">' + y + "</h2>";
        current = y;
      }
      buffer.push(p);
    });
    flushGroup();
    container.innerHTML = html;
  }

  function setHash(h) {
    if (window.history && history.replaceState) {
      history.replaceState(null, "", h);
    } else {
      location.hash = h;
    }
  }

  function renderByArea(container, initialIdx) {
    var areas = AREA_ORDER.slice();
    // Append any areas not in the explicit order, just in case.
    window.PUBLICATIONS.forEach(function (p) {
      if (areas.indexOf(p.area) === -1) areas.push(p.area);
    });
    areas = areas.filter(function (area) {
      return chronological().some(function (p) {
        return p.area === area;
      });
    });

    // Areas with a figure render as image cards; image-less areas
    // (e.g. "Other topics") render as a slim bar below. Clicking
    // any one shows that area's list. First area open by default.
    var cardsHtml = "";
    var barsHtml = "";
    areas.forEach(function (area, i) {
      var label = AREA_LABEL[area] || area;
      if (AREA_IMAGE[area]) {
        cardsHtml +=
          '<button class="area-card" data-area="' + i + '">' +
          '<img class="area-card-img" src="' + AREA_IMAGE[area] + '" alt="">' +
          '<span class="area-card-label">' + label + "</span>" +
          "</button>";
      } else {
        barsHtml +=
          '<button class="area-bar" data-area="' + i + '">' +
          '<span class="area-bar-label">' + label + "</span>" +
          '<span class="area-bar-chevron" aria-hidden="true">&rsaquo;</span>' +
          "</button>";
      }
    });

    container.innerHTML =
      '<div class="area-cards">' + cardsHtml + "</div>" +
      (barsHtml ? '<div class="area-bars">' + barsHtml + "</div>" : "") +
      '<div class="area-list"></div>';

    var cards = container.querySelectorAll(".area-card, .area-bar");
    var listEl = container.querySelector(".area-list");

    function select(idx, updateHash) {
      var area = areas[idx];
      var inArea = chronological().filter(function (p) {
        return p.area === area;
      });
      listEl.innerHTML = listHtml(inArea);
      for (var i = 0; i < cards.length; i++) {
        cards[i].classList.toggle("active", i === idx);
      }
      if (updateHash !== false) setHash("#by-area-" + idx);
    }

    container.addEventListener("click", function (e) {
      var card = e.target.closest(".area-card, .area-bar");
      if (card) select(parseInt(card.dataset.area, 10));
    });

    // Clamp to a valid index; first area open by default.
    var start = initialIdx || 0;
    if (start < 0 || start >= areas.length) start = 0;
    select(start, false);
  }

  // ---- Cite button (copy BibTeX) ----------------------------

  function flash(btn, msg) {
    var original = btn.textContent;
    btn.textContent = msg;
    btn.classList.add("cite-done");
    setTimeout(function () {
      btn.textContent = original;
      btn.classList.remove("cite-done");
    }, 1400);
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    // Fallback for non-secure contexts.
    return new Promise(function (resolve, reject) {
      try {
        var ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  }

  document.addEventListener("click", function (e) {
    var btn = e.target.closest ? e.target.closest(".cite-btn") : null;
    if (!btn) return;
    var pub = byId(btn.dataset.id);
    if (!pub || !pub.bibtex) return;
    copyText(pub.bibtex).then(
      function () { flash(btn, "copied!"); },
      function () { flash(btn, "copy failed"); }
    );
  });

  // ---- Public entry points ----------------------------------

  // Home page: render the selected-publications list.
  window.renderSelectedPublications = function (containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;
    var pubs = (window.SELECTED_PUBLICATIONS || [])
      .map(byId)
      .filter(Boolean)
      .sort(function (a, b) {
        // by first-appearance date, newest first
        if (a.firstAppeared < b.firstAppeared) return 1;
        if (a.firstAppeared > b.firstAppeared) return -1;
        return 0;
      });
    container.innerHTML = listHtml(pubs);
  };

  // Publications page: wire up the two-view toggle. The chosen
  // view AND the open area card are stored in the URL hash, so
  // both survive a refresh (and are shareable/bookmarkable):
  //   #chronological          chronological view
  //   #by-area-<idx>          by-area view, card <idx> open
  window.initPublicationViews = function (containerId, toggleId) {
    var container = document.getElementById(containerId);
    var toggle = document.getElementById(toggleId);
    if (!container) return;

    function show(view, areaIdx, updateHash) {
      if (view === "area") {
        // renderByArea manages the #by-area-<idx> hash itself.
        renderByArea(container, areaIdx);
      } else {
        renderChronological(container);
        if (updateHash !== false) setHash("#chronological");
      }
      if (toggle) {
        var btns = toggle.querySelectorAll("button");
        for (var i = 0; i < btns.length; i++) {
          btns[i].classList.toggle("active", btns[i].dataset.view === view);
        }
      }
    }

    if (toggle) {
      toggle.addEventListener("click", function (e) {
        var btn = e.target.closest("button");
        if (btn && btn.dataset.view) show(btn.dataset.view, 0);
      });
    }

    // Restore view + area from the URL hash on load; default to
    // the by-area view.
    if (location.hash === "#chronological") {
      show("chrono", 0, false);
    } else {
      var m = location.hash.match(/^#by-area(?:-(\d+))?$/);
      show("area", m && m[1] ? parseInt(m[1], 10) : 0, false);
    }
  };
})();