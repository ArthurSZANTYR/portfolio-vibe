// Project Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-project-title');
    const modalClose = document.querySelector('.modal-close');
    const modalLinksContainer = document.getElementById('modal-links');

    // Project data with placeholder links
    const projectData = {
        1: {
            title: 'STANDART',
            links: [
                { label: 'Website', url: 'https://streaks-campus.fr' },
                { label: 'Instagram', url: 'https://www.instagram.com/streaks_campus/' }
            ]
        },
        2: {
            title: 'OKSI',
            links: [
                { label: 'Live demo', url: 'https://youtu.be/eubZKbxceGU' },
                { label: 'My master thesis', url: 'https://drive.google.com/file/d/1iq8QXytzOKxZ9TGqOjPFLvftxotBDA37/view?usp=sharing' }
            ]
        },
        3: {
            title: 'Aquaponic System',
            links: [
                { label: 'Live demo', url: 'https://youtube.com/shorts/YerZrfkVjG0?feature=share' },
                { label: 'Github', url: 'https://github.com/ArthurSZANTYR/aquaponics-platform' }
            ]
        },
        4: {
            title: 'KOLOBIGO',
            links: [
                { label: 'Kickstarter', url: 'https://www.kickstarter.com/projects/kolobigo/quickstarter-kolobigo-the-ultimate-phone-strap' }
            ]
        }
    };

    // Open modal when project card is clicked
    projectCards.forEach(card => {
        const learnMoreBtn = card.querySelector('.project-link-btn');
        
        const openModal = () => {
            const projectId = card.getAttribute('data-project');
            const project = projectData[projectId];
            
            if (project) {
                modalTitle.textContent = project.title;
                modalLinksContainer.innerHTML = '';

                if (project.links && project.links.length > 0) {
                    project.links.forEach(link => {
                        const anchor = document.createElement('a');
                        anchor.className = 'modal-link';
                        anchor.href = link.url || '#';
                        anchor.textContent = link.label || 'Link';
                        modalLinksContainer.appendChild(anchor);
                    });
                } else {
                    const emptyState = document.createElement('p');
                    emptyState.className = 'modal-empty';
                    emptyState.textContent = 'No links available for this project.';
                    modalLinksContainer.appendChild(emptyState);
                }
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        };

        if (learnMoreBtn) {
            learnMoreBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                openModal();
            });
        }

        card.addEventListener('click', (e) => {
            // Don't open modal if clicking the button (handled above)
            if (e.target !== learnMoreBtn) {
                openModal();
            }
        });
    });

    // Close modal
    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});


