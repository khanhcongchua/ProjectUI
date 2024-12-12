document.getElementById('addItemButton').addEventListener('click', function() {  
    const messageDropdown = document.getElementById('messageDropdown');  

    // Tạo một item mới  
    const newItem = document.createElement('a');  
    newItem.classList.add('dropdown-item');  
    newItem.innerHTML = ` 
         
        <div class="d-flex align-items-center">  
            <img class="rounded-circle" src="img/user.jpg" alt="" style="width: 40px; height: 40px;">  
            <div class="ms-2">  
                <h6 class="fw-normal mb-0">New message</h6>  
                <small>Just now</small>  
            </div>  
        </div>
        <hr class="dropdown-divider">  
    `;  

    // Thêm item mới vào dropdown  
    messageDropdown.insertBefore(newItem, messageDropdown.lastElementChild);  
});