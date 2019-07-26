var APP_ID = 'HPJx44bbnzv1wP53N4WV1cAS-MdYXbMMI';
var APP_KEY = 'idwDAJVU9n3h3gJJfDHVTIeH';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

// 将数据库引入页面上
var query = new AV.Query('Message');
query.find().then(function (messages) {
  let array = messages.map((item) => item.attributes);
  array.forEach((item) => {
    let li = document.createElement('li');
    li.innerText = `${item.name}: ${item.content}`;
    let messageList = document.querySelector('#messageList');
    messageList.append(li);
  });
});

// 提交form表单
let myForm = document.querySelector('#postMessageForm');
myForm.addEventListener('submit', function (e) {
  // 阻止点击后刷新
  e.preventDefault();
  let content = myForm.querySelector('input[name=content]').value;
  let name = myForm.querySelector('input[name=name]').value;
  var Message = AV.Object.extend('Message');
  var message = new Message();
  message.set({
    'name': name,
    'content': content
  });
  message.save().then(function (Object) {
    let li = document.createElement('li');
    li.innerText = `${Object.attributes.name}: ${Object.attributes.content}`;
    let messageList = document.querySelector('#messageList');
    messageList.append(li);
    myForm.querySelector('input[name=content]').value = '';
  })
});