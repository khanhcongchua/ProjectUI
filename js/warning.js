function closeAlert(alertId) {
  const alertElement = document.getElementById(alertId);
  if (alertElement) {
    alertElement.style.display = 'none';
  }
}

function addAlert(message, type) {
  const alertContainer = document.querySelector('.recommend-inf_text');

  if (!alertContainer) {
    console.error('Không tìm thấy container chứa cảnh báo.');
    return;
  }

  const alertElement = document.createElement('div');
  alertElement.classList.add('alert', `alert-${type}`);
  alertElement.id = `alert${Date.now()}`;
  alertElement.innerHTML = `
      ${message}
      <span class="close-btn" onclick="closeAlert('${alertElement.id}')">&times;</span>
    `;

  alertContainer.appendChild(alertElement);
  const firstChild = alertContainer.firstChild;
  alertContainer.insertBefore(alertElement, firstChild);

}

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('close-btn')) {
    const alertElement = event.target.parentElement;
    if (alertElement) {
      alertElement.style.display = 'none';
    }
  }
});

function convertTimestampToString(timestamp) {
  const timezoneOffset = 7;
  const date = new Date(timestamp);
  const utcDate = new Date(date.getTime() + (timezoneOffset * 60 * 60 * 1000));
  const options = {

    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
    timeZone: 'UTC'
  };
  const formattedDate = utcDate.toLocaleString('en-US', options);

  return formattedDate;
}


function handleAddAlert(humd, millisecond) {
  const time = convertTimestampToString(millisecond);
  if (humd >= 68) {
    addAlert(`(${time}) Độ ẩm đất là ${humd}% đang quá cao, khuyến cáo giảm lượng nước tưới`, '-error');
  }
  else if (humd >= 60 || humd < 68) {
    addAlert(`(${time}) Độ ẩm đất là ${humd}% đang ở mức phù hợp`, '-success');
  }
  else {
    addAlert(`(${time}) Độ ẩm đất là ${humd}% đang thấp cần cung cấp đủ nước khuyến cáo`, '-warning');
  }
}
