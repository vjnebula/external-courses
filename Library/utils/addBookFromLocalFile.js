var getfiles = function(){
			
			var f_input = document.getElementById('file-input');
			var bookArr = f_input.files;
			var arrLength = bookArr.length;
			var bookfile;
			for (var i = 0; i < arrLength; i++) {
				bookfile = bookArr[i];
				TitleCut = bookfile.name.split(" by ");
				bookUrl = window.URL.createObjectURL(bookfile);
				var bk_id = myLib.length+1;
				TitleCut[1] = TitleCut[1].replace(".png", " ");
				ContentAdd(bk_id, TitleCut[0], ("by " + TitleCut[1]), bookUrl);
				var newAuthor = TitleCut[1].split(" ");
				var newBook = {"id":bk_id, "title":TitleCut[0],"author":{"firstName":newAuthor[0],"lastName":newAuthor[1]},"rating":3,"cost":0,"categories":["must_read","best","non_fiction"],"createdAt":1506943763424,"updatedAt":1528046197707,"image_url":bookUrl};
				myLib.push(newBook);
				newHistMesAdd("You added new book " + TitleCut[0]);
			}
}//getfiles