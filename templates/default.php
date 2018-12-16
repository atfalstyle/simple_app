<!DOCTYPE html>
<html lang="en">

<head>
    <?php require_once 'templates/partials/_head.php'; ?>

</head>

<body>
  <div class="container-scroller">
    <!-- partial:partials/_navbar.html -->
      <?php require_once 'templates/partials/_header.php'; ?>
    <!-- partial -->
    <div class="container-fluid page-body-wrapper">
      <!-- partial:partials/_sidebar.html -->
        <?php require_once 'templates/partials/_sidebar.php'; ?>
      <!-- partial -->
      <div class="main-panel">
        <?php 
          eval($content);
        ?>
        <!-- content-wrapper ends -->
      </div>
      <!-- main-panel ends -->
    </div>
    <!-- page-body-wrapper ends -->
  </div>
  <!-- container-scroller -->

  <!-- plugins:js -->
  <?php require_once 'templates/partials/_scripts.php'; ?>
  <!-- End custom js for this page-->
</body>

</html>