var myHelp;
myHelp = `
<ol>
<li>User can use scroll in books area and history blocks.
<li>Stars filled automaticaly after books download, rating stored in session storage, it can include changes made by user. User can reset default rating by clicking on stars, rating will be droped to zero. After that it is possible to set new rating with step of half star. Stored data will be lost after closing the tab.
<li>Library is filled by books from JSON which has been downloaded by using fetch.
<li>Each books is created by constructor of Book class, and recorded to Library object as property which has named by value of id field property of book object.
<li>User can filter books on main page by using buttons on top of book area and side menu. Each filter works separate. User can drop filter by pressing "All books" button. Some filter sort books by one of parameters: Most Recent by date created, Now Reading by date updated at (beat: random data used). Side menu filters use categories stored in book objects.
<li>Search engine filters books depend on entered word or part more than 3 letters. If enter button was pressed search request will be stored in history. User can reset search field by pressing cross button which appers on right side of field after data entry. All books will be shown after search field reset.
<li>If some of filter was set, search result will include only result for filtered books.
<li> Search will automaticaly starts after 2 second.
<li>User can add book from local file (one or multiple) in book folder. Book object will be created after parsing .png file name. (beta:this procces emulates reading data from metadata logic)
<li>History contains records of users actions such as: search, adding books, sorting and filtering books, applying rating. 3 last history records shown on bottom of side menu. History button can show all history records of currents session and last 10 records stored in local-storage. Local-storage is reduced on each new session.
<li>Site engine is divided by several parts and stored in folders which represent mvc structure.
<li>Sign In button, at window right corner emulates user login process. User information will be shown after pressing button in appeared form.
</ol>
`
