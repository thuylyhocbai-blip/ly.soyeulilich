function previewImage(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            // Thay đổi ảnh trên trang nhập liệu
            document.getElementById('display-avatar').src = e.target.result;
            
            // (Tùy chọn) Lưu vào LocalStorage để khi bấm "Xem hồ sơ" ảnh vẫn còn
            localStorage.setItem('userAvatar', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

// Khi hiển thị trang Review, bạn cũng nên cập nhật ảnh đã chọn vào đó
function showReview() {
    const savedAvatar = localStorage.getItem('userAvatar');
    // Code hiển thị review của bạn...
    // Nhớ thêm logic: if(savedAvatar) { document.getElementById('review-img').src = savedAvatar; }
}