var getfiles = function(){
			
			var f_input = document.getElementById('file-input');
			var bookArr = f_input.files;
			var arrLength = bookArr.length;
			var bookfile;
			for (var i = 0; i < arrLength; i++) {
				bookfile = bookArr[i];
				TitleCut = bookfile.name.split(" by ");
				bookUrl = window.URL.createObjectURL(bookfile);
				TitleCut[1] = TitleCut[1].replace(".png", " ");
				createABook (Book, "addBook" + i, TitleCut[0], {}, 3, 0, ["must_read","best","non_fiction"], Date(), Date(), bookUrl);
				myLib["addBook" + i].authorFullName = TitleCut[1];
				ContentAdd(myLib["addBook" + i]);
				newHistMesAdd("You added new book " + TitleCut[0]);
			}
}//getfiles