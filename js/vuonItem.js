


// // vuonItem.js  
// document.addEventListener("DOMContentLoaded", function() {  
//     const itemContainer = document.getElementById("item-container");  
//     const addItemButton = document.getElementById("add-item-btn");  

//     addItemButton.addEventListener("click", function() {  
//         // Lấy item hiện tại để sao chép  
//         const existingItem = itemContainer.querySelector(".col-sm-12.col-xl-6").cloneNode(true);  
        
//         // Tạo ID mới cho canvas  
//         const canvasId = `worldwide-sales-${Date.now()}`;  
//         existingItem.querySelector("canvas").id = canvasId; // Đặt ID mới cho canvas  

//         // Nếu bạn muốn, có thể chỉnh sửa tiêu đề của item mới  
//         const newHeading = existingItem.querySelector("h6");  
//         newHeading.innerText = "Lượng Nước Trong Ngày " + (itemContainer.children.length + 1);  

//         // Thêm item mới vào container  
//         itemContainer.appendChild(existingItem);  
//     });  
// });

// vuonItem.js  
// document.addEventListener("DOMContentLoaded", function() {  
//     const itemContainer = document.getElementById("item-container");  
//     const addItemButton = document.querySelector(".btn.btn-primary"); // chọn nút "Lưu"  

//     addItemButton.addEventListener("click", function(event) {  
//         // Ngăn chặn hành động mặc định của nút submit  
//         event.preventDefault();  
        
//         // Lấy thông tin từ các input  
//         const areaName = document.getElementById("AreaInput").value;  
//         const gardenType = document.getElementById("loaiVuonSelect").value;  
//         const plantingMethod = document.getElementById("cachThucSelect").value;  
//         const areaSize = document.querySelector("input[aria-label='Amount (to the nearest dollar)']").value;  
//         const notes = document.getElementById("chuThichTextarea").value;  
//         const latitude = document.getElementById("latitudeInput").value;  
//         const longitude = document.getElementById("longitudeInput").value;  

//         // Tạo một item mới  
//         const newItem = document.createElement('div');  
//         newItem.classList.add('col-sm-12', 'col-xl-6', 'text-center', 'rounded', 'p-4', 'chart_background', 'listngang');  

//         newItem.innerHTML = `  
//             <h6 class="mb-0">Thông tin vườn: ${areaName}</h6>  
//             <p><strong>Loại vườn:</strong> ${gardenType}</p>  
//             <p><strong>Cách thức trồng:</strong> ${plantingMethod}</p>  
//             <p><strong>Diện tích:</strong> ${areaSize} m²</p>  
//             <p><strong>Ghi chú:</strong> ${notes}</p>  
//             <p><strong>Vĩ độ:</strong> ${latitude}</p>  
//             <p><strong>Kinh độ:</strong> ${longitude}</p>  
//         `;  

//         // Thêm item mới vào container  
//         itemContainer.appendChild(newItem);  

//         // Đặt lại form sau khi thêm item  
//         document.getElementById("AreaInput").value = '';  
//         document.getElementById("loaiVuonSelect").selectedIndex = 0; // Đặt lại về lựa chọn đầu tiên  
//         document.getElementById("cachThucSelect").selectedIndex = 0; // Đặt lại về lựa chọn đầu tiên  
//         document.querySelector("input[aria-label='Amount (to the nearest dollar)']").value = '';  
//         document.getElementById("chuThichTextarea").value = '';  
//         document.getElementById("latitudeInput").value = '';  
//         document.getElementById("longitudeInput").value = '';  
//     });  
// });


// document.addEventListener("DOMContentLoaded", function () {  
//     const itemContainer = document.getElementById("item-container");  
//     const addItemButton = document.querySelector(".btn.btn-primary"); // chọn nút "Lưu"  

//     // Hàm để hiển thị dữ liệu từ Local Storage  
//     window.displayItems = function () {  // Đưa hàm vào phạm vi toàn cục  
//         const itemList = JSON.parse(localStorage.getItem('itemList')) || [];  
//         itemContainer.innerHTML = ''; // Xóa nội dung cũ trước khi hiển thị lại  
//         itemList.forEach((item, index) => {  
//             const newItem = document.createElement('div');  
//             newItem.classList.add('col-sm-12', 'col-xl-6', 'text-center', 'rounded', 'p-4', 'chart_background', 'listngang');  
//             newItem.innerHTML = `  
//                 <h6 class="mb-0">Thông tin vườn: ${item.areaName}</h6>  
//                 <p><strong>Loại vườn:</strong> ${item.gardenType}</p>  
//                 <p><strong>Cách thức trồng:</strong> ${item.plantingMethod}</p>  
//                 <p><strong>Diện tích:</strong> ${item.areaSize} m²</p>  
//                 <p><strong>Ghi chú:</strong> ${item.notes}</p>  
//                 <p><strong>Vĩ độ:</strong> ${item.latitude}</p>  
//                 <p><strong>Kinh độ:</strong> ${item.longitude}</p>  
//                 <button onclick="deleteItem(${index})">Xóa</button>  
//             `;  
//             itemContainer.appendChild(newItem);  
//         });  
//     }  

