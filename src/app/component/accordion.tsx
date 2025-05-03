"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./accordion-custom.css"; // Import CSS kita di sini
import { Collapse } from "react-bootstrap";

const accordionItems = [
  {
    title:
      "Apakah layanan infus vitamin Perawathomecare.id aman untuk ibu hamil?",
    content:
      "Keamanan infus vitamin untuk ibu hamil tergantung pada <b>kondisi kehamilan</b> dan jenis vitamin yang digunakan. Sebaiknya konsultasikan dengan dokter kandungan Anda terlebih dahulu sebelum memutuskan untuk melakukan infus vitamin saat hamil.",
  },
  {
    title: "Apakah bisa membayar ketika perawat sampai di rumah?",
    content:
      "Tidak, Kami hanya menerima pembayaran melalui transfer bank atau dompet digital.",
  },
  {
    title: "Apakah bisa memilih perawat laki-laki atau perempuan?",
    content:
      "Ya, Anda bisa memilih perawat laki-laki atau perempuan saat memesan layanan. Sebutkan preferensi Anda saat memesan, dan tim kami akan berusaha memenuhinya.",
  },
  {
    title: "Apakah vitamin booster dilakukan dengan infus atau suntik/injeksi?",
    content:
      "Sesuai dengan SOP kami, vitamin booster dapat dilakukan dengan infus namun jika terdapat beberapa kondisi khusus yang membuat Anda ingin dilakukan dengan suntik/injeksi dapat diinformasikan kepada kami. Agar dapat kami sesuaikan kembali.",
  },
  {
    title: "Apakah white glow injection dilakukan dengan infus atau suntik?",
    content:
      "White glow injection dilakukan dengan suntik/injeksi di wajah. Perawat akan menyuntikkan vitamin dan zat aktif lainnya ke dalam kulit wajah Anda.",
  },
  {
    title: "Apakah terdapat promo khusus untuk layanan infus vitamin?",
    content:
      "Ya, kami sering mengadakan promo khusus untuk layanan infus vitamin. Anda dapat melihat promo terbaru di website kami atau menanyakan keadmin kami.",
  },
  {
    title:
      "Apakah Perawathomecare.id dapat melayani kebutuhan kantor skala besar?",
    content:
      "Ya, kami dapat melayani kebutuhan kantor skala besar. Kami memiliki tim perawat profesional yang siap melayani kebutuhan infus vitamin untuk karyawan Anda. Silahkan hubungi kami untuk informasi lebih lanjut tentang layanan untuk perusahaan.",
  },
  {
    title:
      "Apakah saya dapat berbagi perawatan infus vitamin dengan orang lain?",
    content: "Untuk layanan paket family.",
  },
  {
    title: "Di mana lokasi layanan Perawathomecare.id?",
    content:
      "Saat ini, kami melayani seluruh wilayah Jabodetabek. Anda dapat melihat daftar lengkap wilayah layanan kami di website kami.",
  },
  {
    title:
      "Apakah boleh menukar perawat jika saya tidak cocok dengan perawat yang datang?",
    content:
      "Ya, Anda boleh menukar perawat jika Anda tidak cocok dengan perawat yang datang. Silahkan hubungi kami sesegera mungkin untuk menjadwalkan pergantian perawat.",
  },
  {
    title: "Apakah Perawathomecare.id memiliki klinik?",
    content:
      "Tidak, saat ini kami hanya melayani infus vitamin homeservice dan konsultasi kesehatan secara online.",
  },
  {
    title:
      "Apakah biaya yang tertera di website sudah termasuk alat kesehatan habis pakai (BHP)?",
    content:
      "Ya, biaya yang tertera di website sudah termasuk alat kesehatan habis pakai (BHP). Anda tidak perlu membayar biaya tambahan untuk BHP.",
  },
  {
    title:
      "Apa yang saya dapatkan dengan layanan infus vitamin Perawathomecare.id?",
    content: (
      <>
        <p className="fw-bold">Anda akan mendapatkan:</p>
        <ul className="list-unstyled">
          <li className="d-flex align-items-center mb-1">
            <i className="bi bi-dot fs-3 me-2"></i>
            Tenaga perawat profesional dan berpengalaman
          </li>
          <li className="d-flex align-items-center mb-1">
            <i className="bi bi-dot fs-3 me-2"></i>
            Infus vitamin yang aman dan higienis
          </li>
          <li className="d-flex align-items-center mb-1">
            <i className="bi bi-dot fs-3 me-2"></i>
            Konsultasi gratis dengan perawat
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Apakah infus vitamin Perawathomecare.id aman?",
    content:
      "Ya, infus vitamin Perawathomecare.id aman dan dilakukan oleh perawat profesional yang berpengalaman. Kami menggunakan obat-obatan yang berkualitas dan terdaftar di BPOM.",
  },
  {
    title: "Bagaimana cara saya mempersiapkan diri untuk infus vitamin?",
    content:
      "Anda tidak perlu melakukan persiapan khusus sebelum infus vitamin. Namun, kami sarankan untuk makan dan minum air putih yang cukup sebelum infus.",
  },
  {
    title: "Apa yang harus saya lakukan setelah infus vitamin?",
    content: (
      <>
        <p className="fw-bold">Setelah infus vitamin, Anda dianjurkan untuk:</p>
        <ul className="list-unstyled">
          <li className="d-flex align-items-center mb-1">
            <i className="bi bi-dot fs-3 me-2"></i>
            Minum air putih yang cukup
          </li>
          <li className="d-flex align-items-center mb-1">
            <i className="bi bi-dot fs-3 me-2"></i>Istirahat yang cukup
          </li>
          <li className="d-flex align-items-center mb-1">
            <i className="bi bi-dot fs-3 me-2"></i>
            Makan makanan yang sehat dan bergizi
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Apakah ada efek samping dari infus vitamin?",
    content: (
      <>
        <p>
          Efek samping dari infus vitamin biasanya ringan dan jarang terjadi.
          <span className="fw-bold">
            Beberapa efek samping yang mungkin terjadi adalah:
          </span>
        </p>
        <ul className="list-unstyled">
          <li className="d-flex align-items-center mb-1">
            <i className="bi bi-dot fs-3 me-2"></i>Rasa sakit di tempat suntikan
          </li>
          <li className="d-flex align-items-center mb-1">
            <i className="bi bi-dot fs-3 me-2"></i>Mual
          </li>
          <li className="d-flex align-items-center mb-1">
            <i className="bi bi-dot fs-3 me-2"></i>Pusing
          </li>
        </ul>
        <p>
          Jika Anda mengalami efek samping setelah infus vitamin, segera hubungi
          perawat kami.
        </p>
      </>
    ),
  },
  {
    title: "Bagaimana cara mengatasi efek bengkak di tangan akibat infus?",
    content: (
      <>
        <ul className="list-unstyled custom-list">
          <li className="d-flex align-items-start mb-1">
            <i className="bi bi-dot fs-3 me-2 m"></i>
            <span className="lh-lg">
              <span className="fw-bold">Kompres :</span> Gunakan kompres dingin
              atau hangat pada area yang bengkak selama 15-20 menit, beberapa
              kali sehari. Kompres dingin membantu mengurangi peradangan,
              sedangkan kompres hangat membantu melancarkan aliran darah.
            </span>
          </li>
          <li className="d-flex align-items-start mb-1">
            <i className="bi bi-dot fs-3 me-2"></i>
            <span>
              <span className="fw-bold">Tinggikan tangan :</span> Jaga agar
              tangan Anda lebih tinggi daripada jantung Anda. Hal ini membantu
              mengurangi penumpukan cairan di area yang bengkak.
            </span>
          </li>
          <li className="d-flex align-items-start mb-1">
            <i className="bi bi-dot fs-3 me-2"></i>
            <span>
              <span className="fw-bold">Obat :</span> Minum obat pereda nyeri
              yang dijual bebas, seperti paracetamol atau ibuprofen, untuk
              membantu meredakan nyeri dan pembengkakan.
            </span>
          </li>
        </ul>
      </>
    ),
  },
  {
    title:
      "Bagaimana jika memiliki riwayat pengalaman infus yang kurang menyenangkan?",
    content: (
      <>
        <p className="fw-bold">
          (pembuluh darah kecil, pembuluh darah lembek, pembuluh darah sulit
          dicari)
        </p>
        <p>
          Apabila kondisi pembuluh darah Anda mengalami salah satu dari kondisi
          di atas, silakan informasikan ke tim konsultasi kesehatan kami agar
          dapat disesuaikan penggunaan jarum untuk infus.
        </p>
      </>
    ),
  },
  // Tambah item lainnya jika perlu
];

export default function CustomAccordion() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="accordion my-3 pb-4 mb-4" id="accordionExample">
      {accordionItems.map((item, index) => {
        const isOpen = openItems.includes(index);
        return (
          <div className="accordion-item border-0 mb-3 " key={index}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button custom-accordion-btn ${
                  !isOpen ? "collapsed" : ""
                }`}
                type="button"
                onClick={() => toggleItem(index)}
              >
                <span
                  className={`accordion-title ${isOpen ? "text-danger" : ""}`}
                >
                  {item.title}
                </span>
                <FaChevronDown
                  className={`ms-auto icon-arrow ${isOpen ? "rotate" : ""}`}
                />
              </button>
            </h2>
            <Collapse in={isOpen}>
              <div>
                <div className="accordion-body">
                  {typeof item.content === "string"
                    ? item.content
                    : item.content}
                </div>
              </div>
            </Collapse>
          </div>
        );
      })}
    </div>
  );
}
