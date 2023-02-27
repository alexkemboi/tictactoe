import React from "react";
function Navbar() {
  return (
    <div>
      <nav class="container navbar navbar-expand-lg navbar-light bgColorHeader  card-header fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand text-white" href="./index.html">
            TicTacToe
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-menu collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a
                  class="nav-link active text-white"
                  aria-current="page"
                  href="./index.html"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="./index.html">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="./index.html">
                  Donate
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="./index.html">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="./index.html">
                  Forum
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="./index.html">
                  Tic-tac-toe
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="./index.html">
                  Resources
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
