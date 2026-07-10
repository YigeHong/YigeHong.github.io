/* ============================================================
   Rendering logic shared by the home and publications pages.
   Reads window.PUBLICATIONS (from data/publications.js) and
   renders the selected list, the chronological view, and the
   by-area view. No dependencies, no build step.
   ============================================================ */
(function () {
  "use strict";

  var TYPE_LABEL = {
    journal: "Journal",
    conference: "Conference",
    preprint: "Preprint"
  };

  // Area display order for the "by area" view.
  var AREA_ORDER = ["Restless bandits", "Queueing theory"];

  function badge(type) {
    var label = TYPE_LABEL[type] || type;
    return '<span class="badge badge-' + type + '">' + label + "</span>";
  }

  function linksHtml(links) {
    if (!links || !links.length) return "";
    var parts = links.map(function (l) {
      return '<a href="' + l.href + '">' + l.label + "</a>";
    });
    return '<span class="pub-links">[' + parts.join(", ") + "]</span>";
  }

  // Render a single publication as an <li>.
  function entryHtml(pub) {
    var html = "";
    html += badge(pub.type) + " ";
    html += '<span class="pub-title">' + pub.title + ".</span> ";
    html += pub.authors + " (" + pub.year + "). ";
    html += '<span class="pub-venue">' + pub.venue + ".</span> ";
    html += linksHtml(pub.links);
    if (pub.award) {
      html += ' <span class="award">' + pub.award + "</span>";
    }
    return "<li>" + html + "</li>";
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
    // Stable sort by year descending; array order breaks ties.
    return window.PUBLICATIONS.slice().sort(function (a, b) {
      return b.year - a.year;
    });
  }

  function renderChronological(container) {
    container.innerHTML = listHtml(chronological());
  }

  function renderByArea(container) {
    var areas = AREA_ORDER.slice();
    // Append any areas not in the explicit order, just in case.
    window.PUBLICATIONS.forEach(function (p) {
      if (areas.indexOf(p.area) === -1) areas.push(p.area);
    });
    var html = "";
    areas.forEach(function (area) {
      var inArea = window.PUBLICATIONS.filter(function (p) {
        return p.area === area;
      });
      if (!inArea.length) return;
      html += "<h2>" + area + "</h2>" + listHtml(inArea);
    });
    container.innerHTML = html;
  }

  // ---- Public entry points ----------------------------------

  // Home page: render the selected-publications list.
  window.renderSelectedPublications = function (containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;
    var pubs = (window.SELECTED_PUBLICATIONS || [])
      .map(byId)
      .filter(Boolean);
    container.innerHTML = listHtml(pubs);
  };

  // Publications page: wire up the two-view toggle.
  window.initPublicationViews = function (containerId, toggleId) {
    var container = document.getElementById(containerId);
    var toggle = document.getElementById(toggleId);
    if (!container) return;

    function show(view) {
      if (view === "area") {
        renderByArea(container);
      } else {
        renderChronological(container);
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
        if (btn && btn.dataset.view) show(btn.dataset.view);
      });
    }

    show("chrono"); // default view
  };
})();
