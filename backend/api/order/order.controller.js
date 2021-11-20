const orderService = require("./order.service");
const nodemailer = require("nodemailer");

// const Mailgen = require("mailgen");

const { EMAIL, PASSWORD, MAIN_URL } = require("../../config");

module.exports = {
  getOrders,
  getOrder,
  createOrder,
  deleteOrder,
};

async function getOrders(req, res) {
  const filterBy = req.query;
  const orders = await orderService.query(filterBy);
  return res.json(orders);
}
async function getOrder(req, res) {
  const orderId = req.params.id;
  const order = await orderService.getById(orderId);
  return order;
}

async function createOrder(req, res) {
  const order = req.body;
  console.log(order);
  const savedOrder = await orderService.save(order);
  // sendBill(order);
  return res.json(savedOrder);
}

async function deleteOrder(req, res) {
  const orderId = req.params.id;
  await orderService.remove(orderId);
  res.end("Order Deleted Well!");
}

async function createSummaryHTML() {
  // stamp = new Date().setHours(0,0,0,0)
  //
  //order:{
  //     supply:{
  //       type: specialGroup || delivery || pickup
  //       name
  //       supplyDate:
  //       price
  //     }
  //   }
  // order.supply.type
  // order.supplyDate
  const order = await orderService.getById("60a2995ca4513a0015c9fe51");

  const itemsTable = order.items.map((item) => {
    return `<td>${item.name}</td>`;
  });
  console.log(itemsTable);
}
// let transporter = nodemailer.createTransport({
//   service: "Yahoo",
//   secure: true,
//   auth: {
//     user: EMAIL,
//     pass: PASSWORD,
//   },
// });

// let MailGenerator = new Mailgen({
//   theme: "default",
//   product: {
//     name: "דרך הסייטן",
//     link: MAIN_URL,
//   },
// });

function sendBill(order) {
  const { firstName, lastName, email } = order.customerDetails;
  const customerEmail = email;
  const name = firstName + lastName;

  createSummaryHTML(order);

  //
  //   let response = {
  //     body: {
  //       name,
  //       intro: "Your bill has arrived!",
  //       table: {
  //         data: [
  //           {
  //             item: "MERN stack book",
  //             description: "A mern stack book",
  //             price: "$10.99",
  //           },
  //         ],
  //       },
  //       outro: "מקווה שיהיה לכם טעים!",
  //     },
  //   };
  //   let mail = MailGenerator.generate(response);
  //   let message = {
  //     from: EMAIL,
  //     to: customerEmail,
  //     subject: "transaction",
  //     html: mail,
  //   };
  //   transporter
  //     .sendMail(message)
  //     .then((res) => {
  //       return res
  //         .status(200)
  //         .json({ msg: "you should receive an email from us" });
  //     })
  //     .catch((error) => console.error(error));
}
createSummaryHTML();
