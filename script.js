function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

function orderPackage(packageName) {
    const message = `Halo! Saya mau pesan ${packageName}. Mohon info lebih lanjut ya!`;
    const whatsappURL = `https://wa.me/6282318035941?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

function contactWhatsApp() {
    const message = `Halo! Saya mau tanya-tanya tentang paket snack.`;
    const whatsappURL = `https://wa.me/6282318035941?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}