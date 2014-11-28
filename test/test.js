require('./setup');

describe('addClass', function () {
  var addClass = require('../add-class');

  it('works', function () {
    addClass(div, 'hello');
    expect(div.className).eql(' hello');
  });

  it('compounds', function () {
    addClass(div, 'hello');
    addClass(div, 'world');
    expect(div.className).eql(' hello world');
  });
});

describe('hasClass', function () {
  var hasClass = require('../has-class');

  it('works', function () {
    div.className = 'hello';
    expect(hasClass(div, 'hello')).eq(true);
  });

  it('works for the start', function () {
    div.className = 'hello world';
    expect(hasClass(div, 'hello')).eq(true);
  });

  it('works for the end', function () {
    div.className = 'world hello';
    expect(hasClass(div, 'hello')).eq(true);
  });

  it('works for the middle', function () {
    div.className = 'world hello selected';
    expect(hasClass(div, 'hello')).eq(true);
  });

  it('doesn\'t search substrings', function () {
    div.className = 'world hello';
    expect(hasClass(div, 'hel')).eq(false);
  });
});

describe('remove', function () {
  var remove = require('../remove');
  var sub;

  beforeEach(function () {
    sub = document.createElement('span');
    div.appendChild(sub);
  });

  it('appending works', function () {
    expect(sub.parentNode).eql(div);
  });

  it('works', function () {
    remove(sub);
    expect(sub.parentNode).be.null;
  });
});

describe('text', function () {
  var text = require('../text');

  it('sets', function () {
    text(div, 'hello');
    expect(div.outerHTML).eql('<div>hello</div>');
  });

  it('sets and gets', function () {
    text(div, 'hello');
    expect(text(div)).eql('hello');
  });
});

describe('removeClass', function () {
  var removeClass = require('../remove-class');

  it('works at the end', function () {
    div.className = 'hello world';
    removeClass(div, 'world');
    expect(div.className).eql('hello  ');
  });

  it('works at the start', function () {
    div.className = 'hello world';
    removeClass(div, 'hello');
    expect(div.className).eql('  world');
  });

  it('works at the middle', function () {
    div.className = 'hello world';
    removeClass(div, 'there');
    expect(div.className).eql('hello world');
  });

  it('works for single classes', function () {
    div.className = 'abc';
    removeClass(div, 'abc');
    expect(div.className).eql(' ');
  });
});