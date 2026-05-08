// Inisialisasi AOS
AOS.init({ once: true, duration: 800 });

// ========== DATA LAPORAN (Icon & Judul saja, dengan detail tersimpan) ==========
const reportsData = {
    daily: [
        { id: 'daily1', title: 'Line bar', icon: 'fa-chart-line', href: 'https://example.com/line-bar-report', detail: 'Laporan Line Bar: Menampilkan grafik penjualan per jam, item terlaris, dan performa shift.' },
        { id: 'daily2', title: 'LOGBOOK', icon: 'fa-book', href: 'https://example.com/logbook', detail: 'LOGBOOK Harian: Catatan kejadian operasional, masalah, dan solusi dari tim restoran.' },
        { id: 'daily3', title: 'BRIEFING', icon: 'fa-users', href: 'https://example.com/briefing', detail: 'BRIEFING: Ringkasan arahan pagi, target harian, dan menu spesial hari ini.' },
        { id: 'daily4', title: 'TCMH', icon: 'fa-clipboard-list', href: 'https://example.com/tcmh', detail: 'TCMH (Team Customer Morning Huddle): Evaluasi layanan pelanggan dan keluhan.' },
        { id: 'daily5', title: 'BINCARD', icon: 'fa-id-card', href: 'https://example.com/bincard', detail: 'BINCARD: Kartu inspeksi kebersihan dan kelayakan area dapur & ruang makan.' },
        { id: 'daily6', title: 'MONITORING suhu', icon: 'fa-temperature-high', href: 'https://example.com/monitoring-suhu', detail: 'Monitoring Suhu: Pengecekan suhu kulkas, freezer, dan ruang penyimpanan bahan baku.' }
    ],
    weekly: [
        { id: 'weekly1', title: 'Traffic count', icon: 'fa-chart-simple', href: 'https://example.com/traffic-count', detail: 'Traffic Count: Jumlah pengunjung per hari dalam seminggu, tren kenaikan/penurunan.' },
        { id: 'weekly2', title: 'Fix order', icon: 'fa-truck', href: 'https://example.com/fix-order', detail: 'Fix Order: Pemesanan tetap bahan baku mingguan dari supplier utama.' },
        { id: 'weekly3', title: 'Line bar schedule', icon: 'fa-calendar-alt', href: 'https://example.com/linebar-schedule', detail: 'Line bar Schedule: Jadwal shift bartender dan staf bar untuk minggu ini.' }
    ],
    monthly: [
        { id: 'monthly1', title: 'PNL', icon: 'fa-chart-pie', href: 'https://example.com/pnl', detail: 'PNL (Profit & Loss): Laporan laba rugi bulanan, pendapatan vs pengeluaran.' },
        { id: 'monthly2', title: 'SDM', icon: 'fa-user-tie', href: 'https://example.com/sdm', detail: 'SDM: Laporan kehadiran karyawan, performa tim, dan rencana pelatihan bulan depan.' }
    ],
    insidental: [
        { id: 'insidental1', title: 'Target', icon: 'fa-bullseye', href: 'https://example.com/target', detail: 'Target: Pencapaian target bulanan vs realisasi, analisis gap dan strategi.' },
        { id: 'insidental2', title: 'Bisnis plan', icon: 'fa-chart-line', href: 'https://example.com/bisnis-plan', detail: 'Bisnis Plan: Rencana pengembangan restoran, ekspansi, dan inovasi menu.' }
    ]
};

let activeCategory = 'daily';
let activeReportId = null;

