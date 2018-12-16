$(document).ready(function() {
	// Setup Ajax
	$.ajaxSetup({
		type: 'POST',																																																																						
		cache: false,
		contentType: false,
		processData: false
	});
	// To Validation If Got An Error
	function validasi(text_value) {
		return 	swal({
				  title: "Oops You're Got An Error !!!",
				  text: "The Field "+text_value+" Cannot Be Empty",
				  icon: "warning",
				  dangerMode: true,
				  button: "Continue Filling Out",
				});
	}
	
	// DataTables Server Side For Users
	table_user = $('#dataTable').DataTable({
		"oLanguage" : {
	        "sLengthMenu" : "Tampilkan _MENU_ Data Per Halaman",
	        "sSearch" : "Pencarian Data",
	        "sZeroRecords" : "Maaf Tidak Ada Data Yang Ditemukan",
	        "sInfo" : "Menampilkan _START_ s/d _END_ Dari _TOTAL_ Data",
	        "sInfoEmpty" : "Menampilkan 0 s/d 0 Dari 0 Data",
	        "sInfoFiltered" : "(Di Filter Dari _MAX_ Total Data)",
	        "oPaginate" : {
	          "sFirst" : "<<",
	          "sLast" : ">>",
	          "sPrevious" : "Kembali",
	          "sNext" : "Lanjut"
	        }
      	},
      	"sPaginationType" : "full_numbers",
      	"bJqueryUI" : true,
        "processing": true,
        "serverSide": true,
        "ajax": "action/users/dataTables.php",
        "fnCreatedRow": function (row, data, index) {
			$('td', row).eq(0).html(index + 1);
		},
        "columnDefs": [ {
            "targets": -1,
            "data": null,
            "defaultContent": 
            	"<button type='button' class='btn btn-success btn-sm updateUser' data-target='#update' data-toggle='modal'><i class='mdi mdi-pencil-box'></i>Edit</button> <button type='button' class='btn btn-danger btn-sm deleteUser' id='deleteUser' ><i class='mdi mdi-delete'></i>Hapus</button>"
        }]
    });

	// DataTables Server Side For Books
	table_books = $('#tableBooks').DataTable({
		"oLanguage" : {
	        "sLengthMenu" : "Tampilkan _MENU_ Data Per Halaman",
	        "sSearch" : "Pencarian Data",
	        "sZeroRecords" : "Maaf Tidak Ada Data Yang Ditemukan",
	        "sInfo" : "Menampilkan _START_ s/d _END_ Dari _TOTAL_ Data",
	        "sInfoEmpty" : "Menampilkan 0 s/d 0 Dari 0 Data",
	        "sInfoFiltered" : "(Di Filter Dari _MAX_ Total Data)",
	        "oPaginate" : {
	          "sFirst" : "<<",
	          "sLast" : ">>",
	          "sPrevious" : "Kembali",
	          "sNext" : "Lanjut"
	        }
      	},
      	"sPaginationType" : "full_numbers",
      	"bJqueryUI" : true,
        "processing": true,
        "serverSide": true,
        "ajax": "action/books/dataTables.php",
        "fnCreatedRow": function (row, data, index) {
			$('td', row).eq(0).html(index + 1);
		},
        "columnDefs": [ {
            "targets": -1,
            "data": null,
            "defaultContent": 
            	"<button type='button' class='btn btn-success btn-sm updateBook' data-target='#update' data-toggle='modal'><i class='mdi mdi-pencil-box'></i>Edit</button> <button type='button' class='btn btn-danger btn-sm deleteBook' id='deleteBook'><i class='mdi mdi-delete'></i>Hapus</button>"
        }]
    });

    // DataTables Server Side For Books
	table_categories = $('#tableCategories').DataTable({
		"oLanguage" : {
	        "sLengthMenu" : "Tampilkan _MENU_ Data Per Halaman",
	        "sSearch" : "Pencarian Data",
	        "sZeroRecords" : "Maaf Tidak Ada Data Yang Ditemukan",
	        "sInfo" : "Menampilkan _START_ s/d _END_ Dari _TOTAL_ Data",
	        "sInfoEmpty" : "Menampilkan 0 s/d 0 Dari 0 Data",
	        "sInfoFiltered" : "(Di Filter Dari _MAX_ Total Data)",
	        "oPaginate" : {
	          "sFirst" : "<<",
	          "sLast" : ">>",
	          "sPrevious" : "Kembali",
	          "sNext" : "Lanjut"
	        }
      	},
      	"sPaginationType" : "full_numbers",
      	"bJqueryUI" : true,
        "processing": true,
        "serverSide": true,
        "ajax": "action/categories/dataTables.php",
        "fnCreatedRow": function (row, data, index) {
			$('td', row).eq(0).html(index + 1);
		},
        "columnDefs": [ {
            "targets": -1,
            "data": null,
            "defaultContent": 
            	"<button type='button' class='btn btn-success btn-sm updateCategory' data-target='#update' data-toggle='modal'><i class='mdi mdi-pencil-box'></i>Edit</button> <button type='button' class='btn btn-danger btn-sm deleteCategory' id='deleteCategory'><i class='mdi mdi-delete'></i>Hapus</button>"
        }]
     });
 		
	// Then Button Edit User On Click
    $('#dataTable tbody').on( 'click', '.updateUser', function () {
        var data = table_user.row( $(this).parents('tr') ).data();
        // window.location.href = "edit.php?id="+ data[4];
        $("#nama_update").val(data[1]);
        $("#email_update").val(data[2]);
        $("#user_update").val(data[3]);
        $("#pass_update").val(data[4]);
        $("#id_update").val(data[5]);
    });

    // Then Button Edit Book On Click
    $('#tableBooks tbody').on( 'click', '.updateBook', function () {
        var data = table_books.row( $(this).parents('tr') ).data();
        // window.location.href = "edit.php?id="+ data[4];
        $("#judul_update").val(data[1]);
        $("#pengarang_update").val(data[2]);
        $("#penerbit_update").val(data[3]);
        // $("#kategori_update").val(data[4]);
        // $("#isi").val(data[5]).attr("selected");
        $("#id_update").val(data[5]);
    });

    // Then Button Edit Book On Click
    $('#tableCategories tbody').on( 'click', '.updateCategory', function () {
        var data = table_categories.row( $(this).parents('tr') ).data();
        // window.location.href = "edit.php?id="+ data[4];
        $("#nama_update").val(data[1]);
        $("#id_update").val(data[2]);
    });

     // Form Users Add
	$("#addUser").on("submit", function(e) {
		e.preventDefault();
		var nama  = $("#nama_add").val();
		var email = $("#email_add").val();
		var user  = $("#user_add").val();
		var pass  = $("#pass_add").val();
		if(nama == '') {
			validasi("Name");
		} else if(email == '') {
			validasi("Email");
		} else if(user == '') {
			validasi("Username");
		} else if(pass == '') {
			validasi("Password");
		} else {
			$.ajax({
				url	: 'action/users/add_action.php',
				data: new FormData(this),
				success: function(message) {
					if(message == 'Success'){
						swal({
						  title: "Success",
						  text: "Congratulation Form Input Success",
						  icon: "success",
						  button: "Done",
						});
						$(".close").click();
						table_user.ajax.reload();
					} else {
						swal({
						  title: "Oops, You're Got An Error !!!",
						  text: "Please Check Your Form Again",
						  icon: "warning",
						  dangerMode: true,
						  button: "Check",
						});
					}
				}
			});
		}
	});

	// Form Book Add
	$("#addBook").on("submit", function(e) {
		e.preventDefault();
		var nama  = $("#judul_add").val();
		var email = $("#pengarang_add").val();
		var user  = $("#penerbit_add").val();
		var pass  = $("#kategori_add").val();
		if(nama == '') {
			validasi("Judul");
		} else if(email == '') {
			validasi("Pengarang");
		} else if(user == '') {
			validasi("Penerbit");
		} else if(pass == '') {
			validasi("Kategori");
		} else {
			$.ajax({
				url	: 'action/books/add_action.php',
				data: new FormData(this),
				success: function(message) {
					if(message == 'Success'){
						swal({
						  title: "Success",
						  text: "Congratulation Form Input Success",
						  icon: "success",
						  button: "Done",
						});
						$(".close").click();
						table_books.ajax.reload();
					} else {
						swal({
						  title: "Oops, You're Got An Error !!!",
						  text: "Please Check Your Form Again",
						  icon: "warning",
						  dangerMode: true,
						  button: "Check",
						});
					}
				}
			});
		}
	});

	// Form Category Add
	$("#addCategory").on("submit", function(e) {
		e.preventDefault();
		var nama  = $("#nama_add").val();
		if(nama == '') {
			validasi("Name");
		} else {
			$.ajax({
				url	: 'action/categories/add_action.php',
				data: new FormData(this),
				success: function(message) {
					if(message == 'Success'){
						swal({
						  title: "Success",
						  text: "Congratulation Form Input Success",
						  icon: "success",
						  button: "Done",
						});
						$(".close").click();
						table_categories.ajax.reload();
					} else {
						swal({
						  title: "Oops, You're Got An Error !!!",
						  text: "Please Check Your Form Again",
						  icon: "warning",
						  dangerMode: true,
						  button: "Check",
						});
					}
				}
			});
		}
	});

	// Form Users Update
	$("#updateUser").on("submit", function(e) {
		e.preventDefault();
		var nama  = $("#nama_update").val();
		var email = $("#email_update").val();
		var user  = $("#user_update").val();
		var pass  = $("#pass_update").val();
		if(nama == '') {
			validasi("Name");
		} else if(email == '') {
			validasi("Email");
		} else if(user == '') {
			validasi("Username");
		} else if(pass == '') {
			validasi("Password");
		} else {
			$.ajax({
				url	: 'action/users/update_action.php',
				data: new FormData(this),
				success: function(message) {
					if(message == 'Success'){
						swal({
						  title: "Success",
						  text: "Congratulation Form Update Success",
						  icon: "success",
						  button: "Done",
						});
						$(".close").click();
						table_user.ajax.reload();
					} else {
						swal({
						  title: "Oops, You're Got An Error !!!",
						  text: "Please Check Your Form Again",
						  icon: "warning",
						  dangerMode: true,
						  button: "Check",
						});
					}
				}
			});
		}
	});

	// Form Book Update
	$("#updateBook").on("submit", function(e) {
		e.preventDefault();
		var nama  = $("#judul_update").val();
		var email = $("#pengarang_update").val();
		var user  = $("#penerbit_update").val();
		var pass  = $("#kategori_update").val();
		if(nama == '') {
			validasi("Judul");
		} else if(email == '') {
			validasi("Pengarang");
		} else if(user == '') {
			validasi("Penerbit");
		} else if(pass == '') {
			validasi("Kategori");
		} else {
			$.ajax({
				url	: 'action/books/update_action.php',
				data: new FormData(this),
				success: function(message) {
					if(message == 'Success'){
						swal({
						  title: "Success",
						  text: "Congratulation Form Update Success",
						  icon: "success",
						  button: "Done",
						});
						$(".close").click();
						table_books.ajax.reload();
					} else {
						swal({
						  title: "Oops, You're Got An Error !!!",
						  text: "Please Check Your Form Again",
						  icon: "warning",
						  dangerMode: true,
						  button: "Check",
						});
					}
				}
			});
		}
	});

	// Form Book Update
	$("#updateCategory").on("submit", function(e) {
		e.preventDefault();
		var nama  = $("#nama_update").val();
		if(nama == '') {
			validasi("Name");
		} else {
			$.ajax({
				url	: 'action/categories/update_action.php',
				data: new FormData(this),
				success: function(message) {
					if(message == 'Success'){
						swal({
						  title: "Success",
						  text: "Congratulation Form Update Success",
						  icon: "success",
						  button: "Done",
						});
						$(".close").click();
						table_categories.ajax.reload();
					} else {
						swal({
						  title: "Oops, You're Got An Error !!!",
						  text: "Please Check Your Form Again",
						  icon: "warning",
						  dangerMode: true,
						  button: "Check",
						});
					}
				}
			});
		}
	});

	// Form User Delete
	$('#dataTable tbody').on('click', '.deleteUser', function (e) {
		e.preventDefault();
        var data_id = table_user.row( $(this).parents('tr') ).data();
		swal({
		  title: "Are you sure?",
		  text: "Delete Data With Name "+data_id[1],
		  icon: "warning",
		  buttons: true,
		  dangerMode: true,
		})
		.then((willDelete) => {
		  if (willDelete) {
		    $.ajax({
				url	: 'action/users/delete_action.php?id='+data_id[4],
				success: function(message) {
					if(message == 'Success'){
						swal({
						  title: "Success",
						  text: "Congratulation Delete Success",
						  icon: "success",
						  button: "Done",
						});
						
						table_user.ajax.reload();
					} else {
						swal({
						  title: "Oops, You're Got An Error !!!",
						  text: "Please Check Your Form Again",
						  icon: "warning",
						  dangerMode: true,
						  button: "Check",
						});
					}
				}
			});
		  } else {
		    swal("Your Data Not Be Deleted :)");
		  }
		});
	});

	// Form Book Delete
	$('#tableBooks tbody').on('click', '.deleteBook', function (e) {
		e.preventDefault();
        var data_id = table_books.row( $(this).parents('tr') ).data();
		swal({
		  title: "Are you sure?",
		  text: "Delete Data With Title "+data_id[1],
		  icon: "warning",
		  buttons: true,
		  dangerMode: true,
		})
		.then((willDelete) => {
		  if (willDelete) {
		    $.ajax({
				url	: 'action/books/delete_action.php?id='+data_id[5],
				success: function(message) {
					if(message == 'Success'){
						swal({
						  title: "Success",
						  text: "Congratulation Delete Success",
						  icon: "success",
						  button: "Done",
						});
						
						table_books.ajax.reload();
					} else {
						swal({
						  title: "Oops, You're Got An Error !!!",
						  text: "Please Check Your Form Again",
						  icon: "warning",
						  dangerMode: true,
						  button: "Check",
						});
					}
				}
			});
		  } else {
		    swal("Your Data Not Be Deleted :)");
		  }
		});
	});

	// Form Book Delete
	$('#tableCategories tbody').on('click', '.deleteCategory', function (e) {
		e.preventDefault();
        var data_id = table_categories.row( $(this).parents('tr') ).data();
		swal({
		  title: "Are you sure?",
		  text: "Delete Data With Category "+data_id[1],
		  icon: "warning",
		  buttons: true,
		  dangerMode: true,
		})
		.then((willDelete) => {
		  if (willDelete) {
		    $.ajax({
				url	: 'action/categories/delete_action.php?id='+data_id[2],
				success: function(message) {
					if(message == 'Success'){
						swal({
						  title: "Success",
						  text: "Congratulation Delete Success",
						  icon: "success",
						  button: "Done",
						});
						
						table_categories.ajax.reload();
					} else {
						swal({
						  title: "Oops, You're Got An Error !!!",
						  text: "Please Check Your Form Again",
						  icon: "warning",
						  dangerMode: true,
						  button: "Check",
						});
					}
				}
			});
		  } else {
		    swal("Your Data Not Be Deleted :)");
		  }
		});
	});
});