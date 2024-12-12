
  // Lắng nghe sự kiện thay đổi giá trị của combobox
  document.getElementById('kc-selector').addEventListener('change', function () {
    const selectedValue = this.value; // Lấy giá trị được chọn
    const kcValueElement = document.getElementById('kc-value'); // Lấy phần tử hiển thị KC
  
    // Cập nhật giá trị hiển thị
    kcValueElement.textContent = selectedValue === '0' ? 'auto' : selectedValue;
  
    // Thêm thông báo (tuỳ chọn)
  });
  