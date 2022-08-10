import React from "react";

function Contacts() {
  const title = "Contacts";

  return (
    <div className="m-md-4 p-md-4 m-2 p-2 rounded home">
      <div className="d-flex flex-column justify-content-center">
        <h1 className="mb-5 text-center">Контакти</h1>
        <div className="d-flex justify-content-center mb-4 ">
          <div className="d-flex flex-column contacts-address py-3 px-3">
            <h5 className="text-center mb-3">КМЕТСТВО</h5>
            <p>Кмет на с. Стефаново е Веселин Иванов Василев</p>
            <p>
              <strong>Е-mail:</strong> v.vasilev@radomir.bg
            </p>
            <p>
              <strong>Телефони:</strong> (07723)2100, 0885599246
            </p>
            <p>
              <strong>Работно време:</strong>от 08:00 ч. До 17:00 ч.
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="d-flex flex-column contacts-address py-3 px-3">
            <h5 className="text-center mb-3">СЕДАЛИЩЕ И АДРЕС</h5>

            <p>
              <strong>Област:</strong> Перник
            </p>
            <p>
              <strong>Община:</strong> Радомир
            </p>
            <p>
              <strong>Населено място:</strong> с. Стефаново
            </p>
          </div>
        </div>
      </div>
      <div className="google-map-code d-flex justify-content-center mt-4">
        <div>
          <iframe
            src="https://maps.google.com/maps?q=Stefanovo,%20Pernik&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="442"
            height="350"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
