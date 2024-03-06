function searchSubstr(fullText, searchText, allowOverlap = true){
  if (searchText === '') {
    return 0;
  }
  let count = 0;
  let position = 0;
  while (position !== -1)
  {
    position = fullText.indexOf(searchText, position);
    if (position!== -1)
    {
      count++;
      position += allowOverlap ? 1 : searchText.length;
      }
    }
    return count;
  }
