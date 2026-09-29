// Фильтр кейсов по направлению + запоминание выбранного языка.
(function () {
  try { localStorage.setItem("lang", document.documentElement.lang); } catch (e) {}

  var chips = document.querySelectorAll(".chip[data-f]");
  if (!chips.length) return;
  var items = document.querySelectorAll(".case[data-tags], .card[data-tags]");

  function apply(f) {
    chips.forEach(function (b) { b.classList.toggle("on", b.dataset.f === f); });
    items.forEach(function (el) {
      var tags = (el.dataset.tags || "").split(" ");
      el.classList.toggle("hide", f !== "all" && tags.indexOf(f) === -1);
    });
  }

  chips.forEach(function (b) {
    b.addEventListener("click", function () {
      apply(b.classList.contains("on") && b.dataset.f !== "all" ? "all" : b.dataset.f);
    });
  });
})();
