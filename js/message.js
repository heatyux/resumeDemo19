! function () {

  var view = document.querySelector('section.message');

  var model = {
    // 获取数据
    init: function () {
      var APP_ID = 'HPJx44bbnzv1wP53N4WV1cAS-MdYXbMMI';
      var APP_KEY = 'idwDAJVU9n3h3gJJfDHVTIeH';
      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      });
    },
    fetch: function() {
      var query = new AV.Query('Message');
      return query.find(); // Promise 对象
    },
    // 创建数据
    save: function(name, content) {
      var Message = AV.Object.extend('Message');
      var message = new Message();
      message.set({
        'name': name,
        'content': content
      });
      return message.save(); // Promise 对象
    }
  }

  var controller = {
    view: null,
    init: function (view, model) {
      this.view = view;
      this.model = model;

      this.messageList = document.querySelector('#messageList');
      this.form = document.querySelector('#postMessageForm');
      this.model.init();
      this.loadMessages();
      this.bindEvents();
    },
    
    loadMessages: function () {
      // 将数据库引入页面上
      this.model.fetch().then( (messages) => {
        let array = messages.map((item) => item.attributes);
        array.forEach((item) => {
          let li = document.createElement('li');
          li.innerText = `${item.name}: ${item.content}`;
          this.messageList.append(li);
        });
      });
    },
    bindEvents: function () {
      // 提交form表单
      this.form.addEventListener('submit', (e) => {
        // 阻止点击后刷新
        e.preventDefault();
        this.saveMessages();
      });
    },
    saveMessages: function(){
      let myForm = this.form;
      let content = myForm.querySelector('input[name=content]').value;
      let name = myForm.querySelector('input[name=name]').value;
      this.model.save(name, content).then(function (Object) {
        let li = document.createElement('li');
        li.innerText = `${Object.attributes.name}: ${Object.attributes.content}`;
        let messageList = document.querySelector('#messageList');
        messageList.append(li);
        myForm.querySelector('input[name=content]').value = '';
      })
    }
  };

  controller.init(view, model);

}.call()