// Fungsi render grid sederhana (hanya icon + judul)
function renderGrid(category) {
    const container = document.getElementById('reportGridContainer');
    const panelTitle = document.getElementById('panelTitle');
    
    // Update title panel
    let titleText = '';
    let iconHtml = '';
    switch(category) {
        case 'daily': titleText = '📋 Daily'; iconHtml = '<i class="fas fa-sun"></i> '; break;
        case 'weekly': titleText = '📊 Weekly'; iconHtml = '<i class="fas fa-calendar-week"></i> '; break;
        case 'monthly': titleText = '📈 Monthly'; iconHtml = '<i class="fas fa-chart-line"></i> '; break;
        case 'insidental': titleText = '⚠️ Insidental'; iconHtml = '<i class="fas fa-bell"></i> '; break;
        default: titleText = 'Laporan';
    }
    panelTitle.innerHTML = iconHtml + titleText;
    
    const reports = reportsData[category];
    if(!reports || reports.length === 0) {
        container.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:40px;">Tidak ada laporan</div>`;
        return;
    }
    
    container.innerHTML = '';
    reports.forEach(report => {
        const gridItem = document.createElement('div');
        gridItem.className = `grid-item ${activeReportId === report.id ? 'active-laporan' : ''}`;
        gridItem.setAttribute('data-id', report.id);
        gridItem.setAttribute('data-category', category);
        gridItem.setAttribute('data-link', report.link || '#');
        
        // Pilih warna icon berdasarkan kategori
        let iconColor = '#e67e22';
        if(category === 'daily') iconColor = '#2c6e9e';
        else if(category === 'weekly') iconColor = '#27ae60';
        else if(category === 'monthly') iconColor = '#9b59b6';
        else iconColor = '#e67e22';
        
        gridItem.innerHTML = `
            <div class="grid-icon" style="color: ${iconColor};">
                <i class="fas ${report.icon}"></i>
            </div>
            <div class="grid-title">${escapeHtml(report.title)}</div>
        `;
        
        // Handler klik pada grid item (seluruh area)
        gridItem.addEventListener('click', (e) => {
            // Cegah jika yang di-klik adalah icon link (akan ditangani terpisah)
            if(e.target.closest('.grid-icon-link')) return;
            
            // Hapus active class dari semua grid item
            document.querySelectorAll('.grid-item').forEach(item => {
                item.classList.remove('active-laporan');
            });
            gridItem.classList.add('active-laporan');
            activeReportId = report.id;
            showDetail(report, category);
        });
        
        container.appendChild(gridItem);
    });
}

// Menampilkan detail saat item laporan diklik
function showDetail(report, category) {
    const detailArea = document.getElementById('detailArea');
    let categoryName = '';
    switch(category) {
        case 'daily': categoryName = 'Daily'; break;
        case 'weekly': categoryName = 'Weekly'; break;
        case 'monthly': categoryName = 'Monthly'; break;
        case 'insidental': categoryName = 'Insidental'; break;
    }
    
    let iconColor = '#e67e22';
    if(category === 'daily') iconColor = '#2c6e9e';
    else if(category === 'weekly') iconColor = '#27ae60';
    else if(category === 'monthly') iconColor = '#9b59b6';
    
    detailArea.innerHTML = `
        <div class="detail-content">
            <div class="detail-title">
                <i class="fas ${report.icon}" style="color: ${iconColor};"></i>
                ${escapeHtml(report.title)}
                <span style="font-size:0.8rem; background:#f0e4d4; padding:2px 12px; border-radius:20px;">${categoryName}</span>
            </div>
            <div class="detail-desc">
                ${escapeHtml(report.detail)}
            </div>
            <div class="detail-meta">
                <span><i class="fas fa-clock"></i> Terakhir diperbarui: ${new Date().toLocaleDateString('id-ID')}</span>
                ${report.link ? `<span style="margin-left: 15px;"><i class="fas fa-external-link-alt"></i> <a href="${report.link}" target="_blank" class="detail-link" onclick="event.stopPropagation()">Buka Laporan Lengkap</a></span>` : ''}
            </div>
        </div>
    `;
}

