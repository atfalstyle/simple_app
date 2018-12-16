      <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <ul class="nav">
          <li class="nav-item <?php if($current_page == 'dashboard' || $current_page == ''){ echo "active"; } ?>">
            <a class="nav-link" href="?hal=dashboard">
              <i class="menu-icon mdi mdi-television"></i>
              <span class="menu-title">Dashboard</span>
            </a>
          </li>
          <li class="nav-item <?php if($current_page == 'users'){ echo 'active'; } ?>">
            <a class="nav-link" href="?hal=users" >
              <i class="menu-icon mdi mdi-content-copy"></i>
              <span class="menu-title">Users</span>
            </a>
          </li>
          <li class="nav-item <?php if($current_page == 'books'){ echo 'active'; } ?>">
            <a class="nav-link" href="?hal=books">
              <i class="menu-icon mdi mdi-content-copy"></i>
              <span class="menu-title">Books</span>
            </a>
          </li>
          <li class="nav-item <?php if($current_page == 'categories'){ echo 'active'; } ?>">
            <a class="nav-link" href="?hal=categories">
              <i class="menu-icon mdi mdi-content-copy"></i>
              <span class="menu-title">Categories</span>
            </a>
          </li>
        </ul>
      </nav>