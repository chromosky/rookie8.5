


var a = prompt('Podaj wartosc dla zmiennej a: '),
    b = prompt('Podaj wartosc dla zmiennej b: '),
    value = (a * a) + (2 * a * b) - (b * b);

if (value > 0) {
  alert('Wynik dzialania na zmiennych jest dodatni. Transakcja wykonana.: ' + value);
  console.log('Wynik dodatni:');
} else if (value < 0) {
  alert('Wynik dzialania na zmiennych ujemny. Sprawdz ponownie prawdziwosc danych!: ' + value);
  console.log('Wynik ujemny:');
} else {
  alert('Wynik zerowy. Przepraszamy, pomyliles dzrzwi.');
  console.log('Wynik zerowy');
}