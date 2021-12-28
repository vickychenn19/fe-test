> Saya menggunakan third party yang membantu mempermudah tampilan UI
1. React HOOK (useState, useNavigate,useEffect):
    > useState saya gunakan untuk menginisialisasi state awal saat pertama kali render page. selain itu, useState saya gunakan untuk menyimpan sebuah state payment dan delivery ke dalam fungsi agar bisa mengeluarkan value yang dia pilih ke dalam sidebar.
    > useNavigate saya gunakan untuk mempermudah user untuk kembali ke page sebelumnya ataupun selanjutnya
    > useEffect saya gunakan untuk
2. React Hook Form 
    Mempermudah dalam pembuatan form karena sudah disediakan beberapa fitur yang membantu saat validasi karena hanya perlu merubah sedikit bagian (re-render jadi lebih sedikit, code lebih sedikit) jadi performa jadi lebih baik. 
3. React Router DOM (BrowserRoute, Routes, Router): 
https://www.npmjs.com/package/react-router-dom

> Alur saat npm start dijalankan akan dimulai dari :
halaman homepage(dengan endpoint /) -> lalu klik 'payment' akan diarahkan ke halaman payment(dengan endpoint /payment)
