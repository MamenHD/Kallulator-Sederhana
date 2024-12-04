const display = document.getElementById('display');

const gambar = document.getElementById("gambar");

    // Variabel untuk menyimpan status drag
    let isDragging = false;
    let startX, startY; // Posisi awal kursor
    let offsetX = 0, offsetY = 0; // Offset untuk posisi gamba

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

// Event: Klik dan mulai drag
gambar.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX - offsetX; // Hitung posisi awal relatif terhadap gambar
    startY = e.clientY - offsetY;
    gambar.style.cursor = "grabbing";
  });

  // Event: Lepas klik untuk berhenti drag
  document.addEventListener("mouseup", () => {
    isDragging = false;
    gambar.style.cursor = "grab";
  });

  // Event: Geser kursor (drag gambar)
  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return; // Hanya jalankan jika sedang drag

    // Hitung posisi baru
    offsetX = e.clientX - startX;
    offsetY = e.clientY - startY;

    // Terapkan posisi baru ke gambar
    gambar.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(1.1)`;
  });
