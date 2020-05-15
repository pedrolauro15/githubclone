const getRandomColor = () => {
  const chars = '0123456789ABCDEF';
  var hash = '#';

  for(var i = 0; i < 6; i++){
    hash += chars[Math.floor(Math.random() * 16)];
  }

  return hash;
}

export default getRandomColor;