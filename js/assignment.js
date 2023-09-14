const order1 = {
    customer: {
        name: 'bob',
        phone: '123'
    },
    cart: [
        {
            product: 'bread',
            quantity: 10,
            unitPrice: 10,
            totalPrice: 100
        }
    ],
    total: 100,
    paid: 80,
    due: 20
}
const order2 = {
    customer: {
        name: 'alice',
        phone: '456'
    },
    cart: [
        {
            product: 'rice',
            quantity: 10,
            unitPrice: 5,
            totalPrice: 50
        }
    ],
    total: 50,
    paid: 50,
    due: 0
}

const orders = [order1, order2];

const totalOrdersAmount = orders.reduce((acc, curr) => acc += curr.total, 0);
const totalPaidAmount = orders.reduce((acc, curr) => acc += curr.paid, 0);
const totalUnpaidAmount = orders.reduce((acc, curr) => acc += curr.due, 0);

const ordersCount = orders.length;

const avgOrdersAmount = totalOrdersAmount / ordersCount;

const itemWisePrice = orders.map((order) => order.cart[0].totalPrice);

const breadPrice = itemWisePrice[0];
const ricePrice = itemWisePrice[1];

console.log(totalOrdersAmount);
console.log(totalPaidAmount);
console.log(totalUnpaidAmount);
console.log(ordersCount);
console.log(avgOrdersAmount);
console.log(breadPrice);
console.log(ricePrice);