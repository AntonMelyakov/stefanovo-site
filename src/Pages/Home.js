import React from "react";
import panorama_1 from "../pictures/panorama_1.JPG";
import panorama_2 from "../pictures/panorama_2.JPG";

function Home() {
  const title = "Home";

  return (
    <div className="m-4 p-4 rounded home">
      <div className="d-flex flex-column justify-content-center">
        <h1 className="mb-5 text-center">Село Стефаново</h1>
        <p>
          <img
            src={panorama_1}
            alt="Stefanovo"
            width="440"
            height="247"
            className="float-end"
          />
          Китното село Стефаново се намира на около 10 километра от град
          Радомир, в подножието на планина Острица. В селото има язовир, който
          предоставя добри условия за любителите на риболова. Стефаново
          (образувано през 1955 г. от сливането на селата Проваленица и Горни
          Раковец) е село в Западна България. Намира се в община Радомир, област
          Перник. Отстои на 50 км югозападно от столицата София и на 9 км
          югоизточно от град Радомир. Селото лежи на пътя Дупница – Радомир, в
          близост до автомагистрала „Струма“ (на 10 км западно от пътен възел
          „Долна Диканя“). Стефаново е обградено от селата: Червена могила (от
          запад), Друган (от изток) и Долни Раковец (от запад-югозапад).
        </p>
        <p>
          Землището на Стефаново е сравнително голямо за тази част на България –
          31,394 км². Северната му част е заета от хълмисто-планинския релеф на
          Голо бърдо, а южната е равнинна. В последната са разположени повечето
          обработваеми земи на селото. Източно от селото се намира язовир
          „Стефаново“, захранван от един от многобройните потоци, извиращи в
          Голо бърдо.
        </p>

        <div>
          <img
            src={panorama_2}
            alt="Stefanovo"
            width="400"
            height="225"
            className="float-start p-2"
          />
          <p>
            Климатът е типично умереноконтинентален със зимни температурни
            инверсии и мъгли. Преобладаващата почвена покривка е представена от
            чернозем-смолници и алувиално-ливадни почви.
          </p>
          <p>
            Местните природни условия са благоприятни за отглеждане на зърнени
            култури (пшеница, ечемик, слънчоглед), картофи, лен, овощия и др.
            Голите и затревени околни хълмове са идеална предпоставка за
            упражняване на пасищно животновъдство. Населението на село Стефаново
            към 2017 г. наброява около 300 души (по настоящ и постоянен адрес,
            т.е. постоянно живущи). През лятото се увеличава значително.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
