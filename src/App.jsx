import "./App.css";

function App() {
  return (
    <div className="wrap">
      <h1 className="heading">Birthday Letter For u!</h1>
      <div className="postcard">
        <div>
          <h1 className="guest">
            В Бишкеке сегодня уже ваш день рождения!🥳🤍
          </h1>
          <div className="one">
            {/* <p className="invite">Приглашаю тебя на день рождения!</p> */}
            <section className="text">
              <p>
                Сегодня тебе 20 лет, что ж дедушка уже😹 с юбилеем тебя🥳🤍.
                Хочу пожелать тебе впервую очередь имана в сердце и крепкого
                намаза, чтобы они стали свидетелями в ахирате. хочу пожелать так
                же лёгкого изучения Корана и Рая 🤍 Желаю тебе долгих и
                замечательных лет жизни, чтобы все, что ты делала Ин Шаа Аллах
                был только в пользу тебе. Так же желаю тебе хорошую супругу,
                чтобы она была поддержкой и любовью для тебя💘, хочу так же,
                чтобы у тебя была работа твоей мечты ,чтобы в них были блага для
                тебя🤍✨ . желаю так же детей, чтобы они стали одной из причин,
                чтобы ты вошел в рай🤍 и в целом желаю, чтобы ты был тем, кто
                будет на пути Аллаха и была выдающимся человеком впервую очередь
                для себя, а потом для других🤍 А так желаю много денег и
                здоровья !!!
              </p>
              <div className="main-footer">
                <div className="footer">
                  <p>С уважением и радостью,</p>
                  <p>Айтурган</p>
                </div>
                <div style={{ fontWeight: 700 }} className="link">
                  <a href="https://youtu.be/90w2RegGf9w?si=zVxWvEDG_VRhIPKi">
                    {" "}
                    Надо обязательно посмотреть!{" "}
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="address">
          <img
            src="https://i.pinimg.com/originals/d5/1a/81/d51a818ae7bd902647713a5b9de8b63d.gif"
            className="mail_stamp"
            alt="mail_stamp"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
