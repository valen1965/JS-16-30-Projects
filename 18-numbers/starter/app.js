const items = [...document.querySelectorAll('.number')];


const updateCount = (el) => {
    // console.log(el);
    const value = parseInt(el.dataset.value);
    const increment = Math.ceil(value / 1000);
    // const increment = 10;
    let initialValue = 0;

    const increaseCount = setInterval(() => {
        initialValue += increment;

        if (initialValue > value) {
            el.textContent = `${value}+`;
            clearInterval(increaseCount);
            return;
        }

        el.textContent = `${initialValue}+`;
    }, 1);
    // console.log(increaseCount);
};

items.forEach((item) => {
    // console.log(item);
    updateCount(item);
});


