function leadZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  setInterval(() => {
    const currentDate = new Date();
    const hr = leadZero(currentDate.getHours());
    const hrArr = ("" + hr).split("").map(Number);
    const min = leadZero(currentDate.getMinutes());
    const minArr = ("" + min).split("").map(Number);
    const sec = leadZero(currentDate.getSeconds());
    const secArr = ("" + sec).split("").map(Number);
  
    const time = `${hr}${min}${sec}`;
    const tickerBoxes = document.querySelectorAll(".tBox");
  
    tickerBoxes.forEach((tickerBox, i) => {
      switch (i) {
        case 0:
          tickerBox.style.cssText = `--offset: -${hrArr[0] * 50}px`;
          break;
  
        case 1:
          tickerBox.style.cssText = `--offset: -${hrArr[1] * 50}px`;
          break;
  
        case 2:
          tickerBox.style.cssText = `--offset: -${minArr[0] * 50}px`;
          break;
  
        case 3:
          tickerBox.style.cssText = `--offset: -${minArr[1] * 50}px`;
          break;
  
        case 4:
          tickerBox.style.cssText = `--offset: -${secArr[0] * 50}px`;
          break;
  
        case 5:
          tickerBox.style.cssText = `--offset: -${secArr[1] * 50}px`;
          break;}
  
    });
  }, 1000);