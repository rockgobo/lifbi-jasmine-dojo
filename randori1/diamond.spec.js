/* global describe, it, beforeEach */

/* TEST GROUP */
describe('ein Diamond Programm', function () {
 var diamond
 
 beforeEach(function(){
   diamond = new Diamond()
 })


  /* TESTS */
  it('gibt A zurück wenn der Nutzer A eingibt', function () { 
    expect(diamond.print('A')).toBe('A')
  })
  it('hat eine Methode charNumber die für gibt 1 für A zurück', function () { 
    expect(diamond.charNumber('A')).toBe(1)
  })
  it('hat eine Methode blanks die für gibt "    " für 4 zurück', function () { 
    expect(diamond.blanks(4)).toBe("    ")
  })

  describe('hat eine Methode innerSpace', function(){
    it('gibt 1 zurück für die Zeile mit B', function(){
      expect(diamond.innerSpace('B')).toBe(1)
    })
  })

  describe('hat eine Methode outerSpace', function(){
    it('2 zurück gibt für Zeile A im C-Diamant', function(){
      expect(diamond.outerSpace('A','C')).toBe(2)
    })
    it('0 zurück für die Zeile C im C-Diamant', function(){
      expect(diamond.outerSpace('C','C')).toBe(0)
    })
  })

  describe('hat eine Methode line', function(){
    it('" B B" zurück gibt für Zeile B im C-Diamant', function(){
      expect(diamond.line('B','C')).toBe(" B B")
    })
    it('"  A" zurück gibt für Zeile A im C-Diamant', function(){
      expect(diamond.line('A','C')).toBe("  A")
    })
  })

  /* Height method */
  describe('hat eine Funktion height ',function(){
    it('die bei "C" 5 ausgibt', function(){
      expect(diamond.height('C')).toBe(5)
    })
    it('die bei "D" 7 ausgibt', function(){
      expect(diamond.height('D')).toBe(7)
    })
  })
  
})
