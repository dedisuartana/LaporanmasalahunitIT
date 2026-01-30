  // 1. Fungsi Toggle Sidebar untuk Mobile
        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            sidebar.classList.toggle('active');
            
            // Logic untuk tombol close di dalam sidebar (mobile only)
            const closeBtn = document.getElementById('closeSidebar');
            if (window.innerWidth <= 768) {
                if (sidebar.classList.contains('active')) {
                    closeBtn.style.display = 'block';
                } else {
                    closeBtn.style.display = 'none';
                }
            }
        }

        // 2. Fungsi Filter Kartu
        function filterReports() {
            const filterValue = document.getElementById('reportType').value;
            const cards = document.querySelectorAll('.report-card');

            cards.forEach(card => {
                // Ambil kategori dari attribute data-category
                const category = card.getAttribute('data-category');

                if (filterValue === 'all') {
                    card.style.display = 'flex'; // Tampilkan semua
                } else {
                    if (category === filterValue) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        }

        // Aktifkan menu saat diklik
        const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach(item => {
            item.addEventListener('click', function() {
                // Hapus class active dari semua menu
                menuItems.forEach(i => i.classList.remove('active'));
                // Tambah class active ke menu yang diklik
                this.classList.add('active');
            });
        });