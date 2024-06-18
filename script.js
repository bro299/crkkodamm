document.addEventListener('DOMContentLoaded', function() {
  const searchForm = document.getElementById('searchForm');
  const searchInput = document.getElementById('searchInput');
  const loading = document.getElementById('loading');
  const result = document.getElementById('result');

  searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const searchTerm = searchInput.value.trim();
    if (searchTerm === '') {
      alert('Masukkan nama atau jenis khodam terlebih dahulu!');
      return;
    }

    loading.style.display = 'flex';
    result.classList.add('hidden');

    // Simulasi proses pencarian khodam (biasanya akan melakukan request ke server)
    setTimeout(function() {
      loading.style.display = 'none';
      result.innerHTML = '';

      // Simulasi hasil pencarian khodam
      const khodam = generateRandomKhodam();
      const khodamElement = document.createElement('div');
      khodamElement.classList.add('khodam');
      khodamElement.textContent = khodam.name;

      const surpriseElement = document.createElement('div');
      surpriseElement.classList.add('surprise');
      surpriseElement.textContent = '🎉 Surprise! 🎉';

      result.appendChild(khodamElement);
      result.appendChild(surpriseElement);
      result.classList.remove('hidden');
    }, 2000); // Simulasi waktu loading selama 2 detik
  });

  // Fungsi untuk menghasilkan khodam secara acak (diganti dengan data dari JSON biasanya)
  function generateRandomKhodam() {
    const khodams = [
      { name: 'Jin Ifrit' },
      { name: 'Peri Air' },
      { name: 'Makhluk Halus' },
      { name: 'Kucing Sakti' },
      { name: 'Raja Hantu' },
      { name: 'Setan Kecil' },
      { name: 'Syaiton' },
      { name: 'Iblis Besar' },
      { name: 'Malaikat' },
      { name: 'Jibril' },
      { name: 'Malaikat Ridwan' },
      { name: 'Setan Merah' },
      { name: 'Setan Biru' },
      { name: 'Jin Kafir' },
      { name: 'Malaikat Izrail' },
      { name: 'Makhluk Gaib' },
      { name: 'Jin Palsu' },
      { name: 'Kuntilanak' },
      { name: 'Pocong' },
      { name: 'Tuyul' },
      { name: 'Nyi Roro Kidul' },
      { name: 'Makhluk Astral' },
      { name: 'Jin Ganas' },
      { name: 'Malaikat Mikail' },
      { name: 'Penunggu' },
      { name: 'Vampire' },
      { name: 'Werewolf' },
      { name: 'Jin Jahat' },
      { name: 'Kuntilanak Hijau' },
      { name: 'Jin Baik' },
      { name: 'Malaikat Gabriel' },
      { name: 'Jin Peri' },
      { name: 'Penjaga Hutan' },
      { name: 'Ratu Pantai Selatan' },
      { name: 'Buto Ijo' },
      { name: 'Jin Pengabul' },
      { name: 'Malaikat Harut' },
      { name: 'Makhluk Laut' },
      { name: 'Hantu Kopek' },
      { name: 'Jin Sarang' },
      { name: 'Malaikat Kematian' },
      { name: 'Setan Kredit' },
      { name: 'Jin Love' },
      { name: 'Penghuni Kuburan' },
      { name: 'Makhluk Gaib' }
      // Tambahkan lebih banyak khodam sesuai kebutuhan
    ];

    const randomIndex = Math.floor(Math.random() * khodams.length);
    return khodams[randomIndex];
  }
});