// Set active category dan render
function setActiveCategory(category) {
    activeCategory = category;
    activeReportId = null; // reset active report
    
    const cards = document.querySelectorAll('.card-cat');
    cards.forEach(card => {
        const type = card.getAttribute('data-type');
        if(type === category) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
    
    renderGrid(category);
    
    // Reset detail area ke placeholder
    const detailArea = document.getElementById('detailArea');
    detailArea.innerHTML = `
        <div class="detail-placeholder">
            <i class="fas fa-hand-pointer"></i> Klik salah satu laporan untuk melihat detail
        </div>
    `;
}

// Helper escape HTML
function escapeHtml(str) {
    if(!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if(m === '&') return '&amp;';
        if(m === '<') return '&lt;';
        if(m === '>') return '&gt;';
        return m;
    });
}

// Toast notifikasi sederhana
function showToast(message) {
    const existingToast = document.querySelector('.toast-msg');
    if(existingToast) existingToast.remove();
    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.innerHTML = `<i class="fas fa-info-circle"></i> ${message}`;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

// Update tanggal live
function updateLiveDate() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formatted = now.toLocaleDateString('id-ID', options);
    document.getElementById('liveDate').innerHTML = `<i class="far fa-clock"></i> ${formatted}`;
}

// Event listeners untuk kategori
document.getElementById('catDaily').addEventListener('click', () => setActiveCategory('daily'));
document.getElementById('catWeekly').addEventListener('click', () => setActiveCategory('weekly'));
document.getElementById('catMonthly').addEventListener('click', () => setActiveCategory('monthly'));
document.getElementById('catInsidental').addEventListener('click', () => setActiveCategory('insidental'));

// Inisialisasi
updateLiveDate();
setInterval(updateLiveDate, 60000);
setActiveCategory('daily');

// Efek hover gif
const chefDiv = document.querySelector('.gif-chef');
if(chefDiv){
    chefDiv.addEventListener('mouseenter', () => {
        chefDiv.style.filter = 'drop-shadow(0 0 6px #ffaa66)';
    });
    chefDiv.addEventListener('mouseleave', () => {
        chefDiv.style.filter = '';
    });
}

// Tampilkan selamat datang
showToast('🍽️ Selamat datang di RestoDash!');

// ========== FUNGSI BARU: Redirect ketika icon diklik ==========
// Fungsi untuk membuka link (bisa dipanggil dari event handler)
function openReportLink(link, reportTitle) {
    if(link && link !== '#') {
        showToast(`🔄 Membuka laporan "${reportTitle}"...`);
        // Buka di tab baru untuk pengalaman yang lebih baik
        window.open(link, '_blank');
    } else {
        showToast(`⚠️ Laporan "${reportTitle}" belum memiliki link.`);
    }
}

// Alternatif: Menambahkan tombol/icon link terpisah pada setiap grid item
// Jika ingin icon terpisah (lebih jelas), gunakan fungsi ini
function renderGridWithLinkIcon(category) {
    const container = document.getElementById('reportGridContainer');
    const panelTitle = document.getElementById('panelTitle');
    
    // Update title panel
    let titleText = '';
    let iconHtml = '';
    switch(category) {
        case 'daily': titleText = '📋 Daily'; iconHtml = '<i class="fas fa-sun"></i> '; break;
        case 'weekly': titleText = '📊 Weekly'; iconHtml = '<i class="fas fa-calendar-week"></i> '; break;
        case 'monthly': titleText = '📈 Monthly'; iconHtml = '<i class="fas fa-chart-line"></i> '; break;
        case 'insidental': titleText = '⚠️ Insidental'; iconHtml = '<i class="fas fa-bell"></i> '; break;
        default: titleText = 'Laporan';
    }
    panelTitle.innerHTML = iconHtml + titleText;
    
    const reports = reportsData[category];
    if(!reports || reports.length === 0) {
        container.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:40px;">Tidak ada laporan</div>`;
        return;
    }
    
    container.innerHTML = '';
    reports.forEach(report => {
        const gridItem = document.createElement('div');
        gridItem.className = `grid-item ${activeReportId === report.id ? 'active-laporan' : ''}`;
        gridItem.setAttribute('data-id', report.id);
        gridItem.setAttribute('data-category', category);
        
        let iconColor = '#e67e22';
        if(category === 'daily') iconColor = '#2c6e9e';
        else if(category === 'weekly') iconColor = '#27ae60';
        else if(category === 'monthly') iconColor = '#9b59b6';
        else iconColor = '#e67e22';
        
        gridItem.innerHTML = `
            <div class="grid-icon" style="color: ${iconColor};">
                <i class="fas ${report.icon}"></i>
            </div>
            <div class="grid-title">${escapeHtml(report.title)}</div>
            <div class="grid-link-icon" onclick="event.stopPropagation(); openReportLink('${report.link || '#'}', '${escapeHtml(report.title)}')">
                <i class="fas fa-external-link-alt"></i>
            </div>
        `;
        
        // Handler klik pada grid item (untuk detail)
        gridItem.addEventListener('click', (e) => {
            if(e.target.closest('.grid-link-icon')) return;
            
            document.querySelectorAll('.grid-item').forEach(item => {
                item.classList.remove('active-laporan');
            });
            gridItem.classList.add('active-laporan');
            activeReportId = report.id;
            showDetail(report, category);
        });
        
        container.appendChild(gridItem);
    });
}

// Untuk menggunakan versi dengan icon link terpisah, panggil renderGridWithLinkIcon
// Ganti fungsi renderGrid yang aktif dengan mengubah nama pemanggilan di setActiveCategory
// Atau overwrite: window.renderGrid = renderGridWithLinkIcon;

// Contoh: Aktifkan versi dengan icon link (opsional)
// Uncomment baris di bawah jika ingin menggunakan versi dengan icon link terpisah
// renderGrid = renderGridWithLinkIcon;

// Atau tetap gunakan versi default yang mengarahkan saat icon diklik:
// Buat event listener untuk menangkap klik pada icon di grid item
document.addEventListener('click', function(e) {
    // Cari apakah yang diklik adalah icon atau berada dalam grid-icon
    const iconElement = e.target.closest('.grid-icon');
    if(iconElement) {
        e.stopPropagation();
        const gridItem = iconElement.closest('.grid-item');
        if(gridItem) {
            const reportId = gridItem.getAttribute('data-id');
            const category = gridItem.getAttribute('data-category');
            if(reportId && category && reportsData[category]) {
                const report = reportsData[category].find(r => r.id === reportId);
                if(report && report.link) {
                    showToast(`🔗 Membuka ${report.title}...`);
                    window.open(report.link, '_blank');
                } else if(report) {
                    showToast(`🔒 Laporan ${report.title} belum memiliki link.`);
                }
            }
        }
    }
});

// Tambahkan CSS untuk efek hover pada icon (opsional, jika ingin menambahkan style)
const style = document.createElement('style');
style.textContent = `
    .grid-item {
        cursor: pointer;
        transition: all 0.2s ease;
    }
    .grid-icon {
        transition: transform 0.2s ease, color 0.2s ease;
        cursor: pointer;
    }
    .grid-icon:hover {
        transform: scale(1.15);
        filter: drop-shadow(0 0 4px currentColor);
    }
    .grid-link-icon {
        position: absolute;
        bottom: 8px;
        right: 12px;
        opacity: 0;
        transition: opacity 0.2s ease;
        cursor: pointer;
        color: #3498db;
        font-size: 0.8rem;
        background: rgba(255,255,255,0.8);
        border-radius: 20px;
        padding: 4px 8px;
    }
    .grid-item:hover .grid-link-icon {
        opacity: 1;
    }
    .grid-link-icon:hover {
        color: #2980b9;
        transform: scale(1.1);
    }
    .detail-link {
        color: #3498db;
        text-decoration: none;
        font-weight: 500;
    }
    .detail-link:hover {
        text-decoration: underline;
    }
`;
document.head.appendChild(style);