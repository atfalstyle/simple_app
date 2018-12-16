<div class="row">
  <div class="col-lg-12 grid-margin">
    <div class="card">
      <div class="card-body">
          <h4 class="card-title">Data</h4>
          <button class="btn btn-primary" data-target="#add" data-toggle="modal">Add User</button>
          <br>
          <br>
          <div class="table-responsive">
            <table class="table table-bordered" id="dataTable">
            	<thead>
                <tr>
                	<th width="10">No</th>
                	<th>Nama</th>
                	<th>Username</th>
                	<th>Password</th>
                	<th>Email</th>
                	<th width="10">Aksi</th>
                </tr>
            	</thead>

            </table>
          </div>
        </div>
      </div>
    </div>
</div>

<?php include 'add_user.php'; ?>
<?php include 'update_user.php'; ?>
