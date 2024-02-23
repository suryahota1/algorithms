function streak(score) {
    const stack = [];
    let sec = 0;
    return ( score) => {
        sec++;
        if ( !stack.length || score < stack[stack.length - 1][0] ) {
            stack.push([score, sec]);
            return 1;
        }
        while ( stack.length > 0 && score > stack[stack.length - 1][0] ) stack.pop();
        const val = sec - stack[stack.length - 1][1];
        stack.push([score, sec]);
        return val;
    }
}
  
var _scoreboard = new ReadableStream({
    interval: undefined,
    start(controller) {
      let scores = [100, 80, 60, 70, 60, 75, 85], i = 0;
      this.interval = setInterval(() => {
        if (i >= scores.length) {
          clearInterval(this.interval);
          controller.close();
          console.log("game closed");
        }
        else controller.enqueue(scores[i++]);
      }, 100)
    },
    cancel(reason) {
      clearInterval(this.interval);
    }
});
var _reader = _scoreboard.getReader();
_reader.read().then(function _read({ done, value: score }) {
    if (done) return;
    console.log("Score: " + score + ";\t Streak: " + streak(score));
    _reader.read().then(_read)
});