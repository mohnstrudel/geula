$(document).on('turbolinks:load', function(){
  //note: в примере используется библиотека jquery

  var pay = function () {
      var widget = new cp.CloudPayments();

      var data = { //данные дарителя
          name: $('input[name=name]').val(),
          lastName: $('input[name=family_name]').val(),
          phone: $('input[name=phone]').val()
      };

      var auto = $('input[type=checkbox]').is(':checked'); //проверка

      if (auto) { //включаем подписку
          data.cloudPayments = {
              recurrent: { interval: 'Month', period: 1 } //один раз в месяц начиная со следующего месяца
          }
      }

      var amount = parseFloat($('input[name=amount]').val());
      var accountId = $('input[name=email]').val();

      widget.charge({ // options
          publicId: 'test_api_00000000000000000000002', //id из личного кабинета
          description: 'Пожертвование в фонд GEULA', //назначение
          amount: amount, //сумма
          currency: 'RUB', //валюта
          accountId: accountId, //идентификатор плательщика (обязательно для создания подписки)
          email: accountId,
          data: data
      },
      function (options) { // success
          //действие при успешной оплате
          $('#result-status').empty();
          $('#result-status').append("<div class='alert alert-success' role='alert'><strong>Спасибо! </strong>Мы успешно приняли ваше пожертвование.</div>");
      },
      function (reason, options) { // fail
          //действие при неуспешной оплате
          $('#result-status').empty();
          $('#result-status').append("<div class='alert alert-danger' role='alert'><strong>Ошибка. </strong>Мы не смогли обработать ваше пожертвование.<br/>Причина: " + reason + "</div>");
      });
  };

  $('#submit_help').on('click', function(e){
    var error = false;
    e.preventDefault();
    // console.log('click clack!');
    
    // Валидации
      var firstName = $('input[name=name]'),
        lastName = $('input[name=family_name]'),
        phone = $('input[name=phone]'),
        amount = $('input[name=amount]'),
        email = $('input[name=email]');

        if(firstName.val() == ""){
          firstName.addClass('alert-danger');
          error = true;
        } else {
          firstName.removeClass('alert-danger').addClass('alert-success');
        }

        if(lastName.val() == ""){
          lastName.addClass('alert-danger');
          error = true;
        } else {
          lastName.removeClass('alert-danger').addClass('alert-success');
        }

        if(phone.val() == ""){
          phone.addClass('alert-danger');
          error = true;
        } else {
          phone.removeClass('alert-danger').addClass('alert-success');
        }

        if(amount.val() == ""){
          amount.addClass('alert-danger');
          error = true;
        } else {
          amount.removeClass('alert-danger').addClass('alert-success');
        }

        if(email.val() == ""){
          email.addClass('alert-danger');
          error = true;
        } else {
          email.removeClass('alert-danger').addClass('alert-success');
        }
    // Валидации энд

    if(!error){
      pay();  
    }
    
  });
  

});