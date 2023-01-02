void main() {
  print('hello world');
  
  var name = 'sun'; // 변수 만들기 -> 타입을 지정해주지 않아도 타입 유추 가능
  // name = 1; 변수 name의 유추 타입이 string이기 때문에 number 할당 불가

  String apple = 'apple'; // String타입의 변수를 만들 수도 있음
  String? banana = 'banana'; //타입 뒤에 '?'를 붙이면 nullable, (기본적으로 변수는 nonNull)
  banana = null;
}