//     // Hàm để thêm item vào Local Storage  
//     function addItemToLocalStorage(item) {  
//         let itemList = JSON.parse(localStorage.getItem('itemList')) || [];  
//         itemList.push(item);  
//         localStorage.setItem('itemList', JSON.stringify(itemList));  
//     }  

//     addItemButton.addEventListener("click", function (event) {  
//         // Ngăn chặn hành động mặc định của nút submit  
//         event.preventDefault();  

//         // Lấy thông tin từ các input  
//         const areaName = document.getElementById("AreaInput").value;  
//         const gardenType = document.getElementById("loaiVuonSelect").value;  
//         const plantingMethod = document.getElementById("cachThucSelect").value;  
//         const areaSize = document.querySelector("input[aria-label='Amount (to the nearest dollar)']").value;  
//         const notes = document.getElementById("chuThichTextarea").value;  
//         const latitude = document.getElementById("latitudeInput").value;  
//         const longitude = document.getElementById("longitudeInput").value;  

//         // Tạo một item mới  
//         const newItem = {  
//             areaName,  
//             gardenType,  
//             plantingMethod,  
//             areaSize,  
//             notes,  
//             latitude,  
//             longitude  
//         };  

//         // Lưu item vào Local Storage  
//         addItemToLocalStorage(newItem);  

//         // Đặt lại form sau khi thêm item  
//         document.getElementById("AreaInput").value = '';  
//         document.getElementById("loaiVuonSelect").selectedIndex = 0; // Đặt lại về lựa chọn đầu tiên  
//         document.getElementById("cachThucSelect").selectedIndex = 0; // Đặt lại về lựa chọn đầu tiên  
//         document.querySelector("input[aria-label='Amount (to the nearest dollar)']").value = '';  
//         document.getElementById("chuThichTextarea").value = '';  
//         document.getElementById("latitudeInput").value = '';  
//         document.getElementById("longitudeInput").value = '';  

//         // Hiển thị lại các item mới từ Local Storage  
//         displayItems();  
//     });  

//     // Thực thi hàm hiển thị để hiển thị item đã lưu khi trang được tải  
//     displayItems();  
// });  

// // Hàm xóa item khỏi Local Storage  
// window.deleteItem = function(index) {  
//     let itemList = JSON.parse(localStorage.getItem('itemList')) || [];  
//     itemList.splice(index, 1); // Xóa mục tại vị trí index  
//     localStorage.setItem('itemList', JSON.stringify(itemList)); // Cập nhật danh sách vào Local Storage  

//     // Hiển thị lại danh sách sau khi xóa  
//     displayItems();   
// }


///////////////ok

// document.addEventListener("DOMContentLoaded", function () {  
//     const itemContainer = document.getElementById("item-container"); // Nếu không có item-container thì bạn cần thêm nó vào HTML  
//     const addItemButton = document.querySelector(".btn.btn-primary"); // chọn nút "Lưu"  
//     let editIndex = null; // Chỉ số item đang được chỉnh sửa  

//     // Hàm để hiển thị dữ liệu từ Local Storage  
//     window.displayItems = function () {  
//         const itemList = JSON.parse(localStorage.getItem('itemList')) || [];  
//         if (itemContainer) {  
//             itemContainer.innerHTML = ''; // Xóa nội dung cũ trước khi hiển thị lại  
//             itemList.forEach((item, index) => {  
//                 const newItem = document.createElement('div');  
//                 newItem.classList.add('col-sm-12', 'col-xl-6', 'text-center', 'rounded', 'p-4', 'chart_background', 'listngang');  
//                 newItem.innerHTML = `  
//                     <h6 class="mb-0">Thông tin vườn: ${item.areaName}</h6>  
//                     <p><strong>Loại vườn:</strong> ${item.gardenType}</p>  
//                     <p><strong>Cách thức trồng:</strong> ${item.plantingMethod}</p>  
//                     <p><strong>Diện tích:</strong> ${item.areaSize} m²</p>  
//                     <p><strong>Ghi chú:</strong> ${item.notes}</p>  
//                     <p><strong>Vĩ độ:</strong> ${item.latitude}</p>  
//                     <p><strong>Kinh độ:</strong> ${item.longitude}</p>  
//                     <button onclick="deleteItem(${index})">Xóa</button>  
//                     <button onclick="editItem(${index})">Chỉnh sửa</button>  
//                 `;  
//                 itemContainer.appendChild(newItem);  
//             });  
//         } else {  
//             console.error("Element item-container không tồn tại trong DOM.");  
//         }  
//     }  

