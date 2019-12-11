const onResize = () => {
    const div = document.querySelector('.test');
    const { width, height } = getComputedStyle(div);
    console.log('Width', width, 'Height', height);
}

const initResize = () => {
    window.addEventListener('resize', onResize);
    onResize();
}

const initObserver = () => {
    const observer = new ResizeObserver(([entry]) => {
        const {
            contentRect: {
                height,
                width
            }
        } = entry;
        console.log('Width', width, 'Height', height);
    });
    const div = document.querySelector('.test');
    observer.observe(div);
}

// initResize();
// initObserver();