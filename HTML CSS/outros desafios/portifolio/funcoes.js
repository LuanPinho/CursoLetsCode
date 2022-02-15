
        const menuItens = document.querySelectorAll('.menuLinks a[href^="#"]');
        menuItens.forEach(item => {
            item.addEventListener('click',irpara);
        });
        function irpara(event){
            event.preventDefault();
            console.log(event.target);
            const elemento = event.target;
            const id = elemento.getAttribute('href');
            const para = document.querySelector(id).offsetTop;
            window.scroll({
                top: para,
                behavior: "smooth"
            });
        };