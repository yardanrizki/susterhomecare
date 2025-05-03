export interface VitaminItem {
  title: string;
  subtitle: string;
  image: string;
  benefits: string[];
  oldPrice: string;
  newPrice: string;
  checklistColor: string;
  bestSeller?: boolean;
}

export const vitaminData: VitaminItem[] = [
  {
    title: "Daily Fit Booster C",
    subtitle: "Optimalkan Asupan Vitamin C Harian dengan 1 Suntikan",
    image: "https://perawathomecare.id/wp-content/uploads/2024/09/Suntik-1.webp",
    benefits: [
      "Mengoptimalkan Asupan Vitamin C Harian",
      "Menjaga Kebugaran dan Vitalitas",
      "Menghadapi Aktivitas yang Sibuk",
    ],
    oldPrice: "Rp 598.000",
    newPrice: "Rp 498.000",
    checklistColor: "#660C12", // hijau
    
  },
  {
    title: "Direct Fit Booster C",
    subtitle: "Kembali Fit & Prima Dengan 1 Suntikan",
    image: "https://perawathomecare.id/wp-content/uploads/2024/09/suntik-2.webp",
    benefits: [
      "Mempercepat Pemulihan Pasca-Sakit",
      "Kondisi Tubuh yang Kurang Fit",
      "Ingin Mencerahkan Kulit",
    ],
    oldPrice: "Rp 618.000",
    newPrice: "Rp 518.000",
    checklistColor: "#B69D1A", // pink
  },
  {
    title: "Super Move Booster",
    subtitle: "Meningkatkan Kebugaran dan Kesehatan dengan 1 Suntikan.",
    image: "https://perawathomecare.id/wp-content/uploads/2024/09/Suntik-8.webp",
    benefits: [
      "Mengalami Kelelahan dan Pegal - Pegal",
      "Persiapan Perjalanan Jauh",
      "Mengatasi berbagai Gejala Penyakit",

    ],
    oldPrice: "Rp 798.000",
    newPrice: "Rp 698.000",
    checklistColor: "#E85729", // biru
    bestSeller: true,
  },
  {
    title: "Instant Recovery Booster",
    subtitle: "Pulihkan Kondisi Tubuh Dengan 1 Suntikan ",
    image: "https://perawathomecare.id/wp-content/uploads/2024/09/suntik-4.webp",
    benefits: [
      "Mengalami Kondisi Tubuh yang Menurun",
      "Ingin Menjaga Kesehatan Kulit",
      "Memerlukan Peningkatan Sistem Kekebalan Tubuh",

    ],
    oldPrice: "Rp 1.618.000",
    newPrice: "Rp 1.518.000",
    checklistColor: "#73C017", // oranye
  },
  {
    title: "Traveller Booster",
    subtitle: "Optimalkan Imunitas Tubuh Saat Bepergian dengan 1 Suntikan",
    image: "https://perawathomecare.id/wp-content/uploads/2024/09/suntik-6-233x300.webp",
    benefits: [
      "Menjaga Kesehatan Kulit",
      "Meningkatkan Sistem Kekebalan",
      "Cocok untuk Melakukan Perjalanan Jauh",
    ],
    oldPrice: "Rp 998.000",
    newPrice: "Rp 898.000",
    checklistColor: "#6C0063", // ungu
  },
];
