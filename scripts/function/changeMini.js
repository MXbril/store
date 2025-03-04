function changeMini(event) {
    const selectedSrc = event.target.src;
    const bigSelector = document.querySelector("#bigImg");
    bigSelector.src = selectedSrc;
  }

  export { changeMini };