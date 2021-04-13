import React, { Component } from "react";


class Header extends Component
{
    render()
    {
        return(
            <div>
      <nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand">SCP FOUNDATION</a>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
<img className="image-fluid"img src="/images/scp.jpg"  alt="scp"></img>
</div>
        );
    }
}

export default Header;