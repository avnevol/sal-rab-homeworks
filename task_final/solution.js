function sendRequest(name, phone, address, goods, sum) {
let data = {
          client: {name, phone},
          order: {address, sum},
          goods: []
        };

data.client = name + ' ' + phone;
data.order.address = 'ул. ' + address.street + ', дом ' + address.house + ', ' + address.entrance + ' подъезд, ' + address.floor + ' этаж, кв ' + address.flat;
data.order.sum = sum;
data.goods.title = goods.title;
data.goods.count = goods.count;

let countOfGoods = goods.length;
  for (let i=0; i<countOfGoods; i++) {
      data.goods.push({title: goods[i].title, count: goods[i].count});
  };

let Object1 = {data};
let jsonData = JSON.stringify(Object1);

return jsonData;
}