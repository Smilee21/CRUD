export function showM (m, t = 'bien') {
    Toastify({
        text: m,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: t === 'bien'?'green':'red'
        },
        onClick: function(){} // Callback after click
      }).showToast();
}