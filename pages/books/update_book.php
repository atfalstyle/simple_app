<?php  
	require_once('config/config.php');
	$query = "SELECT * FROM tabel_kategori";
	$views = $conn->query($query)->fetchAll(PDO::FETCH_OBJ );
?>
<div class="col-md-12">
  <div class="modal fade" id="update">
    <div class="modal-dialog">
      	<div class="modal-content">
	        <div class="modal-header">
	          <h4 class="modal-title">Update Data</h4>
	          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
	        </div>
			<div class="modal-body">
		        <form id="updateBook" class="forms-sample">
		          <div class="form-group">
		              <label for="judul_update">Judul</label>
		              <input type="hidden" name="id" id="id_update">
		              <input type="text" class="form-control" name="judul" id="judul_update" placeholder="judul">
		          </div>
		          <div class="form-group">
		            <label for="pengarang_update">Pengarang</label>
		              <input type="pengarang" class="form-control" name="pengarang" id="pengarang_update" placeholder="Enter pengarang">
		          </div>
		          <div class="form-group">
		              <label for="penerbit_update">Penerbit</label>
		              <input type="text" class="form-control" name="penerbit" id="penerbit_update" placeholder="penerbit">
		          </div>
		          <div class="form-group">
		              <label for="kategori_update">Kategori</label>
		              <select class="form-control" id="kategori_add" name="kategori">
		              	<option>-- Select Categories --</option>
		              	<?php  
		              		foreach ($views as $data) {
		              	?>
		              	<option id="isi" value="<?= $data->id; ?>"><?= $data->nama; ?></option>
		              	<?php } ?>
		              </select>
		              <!-- <input type="kategori" class="form-control" name="kategori" id="kategori_update" placeholder="kategori"> -->
		          </div>
		          <button type="submit" name="submit" class="btn btn-success mr-2">Update Book</button>
		        </form>
	        </div>
		</div>
	</div>
</div>