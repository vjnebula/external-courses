var getFiles = function(){
			var bookArr = document.querySelector('.file-input').files;
			var bookfile;
			for (var i = 0; i < bookArr.length; i++) {
				bookfile = bookArr[i];
				var titleCut = bookfile.name.split(" by ");
				var bookUrl = URL.createObjectURL(bookfile);
				titleCut[1] = titleCut[1].replace(".png", " ");
				createBook (Book, "addBook" + i, titleCut[0], {}, 3, 0, ["must_read","best","non_fiction"], Date(), Date(), bookUrl);
				myLib["addBook" + i].authorFullName = titleCut[1];
				ContentAdd(myLib["addBook" + i]);
				newHistoryMessageAdd("You added new book " + titleCut[0]);
			}
}//getFiles