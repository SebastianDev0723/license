$(document).ready(function() {
    const order = JSON.parse(localStorage.getItem('order'));
    if (order && order.length > 0) {
        const orderId = Math.floor(Math.random() * 1000000);
        const orderMessage = `Comanda cu ID-ul ${orderId} a fost preluată și va ajunge în cel mai scurt timp.`;
        $('#orderMessage').text(orderMessage);
        $('#orderModal').modal('show');
        localStorage.removeItem('order');
    } else {
        $('#orderMessage').text('Nu există nicio comandă.');
        $('#orderModal').modal('show');
    }

    // Event listener pentru butonul OK
    $('#okButton').on('click', function() {
        window.location.href = 'cart.html';
    });
});