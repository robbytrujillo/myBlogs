<template>
  <div>
    <header class="masthead" style="background-image: url('/img/post-sample-image.jpg')">
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1>@robbyilhkus Blogs</h1>
              <span class="subheading">A Blog Theme by <span style="color: darkolivegreen">robby</span>Blogs</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Post -->
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <div class="d-flex justify-content-end mb-4">
            <RouterLink to="/blogs/add" class="btn btn-primary text-uppercase">Add Blog</RouterLink>
          </div>
          <div v-for="(data, index) of blogs" :key="'index-blogs-' + index">
            <div class="post-preview">
              <RouterLink :to="'/blogs/' + data.id">
                <h2 class="post-title">{{ data.title }}</h2>
                <h3 class="post-subtitle">
                  <!-- {{ data.id }  -->
                  {{ data.body.slice(0, 80) }}
                </h3>
              </RouterLink>
              <p class="post-meta">
                Posted by
                <a href="#!">Robby Ilhkus</a>
                on Februari 20, 2023
              </p>
            </div>
            <hr class="my-4" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [
        // {
        //   id: 1,
        //   title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        //   body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eveniet illum ullam reprehenderit repellat eius iusto? Vel ipsam velit, cumque totam nulla, tenetur aliquid dolore rem molestiae repellat, autem ullam nemo debitis sit dignissimos reprehenderit officia? Ipsum quam deleniti odio.",
        // },
        // {
        //   id: 2,
        //   title: "qui est esse",
        //   body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eveniet illum ullam reprehenderit repellat eius iusto? Vel ipsam velit, cumque totam nulla, tenetur aliquid dolore rem molestiae repellat, autem ullam nemo debitis sit dignissimos reprehenderit officia? Ipsum quam deleniti odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eveniet illum ullam reprehenderit repellat eius iusto? Vel ipsam velit, cumque totam nulla, tenetur aliquid dolore rem molestiae repellat, autem ullam nemo debitis sit dignissimos reprehenderit officia? Ipsum quam deleniti odio.",
        // },
        // {
        //   id: 3,
        //   title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        //   body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eveniet illum ullam reprehenderit repellat eius iusto? Vel ipsam velit, cumque totam nulla, tenetur aliquid dolore rem molestiae repellat, autem ullam nemo debitis sit dignissimos reprehenderit officia? Ipsum quam deleniti odio.",
        // },
        // {
        //   id: 4,
        //   title: "eum et est occaecati",
        //   body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eveniet illum ullam reprehenderit repellat eius iusto? Vel ipsam velit, cumque totam nulla, tenetur aliquid dolore rem molestiae repellat, autem ullam nemo debitis sit dignissimos reprehenderit officia? Ipsum quam deleniti odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eveniet illum ullam reprehenderit repellat eius iusto? Vel ipsam velit, cumque totam nulla, tenetur aliquid dolore rem molestiae repellat, autem ullam nemo debitis sit dignissimos reprehenderit officia? Ipsum quam deleniti odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eveniet illum ullam reprehenderit repellat eius iusto? Vel ipsam velit, cumque totam nulla, tenetur aliquid dolore rem molestiae repellat, autem ullam nemo debitis sit dignissimos reprehenderit officia? Ipsum quam deleniti odio.",
        // },
      ],
    };
  },
  mounted() {
    //this.getData();
    //gunanya masukkan data blog
    if (localStorage.getItem("blogs") == null) {
      localStorage.setItem(
        "blogs",
        JSON.stringify([
          {
            id: 1,
            title: "Setop 3 Kebiasaan Ngecas HP seperti Ini agar Baterai Awet",
            body: "Masing-masing pengguna memiliki kebiasaan dalam menggunakan dan merawat smartphone-nya. Salah satu upaya merawat ponsel adalah rajin melakukan pengisian daya (charging) ketika baterai mulai lemah. Kendati demikian, tidak semua orang mengetahui dan memahami bagaimana cara mengisi daya smartphone yang benar. Sebagian pengguna mungkin saja tidak menyadari bahwa ada kebiasaan yang kurang tepat saat melakukan pengisian daya. Dilansir KompasTekno dari Giz China, Rabu (17/2/2023), kebiasaan pengisian daya yang keliru dan dilakukan secara terus-menerus dapat berdampak pada kesehatan smartphone. Sebab, baterai sendiri merupakan komponen yang cukup krusial. Apabila kondisi baterai menurun, performa smartphone juga akan ikut melemah. Baca juga: Hati-hati Ngecas HP di Tempat Umum, Data Pribadi Berpotensi Dicuri Ada beberapa kebiasaan yang seharusnya segera dihentikan saat mengisi daya ponsel, agar kesehatan baterai lebih awet. 1. Menggunakan casing saat mengisi daya Lihat Foto Salah satu tips dapat tiket pesawat murah adalah menggunakan situs-situs web seperti Google Flights untuk membantu mendapatkan tarif terbaik.(PEXELS/ALEX UGOLKOV) Salah satu kebiasaan yang mungkin paling umum ditemukan adalah mengisi daya smartphone tanpa melepas casing atau softcase dari bodi perangkat. Hal ini tidak direkomendasikan karena bisa berdampak pada kesehatan baterai dan colokan charger. Masalah pertama, pengisian daya menggunakan casing dapat menyebabkan suhu perangkat menjadi overheat alias kepanasan. Casing umumnya berfungsi untuk melindungi keseluruhan bodi perangkat dari goresan atau benturan. Nah, pengisian daya menggunakan casing dapat menghambat sirkulasi udara di dalam perangkat. Sehingga membuat smartphone lebih mudah panas dibanding tanpa menggunakan casing. Jika ponsel overheat, maka pengisian daya dapat melambat dan memperpendek masa pakai baterai. Masalah yang kedua, tidak semua casing HP dirancang dengan baik. Salah satu indikasi kasing HP yang buruk adalah memiliki lubang yang sempit di bagian colokan charger. Slot colokan yang sempit itu akan menyebabkan kabel charger rusak.",
          },
          {
            id: 2,
            title: "5 Laptop Acer Core i5 dan Spesifikasinya Cocok buat Pekerja IT",
            body: "Laptop Acer Core i5 adalah salah satu jenis laptop di pasaran yang cocok untuk beragam bidang pekerjaan. Salah satunya pengguna yang bekerja di dunia teknologi atau IT. Pasalnya mereka harus menggunakan perangkat dengan spesifikasi tinggi dan lengkap. Hal tersebut dapat dilihat dari pertimbangan spesifikasi prosessor yang dimilikinya. Adapun prosesor i5 menjadi salah satu incaran para pekerja. Bagi Anda yang sedang mencari laptop Acer Core i5 berikut ini KompasTekno menghimpun daftar dan spesifikasi lengkapnya dari vendor dan toko resminya di marketplace. Berikut ini beberapa rekomendasi laptop Acer Core i5 Baca juga: Laptop Acer Swift 3 OLED Resmi Meluncur, Harga Rp 13 Jutaan Acer Aspire Vero 14 Inch AV14-51-59QK Lihat Foto Acer Aspire Vero 14 Inch AV14-51-59QK (acer.com) Spesifikasi utama Memori: 8GB LPDDR4X Dual Channel Storage: 512 GB SSD NVMe Gen4 Prosesor: Intel Core i5-1235U Harga laptop Acer Aspire Vero 14 Inch AV14-51-59QK mulai: Rp. 10.699.000 Spesifikasi detail pemesanan dapat menuju situs resminya di tautan berikut ini Acer Aspire 5 Slim with GeForce MX550 Lihat Foto Acer Aspire 5 Slim with GeForce MX550 (acer.com) Spesifikasi utama Memori: 8 GB onboard DDR4 memory (Upgradeability : Max 24 GB (8+16), using 1x Free SODIMM Slot) Storage: 512 GB SSD PCIe Gen4 NVMe Prosesor: Intel Core i5-1235U Processor Harga laptop Acer Aspire 5 Slim with GeForce MX550 mulai: Rp. 11.799.000 Spesifikasi detail pemesanan dapat menuju situs resminya di tautan berikut ini Acer Aspire 5 Slim with GeForce RTX2050 Lihat Foto Acer Aspire 5 Slim with GeForce RTX2050(acer.com) Spesifikasi utama Memori: 8 GB DDR4 memory (Upgradeability: Max 32 GB (16+16), using 2x SODIMM Slot) Storage: 512 GB SSD PCIe Gen4 NVMe Prosesor: Intel Core i5-1240P Processor Harga laptop Acer Aspire 5 Slim with GeForce RTX2050 mulai: Rp 13.499.000.",
          },
          {
            id: 3,
            title: "Nvidia Umumkan GPU GeForce RTX 40 Series untuk Laptop, Diklaim Hemat Daya dan Bertenaga",
            body: "Dalam pameran teknologi Consumer Electronics Show (CES) 2023, Nvidia mengumumkan jajaran pengolah grafis (GPU) laptop terbarunya dari keluarga GeForce RTX 40 Series. Ada lima produk GPU yang diumumkan, yang terdiri dari dua GPU kelas atas GeForce RTX 4090 dan RTX 4080, serta tiga GPU kelas menengah GeForce RTX 4050, RTX 4060, dan RTX 4070. Secara teknologi, kelima GPU laptop terbaru Nvidia ini sudah mengadopsi arsitektur GPU terbaru yang dijuluki Ada Lovelace. Baca juga: Kabel GPU GeForce RTX 4090 Meleleh, Nvidia Dituntut di Pengadilan AS Kelima GPU yang diperkenalkan ini mendukung teknologi Max-Q generasi kelima. Teknologi ini membuat GPU lebih hemat daya dari GPU laptop generasi sebelumnya, namun, diklaim tetap bertenaga. Di atas kertas, GPU Nvidia GeForce RTX 4090 memiliki kemampuan yang paling mumpuni. RTX 4090 dibekali dengan komponen inti GPU AD103 dengan jumlah CUDA Cores mencapai 9.728 unit. GPU yang memiliki video memory (VRAM) GDDR6 16 GB (256-bit) ini diklaim memiliki kemampuan operasi mencapai 38.9 TFLOPs dengan kecepatan mencapai 2.040 MHz, serta konsumsi daya hingga 150 watt. Selengkapnya, berikut perbedaan spesifikasi inti kelima GPU laptop terbaru Nvidia yang berasal dari keluarga GeForce RTX 40 Series yang diumumkan di ajang CES 2023, sebagaimana dihimpun KompasTekno dari Videocardz, Rabu (4/1/2023). Baca juga: Radeon RX 7900 XTX Resmi, GPU Chiplet Pertama AMD Nvidia mengatakan bahwa GPU RTX 4050, RTX 4060, dan RTX 4070 bakal tersedia pada 22 Februari mendatang dengan harga termurah 1.000 dollar AS (sekitar Rp 15,5 juta). Sementara GPU RTX 4090 dan 4080 akan tersedia lebih awal, yaitu pada 8 Februari, dengan harga yang lebih tinggi, yaitu mulai dari 2.000 dollar AS (sekitar Rp 31,1 juta).   GeForce RTX 4090 GeForce RTX 4080 GeForce RTX 4070 GeForce RTX 4060 GeForce RTX 4050 Komponen inti Nvidia CUDA Cores 9.728 unit 7.424 unit 4.608 unit 3.072 unit 2.560 unit Kecepatan/clock speed GPU  (MHz) 1.445-2.040 MHz 1.350-2.280 MHz 1.230-2.175 MHz 1.470-2.370 MHz 1.605-2.370 MHz Konsumsi daya (watt) 80-150 W 60-150 W 35-115 W 35-115 W 35-115 W Kemampuan komputasi (TFLOPs) 38.9 TFLOPs 33.8 TFLOPs 20.0 TFLOPs 14.6 TFLOPs 12.1 TFLOPs VRAM/Memory Interface 16 GB GDDR6/256-bit 12 GB GDDR6/192-bit 8 GB GDDR6/128-bit 8 GB GDDR6/128-bit 6 GB GDDR6/96-bit.",
          },
          {
            id: 4,
            title: "Samsung Galaxy A14 5G Meluncur, Ponsel Kelas Menengah dengan Kamera 50 MP",
            body: "Samsung memperkenalkan kelas menengah ponsel terbaru mereka yakni Galaxy A14 5G. Samsung Galaxy A14 5G diperkenalkan di Spanyol pada Rabu (4/1/2023) waktu setempat. Galaxy A14 5G merupakan penerus dari Galaxy A13 5G yang sudah lebih dulu dirilis pada Maret 2022. Keduanya sama-sama mendukung konektivitas 5G dengan desain yang serupa dan memiliki tiga kamera belakang.   Meski secara keseluruhan kedua perangkat tampak serupa, Galaxy A14 5G hadir dengan peningkatan. Salah satunya kamera selfie yang beresolusi 13 MP. Sebelumnya, Galaxy A13 5G dibekali kamera depan yang mentok di 5 MP. Baca juga: Ponsel Android Go Samsung Galaxy F04 Meluncur, Harga Rp 1 Jutaan Menurut halaman resmi Samsung Spanyol, Galaxy A14 5G mengusung layar IPS LCD 6,6 inci dengan resolusi Full HD Plus. Ukuran ini sedikit lebih luas dari layar Galaxy A13 5G yang berukuran 6,5 inci.  Sebagai ponsel kelas menengah, angka refresh rate layarnya mentok di angka 90 Hz. Layar perangkat dihiasi poni “Infinity V” yang menampung kamera depan 13 MP. Samsung Galaxy A14 5G ditenagai oleh chipset MediaTek Dimensity 700 yang dipadu dengan RAM 4 GB dan media penyimpanan 64 GB/128 GB. Jika kurang, kapasitas penyimpanan bisa diperluas hingga 1 TB melalui slot microSD yang tersedia.   Lihat Foto Tampilan depan dan belakang dari Samsung Galaxy A14 5G(Samsung)   Konfigurasi dari kameranya sendiri terdiri dari kamera utama 50 MP, kamera makro 2 MP, dan depth sensor 2 MP, sama seperti pendahulunya. Baterai yang dimiliki berkapasitas 5.000 mAh dengan pengisian daya cepat 15 watt. Baca juga: Samsung Pamer Ponsel Konsep dengan Layar yang Bisa Dilipat dan Digeser Galaxy A14 5G menjalankan sistem operasi Android 13 yang dipoles dengan antarmuka OneUI 5. Perusahaan juga menjanjikan adanya pembaruan sistem selama empat tahun kedepan. Samsung Galaxy A14 5G tersedia dalam varian warna Hitam, Hijau Muda, Merah Gelap, dan Silver. Samsung Galaxy A14 5G dibanderol dengan harga 200 dollar AS atau sekitar Rp 3,1 juta. Dirangkum KompasTekno dari GSM Arena, Kamis (5/1/2023), Samsung mengatakan perangkat ini bakal segera hadir di Spanyol dalam beberapa waktu ke depan. Sementara di wilayah Amerika Serikat, Galaxy A14 5G akan mulai dijual pada 12 Januari mendatang.  Belum diketahui apakah Samsung akan membawa Galaxy A14 5G ke Indonesia atau tidak.",
          },
        ])
      );
    } else {
      this.blogs = JSON.parse(localStorage.getItem("blogs"));
    }
  },

  // methods: {
  //   async getData() {
  //     const res = await this.axios.get("https://jsonplaceholder.typicode.com/posts");

  //     // this.blogs = res.data;
  //     var temp_array = res.data;
  //     this.blogs = temp_array.filter((item) => {
  //       return item.id > 90;
  //     });
  //   },
  // },
};
</script>
