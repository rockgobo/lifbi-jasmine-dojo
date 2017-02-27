/*
Ecmascript 2016 syntax
======================
----------------------
New class syntax, that also provides a real construtor function
Methods of a class don´t need to be introduced with "function" keyword for less boilerplate code
*/


class Diamond {
  /*
  construtor(){ ... } //not needed in this class
  */

  /*
  Methods are just writen with ES5 function syntax but don´t need to be added to
  this instance this "this.print = function(character) { ... }" => less code
  */
  print (character) {
    return character
  }

  height (c) {
    return 2 * this.charNumber(c) - 1
  }

  innerSpace (c) {
    return this.charNumber(c) - 1
  }

  outerSpace (c, maximum) {
    return this.charNumber(maximum) - this.charNumber(c)
  }

  line (c, maximum) {
    var line = this.blanks(this.outerSpace(c, maximum))
    line += c
    if (c !== 'A') {
      line += this.blanks(this.innerSpace(c, maximum))
      line += c
    }
    return line
  }

  // Private functions
  charNumber (c) {
    return c.charCodeAt(0) - 64
  }

  blanks (n) {
    var blanks = ''
    while (n !== 0) {
      blanks += ' '
      --n
    }
    return blanks
  }
}