//     // Hàm để thêm item vào Local Storage  
//     function addItemToLocalStorage(item) {  
//         let itemList = JSON.parse(localStorage.getItem('itemList')) || [];  
//         if (editIndex !== null) {  
//             // Cập nhật item đang chỉnh sửa  
//             itemList[editIndex] = item;  
//         } else {  
//             // Nếu không chỉnh sửa, thêm mới  
//             itemList.push(item);  
//         }  
//         localStorage.setItem('itemList', JSON.stringify(itemList));  
//     }  

//     // Hàm để chỉnh sửa item  
//     window.editItem = function(index) {  
//         const itemList = JSON.parse(localStorage.getItem('itemList'));  
//         const item = itemList[index];  

//         // Điền thông tin của item vào các input  
//         document.getElementById("AreaInput").value = item.areaName;  
//         document.getElementById("loaiVuonSelect").value = item.gardenType;  
//         document.getElementById("cachThucSelect").value = item.plantingMethod;  
//         document.getElementById("dientichInput").value = item.areaSize; // Lưu ý ở đây là id đã được chỉnh sửa cho đúng  
//         document.getElementById("chuThichTextarea").value = item.notes;  
//         document.getElementById("latitudeInput").value = item.latitude;  
//         document.getElementById("longitudeInput").value = item.longitude;  

//         // Cập nhật editIndex để biết bất kỳ lần nhấn "Lưu" nào sau đó là cập nhật  
//         editIndex = index;  
//     };  

//     addItemButton.addEventListener("click", function (event) {  
//         // Ngăn chặn hành động mặc định của nút submit  
//         event.preventDefault();  

//         // Lấy thông tin từ các input  
//         const areaName = document.getElementById("AreaInput").value;  
//         const gardenType = document.getElementById("loaiVuonSelect").value;  
//         const plantingMethod = document.getElementById("cachThucSelect").value;  
//         const areaSize = document.getElementById("dientichInput").value; // Đã chỉnh sửa để sử dụng id đúng  
//         const notes = document.getElementById("chuThichTextarea").value;  
//         const latitude = document.getElementById("latitudeInput").value;  
//         const longitude = document.getElementById("longitudeInput").value;  

//         // Tạo một item mới  
//         const newItem = {  
//             areaName,  
//             gardenType,  
//             plantingMethod,  
//             areaSize,  
//             notes,  
//             latitude,  
//             longitude  
//         };  

//         // Lưu item vào Local Storage  
//         addItemToLocalStorage(newItem);  

//         // Đặt lại form sau khi thêm hoặc chỉnh sửa item  
//         document.getElementById("AreaInput").value = '';  
//         document.getElementById("loaiVuonSelect").selectedIndex = 0; // Đặt lại về lựa chọn đầu tiên  
//         document.getElementById("cachThucSelect").selectedIndex = 0; // Đặt lại về lựa chọn đầu tiên  
//         document.getElementById("dientichInput").value = ''; // Đã chỉnh sửa để sử dụng id đúng  
//         document.getElementById("chuThichTextarea").value = '';  
//         document.getElementById("latitudeInput").value = '';  
//         document.getElementById("longitudeInput").value = '';  

//         // Reset editIndex về null sau lần chỉnh sửa  
//         editIndex = null;  

//         // Hiển thị lại các item mới từ Local Storage  
//         displayItems();  
//     });  

//     // Thực thi hàm hiển thị để hiển thị item đã lưu khi trang được tải  
//     displayItems();  
// });  

// // Hàm xóa item khỏi Local Storage  
// window.deleteItem = function(index) {  
//     let itemList = JSON.parse(localStorage.getItem('itemList')) || [];  
//     itemList.splice(index, 1); // Xóa mục tại vị trí index  
//     localStorage.setItem('itemList', JSON.stringify(itemList)); // Cập nhật danh sách vào Local Storage  

//     // Hiển thị lại danh sách sau khi xóa  
//     displayItems();   
// }

///////////////ok



