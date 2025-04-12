const API_URL = "http://localhost:8080";

const urlParams = new URLSearchParams(window.location.search);
const customerID = urlParams.get("id");



function redirectToCustomerManagement() {
    window.location.href = "OrderManagement.html";
}


function fetchCustomerDetails() {
    if (!customerID || isNaN(customerID)) {
        document.getElementById("customer-info").innerHTML = "<p>Błąd: Niepoprawne ID klienta.</p>";
        return;
    }

    fetch(`${API_URL}/api/customers/${customerID}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Nie znaleziono klienta.");
            }
            return response.json();
        })
        .then(customer => {
            document.getElementById("customer-info").innerHTML =
                `<h2>${customer.name} ${customer.surname}</h2><p>ID: ${customer.customerID}</p>`;
        })
        .catch(() => {
            document.getElementById("customer-info").innerHTML = "<p>Błąd: Nie znaleziono klienta.</p>";
        });

    fetch(`${API_URL}/api/customerOrders/${customerID}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Nie udało się pobrać zamówień.");
            }
            return response.json();
        })
        .then(orders => {
            const orderList = document.getElementById("order-list");
            orderList.innerHTML = "";

            if (orders.length === 0) {
                document.getElementById("no-orders").style.display = "block";
            } else {
                document.getElementById("no-orders").style.display = "none";
                orders.forEach(order => {
                    const li = document.createElement("li");
                    li.innerHTML = `
                        <strong>Zamówienie #${order.orderID}</strong><br>
                        <strong>Nazwa:</strong> ${order.orderName}<br>
                        <strong>Opis:</strong> ${order.orderDescription}<br>
                        <strong>Wartość:</strong> ${order.orderValue} PLN
                    `;

                    li.addEventListener('click', () => {
                        window.location.href = `EditOrder.html?id=${order.orderID}`;
                    });

                    orderList.appendChild(li);
                });
            }
        })
        .catch(() => {
            document.getElementById("no-orders").style.display = "block";
        });
}

function redirectToEditCustomer() {
    if (!customerID) {
        alert("Błąd: Brak ID klienta.");
        return;
    }
    window.location.href = `EditCustomer.html?id=${customerID}`;
}

document.addEventListener("DOMContentLoaded", () => {
    fetchCustomerDetails();
    const editButton = document.getElementById("edit-customer-redirection");

    if (editButton) {
        editButton.addEventListener("click", redirectToEditCustomer);
    } else {
        console.error("Przycisk 'Edytuj klienta' nie został znaleziony w DOM.");
    }
});
