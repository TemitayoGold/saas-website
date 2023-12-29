// FAQ ACCORDION

document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-content');

    faqContainer.addEventListener('click', (e) =>{
       const groupHeader = e.target.closest('.faq-group-header')
        
       if (!groupHeader) return;

       const group = groupHeader.parentElement;
       const groupBody = group.querySelector('.faq-group-body');
       const icon = groupHeader.querySelector('i');

     //    Toggle Icon
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-x');

        // Toogle visibility of faq-body
        groupBody.classList.toggle('open');

        // close other open faq bodies
        const otherGroups = faqContainer.querySelectorAll('.faq-group');

        otherGroups.forEach((otherGroup) => {
            if (otherGroup !== group) {
                const otherGroupBody = otherGroup.querySelector('.faq-group-body');
                const otherIcon = otherGroupBody.querySelector('.faq-group-header i')

                otherGroupBody.classList.remove('open');
                otherIcon.classList.remove('fa-x');
                otherIcon.classList.add('fa-plus')
             }
        })
    })
});

// Mobile Menu

document.addEventListener ('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button')
    const mobileMenu = document.querySelector('.mobile-menu')

    hamburgerButton.addEventListener('click', () => mobileMenu.classList.toggle('active'))
})