// vuonItem.js  
let editIndex = null; // Chỉ số item đang được chỉnh sửa
document.addEventListener("DOMContentLoaded", function () {  
    const itemContainer = document.getElementById("item-container");  
    const addItemButton = document.querySelector(".btn.btn-primary");  
      

    // Hàm để hiển thị dữ liệu từ Local Storage  
    window.displayItems = function () {  
        const itemList = JSON.parse(localStorage.getItem('itemList')) || [];  
        if (itemContainer) {  
            itemContainer.innerHTML = ''; // Xóa nội dung cũ trước khi hiển thị  
            itemList.forEach((item, index) => {  
                const newItem = document.createElement('div');  
                newItem.classList.add('col-sm-12', 'col-xl-6', 'text-center', 'rounded', 'p-4', 'chart_background', 'listngang');  
                newItem.innerHTML = `  
                    <h6 class="mb-0">Thông tin vườn: ${item.areaName}</h6>  
                    <p><strong>Loại vườn:</strong> ${item.gardenType}</p>  
                    <p><strong>Cách thức trồng:</strong> ${item.plantingMethod}</p>  
                    <p><strong>Diện tích:</strong> ${item.areaSize} m²</p>  
                    <p><strong>Ghi chú:</strong> ${item.notes}</p>  
                    <p><strong>Vĩ độ:</strong> ${item.latitude}</p>  
                    <p><strong>Kinh độ:</strong> ${item.longitude}</p>  
                    <button onclick="deleteItem(${index})">Xóa</button>  
                    <button onclick="editItem(${index})">Chỉnh sửa</button>  
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

    // // Hàm để thêm hoặc cập nhật item vào Local Storage  
    // function addItemToLocalStorage(item) {  
    //     let itemList = JSON.parse(localStorage.getItem('itemList')) || [];  
    //     if (editIndex !== null) {  
    //         // Cập nhật item đang chỉnh sửa  
    //         itemList[editIndex] = item;  
    //     } else {  
    //         // Nếu không chỉnh sửa, thêm mới  
    //         itemList.push(item);  
    //     }  
    //     localStorage.setItem('itemList', JSON.stringify(itemList));  
    // }
    
    // Cập nhật hàm để thêm hoặc cập nhật item vào Local Storage  
    function addItemToLocalStorage(item) {  
        let itemList = JSON.parse(localStorage.getItem('itemList')) || [];  
        if (editIndex !== null) {  
            // Cập nhật item đang chỉnh sửa  
            itemList[editIndex] = item; // Cập nhật item cũ với item mới  
        } else {  
            // Nếu không có editIndex, thêm mới  
            itemList.push(item);  
        }  
        localStorage.setItem('itemList', JSON.stringify(itemList));  
    }  


    // Hàm để chỉnh sửa item  
    window.editItem = function(index) {  
        const itemList = JSON.parse(localStorage.getItem('itemList'));  
        const item = itemList[index];  
        
        // Lưu thông tin của item vào local storage để sử dụng sau  
        // Chuyển hướng đến form nhập dữ liệu mới  
        const url = `forminput.html?areaName=${encodeURIComponent(item.areaName)}&gardenType=${item.gardenType}&plantingMethod=${item.plantingMethod}&areaSize=${item.areaSize}&notes=${encodeURIComponent(item.notes)}&latitude=${item.latitude}&longitude=${item.longitude}&editIndex=${index}`;  
        window.location.href = url; // Điều hướng đến trang forminput.html  
    };  

    // Xử lý sự kiện nhấn nút "Lưu"  
    addItemButton.addEventListener("click", function (event) {  
        event.preventDefault(); // Ngăn chặn hành động mặc định của nút submit  

        // Lấy thông tin từ các input  
        const areaName = document.getElementById("AreaInput").value;  
        const gardenType = document.getElementById("loaiVuonSelect").value;  
        const plantingMethod = document.getElementById("cachThucSelect").value;  
        const areaSize = document.getElementById("dientichInput").value;  
        const notes = document.getElementById("chuThichTextarea").value;  
        const latitude = document.getElementById("latitudeInput").value;  
        const longitude = document.getElementById("longitudeInput").value;  

        // Tạo một item mới  
        const newItem = {  
            areaName,  
            gardenType,  
            plantingMethod,  
            areaSize,  
            notes,  
            latitude,  
            longitude  
        };  

        // QUAN TRỌNG: Sử dụng window.editIndex thay vì biến editIndex cục bộ
        if (window.editIndex !== null) {
            let itemList = JSON.parse(localStorage.getItem('itemList')) || [];
            itemList[window.editIndex] = newItem; // Cập nhật item tại vị trí chỉ định
            localStorage.setItem('itemList', JSON.stringify(itemList));
            window.editIndex = null; // Reset editIndex
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
    window.deleteItem = function(index) {  
        let itemList = JSON.parse(localStorage.getItem('itemList')) || [];  
        itemList.splice(index, 1); // Xóa mục tại vị trí index  
        localStorage.setItem('itemList', JSON.stringify(itemList)); // Cập nhật danh sách vào Local Storage  

        // Hiển thị lại danh sách sau khi xóa  
        displayItems();  
    };  
    
    // Thực thi hàm hiển thị để hiển thị item đã lưu khi trang được tải  
    if (itemContainer) {  
        displayItems();  
    }  
});



