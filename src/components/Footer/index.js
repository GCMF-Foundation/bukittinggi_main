import React from "react";

import "./style.css";

function Index(props) {
  return (
    <footer className="col-12 footer">
      <div className="justify-content-center">
        <div className="col-12 text-light">
          <ul className="list-inline d-flex footer-list link-list">
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="http://www.bukittinggikota.go.id/"
                className="footer-link"
              >
                Dinas Kota Bukittinggi
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="http://dikbud.bukittinggikota.go.id/"
                className="footer-link"
              >
                Dinas Pendidikan Kota Bukittinggi
              </a>
            </li>
          </ul>
        </div>
        <div className="col-12 copyright mt-2">
          &copy; {props.copyright}{" "}
          <a href="https://s.id/geschool"> Geschool </a>
        </div>
      </div>
    </footer>
  );
}

export default Index;
