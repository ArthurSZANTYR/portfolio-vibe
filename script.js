// Project Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-project-title');
    const modalClose = document.querySelector('.modal-close');
    const modalLinks = {
        github: document.getElementById('modal-link-github'),
        demo: document.getElementById('modal-link-demo'),
        case: document.getElementById('modal-link-case')
    };

    // Project data with placeholder links
    const projectData = {
        1: {
            title: 'Project Title One',
            links: {
                github: '#',
                demo: '#',
                case: '#'
            }
        },
        2: {
            title: 'Project Title Two',
            links: {
                github: '#',
                demo: '#',
                case: '#'
            }
        },
        3: {
            title: 'Project Title Three',
            links: {
                github: '#',
                demo: '#',
                case: '#'
            }
        },
        4: {
            title: 'Project Title Four',
            links: {
                github: '#',
                demo: '#',
                case: '#'
            }
        },
        5: {
            title: 'Project Title Five',
            links: {
                github: '#',
                demo: '#',
                case: '#'
            }
        },
        6: {
            title: 'Project Title Six',
            links: {
                github: '#',
                demo: '#',
                case: '#'
            }
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
                modalLinks.github.href = project.links.github;
                modalLinks.demo.href = project.links.demo;
                modalLinks.case.href = project.links.case;
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

