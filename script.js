function Timer(){
    const getMin = document.getElementById('min').value;
    const getSec = document.getElementById('sec').value;
    if(getMin < 0 || getMin > 10 || getSec < 0 || getSec > 59){
      alert('Something wrong with your input!');
    }
    // フルマラソン秒数
    const totalTime = Math.round((parseInt(getMin*60) + parseInt(getSec)) * 42.195);
    // 秒(分あまり)
    const sec = totalTime % 60;
    // 分(トータル-秒数)/分に換算%時間のあまり(分)に
    const min = (totalTime - sec) / 60 % 60;
    // 時間((トータル-秒数)*分換算に)/時間に
    const hour = (totalTime - sec- min*60) / 3600;
    document.getElementById('output').textContent = `${hour}h${min}m${sec}s`;
  }
