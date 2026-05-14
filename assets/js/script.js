document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  // Smooth scroll fix untuk anchor link agar tidak tertutup navbar fixed
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      menu.classList.add("hidden"); // Tutup menu mobile jika diklik

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerOffset = 70;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});
function sendToWhatsApp() {
  // 1. Ganti nomor ini dengan nomor WA kamu
  // Gunakan format 628xxx (tanpa tanda + atau spasi)
  const phoneNumber = "6283116761475";

  // 2. Ambil nilai dari form
  const name = document.getElementById("contact-name").value;
  const email = document.getElementById("contact-email").value;
  const message = document.getElementById("contact-message").value;

  // 3. Validasi sederhana
  if (name === "" || message === "") {
    alert("Silakan isi Nama dan Pesan terlebih dahulu!");
    return;
  }

  // 4. Buat format pesan teks
  // %0A adalah kode untuk baris baru (Enter) di URL
  let text = `Halo, saya ${name}.%0A`;

  if (email !== "") {
    text += `Email: ${email}%0A`;
  }

  text += `%0A${message}`;

  // 5. Buka link WhatsApp
  // encodeURIComponent memastikan simbol aneh di pesan tidak merusak link
  const waURL = `https://wa.me/${phoneNumber}?text=${text}`; // Tidak perlu encodeURIComponent lagi untuk text yang sudah diformat manual di atas, tapi kalau pesannya kompleks lebih baik pakai.

  // Versi lebih aman pakai encode:
  const finalMessage = `Halo, saya ${name}.\n\nEmail: ${email}\n\nPesan: ${message}`;
  const secureURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    finalMessage,
  )}`;

  window.open(secureURL, "_blank");
}
function sendToEmail() {
  // 1. Masukkan email kamu di sini
  const myEmail = "kafiagung@gmail.com";

  // 2. Ambil nilai dari form
  const name = document.getElementById("contact-name").value;
  const userEmail = document.getElementById("contact-email").value;
  const message = document.getElementById("contact-message").value;

  // 3. Validasi
  if (name === "" || message === "") {
    alert("Silakan isi Nama dan Pesan terlebih dahulu!");
    return;
  }

  // 4. Susun Subjek dan Body Email
  const subject = `Portfolio Inquiry - From ${name}`;
  let body = `Halo Kafi,\n\nNama: ${name}\n`;

  if (userEmail !== "") {
    body += `Email Pengirim: ${userEmail}\n`;
  }

  body += `\nPesan:\n${message}`;

  // 5. Buka mailto link
  const mailtoURL = `mailto:${myEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoURL;
}
