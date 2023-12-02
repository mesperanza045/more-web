function controlVideo() {
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach((iframe)=>{
        let iframeSrc = iframe.src;
        iframe.src = iframeSrc; 
    });
}