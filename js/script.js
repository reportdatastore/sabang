// Inisialisasi AOS
AOS.init({ once: true, duration: 800 });

// ========== DATA LAPORAN (Icon & Judul saja, dengan detail tersimpan) ==========
const reportsData = {
    daily: [
        { id: 'daily1', title: 'Line bar', icon: 'fa-chart-line', detail: 'Laporan Line Bar: Menampilkan grafik penjualan per jam, item terlaris, dan performa shift.' },
        { id: 'daily2', title: 'LOGBOOK', icon: 'fa-book', detail: 'LOGBOOK Harian: Catatan kejadian operasional, masalah, dan solusi dari tim restoran.' },
        { id: 'daily3', title: 'BRIEFING', icon: 'fa-users', detail: 'BRIEFING: Ringkasan arahan pagi, target harian, dan menu spesial hari ini.' },
        { id: 'daily4', title: 'TCMH', icon: 'fa-clipboard-list', detail: 'TCMH (Team Customer Morning Huddle): Evaluasi layanan pelanggan dan keluhan.' },
        { id: 'daily5', title: 'BINCARD', icon: 'fa-id-card', detail: 'BINCARD: Kartu inspeksi kebersihan dan kelayakan area dapur & ruang makan.' },
        { id: 'daily6', title: 'MONITORING suhu', icon: 'fa-temperature-high', detail: 'Monitoring Suhu: Pengecekan suhu kulkas, freezer, dan ruang penyimpanan bahan baku.' }
    ],
    weekly: [
        { id: 'weekly1', title: 'Traffic count', icon: 'fa-chart-simple', detail: 'Traffic Count: Jumlah pengunjung per hari dalam seminggu, tren kenaikan/penurunan.' },
        { id: 'weekly2', title: 'Fix order', icon: 'fa-truck', detail: 'Fix Order: Pemesanan tetap bahan baku mingguan dari supplier utama.' },
        { id: 'weekly3', title: 'Line bar schedule', icon: 'fa-calendar-alt', detail: 'Line bar Schedule: Jadwal shift bartender dan staf bar untuk minggu ini.' }
    ],
    monthly: [
        { id: 'monthly1', title: 'PNL', icon: 'fa-chart-pie', detail: 'PNL (Profit & Loss): Laporan laba rugi bulanan, pendapatan vs pengeluaran.' },
        { id: 'monthly2', title: 'SDM', icon: 'fa-user-tie', detail: 'SDM: Laporan kehadiran karyawan, performa tim, dan rencana pelatihan bulan depan.' }
    ],
    insidental: [
        { id: 'insidental1', title: 'Target', icon: 'fa-bullseye', detail: 'Target: Pencapaian target bulanan vs realisasi, analisis gap dan strategi.' },
        { id: 'insidental2', title: 'Bisnis plan', icon: 'fa-chart-line', detail: 'Bisnis Plan: Rencana pengembangan restoran, ekspansi, dan inovasi menu.' }
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
        
        gridItem.addEventListener('click', () => {
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