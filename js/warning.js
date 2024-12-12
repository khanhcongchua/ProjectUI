// Hàm đóng cảnh báo
function closeAlert(alertId) {
    const alertElement = document.getElementById(alertId);
    if (alertElement) {
      alertElement.style.display = 'none'; // Ẩn cảnh báo
    }
  }
  
  // Hàm thêm một cảnh báo mới vào danh sách
function addAlert(message, type = 'warning') {
    const alertContainer = document.querySelector('.recommend-inf_text');
  
    if (!alertContainer) {
      console.error('Không tìm thấy container chứa cảnh báo.');
      return;
    }
  
    // Tạo phần tử cảnh báo
    const alertElement = document.createElement('div');
    alertElement.classList.add('alert', `alert-${type}`);
    alertElement.id = `alert${Date.now()}`; // ID duy nhất
    alertElement.innerHTML = `
      ${message}
      <span class="close-btn" onclick="closeAlert('${alertElement.id}')">&times;</span>
    `;
  
    // Thêm cảnh báo vào container
    alertContainer.appendChild(alertElement);
  
    // // Tự động ẩn cảnh báo sau 5 giây
    // setTimeout(() => {
    //   alertElement.style.display = 'none';
    // }, 5000);
}
  
// Gắn sự kiện động để đóng cảnh báo khi người dùng nhấn vào nút
document.addEventListener('click', function (event) {
if (event.target.classList.contains('close-btn')) {
    const alertElement = event.target.parentElement;
    if (alertElement) {
    alertElement.style.display = 'none'; // Ẩn cảnh báo
    }
}
});

// Ví dụ: Thêm một cảnh báo sau khi tải trang
document.addEventListener('DOMContentLoaded', () => {
addAlert('Cảnh báo tự động khi tải trang.', 'info');
});



document.addEventListener('DOMContentLoaded', () => {
// Tự động hiển thị cảnh báo khi tải trang
addAlert('Cảnh báo tự động khi tải trang.', 'info');

// Thêm nút thử nghiệm
document.getElementById('show-alert-btn')?.addEventListener('click', () => {
    addAlert('Cảnh báo mới: Đây là một cảnh báo khi nhấn nút.', 'success');
});
});


