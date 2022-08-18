let input = document.querySelector("#input");
let btn = document.querySelector("button");
let demo = document.querySelector("#demo");
btn.addEventListener("click", () => {
    let inputValue = input.value.trim();
    function max (inputValue){
        let arrayNew = inputValue.split(" ");
        arrayNew.sort(function (a,b){
            return b.length - a.length;
        })
        return arrayNew[0];

    }
    demo.textContent = max(inputValue);
});
