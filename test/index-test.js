function whisper(string) {
  return string.toLowerCase();
}
function shout(string) {
  return string.toUpperCase();
}
describe('shout(string)', function() {
  it('receives one argument and returns it in all caps', function() {
    expect(shout('hello')).toEqual('HELLO');
  })
})

describe('whisper(string)', function() {
  it('receives one argument and returns it in all lowercase', function() {
    expect(whisper('HELLO')).toEqual('hello');
  })
})

describe('logShout(string)', function() {
  it('takes a string argument and logs it in all caps using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough();

    logShout('hello');

    expect(spy).toHaveBeenCalledWith('HELLO');

    console.log.restore('hello');
  })
})
function logShout (word) {
  console.log(shout(word));
}

describe('logWhisper(string)', function() {
  it('takes a string argument and logs it in all lowercase using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough();

    logWhisper('HELLO');

    expect(spy).toHaveBeenCalledWith('hello');

    console.log.restore();
  })
})
function logWhisper (word) {
  console.log(whisper(word));
}

describe('sayHiToHeadphonedRoommate(string)', function() {
  it('returns "I can\'t hear you!" if `string` is lowercase', function() {
    expect(sayHiToHeadphonedRoommate('hello')).toEqual("I can't hear you!");
  })

  it('returns "YES INDEED!" if `string` is uppercase', function() {
    expect(sayHiToHeadphonedRoommate('HELLO')).toEqual("YES INDEED!");
  })

  it('returns "I would love to!" if `string` is "Let\'s have dinner together!"`', function () {
    expect(sayHiToHeadphonedRoommate("Let's have dinner together!")).toEqual(
      "I would love to!"
    );
  });
})
function sayHiToHeadphonedRoommate (word){
  var cantHear = "I can't hear you!";
  var yesIndeed = "YES INDEED!";
  var iloveto = "I would love to!";
  if (word.toLowerCase(word)===word){
    return cantHear;
  }
  else if (word.toUpperCase(word)===word){
    return yesIndeed;
  }
  else if ("Let's have dinner together!"===word){
    return iloveto;
  }
}