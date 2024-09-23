$(document).ready(function () {
  let { page } = getUrlVars(window.location.pathname);
  page = page || 1;

  const totalRecords = "<%= recordCount %>";
  const lastPage =
    totalRecords % 8 === 0
      ? totalRecords / 8
      : Math.floor(totalRecords / 8) + 1;

  if (page < 1 || page > lastPage) window.location.replace(`/`);

  $(".page-button").text(page);

  if (+page === 1) $(".prev-button").prop("disabled", true);
  if (+page === lastPage) $(".next-button").prop("disabled", true);

  $(document).on("click", ".next-button", function () {
    window.location.replace(`?page=${+page + 1}`);
  });

  $(document).on("click", ".prev-button", function () {
    window.location.replace(`?page=${+page - 1}`);
  });
});

function getUrlVars() {
  let vars = [];

  let hashes = window.location.href
    .slice(window.location.href.indexOf("?") + 1)
    .split("&");

  for (let i = 0; i < hashes.length; i++) {
    let hash = hashes[i].split("=");
    vars[hash[0]] = hash[1];
  }
  return vars;
}
