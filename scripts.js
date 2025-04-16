  document.addEventListener('DOMContentLoaded', function() {
            // Toggle Sidebar
            const toggleBtn = document.querySelector('.toggle-btn');
            const sidebar = document.querySelector('.sidebar');
            const logo = document.querySelector('.logo');
            
            toggleBtn.addEventListener('click', function() {
                sidebar.classList.toggle('sidebar-collapsed');
                
                if (sidebar.classList.contains('sidebar-collapsed')) {
                    logo.classList.add('logo-collapsed');
                    toggleBtn.innerHTML = '<i class="fas fa-indent"></i>';
                } else {
                    logo.classList.remove('logo-collapsed');
                    toggleBtn.innerHTML = '<i class="fas fa-outdent"></i>';
                }
            });
            
            // Filter reports based on selection
            const reportType = document.getElementById('reportType');
            const reportCards = document.querySelectorAll('.report-card');
            
            reportType.addEventListener('change', function() {
                const selectedValue = this.value;
                
                reportCards.forEach(card => {
                    if (selectedValue === 'all' || card.classList.contains(selectedValue)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });

document.getElementById('reportType').addEventListener('change', function () {
    const selectedValue = this.value;
    const reportCards = document.querySelectorAll('.report-card');

    reportCards.forEach(card => {
        if (selectedValue === 'all' || card.classList.contains(selectedValue)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
document.querySelector('.report-card.hardware button').addEventListener('click', function () {
    window.location.href = 'https://docs.google.com/spreadsheets/d/19FCKjhrsuxiTd-2U_yPqr9rG_Hs35sBy4K1fMTQbgCU/edit?gid=0#gid=0'; // Ganti dengan halaman tujuan
});
document.querySelector('.report-card.software button').addEventListener('click', function () {
    window.location.href = 'bingung.html.html'; // Ganti dengan halaman tujuan
});
document.querySelector('.report-card.report button').addEventListener('click', function () {
    window.location.href = 'http://192.168.75.3:2500/system/report'; // Ganti dengan halaman tujuan
});
