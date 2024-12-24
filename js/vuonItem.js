import { addGarden, deleteGarden, getGardenByName, getGardenInfo, updateGarden } from "./handlleAPI.js";
///////////////ok
const apiUrl = 'http://localhost:3000';


// vuonItem.js  
let editIndex = null; // Chỉ số item đang được chỉnh sửa
document.addEventListener("DOMContentLoaded", function () {
    const itemContainer = document.getElementById("item-container");
    const addItemButton = document.querySelector(".btn.btn-primary");


    // Hàm để hiển thị dữ liệu từ Local Storage  
    window.displayItems = async function () {

        // const itemList = JSON.parse(localStorage.getItem('itemList')) || [];
        const itemList = await getGardenInfo(apiUrl) || [];
        if (itemContainer) {
            itemContainer.innerHTML = ''; // Xóa nội dung cũ trước khi hiển thị  
            itemList.forEach((item, index) => {
                const newItem = document.createElement('div');
                newItem.classList.add('col-sm-12', 'col-xl-6', 'text-center', 'rounded', 'p-4', 'chart_background', 'listngang');
                newItem.innerHTML = `  
                    <h6 class="mb-0">Thông tin vườn: ${item.nameGarden}</h6>  
                    <p><strong>Loại vườn:</strong> ${item.typeGarden}</p>  
                    <p><strong>Cách thức trồng:</strong> ${item.method}</p>  
                    <p><strong>Diện tích:</strong> ${item.area} m²</p>  
                    <p><strong>Ghi chú:</strong> ${item.note}</p>  
                    <p><strong>Vĩ độ:</strong> ${item.latitude}</p>  
                    <p><strong>Kinh độ:</strong> ${item.longitude}</p>  
                    <button onclick="deleteItem('${item.nameGarden}')">Xóa</button>  
                    <button onclick="editItem('${item.nameGarden}')">Chỉnh sửa</button>
                `;
                itemContainer.appendChild(newItem);
            });
        } else {
            console.error("Element item-container không tồn tại trong DOM.");
        }
    }

    // Kiểm tra nếu item-container tồn tại trước khi gọi displayItems  
    if (itemContainer) {
        displayItems(); // Gọi hàm hiển thị items  
    }

    // Cập nhật hàm để thêm hoặc cập nhật item vào Local Storage  
    async function addItemToLocalStorage(item) {

        // let itemList = JSON.parse(localStorage.getItem('itemList')) || [];
        if (editIndex !== null) {
            console.log('update');

            // Cập nhật item đang chỉnh sửa  
            // itemList[editIndex] = item; // Cập nhật item cũ với item mới  
            // await updateGarden(apiUrl, item)
        } else {
            // Nếu không có editIndex, thêm mới  
            // itemList.push(item);
            await addGarden(apiUrl, item)

        }
        // localStorage.setItem('itemList', JSON.stringify(itemList));
    }


    // Hàm để chỉnh sửa item  
    window.editItem = async function (index) {
        console.log(index);

        const item = await getGardenByName(apiUrl, index);

        // const item = itemList[index];

        // Lưu thông tin của item vào local storage để sử dụng sau  
        // Chuyển hướng đến form nhập dữ liệu mới  
        const url = `forminput.html?areaName=${encodeURIComponent(item.nameGarden)}&gardenType=${item.typeGarden}&plantingMethod=${item.method}&areaSize=${item.area}&notes=${encodeURIComponent(item.note)}&latitude=${item.latitude}&longitude=${item.longitude}&editIndex=${index}`;
        window.location.href = url; // Điều hướng đến trang forminput.html  
    };

    // Xử lý sự kiện nhấn nút "Lưu"  
    addItemButton.addEventListener("click", async function (event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của nút submit  

        // Lấy thông tin từ các input  
        const areaName = document.getElementById("AreaInput").value;
        const gardenType = document.getElementById("loaiVuonSelect");
        const plantingMethod = document.getElementById("cachThucSelect");
        const areaSize = document.getElementById("dientichInput").value;
        const notes = document.getElementById("chuThichTextarea").value;
        const latitude = document.getElementById("latitudeInput").value;
        const longitude = document.getElementById("longitudeInput").value;

        const type = gardenType.options[gardenType.selectedIndex].text;
        const method = plantingMethod.options[plantingMethod.selectedIndex].text;

        // Tạo một item mới  
        const newItem = {
            areaName,
            type,
            method,
            areaSize,
            notes,
            latitude,
            longitude
        };

        // QUAN TRỌNG: Sử dụng window.editIndex thay vì biến editIndex cục bộ
        if (window.editIndex !== null) {
            //Get name of garden based on query string on url
            const queryString = new URLSearchParams(window.location.search);
            const name = queryString.get('areaName');

            // let itemList = JSON.parse(localStorage.getItem('itemList')) || [];
            // itemList[window.editIndex] = newItem; // Cập nhật item tại vị trí chỉ định
            // localStorage.setItem('itemList', JSON.stringify(itemList));
            // window.editIndex = null; // Reset editIndex
            await updateGarden(apiUrl, name, newItem)
        } else {

            // Lưu item vào Local Storage  
            addItemToLocalStorage(newItem);
        }

        // Đặt lại form sau khi thêm hoặc chỉnh sửa item  
        document.getElementById("AreaInput").value = '';
        document.getElementById("loaiVuonSelect").selectedIndex = 0; // Đặt lại về lựa chọn đầu tiên  
        document.getElementById("cachThucSelect").selectedIndex = 0; // Đặt lại về lựa chọn đầu tiên  
        document.getElementById("dientichInput").value = '';
        document.getElementById("chuThichTextarea").value = '';
        document.getElementById("latitudeInput").value = '';
        document.getElementById("longitudeInput").value = '';

        // // Reset editIndex về null sau lần chỉnh sửa  
        // editIndex = null;  

        // Reset editIndex về null sau lần chỉnh sửa - chỉ reset lại nếu không ở chế độ chỉnh sửa  
        if (editIndex === null) {
            editIndex = null;
        }

        // Hiển thị lại các item mới từ Local Storage  
        displayItems();
    });

    // Hàm xóa item khỏi Local Storage  
    window.deleteItem = async function (index) {
        const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa mục này không?");

        if (confirmDelete) {
            try {
                await deleteGarden(apiUrl, index);
                alert("Mục đã được xóa thành công!");
                location.reload(true); // Reload the page to refresh the list
            } catch (error) {
                console.error("Xóa mục thất bại:", error);
                alert("Đã xảy ra lỗi khi xóa mục. Vui lòng thử lại.");
            }
        }
    };


    // Thực thi hàm hiển thị để hiển thị item đã lưu khi trang được tải  
    if (itemContainer) {
        displayItems();
    }
});



