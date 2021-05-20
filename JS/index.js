window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        return document.querySelector('.navbar').classList.add('hide')
    }
    return document.querySelector('.navbar').classList.remove('hide')
  
  });